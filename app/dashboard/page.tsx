'use client';

import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { RecentTransactions } from '@/components/dashboard/recent-transactions';
import { SavedRetailers } from '@/components/dashboard/saved-retailers';
import { DashboardCharts } from '@/components/dashboard/dashboard-charts';
import { useClientAuth as useClientAuthHook } from '@/lib/hooks/use-client-auth';
import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { useState, useEffect } from 'react';

export function useClientAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // logic to fetch user
    // set isLoading to false after fetching user
    setIsLoading(false);
  }, []);

  return { user, isLoading };
}

export default function DashboardPage() {
  const { isLoading } = useClientAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size={32} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <DashboardHeader />
      
      <div className="grid gap-6 md:grid-cols-3">
        <DashboardStats />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <DashboardCharts />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <RecentTransactions />
        <SavedRetailers />
      </div>
    </div>
  );
}