import { Retailer } from '@/lib/types';
import { FEATURES } from '@/lib/config/features';

export class RetailerService {
  async getRetailers(): Promise<Retailer[]> {
    // Mock data - replace with actual API call
    return [
      {
        id: '1',
        name: 'TechGear',
        description: 'Latest electronics and gadgets',
        cashback: 5,
        categories: ['Electronics'],
        url: 'https://example.com/techgear',
      },
      // Add more retailers...
    ];
  }

  async getFeaturedRetailers(): Promise<Retailer[]> {
    const retailers = await this.getRetailers();
    return retailers.slice(0, FEATURES.RETAILERS.MAX_FEATURED);
  }

  async getRetailerById(id: string): Promise<Retailer | null> {
    const retailers = await this.getRetailers();
    return retailers.find(retailer => retailer.id === id) || null;
  }
}