import { DealGrid } from '@/components/deals/deal-grid';
import { DealFilters } from '@/components/deals/deal-filters';

export default function DealsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Hot Deals</h1>
          <p className="text-muted-foreground">
            Limited-time offers and exclusive discounts from top retailers
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="w-full lg:w-64">
            <DealFilters />
          </aside>
          
          <main className="flex-1">
            <DealGrid />
          </main>
        </div>
      </div>
    </div>
  );
}