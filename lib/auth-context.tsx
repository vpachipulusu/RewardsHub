"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/lib/types";

interface AuthContextType {
  user: User | null;
  loginAsAdmin: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data and set user state
    const fetchedUser: User = {
      id: "1",
      email: "admin@rewardhub.com",
      name: "Admin",
      role: "admin",
    };
    setUser(fetchedUser);
  }, []);

  const loginAsAdmin = async (
    email: string,
    password: string
  ): Promise<void> => {
    // Simulate login logic (replace with your actual login logic)
    if (email === "admin@rewardhub.com" && password === "admin123") {
      setUser({ id: "1", email, name: "Admin", role: "admin" });
    } else {
      throw new Error("Invalid admin credentials");
    }
  };

  const logout = async (): Promise<void> => {
    // Simulate logout logic (replace with your actual logout logic)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
