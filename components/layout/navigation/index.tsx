'use client';

import { NavigationMenu } from '@/components/ui/navigation-menu';
import { RetailerNavigation } from './retailer-navigation';
import { MainNavigation } from './main-navigation';
import { useAuth } from '@/lib/auth-context';

export function Navigation() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <NavigationMenu className="mx-6">
      <RetailerNavigation />
      <MainNavigation />
    </NavigationMenu>
  );
}