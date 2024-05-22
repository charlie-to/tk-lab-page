import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import remarkSmartypants from 'remark-smartypants'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeToc from 'rehype-toc'
import remarkGithubAlerts from 'remark-github-alerts'
import remarkBreaks from 'remark-breaks'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import sitemap from '@astrojs/sitemap'
import { h } from 'hastscript'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import partytown from '@astrojs/partytown'

/** @type {import('astro').AstroUserConfig;} */
import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.takahashi.qse.tohoku.ac.jp',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs'
    }),
    sitemap(),
    partytown(
      {
        // Adds dataLayer.push as a forwarding-event.
        config: {
          forward: ['dataLayer.push']
        }
      }),
    expressiveCode()],
  markdown: {
    gfm: true,
    smartypants: false,
    remarkPlugins: [remarkSlug, remarkToc, remarkGithubAlerts, remarkBreaks, remarkDirective, remarkDirectiveRehype],
    rehypePlugins: [[rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: {
        class: 'anchor'
      },
      group: node => {
        return h('.heading.--lv' + node.tagName.charAt(1))
      },
      content: node => {
        const heading = node?.children[0]?.value
        const headingText = typeof heading === 'string' ? `見出し「${heading}」` : 'この見出しのリンク'
        return [h('svg.anchor-icon', {
          width: 27,
          height: 27,
          viewBox: '0 0 27 27',
          ariaHidden: 'true'
        }, h('path', {
          d: 'M20.6,12l0.4-2h-3.3l0.7-4h-2l-0.7,4h-3l0.7-4h-2l-0.7,4H7l-0.4,2h3.6l-0.5,3H6.1l-0.4,2h3.6l-0.7,4h2l0.7-4h3l-0.7,4h2 l0.7-4h3.3l0.4-2h-3.3l0.5-3H20.6z M14.7,15h-3l0.5-3h3L14.7,15z'
        })), h('span.sr-only', headingText)]
      }
    }]],
    remarkRehype: {
      footnoteBackContent: '↩',
      footnoteLabel: '脚注',
      footnoteLabelTagName: 'footnote',
      footnoteBackLabel: 'コンテンツに戻る'
    },
    footnoteLabelProperties: {
      class: ['']
    },
    footnoteLabelTagName: 'hr',
    extendDefaultPlugins: true
  }
})
