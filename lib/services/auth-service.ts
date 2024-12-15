import { User } from '@/lib/types';
import { ENV } from '@/lib/config/env';
import { AuthError } from '@/lib/utils/errors';

interface AuthData {
  token: string;
  user: User;
}

export class AuthService {
  async login(email: string, password: string): Promise<AuthData> {
    // Mock login - replace with actual API call
    return {
      token: 'mock_token',
      user: {
        id: '1',
        email,
        name: 'John Doe',
        role: 'user'
      }
    };
  }

  async loginAsAdmin(email: string, password: string): Promise<AuthData> {
    if (email === ENV.ADMIN_EMAIL && password === ENV.ADMIN_PASSWORD) {
      return {
        token: 'admin_token',
        user: {
          id: 'admin1',
          email,
          name: 'Admin User',
          role: 'admin'
        }
      };
    }
    throw new AuthError('Invalid admin credentials');
  }

  async logout(): Promise<void> {
    // Mock logout - replace with actual API call
    return Promise.resolve();
  }
}