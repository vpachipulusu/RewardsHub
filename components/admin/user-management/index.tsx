'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { getUsers } from '@/lib/admin';
import { UserTable } from './user-table';
import { UserFilters } from './user-filters';
import { useToast } from '@/components/ui/use-toast';

export function UserManagement() {
  const { toast } = useToast();
  const users = getUsers();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteUser = async (userId: string) => {
    try {
      // TODO: Implement API call to delete user
      toast({
        title: 'Success',
        description: 'User deleted successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete user',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <UserFilters onSearch={setSearchQuery} />
          <UserTable users={filteredUsers} onDeleteUser={handleDeleteUser} />
        </div>
      </Card>
    </div>
  );
}