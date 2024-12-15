'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { useDebounce } from './use-debounce';
import { Retailer } from '@/lib/types';
import { useSearchParams, useRouter } from 'next/navigation';

interface RetailerFilters {
  search: string;
  categories: string[];
  minCashback: number;
  maxCashback: number;
}

const initialFilters: RetailerFilters = {
  search: '',
  categories: [],
  minCashback: 0,
  maxCashback: 100,
};

export function useRetailerFilters(retailers: Retailer[]) {
  const [filters, setFilters] = useState<RetailerFilters>(initialFilters);
  const debouncedSearch = useDebounce(filters.search, 300);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({
        ...prev,
        categories: [category],
      }));
    }
  }, [searchParams]);

  const updateFilter = useCallback(<K extends keyof RetailerFilters>(
    key: K,
    value: RetailerFilters[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];

      // Update URL when categories change
      const url = new URL(window.location.href);
      if (newCategories.length > 0) {
        url.searchParams.set('category', newCategories[0]);
      } else {
        url.searchParams.delete('category');
      }
      router.push(url.pathname + url.search);

      return {
        ...prev,
        categories: newCategories,
      };
    });
  }, [router]);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
    // Clear URL params
    router.push(window.location.pathname);
  }, [router]);

  const filteredRetailers = useMemo(() => {
    return retailers.filter(retailer => {
      // Search filter
      if (debouncedSearch) {
        const searchTerm = debouncedSearch.toLowerCase();
        const matchesSearch = 
          retailer.name.toLowerCase().includes(searchTerm) ||
          retailer.description.toLowerCase().includes(searchTerm) ||
          retailer.categories.some(cat => cat.toLowerCase().includes(searchTerm));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0) {
        const hasCategory = retailer.categories.some(category =>
          filters.categories.includes(category)
        );
        if (!hasCategory) return false;
      }

      // Cashback range filter
      if (
        retailer.cashback < filters.minCashback ||
        retailer.cashback > filters.maxCashback
      ) {
        return false;
      }

      return true;
    });
  }, [retailers, debouncedSearch, filters]);

  return {
    filters,
    updateFilter,
    toggleCategory,
    resetFilters,
    filteredRetailers,
  };
}