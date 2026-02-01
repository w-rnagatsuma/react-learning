## 主要技術スタック ✅

**言語**
- **TypeScript** (プロジェクトは TypeScript を使用、`tsconfig.json` 設定、JSX: `react-jsx`) ⚡

**フレームワーク / ライブラリ**
- **Next.js 16.1.6**（App Router を使用、`app/` ディレクトリ）  
- **React 19.2.3** / **react-dom 19.2.3**

**スタイリング**
- **Tailwind CSS** (v4)  
- **PostCSS** (`postcss.config.mjs`)  
- グローバル CSS: `app/globals.css`

**Lint / 型定義 / 開発ツール**
- **ESLint** (^9) / **eslint-config-next**  
- **TypeScript** (^5) / `@types/node`, `@types/react`, `@types/react-dom`

**フォント**
- `next/font/google` を使用（`Geist`, `Geist_Mono`）

**npm スクリプト / 実行**
- `dev`, `build`, `start`（`next` コマンド）  
- `lint`（`eslint`）

**備考**
- `tsconfig.json` に `@/*` エイリアスあり  
- `next.config.ts` が存在

## tips ✅
- Windowsの場合、改行コードがCRLFになるため、ルート直下に.gitattributesを作成し、改行コードの設定を入れておく
`git add . --renormalize`で反映
```
* text=auto eol=lf
```