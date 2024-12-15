'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

interface UserFiltersProps {
  onSearch: (query: string) => void;
}

export function UserFilters({ onSearch }: UserFiltersProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          className="pl-9"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Button variant="outline">
        <Filter className="mr-2 h-4 w-4" />
        Filters
      </Button>
    </div>
  );
}