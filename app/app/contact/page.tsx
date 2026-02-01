import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 text-center">問い合わせフォーム</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
          このページは学習用のサンプルです。実際の送信は行われません。
        </p>
        <form className="flex flex-col gap-4">
          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium">お名前</legend>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="姓（山田）"
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              />
              <input
                type="text"
                placeholder="名（太郎）"
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              />
            </div>
          </fieldset>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">メールアドレス</span>
            <input
              type="email"
              placeholder="example@example.com"
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">お問い合わせ内容</span>
            <textarea
              placeholder="内容を入力してください"
              className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 min-h-[140px]"
            />
          </label>
          <button
            type="button"
            className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            送信
          </button>
        </form>
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
              トップページに戻る
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
