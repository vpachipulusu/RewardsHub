import { z } from 'zod';
const MIN_PASSWORD_LENGTH = 8; // Define the constant directly if it is not available in the module

export const emailSchema = z.string().email('Invalid email address');

export const passwordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z
    .string()
    .min(MIN_PASSWORD_LENGTH, `Password must be at least ${MIN_PASSWORD_LENGTH} characters`),
  confirmPassword: z.string().min(1, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const authSchema = z.object({
  email: emailSchema,
  password: z.string().min(MIN_PASSWORD_LENGTH, `Password must be at least ${MIN_PASSWORD_LENGTH} characters`),
});

export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: emailSchema,
  bio: z.string().optional(),
});

export const withdrawalSchema = z.object({
  amount: z.number()
    .min(10, 'Minimum withdrawal amount is $10')
    .max(1000, 'Maximum withdrawal amount is $1,000'),
  paymentMethod: z.enum(['paypal', 'bank']),
});

export type AuthSchema = z.infer<typeof authSchema>;
export type ProfileSchema = z.infer<typeof profileSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;
export type WithdrawalSchema = z.infer<typeof withdrawalSchema>;