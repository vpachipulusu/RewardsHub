"use client";

import { memo } from "react";
import { useAuth } from "@/lib/auth-context";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { DollarSign } from "react-feather";
import { ROUTES } from "@/lib/config/constants";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import UserNav from "@/components/layout/user-nav";
import { CircleDollarSign } from "lucide-react";

const Header = memo(function Header() {
  const { user } = useAuth();
  const pathname = usePathname();
  const isAdmin = user?.role === 'admin'; // Adjust this line based on your user object structure

  // Don't show header on admin pages except admin dashboard
  if (pathname?.startsWith("/admin") && pathname !== "/admin") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="h-6 w-6" />
          <Link href={ROUTES.HOME} className="font-bold">
            RewardHub
          </Link>
        </div>

        {user && !isAdmin && (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href={ROUTES.USER.DASHBOARD}>
                    Dashboard
                  </NavigationMenuLink>
                  <NavigationMenuLink href={ROUTES.USER.PROFILE}>
                    Profile
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {user && <UserNav />}
      </div>
    </header>
  );
});

export default Header;
