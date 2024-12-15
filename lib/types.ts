export type PaymentMethod = 'paypal' | 'bank';

export interface User {
  id: string;
  email: string;
  name: string;
  paymentMethod?: PaymentMethod;
  paypalEmail?: string;
  bankAccount?: {
    accountName: string;
    accountNumber: string;
    routingNumber: string;
  };
}

export interface AdminRetailer extends Retailer {
  status: 'active' | 'pending' | 'inactive';
  termsAndConditions: string;
  joinDate: string;
  totalPayout: number;
}