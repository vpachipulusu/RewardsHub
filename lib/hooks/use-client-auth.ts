'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { ROUTES } from '@/lib/config/routes';

export function useClientAuth(redirectTo = ROUTES.AUTH.LOGIN) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace(redirectTo);
    }
  }, [user, router, redirectTo]);

  return { user };
}