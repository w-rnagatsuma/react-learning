import { useState, useEffect } from 'react';

/**
 * カスタムフックのサンプル
 */
export function useExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  return { count, setCount };
}
