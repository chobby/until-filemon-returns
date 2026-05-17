# until-filemon-returns

**Purpose:** Publish the script *Comrade Gagarin and the House of Stars* (People’s Planetarium Program No. 1919) as a static site with **VitePress** and **GitHub Pages**.

## Published URL

- Typical project Pages URL: `https://<github-username>.github.io/<repository-name>/`
- Example for this repo as `chobby/until-filemon-returns`: `https://chobby.github.io/until-filemon-returns/`

`base` is aligned with the CI environment variable `GITHUB_PAGES_BASE` (set in the workflow to `/<repository-name>/`) and the resolver in [`docs/.vitepress/config.mts`](docs/.vitepress/config.mts). For a **user site** repository named `<username>.github.io`, `GITHUB_PAGES_BASE` is `/`.

## One-time GitHub setup

1. In the repo: **Settings → Pages → Build and deployment**
2. Set **Source** to **GitHub Actions**
3. After the first deploy, confirm the **site URL** on the same page

## Local development

Node.js **20** is expected (see [`.nvmrc`](.nvmrc)).

```bash
npm ci
npm run docs:dev
```

Appearance is pinned with VitePress **`appearance: 'force-dark'`** in [`docs/.vitepress/config.mts`](docs/.vitepress/config.mts) so the planetarium styling stays consistent with the default theme tokens and the body text does not break in light mode.

Build with a production-like `base` (example when the repo name is `until-filemon-returns`):

```bash
# PowerShell
$env:GITHUB_PAGES_BASE = '/until-filemon-returns/'
npm run docs:build
npm run docs:preview
```

`docs:preview` serves the **last build output** (`docs/.vitepress/dist` with the embedded `base`). Rebuild whenever you change `base`.

## Where to edit the script (single source)

- **Canonical text:** [`docs/index.md`](docs/index.md)
- [`original.md`](original.md) at the repo root is a pointer only (not part of the site)

## CI / test definition (L1–L3)

| Level | Definition |
|--------|------------|
| L1 (required) | On `pull_request` and `push`, `npm ci` then `npm run docs:build` succeeds |
| L2 (required) | Only `push` to `main` runs `upload-pages-artifact` → `deploy-pages` |
| L3 (recommended) | Pin `engines.node` in `package.json`, [`.nvmrc`](.nvmrc), and `package-lock.json` so CI and local environments match |

Workflow: [`.github/workflows/docs.yml`](.github/workflows/docs.yml)

## Short pre-merge review checklist

- [ ] CI job **Build documentation site** is green
- [ ] For content edits: no accidental replacements or broken heading structure (the script uses many `##` / `###`)
- [ ] For theme edits: readable contrast on dark backgrounds; main links reachable by keyboard
- [ ] If the repo or Pages `base` assumptions change, update the workflow and this README

## License

Add a `LICENSE` file if the repository owner has not set one yet.
