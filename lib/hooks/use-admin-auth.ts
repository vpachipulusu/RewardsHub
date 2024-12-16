'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { ROUTES } from '@/lib/config/constants';

export function useAdminAuth() {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      if (pathname !== ROUTES.ADMIN.LOGIN) {
        router.replace(ROUTES.ADMIN.LOGIN);
      }
    }
  }, [user, router, pathname]);

  return { user, isAdmin: user?.role === 'admin' };
}