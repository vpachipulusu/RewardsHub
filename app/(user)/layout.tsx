'use client';

import { usePathname } from 'next/navigation';
import { UserSidebar } from '@/components/user/user-sidebar';
import { useAuth } from '@/lib/auth-context';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const pathname = usePathname();
  const protectedRoutes = ['/dashboard', '/profile', '/withdraw'];
  const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route));

  // Show sidebar only if the user is authenticated and on a protected route
  const showSidebar = isProtectedRoute && !!user;

  return (
    <div className="flex min-h-screen">
      {showSidebar && <UserSidebar />}
      <main className={`flex-1 ${showSidebar ? 'p-6' : ''}`}>{children}</main>
    </div>
  );
}