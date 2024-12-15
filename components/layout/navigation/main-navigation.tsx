'use client';

import Link from 'next/link';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ROUTES } from '@/lib/config/constants';

export function MainNavigation() {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href={ROUTES.DEALS} legacyBehavior passHref>
          <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            Deals
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
}