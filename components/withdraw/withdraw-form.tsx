'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { formatCurrency } from '@/lib/utils';
import { useForm } from '@/lib/hooks/use-form';
import { withdrawalSchema, type WithdrawalSchema } from '@/lib/utils/validation';
import { FEATURES } from '@/lib/config/features';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/config/routes';
import { useBalance } from '@/lib/hooks/use-balance';
import { ERRORS } from '@/lib/config/constants';

export function WithdrawForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { available: availableBalance, withdraw } = useBalance();

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm<WithdrawalSchema>(
    {
      amount: 0,
      paymentMethod: 'paypal',
    },
    {
      schema: withdrawalSchema,
      onSubmit: async (data) => {
        try {
          if (data.amount > availableBalance) {
            throw new Error(ERRORS.WITHDRAWAL.INSUFFICIENT_FUNDS);
          }

          // Process withdrawal
          withdraw(data.amount);
          
          toast({
            title: 'Withdrawal Initiated',
            description: `Your withdrawal of ${formatCurrency(data.amount)} has been initiated.`,
          });
          
          router.push(ROUTES.USER.DASHBOARD);
        } catch (error) {
          toast({
            title: 'Error',
            description: error instanceof Error ? error.message : 'Failed to process withdrawal',
            variant: 'destructive',
          });
        }
      },
    }
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Withdraw to Saved Payment Method</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-2.5">$</span>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={values.amount || ''}
                onChange={(e) => handleChange('amount', Number(e.target.value))}
                className="pl-8"
                step="0.01"
                min={FEATURES.CASHBACK.MIN_WITHDRAWAL}
                max={Math.min(FEATURES.CASHBACK.MAX_WITHDRAWAL, availableBalance)}
                required
              />
            </div>
            {errors.amount && (
              <p className="text-sm text-destructive">{errors.amount}</p>
            )}
            <p className="text-sm text-muted-foreground">
              Available balance: {formatCurrency(availableBalance)}
            </p>
            <p className="text-sm text-muted-foreground">
              Min: {formatCurrency(FEATURES.CASHBACK.MIN_WITHDRAWAL)} | Max: {formatCurrency(FEATURES.CASHBACK.MAX_WITHDRAWAL)}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Withdrawals are processed within {FEATURES.CASHBACK.PROCESSING_DAYS} business days.
              You will receive an email confirmation once the withdrawal is complete.
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting || !values.amount || values.amount > availableBalance}
          >
            {isSubmitting ? 'Processing...' : 'Withdraw Funds'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}