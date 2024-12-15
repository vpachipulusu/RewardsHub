// Mock data for development
export const mockData = {
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
  },
  admin: {
    id: 'admin1',
    name: 'Admin User',
    email: 'admin@rewardhub.com',
    role: 'admin',
  },
  balance: {
    available: 125.50,
    pending: 45.75,
  },
  stats: {
    totalUsers: 15234,
    newUsers: 342,
    totalCashbackPaid: 543210.50,
    monthlyCashbackPaid: 42150.75,
    activeRetailers: 234,
    pendingRetailers: 12,
  },
  charts: {
    cashbackTrends: [
      { date: '2024-01', amount: 38000 },
      { date: '2024-02', amount: 42000 },
      { date: '2024-03', amount: 45000 },
      { date: '2024-04', amount: 42150 },
    ],
    userActivity: [
      { date: '2024-01', searches: 1200, clicks: 800, purchases: 150 },
      { date: '2024-02', searches: 1400, clicks: 950, purchases: 180 },
      { date: '2024-03', searches: 1300, clicks: 880, purchases: 165 },
      { date: '2024-04', searches: 1600, clicks: 1100, purchases: 210 },
    ],
    retailerPerformance: [
      { name: 'TechGear', cashback: 12500 },
      { name: 'Fashionista', cashback: 9800 },
      { name: 'HomeDecor', cashback: 7600 },
      { name: 'BeautyHub', cashback: 6900 },
      { name: 'SportZone', cashback: 5400 },
    ],
  },
} as const;