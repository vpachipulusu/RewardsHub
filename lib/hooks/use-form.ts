'use client';

import { useState, useCallback } from 'react';
import { z } from 'zod';

interface UseFormOptions<T> {
  schema?: z.ZodType<T>;
  onSubmit?: (data: T) => Promise<void>;
}

export function useForm<T extends Record<string, any>>(
  initialValues: T,
  options: UseFormOptions<T> = {}
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((field: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));
    // Clear error when field is modified
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      let validatedData = values;
      
      if (options.schema) {
        validatedData = options.schema.parse(values);
      }

      await options.onSubmit?.(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof T, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof T] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  }, [values, isSubmitting, options]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}