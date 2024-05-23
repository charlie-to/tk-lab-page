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
  // ここにアイコンを追加する( https://primer.style/foundations/icons からコピーする。)
  memo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg>',
  hint: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>',
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
    markers = ['MEMO', 'HINT'],
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
