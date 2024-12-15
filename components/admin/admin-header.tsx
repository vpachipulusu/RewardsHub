'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { useAuth } from '@/lib/auth-context';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bell } from 'lucide-react';

export function AdminHeader() {
  const { user } = useAuth();

  return (
    <header className="border-b bg-card px-6 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <button className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{user?.name?.[0] ?? 'A'}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{user?.name ?? 'Admin'}</p>
              <p className="text-muted-foreground text-xs">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}