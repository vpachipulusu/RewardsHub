export interface Balance {
  available: number;
  pending: number;
}

export interface WithdrawalRequest {
  amount: number;
  paymentMethod: PaymentMethod;
}

export type PaymentMethod = 'paypal' | 'bank';

export interface PaymentDetails {
  paymentMethod: PaymentMethod;
  paypalEmail?: string;
  bankAccount?: {
    accountName: string;
    accountNumber: string;
    routingNumber: string;
  };
}