/**
 * ユーティリティ関数
 */

/**
 * クラス名を結合する
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * スリープ関数
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
