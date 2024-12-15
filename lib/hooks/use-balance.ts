'use client';

import { useState, useCallback } from 'react';
import { useToastError } from './use-toast-error';
import { STORAGE_KEYS } from '@/lib/config/constants';
import { useLocalStorage } from './use-storage';
import { Balance } from '@/lib/types/balance';
import { BalanceService } from '@/lib/services/balance-service';

const initialBalance: Balance = {
  available: 125.50,
  pending: 45.75,
};

export function useBalance() {
  const [balance, setBalance] = useLocalStorage<Balance>(
    STORAGE_KEYS.BALANCE,
    initialBalance
  );
  const showError = useToastError();
  const balanceService = new BalanceService();

  const withdraw = useCallback(async (amount: number): Promise<Balance> => {
    try {
      const newBalance = await balanceService.withdraw(amount);
      setBalance(newBalance);
      return newBalance;
    } catch (error) {
      showError(error);
      throw error;
    }
  }, [balanceService, setBalance, showError]);

  const addPending = useCallback(async (amount: number): Promise<Balance> => {
    try {
      const newBalance = await balanceService.addPending(amount);
      setBalance(newBalance);
      return newBalance;
    } catch (error) {
      showError(error);
      throw error;
    }
  }, [balanceService, setBalance, showError]);

  const confirmPending = useCallback(async (amount: number): Promise<Balance> => {
    try {
      const newBalance = await balanceService.confirmPending(amount);
      setBalance(newBalance);
      return newBalance;
    } catch (error) {
      showError(error);
      throw error;
    }
  }, [balanceService, setBalance, showError]);

  return {
    ...balance,
    withdraw,
    addPending,
    confirmPending,
  };
}