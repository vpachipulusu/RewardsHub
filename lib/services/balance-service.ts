import { ApiService } from './api-service';
import { Balance } from '@/lib/types/balance';
import { ValidationError } from '@/lib/utils/errors';
import { FEATURES } from '@/lib/config/features';

export class BalanceService extends ApiService {
  private validateAmount(amount: number, available: number): void {
    if (amount <= 0) {
      throw new ValidationError('Amount must be greater than 0');
    }
    if (amount < FEATURES.CASHBACK.MIN_WITHDRAWAL) {
      throw new ValidationError(
        `Minimum withdrawal amount is $${FEATURES.CASHBACK.MIN_WITHDRAWAL}`
      );
    }
    if (amount > FEATURES.CASHBACK.MAX_WITHDRAWAL) {
      throw new ValidationError(
        `Maximum withdrawal amount is $${FEATURES.CASHBACK.MAX_WITHDRAWAL}`
      );
    }
    if (amount > available) {
      throw new ValidationError('Insufficient funds');
    }
  }

  async getBalance(): Promise<Balance> {
    // TODO: Replace with actual API call
    return {
      available: 125.50,
      pending: 45.75,
    };
  }

  async withdraw(amount: number): Promise<Balance> {
    const currentBalance = await this.getBalance();
    this.validateAmount(amount, currentBalance.available);

    // TODO: Replace with actual API call
    return {
      ...currentBalance,
      available: currentBalance.available - amount,
    };
  }

  async addPending(amount: number): Promise<Balance> {
    if (amount <= 0) {
      throw new ValidationError('Amount must be greater than 0');
    }

    const currentBalance = await this.getBalance();
    
    // TODO: Replace with actual API call
    return {
      ...currentBalance,
      pending: currentBalance.pending + amount,
    };
  }

  async confirmPending(amount: number): Promise<Balance> {
    const currentBalance = await this.getBalance();
    
    if (amount <= 0) {
      throw new ValidationError('Amount must be greater than 0');
    }
    if (amount > currentBalance.pending) {
      throw new ValidationError('Invalid pending amount');
    }

    // TODO: Replace with actual API call
    return {
      available: currentBalance.available + amount,
      pending: currentBalance.pending - amount,
    };
  }
}