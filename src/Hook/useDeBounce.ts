/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from 'react';
export default function useDeBounce(delay: number, value: string) {
  const [deBounce, setDeBounce] = useState<string>(value);
  useEffect(() => {
    if (!value.trim()) {
      delay = 0;
    }
    const handleTimeOut = setTimeout(() => {
      setDeBounce(value);
    }, delay);
    return () => clearTimeout(handleTimeOut);
  }, [value]);
  return deBounce;
}
