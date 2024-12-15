'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { dealTypes } from '@/lib/deals';

export function DealFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="font-medium">Deal Type</div>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Deals</Label>
            </div>
            {dealTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <RadioGroupItem value={type} id={type} />
                <Label htmlFor={type} className="capitalize">
                  {type}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <div className="font-medium">Other Filters</div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="expiring" />
              <label
                htmlFor="expiring"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Expiring Soon
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="featured" />
              <label
                htmlFor="featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Featured Deals
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="no-minimum" />
              <label
                htmlFor="no-minimum"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                No Minimum Spend
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}