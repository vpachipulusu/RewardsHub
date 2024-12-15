'use client';

import { useEffect, useState } from 'react';
import { RetailerGrid } from '@/components/retailers/retailer-grid';
import { RetailerSearch } from '@/components/retailers/retailer-search';
import { RetailerFilters } from '@/components/retailers/retailer-filters';
import { useRetailerFilters } from '@/lib/hooks/use-retailer-filters';
import { PageHeader } from '@/components/shared/page-header';
import { RetailerService } from '@/lib/services/retailer-service';
import { useToastError } from '@/lib/hooks/use-toast-error';
import { Retailer } from '@/lib/types';

export default function RetailersPage() {
  const [retailers, setRetailers] = useState<Retailer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const showError = useToastError();
  const retailerService = new RetailerService();

  const {
    filters,
    updateFilter,
    toggleCategory,
    filteredRetailers,
  } = useRetailerFilters(retailers);

  useEffect(() => {
    async function loadRetailers() {
      try {
        const data = await retailerService.getRetailers();
        setRetailers(data);
      } catch (error) {
        showError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadRetailers();
  }, []);

  const handleReset = () => {
    updateFilter('search', '');
    updateFilter('categories', []);
    updateFilter('minCashback', 0);
    updateFilter('maxCashback', 100);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <PageHeader
          title="Featured Retailers"
          description="Discover amazing cashback offers from your favorite brands"
        />
        
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-64 space-y-6">
            <RetailerSearch
              value={filters.search}
              onChange={(value) => updateFilter('search', value)}
            />
            <RetailerFilters
              selectedCategories={filters.categories}
              onCategoryChange={toggleCategory}
              cashbackRange={[filters.minCashback, filters.maxCashback]}
              onCashbackChange={(values) => {
                updateFilter('minCashback', values[0]);
                updateFilter('maxCashback', values[1]);
              }}
              onReset={handleReset}
            />
          </aside>
          
          <main className="flex-1">
            <RetailerGrid 
              retailers={filteredRetailers} 
              isLoading={isLoading}
            />
          </main>
        </div>
      </div>
    </div>
  );
}