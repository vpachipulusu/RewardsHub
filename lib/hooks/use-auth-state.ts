"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ROUTES } from "@/lib/config/constants";
import { User } from "@/lib/types";

export function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        // Replace with actual authentication logic
        const authenticatedUser: User = { email, role: "user" }; // Example user data
        setUser(authenticatedUser);

        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });

        router.push(ROUTES.DASHBOARD);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to log in. Please try again.",
          variant: "destructive",
        });
        throw error;
      }
    },
    [router, toast]
  );

  const loginAsAdmin = useCallback(
    async (email: string, password: string) => {
      try {
        // Replace with actual authentication logic
        const authenticatedAdmin: User = { email, role: "admin" }; // Example admin data
        setUser(authenticatedAdmin);

        toast({
          title: "Welcome Admin!",
          description: "You have successfully logged in.",
        });

        router.push(ROUTES.ADMIN.DASHBOARD);
      } catch (error) {
        toast({
          title: "Error",
          description: "Invalid admin credentials",
          variant: "destructive",
        });
        throw error;
      }
    },
    [router, toast]
  );

  const logout = useCallback(async () => {
    setUser(null);
    router.push(ROUTES.HOME);

    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  }, [router, toast]);

  return {
    user,
    login,
    loginAsAdmin,
    logout,
    isAdmin: user?.role === "admin",
  };
}
