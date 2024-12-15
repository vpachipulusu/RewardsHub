export interface AdminStats {
  totalUsers: number;
  newUsers: number;
  totalCashbackPaid: number;
  monthlyCashbackPaid: number;
  activeRetailers: number;
  pendingRetailers: number;
  cashbackTrends: Array<{
    date: string;
    amount: number;
  }>;
}

export function getAdminStats(): AdminStats {
  // Mock data - replace with actual API calls
  return {
    totalUsers: 15234,
    newUsers: 342,
    totalCashbackPaid: 543210.50,
    monthlyCashbackPaid: 42150.75,
    activeRetailers: 234,
    pendingRetailers: 12,
    cashbackTrends: [
      { date: '2024-01', amount: 38000 },
      { date: '2024-02', amount: 42000 },
      { date: '2024-03', amount: 45000 },
      { date: '2024-04', amount: 42150 },
    ],
  };
}

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  status: 'active' | 'inactive';
  totalCashback: number;
  joinDate: string;
}

export function getUsers(): AdminUser[] {
  return [
    {
      id: '1',
      email: 'john@example.com',
      name: 'John Doe',
      status: 'active',
      totalCashback: 1234.56,
      joinDate: '2024-01-15',
    },
    // Add more mock users
  ];
}