'use client';

import { createContext, useContext } from 'react';
import { useAuthState } from '@/lib/hooks/use-auth-state';

const AuthContext = createContext<ReturnType<typeof useAuthState> | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuthState();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}