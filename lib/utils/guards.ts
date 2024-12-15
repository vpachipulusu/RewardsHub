import { User } from '@/lib/types';

export const isAdmin = (user: User | null): boolean => {
  return user?.role === 'admin';
};

export const isAuthenticated = (user: User | null): boolean => {
  return user !== null;
};

export const hasRequiredPermissions = (
  user: User | null,
  requiredPermissions: string[]
): boolean => {
  if (!user) return false;
  // Add permission checking logic here
  return true;
};