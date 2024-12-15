// Environment configuration with type safety
export const ENV = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  AUTH_SECRET: process.env.AUTH_SECRET || 'your-secret-key',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@rewardhub.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || 'admin123',
} as const;

export const isProduction = ENV.NODE_ENV === 'production';
export const isDevelopment = ENV.NODE_ENV === 'development';
export const isTest = ENV.NODE_ENV === 'test';