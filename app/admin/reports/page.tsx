'use client';

import { ActivityChart } from '@/components/admin/reports/activity-chart';
import { RetailerChart } from '@/components/admin/reports/retailer-chart';

const activityData = [
  { date: '2024-01', searches: 1200, clicks: 800, purchases: 150 },
  { date: '2024-02', searches: 1400, clicks: 950, purchases: 180 },
  { date: '2024-03', searches: 1300, clicks: 880, purchases: 165 },
  { date: '2024-04', searches: 1600, clicks: 1100, purchases: 210 },
];

const retailerData = [
  { name: 'TechGear', cashback: 12500 },
  { name: 'Fashionista', cashback: 9800 },
  { name: 'HomeDecor', cashback: 7600 },
  { name: 'BeautyHub', cashback: 6900 },
  { name: 'SportZone', cashback: 5400 },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics & Reports</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <ActivityChart data={activityData} />
        <RetailerChart data={retailerData} />
      </div>
    </div>
  );
}