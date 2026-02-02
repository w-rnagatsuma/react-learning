# Vue/Nuxt vs React/Next の違い

このドキュメントは、Vue/NuxtからReact/Nextへ移行する際に気づいた違いをまとめたものです。

## 📝 HTMLの書き方

### Vue/Nuxt
```vue
<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
```
- `.vue`ファイルの`<template>`タグ内にHTMLを書く
- Mustache構文 `{{ }}` でデータをバインド

### React/Next
```tsx
export default function Component() {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
```
- `.tsx`または`.jsx`ファイルのreturn文内にJSXを書く
- 単一の中括弧 `{ }` で変数を埋め込む

---

## 🎨 スタイルの適用

### Vue/Nuxt
```vue
<style scoped>
.container {
  padding: 20px;
}
</style>
```
- `.vue`ファイルの`<style>`タグ内に記述
- `scoped`でコンポーネントスコープに限定可能

### React/Next
```tsx
import styles from './Component.module.css'

export default function Component() {
  return <div className={styles.container}>...</div>
}
```
- CSS Modulesやstyled-componentsを使用
- `className`属性でスタイルを指定（`class`ではない）

---

## 📦 コンポーネントの定義

### Vue/Nuxt
```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
```
- `<script setup>`で簡潔に記述可能
- Composition APIまたはOptions API

### React/Next
```tsx
import { useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)
  return <div>...</div>
}
```
- 関数コンポーネントが主流
- Hooksを使用して状態管理

---

## 🔄 リアクティブな状態管理

### Vue/Nuxt
```ts
const count = ref(0)
count.value++ // .value経由でアクセス
```
- `ref`, `reactive`でリアクティブな値を作成
- `.value`でアクセス（template内は不要）

### React/Next
```tsx
const [count, setCount] = useState(0)
setCount(count + 1) // setter関数で更新
```
- `useState`で状態を管理
- setter関数を呼び出して更新

---

## 🎯 イベントハンドリング

### Vue/Nuxt
```vue
<button @click="handleClick">Click</button>
```
- `@`シンタックスまたは`v-on:`
- イベント修飾子が豊富（`.prevent`, `.stop`など）

### React/Next
```tsx
<button onClick={handleClick}>Click</button>
```
- キャメルケースのイベント名
- イベントハンドラ内で`e.preventDefault()`を明示的に呼ぶ

---

## 🔀 条件付きレンダリング

### Vue/Nuxt
```vue
<div v-if="isVisible">表示</div>
<div v-else>非表示</div>
```
- `v-if`, `v-else-if`, `v-else`ディレクティブ

### React/Next
```tsx
{isVisible ? <div>表示</div> : <div>非表示</div>}
{isVisible && <div>表示</div>}
```
- 三項演算子または論理演算子を使用
- JSXの式として記述

---

## 🔁 リストレンダリング

### Vue/Nuxt
```vue
<div v-for="item in items" :key="item.id">
  {{ item.name }}
</div>
```
- `v-for`ディレクティブ
- `:key`でユニークキーを指定

### React/Next
```tsx
{items.map(item => (
  <div key={item.id}>
    {item.name}
  </div>
))}
```
- `map()`メソッドを使用
- `key` propでユニークキーを指定

---

## 🚀 ルーティング

### Vue/Nuxt
```vue
<NuxtLink to="/about">About</NuxtLink>
```
- `pages/`ディレクトリのファイル構造がそのままルートに
- `<NuxtLink>`コンポーネント

### React/Next
```tsx
<Link href="/about">About</Link>
```
- `app/`ディレクトリ（App Router）または`pages/`ディレクトリ（Pages Router）
- `<Link>`コンポーネント（next/link）

---

## 💡 Props の受け渡し

### Vue/Nuxt
```vue
<script setup lang="ts">
const props = defineProps<{
  title: string
  count: number
}>()
</script>
```
- `defineProps()`で型安全にpropsを定義

### React/Next
```tsx
interface Props {
  title: string
  count: number
}

export default function Component({ title, count }: Props) {
  // ...
}
```
- TypeScriptの型定義とデストラクチャリング

---

## 📌 メモ

- 気づいた違いは随時このファイルに追記していく
- 実装例も一緒に記録すると後で見返しやすい
- 困ったことや解決策も記録する

「カスタムフックの作り方」
「データフェッチング」
「ライフサイクル」とかとか

