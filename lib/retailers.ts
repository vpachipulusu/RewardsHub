export interface Retailer {
  id: string;
  name: string;
  description: string;
  cashback: number;
  categories: string[];
  url: string;
}

export const categories = [
  'Fashion',
  'Electronics',
  'Home & Garden',
  'Beauty',
  'Travel',
  'Food & Dining',
  'Sports & Outdoors',
  'Books & Media',
];

export const retailers: Retailer[] = [
  {
    id: '1',
    name: 'TechGear',
    description: 'Latest electronics and gadgets',
    cashback: 5,
    categories: ['Electronics'],
    url: 'https://example.com/techgear',
  },
  {
    id: '2',
    name: 'Fashionista',
    description: 'Trendy clothing and accessories',
    cashback: 8,
    categories: ['Fashion'],
    url: 'https://example.com/fashionista',
  },
  {
    id: '3',
    name: 'HomeDecor',
    description: 'Beautiful home furnishings',
    cashback: 10,
    categories: ['Home & Garden'],
    url: 'https://example.com/homedecor',
  },
  // Add more retailers...
];

export function getSavedRetailers(): Retailer[] {
  return retailers.slice(0, 3);
}