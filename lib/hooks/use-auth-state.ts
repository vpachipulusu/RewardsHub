'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { ROUTES } from '@/lib/config/constants';
import { User } from '@/lib/types';
import { mockData } from '@/lib/config/mock-data';

export function useAuthState() {
  const [user, setUser] = useState<User | null>(mockData.user);
  const router = useRouter();
  const { toast } = useToast();

  const login = useCallback(async (email: string, password: string) => {
    try {
      // For development, always succeed and set mock user
      setUser(mockData.user);
      
      toast({
        title: 'Welcome back!',
        description: 'You have successfully logged in.',
      });
      
      router.push(ROUTES.DASHBOARD);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to log in. Please try again.',
        variant: 'destructive',
      });
      throw error;
    }
  }, [router, toast]);

  const loginAsAdmin = useCallback(async (email: string, password: string) => {
    try {
      // For development, always succeed and set mock admin
      setUser(mockData.admin);
      
      toast({
        title: 'Welcome Admin!',
        description: 'You have successfully logged in.',
      });
      
      router.push(ROUTES.ADMIN.DASHBOARD);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid admin credentials',
        variant: 'destructive',
      });
      throw error;
    }
  }, [router, toast]);

  const logout = useCallback(async () => {
    setUser(null);
    router.push(ROUTES.HOME);
    
    toast({
      title: 'Logged out',
      description: 'You have been successfully logged out.',
    });
  }, [router, toast]);

  return {
    user,
    login,
    loginAsAdmin,
    logout,
    isAdmin: user?.role === 'admin'
  };
}