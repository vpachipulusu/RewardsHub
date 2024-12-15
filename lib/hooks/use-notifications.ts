'use client';

import { useCallback, useEffect, useState } from 'react';
import { Notification } from '@/lib/types';
import { notificationService } from '@/lib/services/notification-service';
import { useToastError } from './use-toast-error';

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const showError = useToastError();

  useEffect(() => {
    async function loadNotifications() {
      try {
        const data = await notificationService.getNotifications();
        setNotifications(data);
        setUnreadCount(data.filter(n => !n.read).length);
      } catch (error) {
        showError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadNotifications();
  }, [showError]);

  const markAsRead = useCallback(async (id: string) => {
    try {
      await notificationService.markAsRead(id);
      setNotifications(prev => prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      ));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      showError(error);
    }
  }, [showError]);

  const markAllAsRead = useCallback(async () => {
    try {
      await notificationService.markAllAsRead();
      setNotifications(prev => prev.map(notification => ({ ...notification, read: true })));
      setUnreadCount(0);
    } catch (error) {
      showError(error);
    }
  }, [showError]);

  const clearNotifications = useCallback(async () => {
    try {
      await notificationService.clearNotifications();
      setNotifications([]);
      setUnreadCount(0);
    } catch (error) {
      showError(error);
    }
  }, [showError]);

  return {
    notifications,
    unreadCount,
    isLoading,
    markAsRead,
    markAllAsRead,
    clearNotifications,
  };
}