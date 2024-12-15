'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Wallet,
  Settings,
  ShoppingBag,
  Tag,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/lib/auth-context';

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Retailers',
    href: '/retailers',
    icon: ShoppingBag,
  },
  {
    title: 'Deals',
    href: '/deals',
    icon: Tag,
  },
  {
    title: 'Withdraw',
    href: '/withdraw',
    icon: Wallet,
  },
  {
    title: 'Settings',
    href: '/profile',
    icon: Settings,
  },
];

export function UserSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="flex flex-col h-screen w-64 bg-card border-r">
      <div className="p-6">
        <h2 className="text-lg font-semibold">My Account</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors',
                pathname === item.href
                  ? 'bg-primary/10 text-primary hover:bg-primary/20'
                  : 'hover:bg-muted'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-sm hover:bg-muted transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}