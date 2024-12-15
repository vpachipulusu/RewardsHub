export interface Deal {
  id: string;
  retailer: string;
  title: string;
  description: string;
  type: 'cashback' | 'discount';
  value: number;
  expiresAt: string;
  minimumSpend?: number;
  url: string;
  featured?: boolean;
}

export const dealTypes = ['cashback', 'discount'] as const;

export const deals: Deal[] = [
  {
    id: '1',
    retailer: 'TechGear',
    title: 'Extra Cashback on Electronics',
    description: 'Earn additional cashback on all electronics purchases over $500.',
    type: 'cashback',
    value: 5,
    expiresAt: '2024-05-01',
    minimumSpend: 500,
    url: 'https://example.com/techgear-deal',
    featured: true,
  },
  {
    id: '2',
    retailer: 'Fashionista',
    title: 'Spring Collection Sale',
    description: 'Get an exclusive discount on the new spring collection.',
    type: 'discount',
    value: 20,
    expiresAt: '2024-04-15',
    url: 'https://example.com/fashionista-deal',
  },
  {
    id: '3',
    retailer: 'HomeDecor',
    title: 'Home Office Essentials',
    description: 'Special discount on home office furniture and accessories.',
    type: 'discount',
    value: 15,
    expiresAt: '2024-04-30',
    minimumSpend: 200,
    url: 'https://example.com/homedecor-deal',
  },
  {
    id: '4',
    retailer: 'BeautyHub',
    title: 'Beauty Box Special',
    description: 'Double cashback on beauty box subscriptions.',
    type: 'cashback',
    value: 10,
    expiresAt: '2024-04-20',
    url: 'https://example.com/beautyhub-deal',
    featured: true,
  },
  {
    id: '5',
    retailer: 'TravelPlus',
    title: 'Summer Getaway Deal',
    description: 'Extra cashback on summer vacation packages.',
    type: 'cashback',
    value: 8,
    expiresAt: '2024-06-30',
    minimumSpend: 1000,
    url: 'https://example.com/travelplus-deal',
  },
  {
    id: '6',
    retailer: 'SportZone',
    title: 'Fitness Equipment Sale',
    description: 'Special discount on all fitness equipment.',
    type: 'discount',
    value: 25,
    expiresAt: '2024-04-25',
    url: 'https://example.com/sportzone-deal',
  },
];