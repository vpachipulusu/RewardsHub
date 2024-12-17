'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar } from 'recharts';
import { MemoizedBarChart } from './chart-wrapper';
import { defaultChartConfig, barConfig } from './chart-config';

interface RetailerData {
  name: string;
  cashback: number;
}

interface RetailerChartProps {
  data: RetailerData[];
}

export function RetailerChart({ data }: RetailerChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Retailers by Cashback</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <MemoizedBarChart data={data} {...defaultChartConfig}>
            <Bar 
              dataKey="cashback" 
              fill="hsl(var(--chart-2))" // Ensure the correct CSS variable is used
              radius={[10, 10, 10, 10]} // Ensure radius is correctly set
              maxBarSize={30} // Ensure maxBarSize is correctly set
            />
          </MemoizedBarChart>
        </div>
      </CardContent>
    </Card>
  );
}