'use client';

import { ModeToggle } from '@/components/mode-toggle';
import UserNav from '../user-nav';
import { NotificationBell } from '@/components/notifications/notification-bell';
import { useAuth } from '@/lib/auth-context';

export function HeaderActions() {
  const { user } = useAuth();

  return (
    <div className="ml-auto flex items-center space-x-4">
      <ModeToggle />
      {user && <NotificationBell />}
      <UserNav />
    </div>
  );
}