'use client';

import { useToast } from '@/components/ui/use-toast';
import { useCallback } from 'react';

export function useToastError() {
  const { toast } = useToast();

  const showError = useCallback((error: unknown) => {
    const message = error instanceof Error ? error.message : 'An unexpected error occurred';
    
    toast({
      title: 'Error',
      description: message,
      variant: 'destructive',
    });
  }, [toast]);

  return showError;
}