'use client';

import Link from 'next/link';
import { CircleDollarSign } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';
import { UserNav } from '@/components/layout/user-nav';
import { useAuth } from '@/lib/auth-context';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import { ROUTES } from '@/lib/config/constants';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = memo(function Header() {
  const { user, isAdmin } = useAuth();
  const pathname = usePathname();

  // Don't show header on admin pages except admin dashboard
  if (pathname?.startsWith('/admin') && pathname !== '/admin') {
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
          <NavigationMenu className="mx-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Retailers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="grid gap-1">
                      <h4 className="font-medium leading-none">Categories</h4>
                      <p className="text-sm text-muted-foreground">
                        Browse retailers by category
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/deals" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Deals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
});

export default Header;