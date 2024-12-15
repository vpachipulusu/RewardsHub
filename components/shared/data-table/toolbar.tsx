'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

interface DataTableToolbarProps {
  searchable?: boolean;
  filterable?: boolean;
}

export function DataTableToolbar({
  searchable = true,
  filterable = true,
}: DataTableToolbarProps) {
  return (
    <div className="flex items-center justify-between">
      {searchable && (
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
        </div>
      )}
      
      {filterable && (
        <Button variant="outline" size="sm" className="ml-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      )}
    </div>
  );
}