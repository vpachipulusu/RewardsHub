'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useAuthState } from '@/lib/hooks/use-auth-state';
import { User } from '@/lib/types';

const AuthContext = createContext<{ user: User | null }>({ user: null });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data and set user state
    const fetchedUser: User = { id: '1', email: 'admin@example.com', name: 'Admin', role: 'admin' };
    setUser(fetchedUser);
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}