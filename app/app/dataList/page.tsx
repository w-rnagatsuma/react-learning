"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

type DataItem = {
  id: number;
  name: string;
  category: string;
  price: string;
  status: string;
};

type SortKey = "name" | "category" | "price" | "status";

const sampleData: DataItem[] = [
  { id: 1, name: "商品A", category: "電子機器", price: "¥12,800", status: "在庫あり" },
  { id: 2, name: "商品B", category: "書籍", price: "¥2,400", status: "在庫わずか" },
  { id: 3, name: "商品C", category: "電子機器", price: "¥45,000", status: "在庫あり" },
  { id: 4, name: "商品D", category: "衣類", price: "¥5,600", status: "売り切れ" },
  { id: 5, name: "商品E", category: "書籍", price: "¥1,800", status: "在庫あり" },
  { id: 6, name: "商品F", category: "食品", price: "¥980", status: "在庫あり" },
  { id: 7, name: "商品G", category: "家具", price: "¥22,000", status: "在庫わずか" },
  { id: 8, name: "商品H", category: "日用品", price: "¥1,200", status: "在庫あり" },
  { id: 9, name: "商品I", category: "スポーツ", price: "¥8,900", status: "売り切れ" },
  { id: 10, name: "商品J", category: "電子機器", price: "¥19,800", status: "在庫あり" },
  { id: 11, name: "商品K", category: "書籍", price: "¥3,200", status: "在庫あり" },
  { id: 12, name: "商品L", category: "衣類", price: "¥4,300", status: "在庫わずか" },
  { id: 13, name: "商品M", category: "食品", price: "¥650", status: "在庫あり" },
  { id: 14, name: "商品N", category: "家具", price: "¥35,000", status: "在庫あり" },
  { id: 15, name: "商品O", category: "日用品", price: "¥780", status: "在庫あり" },
  { id: 16, name: "商品P", category: "スポーツ", price: "¥12,500", status: "在庫わずか" },
  { id: 17, name: "商品Q", category: "電子機器", price: "¥68,000", status: "売り切れ" },
  { id: 18, name: "商品R", category: "書籍", price: "¥1,500", status: "在庫あり" },
  { id: 19, name: "商品S", category: "衣類", price: "¥6,200", status: "在庫あり" },
  { id: 20, name: "商品T", category: "食品", price: "¥1,050", status: "在庫わずか" },
  { id: 21, name: "商品U", category: "家具", price: "¥28,500", status: "在庫あり" },
  { id: 22, name: "商品V", category: "日用品", price: "¥540", status: "在庫あり" },
  { id: 23, name: "商品W", category: "スポーツ", price: "¥3,800", status: "売り切れ" },
  { id: 24, name: "商品X", category: "電子機器", price: "¥9,900", status: "在庫あり" },
  { id: 25, name: "商品Y", category: "書籍", price: "¥2,950", status: "在庫わずか" },
  { id: 26, name: "商品Z", category: "衣類", price: "¥7,400", status: "在庫あり" },
];

export default function DataListPage() {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const categories = useMemo(
    () => Array.from(new Set(sampleData.map((item) => item.category))),
    []
  );
  const statuses = useMemo(
    () => Array.from(new Set(sampleData.map((item) => item.status))),
    []
  );

  const filteredData = useMemo(() => {
    return sampleData.filter((item) => {
      const categoryMatch = filterCategory === "all" || item.category === filterCategory;
      const statusMatch = filterStatus === "all" || item.status === filterStatus;
      return categoryMatch && statusMatch;
    });
  }, [filterCategory, filterStatus]);

  const sortedData = useMemo(() => {
    const sorted = [...filteredData].sort((a, b) => {
      let aValue: string | number = a[sortKey];
      let bValue: string | number = b[sortKey];

      // 価格の場合は数値として比較
      if (sortKey === "price") {
        aValue = parseInt(a.price.replace(/[¥,]/g, ""));
        bValue = parseInt(b.price.replace(/[¥,]/g, ""));
      }

      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredData, sortKey, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / itemsPerPage));
  const totalItems = sortedData.length;
  const startIndex = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [sortedData, currentPage]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      setCurrentPage(1);
    } else {
      setSortKey(key);
      setSortOrder("asc");
      setCurrentPage(1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-center">データリスト</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 text-center">
          学習用のサンプルデータリストです。
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <label className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">カテゴリ</span>
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <option value="all">すべて</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-gray-600 dark:text-gray-400">在庫状況</span>
            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <option value="all">すべて</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setFilterCategory("all");
              setFilterStatus("all");
              setCurrentPage(1);
            }}
            className="px-3 py-2 rounded-lg text-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            クリア
          </button>
        </div>

        <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex gap-2 justify-center flex-wrap lg:justify-start">
            <button
              onClick={() => handleSort("name")}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                sortKey === "name"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              商品名 {sortKey === "name" && (sortOrder === "asc" ? "↑" : "↓")}
            </button>
            <button
              onClick={() => handleSort("category")}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                sortKey === "category"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              カテゴリ {sortKey === "category" && (sortOrder === "asc" ? "↑" : "↓")}
            </button>
            <button
              onClick={() => handleSort("price")}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                sortKey === "price"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              価格 {sortKey === "price" && (sortOrder === "asc" ? "↑" : "↓")}
            </button>
            <button
              onClick={() => handleSort("status")}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                sortKey === "status"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              在庫状況 {sortKey === "status" && (sortOrder === "asc" ? "↑" : "↓")}
            </button>
          </nav>

          <div className="flex items-center justify-center gap-4 text-sm lg:justify-end">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                currentPage === 1
                  ? "text-gray-400 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              前へ
            </button>
            <span className="text-gray-600 dark:text-gray-400">
              {currentPage} / {totalPages}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {startIndex}-{endIndex} / {totalItems}件
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-lg border transition-colors ${
                currentPage === totalPages
                  ? "text-gray-400 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              次へ
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-3 mb-6">
          {paginatedData.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative px-6 py-4 pr-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <article className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>カテゴリ: {item.category}</span>
                  <span className={
                    item.status === "在庫あり" 
                      ? "text-green-600 dark:text-green-400" 
                      : item.status === "在庫わずか"
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-red-600 dark:text-red-400"
                  }>
                    {item.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.price}</p>
                </div>
              </article>
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-4 mb-8 text-sm">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-lg border transition-colors ${
              currentPage === 1
                ? "text-gray-400 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            前へ
          </button>
          <span className="text-gray-600 dark:text-gray-400">
            {currentPage} / {totalPages}
          </span>
          <span className="text-gray-600 dark:text-gray-400">
            {startIndex}-{endIndex} / {totalItems}件
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-lg border transition-colors ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            次へ
          </button>
        </div>

        {selectedItem && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedItem(null)}
          >
            <article
              className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </header>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">商品ID</dt>
                  <dd className="mt-1 text-lg">{selectedItem.id}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">カテゴリ</dt>
                  <dd className="mt-1 text-lg">{selectedItem.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">価格</dt>
                  <dd className="mt-1 text-lg font-bold text-blue-600 dark:text-blue-400">{selectedItem.price}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">在庫状況</dt>
                  <dd className={`mt-1 text-lg font-medium ${
                    selectedItem.status === "在庫あり" 
                      ? "text-green-600 dark:text-green-400" 
                      : selectedItem.status === "在庫わずか"
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-red-600 dark:text-red-400"
                  }`}>
                    {selectedItem.status}
                  </dd>
                </div>
              </dl>
            </article>
          </div>
        )}

        <div className="text-center">
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
