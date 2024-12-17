"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "react-feather";
import Link from "next/link";
import { ROUTES } from "@/lib/config/constants";
import { useAuth } from "@/lib/auth-context";
import { User } from "@/lib/types";
import Home from './../../app/page';

export default function UserNav() {
  const { user, logout } = useAuth() as { user: User | null; logout: () => Promise<void> };
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    router.push(ROUTES.HOME);
  };

  useEffect(() => {
    if (isLoggingOut) {
      // Perform any side effects related to logging out here
    }
  }, [isLoggingOut]);

  if (!user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={ROUTES.USER.PROFILE} className="cursor-pointer">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={ROUTES.USER.WITHDRAW} className="cursor-pointer">
            Withdraw Funds
          </Link>
        </DropdownMenuItem>
        {user?.role === "admin" && (
          <DropdownMenuItem asChild>
            <Link href={ROUTES.ADMIN.DASHBOARD} className="cursor-pointer">
              Admin Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer"
          disabled={isLoggingOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {isLoggingOut ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
