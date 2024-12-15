'use client';

import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/utils/storage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize with stored value or initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getLocalStorage(key, initialValue);
  });

  // Update storage when value changes
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      setLocalStorage(key, valueToStore);
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}