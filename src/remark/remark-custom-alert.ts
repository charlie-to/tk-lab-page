import type { Paragraph, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export type RemarkGitHubAlertsOptions = {
  /**
   * List of markers to match.
   * @default ['TIP', 'NOTE', 'IMPORTANT', 'WARNING', 'CAUTION']
   */
  markers?: string[] | '*'

  /**
   * If markers case sensitively on matching.
   * @default false
   */
  matchCaseSensitive?: boolean

  /**
   * Custom icons for each marker. The key is the marker name, and the value is the html script represent the icon.
   * The key is always lowercase.
   *
   * @default inline svg icons from GitHub
   */
  icons?: Record<string, string>

  /**
   * Custom titles for each marker. The key is the marker name, and the value is the title.
   * The key is always lowercase.
   *
   * When the title is not specified, the default title is the capitalized marker name.
   */
  titles?: Record<string, string>

  /**
   * Prefix for the class names.
   *
   * @default 'markdown-alert'
   */
  classPrefix?: string

  // ^ options from MarkdownItGitHubAlertsOptions

  /**
   * Whether to ignore the square brackets in the marker.
   *
   * @default false
   */
  ignoreSquareBracket?: boolean
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const DEFAULT_GITHUB_ICONS = {
  memo: '<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>',
}

// https://bl.ocks.org/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
function encodeSvg(svg: string) {
  return svg.replace('<svg', (~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))
    .replaceAll('"', '\'')
    .replaceAll('%', '%25')
    .replaceAll('#', '%23')
    .replaceAll('{', '%7B')
    .replaceAll('}', '%7D')
    .replaceAll('<', '%3C')
    .replaceAll('>', '%3E')
}

const remarkCustomAlerts: Plugin<RemarkGitHubAlertsOptions[], Root> = (
  options = {},
) => {
  const {
    markers = ['MEMO'],
    icons = DEFAULT_GITHUB_ICONS,
    matchCaseSensitive = false,
    titles = {},
    classPrefix = 'markdown-alert-custom',
    ignoreSquareBracket = false,
  } = options

  const markerNameRE = markers === '*' ? '\\w+' : markers.join('|')
  const RE = new RegExp(
    ignoreSquareBracket
      ? `^!(${markerNameRE})\\s?`
      : `^\\[\\!(${markerNameRE})\\]\\s`,
    matchCaseSensitive ? '' : 'i',
  )

  return (tree) => {
    visit(tree, 'blockquote', (node, index, parent) => {
      const children = node.children as Paragraph[]
      const firstParagraph = children[0]
      if (!firstParagraph)
        return
      let firstContent = firstParagraph.children[0]
      if (!firstContent)
        return
      if (
        !('value' in firstContent)
        && 'children' in firstContent
        && firstContent.children[0]
      )
        firstContent = firstContent.children[0]

      if (firstContent.type !== 'text')
        return
      const match = firstContent.value.match(RE)
      if (!match)
        return

      const type = match[1]?.toLowerCase() as keyof typeof icons
      const title = match[2]?.trim() || (titles[type] ?? capitalize(type))
      const icon = icons[type]
      const iconDataUri = `data:image/svg+xml;utf8,${encodeSvg(icon)}`

      if (index === undefined || !parent)
        return

      firstContent.value = firstContent.value.slice(match[0].length).trimStart()

      node.data = {
        hName: 'div',
        hProperties: {
          class: `${classPrefix} ${classPrefix}-${type}`,
        },
      }
      node.children = [
        {
          type: 'paragraph',
          data: {
            hName: 'p',
            hProperties: {
              class: `${classPrefix}-title`,
            },
          },
          children: [
            {
              // @ts-expect-error can not use span
              type: 'span',
              data: {
                hName: 'span',
                hProperties: {
                  class: `octicon octicon-${type}`,
                  style: `--oct-icon: url("${iconDataUri}")`,
                },
              },
            },
            {
              type: 'text',
              value: title,
            },
          ],
        },
        ...node.children,
      ]
    })

    return tree
  }
}

export default remarkCustomAlerts
