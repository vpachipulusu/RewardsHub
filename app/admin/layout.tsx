'use client';

import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { AdminHeader } from '@/components/admin/admin-header';
import { mockData } from '@/lib/config/mock-data';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // For development, always show admin layout
  return (
    <div className="flex min-h-screen">
      <AdminSidebar user={mockData.admin} />
      <div className="flex-1">
        <AdminHeader user={mockData.admin} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}