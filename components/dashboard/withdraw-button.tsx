'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/lib/config/routes';
import { FEATURES } from '@/lib/config/features';
import { formatCurrency } from '@/lib/utils/format';

interface WithdrawButtonProps {
  availableBalance: number;
}

export function WithdrawButton({ availableBalance }: WithdrawButtonProps) {
  const router = useRouter();
  const minAmount = FEATURES.CASHBACK.MIN_WITHDRAWAL;
  const isDisabled = availableBalance < minAmount;

  return (
    <Button
      onClick={() => router.push(ROUTES.USER.WITHDRAW)}
      disabled={isDisabled}
    >
      {isDisabled 
        ? `Min. ${formatCurrency(minAmount)} required`
        : 'Withdraw Funds'
      }
    </Button>
  );
}