'use client';

import Link from 'next/link';
import { CircleDollarSign } from 'lucide-react';
import { ROUTES } from '@/lib/config/routes';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <CircleDollarSign className="h-6 w-6" />
      <Link href={ROUTES.HOME} className="font-bold">
        RewardHub
      </Link>
    </div>
  );
}