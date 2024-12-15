import { cookies } from 'next/headers';
import { 
  AUTH_COOKIE_NAME, 
  USER_ROLE_COOKIE, 
  USER_EMAIL_COOKIE, 
  USER_NAME_COOKIE 
} from '@/lib/config/constants';

export const setAuthCookies = (
  token: string,
  role: string,
  email: string,
  name: string
) => {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  };

  cookies().set(AUTH_COOKIE_NAME, token, cookieOptions);
  cookies().set(USER_ROLE_COOKIE, role, cookieOptions);
  cookies().set(USER_EMAIL_COOKIE, email, cookieOptions);
  cookies().set(USER_NAME_COOKIE, name, cookieOptions);
};

export const clearAuthCookies = () => {
  cookies().delete(AUTH_COOKIE_NAME);
  cookies().delete(USER_ROLE_COOKIE);
  cookies().delete(USER_EMAIL_COOKIE);
  cookies().delete(USER_NAME_COOKIE);
};

export const getAuthCookies = () => {
  return {
    token: cookies().get(AUTH_COOKIE_NAME)?.value,
    role: cookies().get(USER_ROLE_COOKIE)?.value,
    email: cookies().get(USER_EMAIL_COOKIE)?.value,
    name: cookies().get(USER_NAME_COOKIE)?.value,
  };
};