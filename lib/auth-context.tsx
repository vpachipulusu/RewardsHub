"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/lib/types";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      const shouldSimulateLoggedIn = false; // Change to true to simulate a logged-in user
      const fetchedUser: User | null = shouldSimulateLoggedIn
        ? {
            id: "1",
            email: "admin@example.com",
            name: "Admin",
            role: "admin",
          }
        : null;
      setUser(fetchedUser);
      setIsLoading(false);
    }, 1000);
  }, []);

  const logout = async () => {
    setUser(null); // Simulate clearing the user session
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
