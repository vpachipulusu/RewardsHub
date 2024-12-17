'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Retailer } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useScrollLock } from '@/lib/hooks/use-scroll-lock';

interface RetailerDialogProps {
  retailer: Retailer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RetailerDialog({ retailer, open, onOpenChange }: RetailerDialogProps) {
  useScrollLock(open);

  if (!retailer) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{retailer.name}</DialogTitle>
          <DialogDescription>
            Cashback Rate: <span className="font-semibold">{retailer.cashback}%</span>
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 pr-4">
            <div>
              <h4 className="font-medium mb-2">About</h4>
              <p className="text-sm text-muted-foreground">{retailer.description}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="flex flex-wrap gap-2">
                {retailer.categories.map((category) => (
                  <Badge key={category} variant="outline">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Terms & Conditions</h4>
              <div className="text-sm text-muted-foreground space-y-4">
                <div>
                  <p className="font-medium mb-2">Cashback Eligibility</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Cashback is calculated on the net purchase amount (excluding taxes and shipping)</li>
                    <li>Purchases must be made through our tracked links</li>
                    <li>Your browser must accept cookies for tracking</li>
                    <li>Payment must be made in full at the time of purchase</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-2">Exclusions</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Gift card purchases</li>
                    <li>Promotional codes not listed on our platform</li>
                    <li>Items returned or refunded</li>
                    <li>Bulk purchases</li>
                    <li>Business or commercial transactions</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-2">Processing & Payment</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Cashback tracking may take up to 48 hours to appear</li>
                    <li>Cashback becomes payable after the retailer&apos;s return period (30-60 days)</li>
                    <li>Minimum withdrawal amount applies</li>
                    <li>Payment processing takes 3-5 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-end pt-4">
          <Button asChild>
            <a 
              href={retailer.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Shop Now <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}