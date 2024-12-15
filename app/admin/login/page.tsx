'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth-context';
import { useAdminLoginForm } from '@/lib/hooks/use-admin-login-form';

export default function AdminLoginPage() {
  const { user, isAdmin } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { formState, handleSubmit, handleChange } = useAdminLoginForm();

  // Redirect if already logged in as admin
  if (user && isAdmin) {
    router.replace('/admin');
    return null;
  }

  const onSubmit = useCallback(async (e: React.FormEvent) => {
    await handleSubmit(e, toast);
  }, [handleSubmit, toast]);

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                disabled={formState.isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formState.password}
                onChange={(e) => handleChange('password', e.target.value)}
                required
                disabled={formState.isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? 'Logging in...' : 'Login as Admin'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}