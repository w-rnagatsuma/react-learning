/**
 * プロジェクト共通の定数
 */

export const APP_NAME = 'React Learning';

export const ROUTES = {
  HOME: '/',
  CONTACT: '/contact',
  DATA_LIST: '/dataList',
} as const;

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
