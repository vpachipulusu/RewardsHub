import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from '@/lib/config/constants';

export function middleware(request: NextRequest) {
  const authData = request.cookies.get('authData')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith(ROUTES.LOGIN) || 
                     request.nextUrl.pathname.startsWith(ROUTES.SIGNUP);

  // If user is logged in and tries to access auth pages, redirect to dashboard
  if (authData && isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.USER.DASHBOARD, request.url));
  }

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const userData = authData ? JSON.parse(authData) : null;
    if (!userData || userData.role !== 'admin') {
      return NextResponse.redirect(new URL(ROUTES.ADMIN.LOGIN, request.url));
    }
  }

  // Protect user routes
  if (
    request.nextUrl.pathname.startsWith(ROUTES.USER.DASHBOARD) ||
    request.nextUrl.pathname.startsWith(ROUTES.USER.PROFILE) ||
    request.nextUrl.pathname.startsWith(ROUTES.USER.WITHDRAW)
  ) {
    if (!authData) {
      return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/profile/:path*',
    '/withdraw/:path*',
    '/login',
    '/signup',
  ],
};