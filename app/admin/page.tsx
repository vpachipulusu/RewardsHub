"use client";

import { useAdminAuth } from "@/lib/hooks/use-admin-auth";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { user, isAdmin } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || !isAdmin) {
      router.replace("/admin/login");
    }
  }, [user, isAdmin, router]);

  if (!user || !isAdmin) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size={32} />
      </div>
    );
  }

  return <AdminDashboard />;
}
