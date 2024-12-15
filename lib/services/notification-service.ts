import { Notification } from '@/lib/types';
import { ApiService } from './api-service';

export class NotificationService extends ApiService {
  async getNotifications(): Promise<Notification[]> {
    // Mock data - replace with actual API call
    return [
      {
        id: '1',
        title: 'New Cashback Available',
        message: 'Your recent purchase from TechGear earned $25.50 in cashback!',
        type: 'cashback',
        read: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Limited Time Deal',
        message: 'Extra 5% cashback at Fashionista - Today only!',
        type: 'deal',
        read: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Withdrawal Complete',
        message: 'Your withdrawal of $100.00 has been processed.',
        type: 'system',
        read: false,
        createdAt: new Date().toISOString(),
      },
    ];
  }

  async markAsRead(id: string): Promise<void> {
    // Mock API call
    return Promise.resolve();
  }

  async markAllAsRead(): Promise<void> {
    // Mock API call
    return Promise.resolve();
  }

  async clearNotifications(): Promise<void> {
    // Mock API call
    return Promise.resolve();
  }
}

export const notificationService = new NotificationService();