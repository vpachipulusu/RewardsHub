'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Retailer } from '@/lib/types';
import { EmptyState } from '@/components/shared/empty-state';
import { Store } from 'lucide-react';
import { RetailerDialog } from './retailer-dialog';
import { LoadingSpinner } from '@/components/shared/loading-spinner';

interface RetailerGridProps {
  retailers: Retailer[];
  isLoading?: boolean;
}

export function RetailerGrid({ retailers, isLoading = false }: RetailerGridProps) {
  const [selectedRetailer, setSelectedRetailer] = useState<Retailer | null>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (!retailers.length) {
    return (
      <EmptyState
        icon={Store}
        title="No retailers found"
        description="Try adjusting your filters or search terms"
      />
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {retailers.map((retailer) => (
          <RetailerCard
            key={retailer.id}
            retailer={retailer}
            onView={() => setSelectedRetailer(retailer)}
          />
        ))}
      </div>

      <RetailerDialog
        retailer={selectedRetailer}
        open={!!selectedRetailer}
        onOpenChange={(open) => !open && setSelectedRetailer(null)}
      />
    </>
  );
}

interface RetailerCardProps {
  retailer: Retailer;
  onView: () => void;
}

function RetailerCard({ retailer, onView }: RetailerCardProps) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">{retailer.name}</div>
          <Badge variant="secondary">{retailer.cashback}% Cashback</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{retailer.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {retailer.categories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant="outline"
          onClick={onView}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}