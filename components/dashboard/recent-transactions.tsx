'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatCurrency, formatDate } from '@/lib/utils';
import { getRecentTransactions } from '@/lib/transactions';

export function RecentTransactions() {
  const transactions = getRecentTransactions();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="font-medium">{transaction.retailer}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(transaction.date)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {formatCurrency(transaction.amount)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {formatCurrency(transaction.cashback)} cashback
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}