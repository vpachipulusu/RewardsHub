'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { categories } from '@/lib/retailers';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface RetailerFiltersProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  cashbackRange: [number, number];
  onCashbackChange: (values: [number, number]) => void;
  onReset: () => void;
}

export function RetailerFilters({
  selectedCategories,
  onCategoryChange,
  cashbackRange,
  onCashbackChange,
  onReset,
}: RetailerFiltersProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Filters</CardTitle>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onReset}
          className="h-8 px-2"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="font-medium">Cashback Range</div>
          <Slider
            value={[cashbackRange[0], cashbackRange[1]]}
            onValueChange={(values) => onCashbackChange(values as [number, number])}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{cashbackRange[0]}%</span>
            <span>{cashbackRange[1]}%</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="font-medium">Categories</div>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => onCategoryChange(category)}
                />
                <label
                  htmlFor={category}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}