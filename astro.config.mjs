import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
/** @type {import('astro').AstroUserConfig;} */
export default defineConfig({
  site: 'http://tohoku-takahashi.sakura.ne.jp',
  integrations: [tailwind(), image(), sitemap()]
})
