import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type AuthSchema = z.infer<typeof authSchema>;

// TODO: Implement actual authentication logic
export async function signIn(credentials: AuthSchema): Promise<void> {
  // Implement sign in logic
}

export async function signUp(credentials: AuthSchema): Promise<void> {
  // Implement sign up logic
}

export async function signOut(): Promise<void> {
  // Implement sign out logic
}