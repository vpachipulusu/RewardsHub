import { Margin } from 'recharts/types/util/types';

interface CustomChartProps {
  margin?: Margin;
  style?: React.CSSProperties;
}

export const defaultChartConfig: Partial<CustomChartProps> = {
  margin: { top: 20, right: 20, bottom: 20, left: 20 },
  style: { userSelect: 'none' },
};

export const axisConfig = {
  padding: { left: 20, right: 20 },
  tickMargin: 10,
};

export const lineConfig = {
  strokeWidth: 2,
  activeDot: { r: 6 },
  dot: { r: 4 },
};

export const barConfig = {
  radius: [4, 4, 0, 0],
  maxBarSize: 50,
};