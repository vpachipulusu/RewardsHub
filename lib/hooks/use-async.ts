'use client';

import { useState, useCallback } from 'react';
import { useToastError } from './use-toast-error';

interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

export function useAsync<T>(asyncFunction: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    isLoading: false,
  });
  const showError = useToastError();

  const execute = useCallback(async () => {
    setState({ data: null, error: null, isLoading: true });

    try {
      const data = await asyncFunction();
      setState({ data, error: null, isLoading: false });
      return data;
    } catch (error) {
      const errorObj = error instanceof Error ? error : new Error('An error occurred');
      setState({ data: null, error: errorObj, isLoading: false });
      showError(errorObj);
      throw errorObj;
    }
  }, [asyncFunction, showError]);

  return {
    ...state,
    execute,
  };
}