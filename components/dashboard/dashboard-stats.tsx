'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { TrendingUp, ShoppingBag, Clock } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    {
      title: 'Total Earnings',
      value: formatCurrency(1234.56),
      description: 'Lifetime cashback earned',
      icon: TrendingUp,
      trend: '+12.5%',
    },
    {
      title: 'Recent Purchases',
      value: '24',
      description: 'Last 30 days',
      icon: ShoppingBag,
      trend: '+3',
    },
    {
      title: 'Pending Cashback',
      value: formatCurrency(89.99),
      description: 'Expected within 60 days',
      icon: Clock,
      trend: '4 transactions',
    },
  ];

  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.description}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}