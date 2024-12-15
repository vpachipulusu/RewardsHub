'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, Plus } from 'lucide-react';

interface RetailerFiltersProps {
  onSearch: (query: string) => void;
  onAddNew: () => void;
}

export function RetailerFilters({ onSearch, onAddNew }: RetailerFiltersProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search retailers..."
          className="pl-9"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Button variant="outline">
        <Filter className="mr-2 h-4 w-4" />
        Filters
      </Button>
      <Button onClick={onAddNew}>
        <Plus className="mr-2 h-4 w-4" />
        Add Retailer
      </Button>
    </div>
  );
}