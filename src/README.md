# プロジェクト構成

## ディレクトリ構造

```
src/
├── app/              # Next.js App Router（ページルーティング）
│   ├── contact/      # /contact ページ
│   ├── dataList/     # /dataList ページ
│   ├── layout.tsx    # ルートレイアウト
│   ├── page.tsx      # ホームページ
│   └── globals.css   # グローバルスタイル
├── components/       # 共通コンポーネント
│   ├── ui/          # UIコンポーネント（Button, Input など）
│   └── LinkCard.tsx  # 機能コンポーネント
├── lib/             # ユーティリティ関数・ヘルパー
├── hooks/           # カスタムフック
├── types/           # TypeScript 型定義
└── constants/       # 定数・設定
```

## パスエイリアス

`@/` でsrc/ディレクトリを参照可能

例：

```typescript
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
```
