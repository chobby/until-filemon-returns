/**
 * Purpose: site metadata, resolve `base`, and wire the theme and build defaults for VitePress.
 */

import { defineConfig } from 'vitepress'

const SITE_TITLE = 'Comrade Gagarin and the House of Stars'
const SITE_DESCRIPTION =
  "People's Planetarium Program No. 1919 — a planetarium script, presented as a static reader site."

function resolveGitHubPagesBase(): string {
  const githubPagesBaseFromContinuousIntegration = process.env.GITHUB_PAGES_BASE
  if (!githubPagesBaseFromContinuousIntegration) {
    return '/'
  }

  const trimmedGithubPagesBase = githubPagesBaseFromContinuousIntegration.trim()
  if (trimmedGithubPagesBase === '') {
    return '/'
  }

  return trimmedGithubPagesBase
}

export default defineConfig({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  lang: 'en-US',
  base: resolveGitHubPagesBase(),
  cleanUrls: false,
  appearance: 'force-dark',
  themeConfig: {
    siteTitle: SITE_TITLE,
    socialLinks: [],
    sidebar: [],
    outline: {
      level: [2, 3],
      label: 'On this page',
    },
    footer: {
      message: "People's Planetarium Program No. 1919",
      copyright: 'Static reader — built with VitePress',
    },
  },
})
