"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/lib/types";

const AuthContext = createContext<{ user: User | null; isLoading: boolean }>({ user: null, isLoading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      const fetchedUser: User = { id: '1', email: 'admin@example.com', name: 'Admin', role: 'admin' };
      setUser(fetchedUser);
      setIsLoading(false);
    }, 1000);
  }, []);

  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
