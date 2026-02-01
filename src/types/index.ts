/**
 * プロジェクト共通の型定義
 */

export type User = {
  id: string;
  name: string;
  email: string;
};

export type ApiResponse<T> = {
  data: T;
  error?: string;
};
