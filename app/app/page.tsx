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
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
          >
            <h2 className="text-lg font-semibold mb-1">ドキュメント</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">Next.jsの公式ドキュメントを確認</p>
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
          >
            <h2 className="text-lg font-semibold mb-1">問い合わせフォーム</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">質問や問い合わせはこちら</p>
          </a>
        </nav>
      </section>
    </main>
  );
}
