import { WithdrawForm } from '@/components/withdraw/withdraw-form';
import { Card } from '@/components/ui/card';

export default function WithdrawPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Withdraw Funds</h1>
      <div className="max-w-2xl mx-auto">
        <WithdrawForm />
      </div>
    </div>
  );
}