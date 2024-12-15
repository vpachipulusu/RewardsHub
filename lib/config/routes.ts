export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
  },
  USER: {
    DASHBOARD: '/dashboard',
    PROFILE: '/profile',
    WITHDRAW: '/withdraw',
    DEALS: '/deals',
    RETAILERS: '/retailers',
  },
  ADMIN: {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin',
    USERS: '/admin/users',
    RETAILERS: '/admin/retailers',
    REPORTS: '/admin/reports',
    SETTINGS: '/admin/settings',
  },
} as const;