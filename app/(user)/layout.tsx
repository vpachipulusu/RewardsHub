'use client';

import { usePathname } from 'next/navigation';
import { UserSidebar } from '@/components/user/user-sidebar';
import { mockData } from '@/lib/config/mock-data';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const protectedRoutes = ['/dashboard', '/profile', '/withdraw'];
  const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route));

  // For development, always show user layout on protected routes
  const showSidebar = isProtectedRoute;

  return (
    <div className="flex min-h-screen">
      {showSidebar && <UserSidebar user={mockData.user} />}
      <main className={`flex-1 ${showSidebar ? 'p-6' : ''}`}>{children}</main>
    </div>
  );
}