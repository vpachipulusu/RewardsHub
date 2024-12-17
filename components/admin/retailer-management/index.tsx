'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { RetailerTable } from './retailer-table';
import { RetailerFilters } from './retailer-filters';
import { RetailerDetailsDialog } from './retailer-details-dialog';
import { useToast } from '@/components/ui/use-toast';

import { AdminRetailer } from '@/lib/types';


// Mock data - replace with actual API call
const mockRetailers: AdminRetailer[] = [
  {
    id: '1',
    name: 'TechGear',
    description: 'Latest electronics and gadgets',
    cashback: 5,
    categories: ['Electronics'],
    url: 'https://example.com/techgear',
    status: 'active',
    termsAndConditions: 'Standard terms apply',
    joinDate: '2024-01-15',
    totalPayout: 25000,
  },
  // Add more mock retailers...
];

// Example usage
const retailer: AdminRetailer = {
  id: '1',
  name: 'Retailer Name',
  cashback: 10,
  description: 'Latest electronics and gadgets',
  categories: ['Electronics'],
  url: 'https://example.com/retailer',
  status: 'active',
  termsAndConditions: 'Standard terms apply',
  joinDate: '2024-01-15',
  totalPayout: 25000,
};

export function RetailerManagement() {
  const { toast } = useToast();
  const [retailers] = useState<AdminRetailer[]>(mockRetailers);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);

  const filteredRetailers = retailers.filter((retailer) =>
    retailer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteRetailer = async (retailerId: string) => {
    try {
      // TODO: Implement API call to delete retailer
      toast({
        title: 'Success',
        description: 'Retailer deleted successfully',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete retailer',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Retailer Management</h1>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <RetailerFilters
            onSearch={setSearchQuery}
            onAddNew={() => setShowAddDialog(true)}
          />
          <RetailerTable
            retailers={filteredRetailers}
            onDeleteRetailer={handleDeleteRetailer}
          />
        </div>
      </Card>

      <RetailerDetailsDialog
        retailer={null}
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
      />
    </div>
  );
}