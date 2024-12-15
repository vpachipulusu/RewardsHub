'use client';

import { formatDistanceToNow } from 'date-fns';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Notification } from '@/lib/types/notification';
import { useNotifications } from '@/lib/hooks/use-notifications';
import { Bell, DollarSign, Tag } from 'lucide-react';

interface NotificationItemProps {
  notification: Notification;
}

const icons = {
  cashback: DollarSign,
  deal: Tag,
  system: Bell,
} as const;

export function NotificationItem({ notification }: NotificationItemProps) {
  const { markAsRead } = useNotifications();
  const Icon = icons[notification.type];

  const handleClick = () => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
  };

  return (
    <DropdownMenuItem
      className={cn(
        'flex items-start gap-3 p-4 cursor-pointer transition-colors',
        !notification.read && 'bg-muted/50 hover:bg-muted'
      )}
      onClick={handleClick}
    >
      <Icon className={cn(
        'h-5 w-5 mt-0.5',
        !notification.read ? 'text-primary' : 'text-muted-foreground'
      )} />
      <div className="space-y-1">
        <p className={cn(
          'text-sm leading-none',
          !notification.read && 'font-medium'
        )}>
          {notification.title}
        </p>
        <p className="text-sm text-muted-foreground">
          {notification.message}
        </p>
        <p className="text-xs text-muted-foreground">
          {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
        </p>
      </div>
    </DropdownMenuItem>
  );
}