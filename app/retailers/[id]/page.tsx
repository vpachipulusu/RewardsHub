'use client';

import { useParams } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, ShoppingBag, AlertCircle, Clock } from 'lucide-react';
import { RetailerService } from '@/lib/services/retailer-service';
import { useEffect, useState } from 'react';
import { Retailer } from '@/lib/types';
import { LoadingSpinner } from '@/components/shared/loading-spinner';
import { formatCurrency } from '@/lib/utils';

export default function RetailerPage() {
  const params = useParams();
  const [retailer, setRetailer] = useState<Retailer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const retailerService = new RetailerService();

  useEffect(() => {
    async function loadRetailer() {
      try {
        const data = await retailerService.getRetailerById(params.id as string);
        setRetailer(data);
      } finally {
        setIsLoading(false);
      }
    }
    loadRetailer();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner size={32} />
      </div>
    );
  }

  if (!retailer) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Retailer not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">{retailer.name}</h1>
                <p className="text-muted-foreground mt-2">{retailer.description}</p>
              </div>
              <Badge variant="secondary" className="text-lg">
                {retailer.cashback}% Cashback
              </Badge>
            </div>
            <div className="flex flex-wrap gap-2">
              {retailer.categories.map((category) => (
                <Badge key={category} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="terms" className="space-y-4">
            <TabsList>
              <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
              <TabsTrigger value="tracking">Tracking Info</TabsTrigger>
              <TabsTrigger value="payment">Payment Details</TabsTrigger>
            </TabsList>

            <TabsContent value="terms" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cashback Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Eligible Purchases</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>All full-price items</li>
                      <li>Sale items (unless specified)</li>
                      <li>Regular shipping charges</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Exclusions</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Gift cards and e-gift cards</li>
                      <li>Taxes and additional fees</li>
                      <li>Items returned or refunded</li>
                      <li>Purchases made with coupon codes not listed on our site</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>How Tracking Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <ShoppingBag className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Click Through & Purchase</p>
                      <p className="text-muted-foreground">
                        Click our Shop Now button and complete your purchase in one session
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Tracking Time</p>
                      <p className="text-muted-foreground">
                        Transactions typically appear within 48 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 mt-0.5 text-primary" />
                    <div>
                      <p className="font-medium">Important Notes</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Enable cookies in your browser</li>
                        <li>Don't use other coupon sites or extensions</li>
                        <li>Complete purchase in one session</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Cashback Status</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Pending: After successful tracking (1-2 days)</li>
                      <li>Confirmed: After return period (30-60 days)</li>
                      <li>Payable: Available for withdrawal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Payment Methods</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>PayPal</li>
                      <li>Bank Transfer</li>
                      <li>Minimum withdrawal: {formatCurrency(10)}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">
                    {retailer.cashback}%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Cashback Rate
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a 
                    href={retailer.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Shop Now <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Clear your browser cookies before shopping</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Complete purchase in one session</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Don't use other cashback sites or extensions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary">•</span>
                  <span>Check terms for any excluded items</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}