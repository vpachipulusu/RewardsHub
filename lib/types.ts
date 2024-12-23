import { Retailer } from "./retailers";

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
  role: 'user' | 'admin';
}

export interface AdminRetailer extends Retailer {
  status: 'active' | 'pending' | 'inactive';
  termsAndConditions: string;
  joinDate: string;
  totalPayout: number;
}

export type { Retailer };
