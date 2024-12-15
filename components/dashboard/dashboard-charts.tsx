'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Line, Bar } from 'recharts';
import { MemoizedLineChart, MemoizedBarChart } from '@/components/shared/chart-wrapper';
import { defaultChartConfig, lineConfig, barConfig } from '@/lib/config/chart';
import { mockData } from '@/lib/config/mock-data';

export function DashboardCharts() {
  const { cashbackTrends, retailerPerformance } = mockData.charts;

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Cashback History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <MemoizedLineChart data={cashbackTrends} {...defaultChartConfig}>
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="hsl(var(--chart-1))"
                {...lineConfig}
              />
            </MemoizedLineChart>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Retailers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <MemoizedBarChart data={retailerPerformance} {...defaultChartConfig}>
              <Bar 
                dataKey="cashback" 
                fill="hsl(var(--chart-1))"
                {...barConfig}
              />
            </MemoizedBarChart>
          </div>
        </CardContent>
      </Card>
    </>
  );
}