'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/lib/auth-context';

export function ProfileHeader() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Card>
      <CardContent className="flex items-center space-x-4 py-6">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="text-lg">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.email}</p>
        </div>
      </CardContent>
    </Card>
  );
}