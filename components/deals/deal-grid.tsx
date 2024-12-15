'use client';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { deals } from '@/lib/deals';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ExternalLink, Percent } from 'lucide-react';

export function DealGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {deals.map((deal) => (
        <Card key={deal.id} className="flex flex-col">
          <CardHeader className="space-y-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-lg">{deal.retailer}</div>
                <div className="text-sm text-muted-foreground">{deal.title}</div>
              </div>
              <Badge variant="destructive" className="shrink-0">
                {deal.type === 'discount' ? `${deal.value}% OFF` : `${deal.value}% Extra Cashback`}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm">{deal.description}</p>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              <span>Expires {new Date(deal.expiresAt).toLocaleDateString()}</span>
            </div>
            {deal.minimumSpend && (
              <div className="mt-2 flex items-center text-sm text-muted-foreground">
                <Percent className="mr-2 h-4 w-4" />
                <span>Min. spend ${deal.minimumSpend}</span>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href={deal.url} target="_blank" rel="noopener noreferrer">
                Shop Now <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}