'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface RetailerSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function RetailerSearch({ value, onChange }: RetailerSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search retailers..."
        className="pl-8"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}