import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, ShoppingBag, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 space-y-6">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Earn Rewards on Every Purchase
        </h1>
        <p className="text-xl text-muted-foreground max-w-[750px] mx-auto">
          Join thousands of smart shoppers earning cashback and rewards from their favorite retailers.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/retailers">Browse Retailers</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <ShoppingBag className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Shop & Earn</h3>
                <p className="text-muted-foreground">
                  Shop at your favorite stores and automatically earn cashback on every purchase.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <TrendingUp className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Track Earnings</h3>
                <p className="text-muted-foreground">
                  Monitor your cashback and rewards in real-time through your personalized dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Gift className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-semibold">Get Paid</h3>
                <p className="text-muted-foreground">
                  Cash out your earnings via PayPal or bank transfer once you reach the minimum threshold.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}