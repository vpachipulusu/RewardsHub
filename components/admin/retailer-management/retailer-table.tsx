'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatDate, formatCurrency } from '@/lib/utils';
import { AdminRetailer } from '@/lib/types';
import { Edit2, Trash2, Eye } from 'lucide-react';
import { RetailerDetailsDialog } from './retailer-details-dialog';

interface RetailerTableProps {
  retailers: AdminRetailer[];
  onDeleteRetailer: (retailerId: string) => void;
}

export function RetailerTable({ retailers, onDeleteRetailer }: RetailerTableProps) {
  const [selectedRetailer, setSelectedRetailer] = useState<AdminRetailer | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'default';
      case 'pending':
        return 'warning';
      case 'inactive':
        return 'secondary';
      default:
        return 'default';
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Cashback</TableHead>
            <TableHead>Total Payout</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {retailers.map((retailer) => (
            <TableRow key={retailer.id}>
              <TableCell className="font-medium">{retailer.name}</TableCell>
              <TableCell>
                <Badge variant={getStatusColor(retailer.status)}>
                  {retailer.status}
                </Badge>
              </TableCell>
              <TableCell>{retailer.categories.join(', ')}</TableCell>
              <TableCell>{retailer.cashback}%</TableCell>
              <TableCell>{formatCurrency(retailer.totalPayout)}</TableCell>
              <TableCell>{formatDate(retailer.joinDate)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedRetailer(retailer)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDeleteRetailer(retailer.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <RetailerDetailsDialog
        retailer={selectedRetailer}
        open={!!selectedRetailer}
        onOpenChange={(open) => !open && setSelectedRetailer(null)}
      />
    </>
  );
}