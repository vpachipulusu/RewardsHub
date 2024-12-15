'use client';

import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { Wallet } from 'lucide-react';
import { WithdrawButton } from './withdraw-button';
import { mockData } from '@/lib/config/mock-data';

export function DashboardHeader() {
  const { available: availableBalance, pending: pendingBalance } = mockData.balance;

  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's your rewards summary
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <Wallet className="h-4 w-4" />
            <div>
              <p className="text-sm font-medium">Available Balance</p>
              <p className="text-2xl font-bold">{formatCurrency(availableBalance)}</p>
              <p className="text-sm text-muted-foreground">
                Pending: {formatCurrency(pendingBalance)}
              </p>
            </div>
          </div>
          <WithdrawButton availableBalance={availableBalance} />
        </div>
      </div>
    </Card>
  );
}