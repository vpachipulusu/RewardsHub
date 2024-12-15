'use client';

import { memo } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './logo';
import { Navigation } from '../navigation';
import { HeaderActions } from './header-actions';
import { ROUTES } from '@/lib/config/routes';

const Header = memo(function Header() {
  const pathname = usePathname();
  
  // Don't show header on admin pages except admin dashboard
  const isAdminPage = pathname?.startsWith('/admin');
  const isAdminDashboard = pathname === ROUTES.ADMIN.DASHBOARD;
  
  if (isAdminPage && !isAdminDashboard) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Logo />
        <Navigation />
        <HeaderActions />
      </div>
    </header>
  );
});

export default Header;