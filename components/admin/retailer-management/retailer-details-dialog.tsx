'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AdminRetailer } from '@/lib/types';
import { useToast } from '@/components/ui/use-toast';
import { categories } from '@/lib/retailers';

interface RetailerDetailsDialogProps {
  retailer: AdminRetailer | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RetailerDetailsDialog({
  retailer,
  open,
  onOpenChange,
}: RetailerDetailsDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<AdminRetailer>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement API call to update retailer
      toast({
        title: 'Success',
        description: 'Retailer details updated successfully',
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update retailer details',
        variant: 'destructive',
      });
    }
  };

  if (!retailer) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Retailer Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                defaultValue={retailer.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cashback">Cashback Percentage</Label>
              <Input
                id="cashback"
                type="number"
                defaultValue={retailer.cashback}
                onChange={(e) => setFormData({ ...formData, cashback: Number(e.target.value) })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="categories">Categories</Label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={retailer.categories.includes(category)}
                    onChange={(e) => {
                      const currentCategories = formData.categories || retailer.categories;
                      setFormData({
                        ...formData,
                        categories: e.target.checked
                          ? [...currentCategories, category]
                          : currentCategories.filter((c) => c !== category),
                      });
                    }}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="terms">Terms and Conditions</Label>
            <Textarea
              id="terms"
              defaultValue={retailer.termsAndConditions}
              onChange={(e) => setFormData({ ...formData, termsAndConditions: e.target.value })}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              defaultValue={retailer.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as AdminRetailer['status'] })}
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}