'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/config/constants';

interface AuthButtonsProps {
  isAuthenticated: boolean;
}

export function AuthButtons({ isAuthenticated }: AuthButtonsProps) {
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="flex items-center space-x-4">
      <Button variant="outline" asChild>
        <Link href={ROUTES.LOGIN}>Login</Link>
      </Button>
      <Button asChild>
        <Link href={ROUTES.SIGNUP}>Sign Up</Link>
      </Button>
    </div>
  );
}