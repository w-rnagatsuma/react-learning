import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-center">
          React学習
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          Next.jsとReactを学ぶためのプロジェクトです。
        </p>
        <nav className="flex flex-col gap-3 w-full">
          <LinkCard
            href="/contact"
            title="問い合わせフォーム"
            description="質問や問い合わせはこちら"
          />
          <LinkCard
            href="/dataList"
            title="データリスト"
            description="データを一覧表示"
          />
          <LinkCard
            href="https://nextjs.org/docs"
            title="Next.js公式ドキュメント"
            description="Next.jsの公式ドキュメントを確認"
            isExternal
          />
        </nav>
      </section>
    </main>
  );
}
