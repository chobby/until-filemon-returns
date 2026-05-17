# until-filemon-returns

責務: 戯曲 *Comrade Gagarin and the House of Stars*（People’s Planetarium Program No. 1919）を **VitePress** で静的サイト化し、**GitHub Pages** で公開する。

## 公開 URL

- プロジェクト用 GitHub Pages の一般的な形: `https://<GitHubユーザー名>.github.io/<リポジトリ名>/`
- 本リポジトリを `chobby/until-filemon-returns` として公開した場合の例: `https://chobby.github.io/until-filemon-returns/`

`base` は CI の環境変数 `GITHUB_PAGES_BASE`（ワークフロー内で `/<リポジトリ名>/` を自動設定）と `docs/.vitepress/config.mts` の解決ロジックで一致させています。リポジトリ名が `<ユーザー名>.github.io` の **ユーザーサイト** の場合は `GITHUB_PAGES_BASE=/` になります。

## 初回のみ（GitHub 側の設定）

1. リポジトリの **Settings → Pages → Build and deployment**
2. **Source** を **GitHub Actions** に変更する。
3. 初回デプロイ後、同画面に表示される **サイト URL** を確認する。

## ローカル開発

Node.js は **20**（[`.nvmrc`](.nvmrc)）を前提にしています。

```bash
npm ci
npm run docs:dev
```

外観は VitePress の **`appearance: 'force-dark'`**（[`docs/.vitepress/config.mts`](docs/.vitepress/config.mts)）で常にダークに固定しています。天象儀のトーンと既定テーマの配色を一致させ、ライトモードで本文が読めなくなる事故を防ぎます。

本番に近い `base` でのビルド確認（例: リポジトリ名が `until-filemon-returns` のとき）:

```bash
# PowerShell
$env:GITHUB_PAGES_BASE = '/until-filemon-returns/'
npm run docs:build
npm run docs:preview
```

`docs:preview` は **直前のビルド成果物**（上記で `base` を埋め込んだ `docs/.vitepress/dist`）をそのまま配信します。`base` を変えたら必ず再ビルドしてください。

## 本文の編集場所（単一ソース）

- **正本**: [`docs/index.md`](docs/index.md)
- ルートの [`original.md`](original.md) は案内のみ（サイトには載りません）。

## CI / テスト定義（計画 L1〜L3）

| レベル | 内容 |
|--------|------|
| L1（必須） | `pull_request` / `push` で `npm ci` → `npm run docs:build` が成功すること |
| L2（必須） | `main` への `push` のみ `upload-pages-artifact` → `deploy-pages` が走ること |
| L3（推奨） | `package.json` の `engines.node`、[`.nvmrc`](.nvmrc)、`package-lock.json` をリポジトリに固定し、CI とローカルの前提を一致させること |

ワークフロー: [`.github/workflows/docs.yml`](.github/workflows/docs.yml)

## マージ前の査読チェックリスト（短）

- [ ] CI の **Build documentation site** が緑である
- [ ] 変更が本文なら、意図しない置換・見出し崩れがない（戯曲は `##` / `###` が多い）
- [ ] テーマ変更なら、暗背景でも本文が読みやすいか（コントラスト）、キーボード操作で主要リンクに辿れるか
- [ ] リポジトリ名／`GITHUB_PAGES_BASE` の前提が変わっていないか（リネーム時はワークフローと README の説明を更新）

## ライセンス

（未設定の場合はリポジトリオーナーが `LICENSE` を追加してください。）
