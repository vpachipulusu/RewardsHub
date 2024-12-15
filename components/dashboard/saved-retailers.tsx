'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getSavedRetailers } from '@/lib/retailers';
import { ExternalLink } from 'lucide-react';

export function SavedRetailers() {
  const retailers = getSavedRetailers();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved Retailers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {retailers.map((retailer) => (
            <div
              key={retailer.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="space-y-1">
                <p className="font-medium">{retailer.name}</p>
                <p className="text-sm text-muted-foreground">
                  {retailer.cashback}% cashback
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={retailer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Shop <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}