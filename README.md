## 概要

- Next.js(App Router)で構成した学習用プロジェクトです。ページ遷移、フォームUI、データ表示などの基本要素を試せる構成になっています。
- Vercel：https://react-learning-liart-xi.vercel.app/

## 技術スタック

- **言語**
  - TypeScript
- **フレームワーク / ライブラリ**
  - Next.js
  - React
- **スタイリング**
  - Tailwind CSS
  - PostCSS
  - グローバル CSS: `app/globals.css`
- **Lint / 型定義 / 開発ツール**
  - ESLint（品質チェック）
    - `eslint-config-next/core-web-vitals`
    - `eslint-config-next/typescript`
    - 実行: `npm run lint`
  - Prettier（整形）
    - `eslint-config-prettier`
    - 実行: `npm run format`
    - 衝突回避のため`eslint-config-prettier`を選択
      - [!NOTE] ESLint と Prettier が同じ箇所を別ルールで直して “ケンカ” するのを防ぐ
  - pre-commit（Git hooks）
    - `husky`: Git hooksの管理
    - `lint-staged`: ステージングされたファイルだけに実行
    - 実行：コミット前に ESLint / Prettier を自動実行
- **フォント**
  - next/font/google
    - `Geist`
    - `Geist_Mono`
- **備考**
  - `tsconfig.json` に `@/*` エイリアスあり
  - `next.config.ts`

## プロジェクト構成

詳細は [src/README.md](src/README.md) を参照。

## ページ一覧

- `/`：ホーム
- `/contact`：お問い合わせフォーム
- `/dataList`：データリスト表示

## 今後の改善予定（Roadmap）

### 成果物として整理

- [ ] コンポーネント設計整理
- [ ] 画面状態の整備（ローディング、404、その他エラー）
- [ ] UT追加（Vitest または Jest）
- [ ] E2E追加（Playwright）
- [ ] CI導入（GitHub Actions：lint / test / build）
- [ ] 生成AI利用（テスト, レビュー等）

### Next.jsを一通り触る

- [ ] ルーティング追加（App Router、動的ルート）
- [ ] API作成（Route Handler）
<!-- - [ ] ページの状態追加（ローディング、404、その他エラー） -->
- [ ] メタ情報設定（generateMetadata）
- [ ] 画像最適化（next/image、ついでにnext/fontも確認）
- [ ] Middleware導入（リダイレクト、（認証ガード、HTTPヘッダー））

### 状態管理（Store）を入れる

- [ ] Store導入（Zustand）
  <!-- - [ ] APIのキャッシュ管理導入（TanStack Query） -->
  <!-- - [ ] フォーム管理導入（React Hook Form） -->
  <!-- - [ ] バリデーション導入（Zod） -->

### BFFを作る（まずNext内 → 次にAWS）

- [ ] BFFをNext内で実装（`app/api` で外部APIを叩いて返す。Route Handler）
  <!-- - [ ] APIレスポンスの型安全化（response schemaチェック。Zod） -->
  <!-- - [ ] エラー形式の統一（HTTP status、errorコードとか揃える） -->
- [ ] AWSにBFFを移植（API Gateway + Lambda）
- [ ] 監視ログ追加（CloudWatch）

### Vue（Nuxt）との違いを残す（学習ログ）

- [ ] Vue/Nuxtとの差分メモ追加（READMEまたは `/docs`）
- [ ] 差分コメント追加（実装の要所に「Nuxtならこう、Nextならこう」を短文で残す）

## メモ

- 改行コード設定
  - Windowsの場合、改行コードがCRLFになるため、ルート直下に.gitattributesを作成し、改行コードの設定を入れておく
  - `git add . --renormalize` で反映
  ```
  * text=auto eol=lf
  ```
