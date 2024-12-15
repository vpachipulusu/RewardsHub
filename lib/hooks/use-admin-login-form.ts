'use client';

import { useState, useCallback } from 'react';
import { useAuth } from '@/lib/auth-context';
import { type Toast } from '@/components/ui/use-toast';
import { AuthSchema } from '@/lib/utils/validation';

interface FormState extends AuthSchema {
  isSubmitting: boolean;
}

export function useAdminLoginForm() {
  const { loginAsAdmin } = useAuth();
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    isSubmitting: false,
  });

  const handleChange = useCallback((field: keyof AuthSchema, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent, toast: typeof Toast) => {
    e.preventDefault();
    if (formState.isSubmitting) return;

    setFormState((prev) => ({ ...prev, isSubmitting: true }));
    try {
      await loginAsAdmin(formState.email, formState.password);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid admin credentials',
        variant: 'destructive',
      });
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  }, [formState.email, formState.password, formState.isSubmitting, loginAsAdmin]);

  return {
    formState,
    handleChange,
    handleSubmit,
  };
}