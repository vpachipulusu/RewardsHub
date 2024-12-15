'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Line } from 'recharts';
import { MemoizedLineChart } from './chart-wrapper';
import { defaultChartConfig, lineConfig } from './chart-config';

interface ActivityData {
  date: string;
  searches: number;
  clicks: number;
  purchases: number;
}

interface ActivityChartProps {
  data: ActivityData[];
}

export function ActivityChart({ data }: ActivityChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <MemoizedLineChart data={data} {...defaultChartConfig}>
            <Line 
              type="monotone" 
              dataKey="searches" 
              stroke="hsl(var(--chart-1))"
              {...lineConfig}
            />
            <Line 
              type="monotone" 
              dataKey="clicks" 
              stroke="hsl(var(--chart-2))"
              {...lineConfig}
            />
            <Line 
              type="monotone" 
              dataKey="purchases" 
              stroke="hsl(var(--chart-3))"
              {...lineConfig}
            />
          </MemoizedLineChart>
        </div>
      </CardContent>
    </Card>
  );
}