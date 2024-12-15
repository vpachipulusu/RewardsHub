interface Transaction {
  id: string;
  retailer: string;
  date: string;
  amount: number;
  cashback: number;
  status: 'pending' | 'completed' | 'rejected';
}

export function getRecentTransactions(): Transaction[] {
  return [
    {
      id: '1',
      retailer: 'TechGear',
      date: '2024-03-20',
      amount: 599.99,
      cashback: 29.99,
      status: 'completed',
    },
    {
      id: '2',
      retailer: 'Fashionista',
      date: '2024-03-18',
      amount: 149.99,
      cashback: 15.00,
      status: 'pending',
    },
    {
      id: '3',
      retailer: 'HomeDecor',
      date: '2024-03-15',
      amount: 299.99,
      cashback: 30.00,
      status: 'completed',
    },
    {
      id: '4',
      retailer: 'BeautyHub',
      date: '2024-03-12',
      amount: 89.99,
      cashback: 9.00,
      status: 'pending',
    },
  ];
}