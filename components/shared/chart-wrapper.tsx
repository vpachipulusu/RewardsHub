'use client';

import { memo } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartData {
  [key: string]: any;
}

interface ChartProps {
  data: ChartData[];
  children: React.ReactNode;
  [key: string]: any;
}

const defaultAxisProps = {
  scale: 'auto' as const,
  tickMargin: 10,
  width: 50,
};

// Memoized chart components with proper axis configuration
export const MemoizedLineChart = memo(function MemoizedLineChart({ 
  data,
  children,
  ...props
}: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} {...props}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis {...defaultAxisProps} />
        <YAxis {...defaultAxisProps} />
        <Tooltip />
        {children}
      </LineChart>
    </ResponsiveContainer>
  );
});

export const MemoizedBarChart = memo(function MemoizedBarChart({
  data,
  children,
  ...props
}: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} {...props}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis {...defaultAxisProps} />
        <YAxis {...defaultAxisProps} />
        <Tooltip />
        {children}
      </BarChart>
    </ResponsiveContainer>
  );
});