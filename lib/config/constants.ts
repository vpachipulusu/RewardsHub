// Application-wide constants
export const APP = {
  NAME: 'RewardHub',
  DESCRIPTION: 'Earn Cashback & Rewards',
} as const;

// Storage keys
export const STORAGE_KEYS = {
  AUTH: 'auth_data',
  BALANCE: 'user_balance',
  SETTINGS: 'user_settings',
  THEME: 'color-theme',
} as const;

// Error messages
export const ERRORS = {
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    UNAUTHORIZED: 'You are not authorized to access this resource',
    SESSION_EXPIRED: 'Your session has expired. Please login again',
  },
  WITHDRAWAL: {
    INSUFFICIENT_FUNDS: 'Insufficient funds for withdrawal',
    INVALID_AMOUNT: 'Invalid withdrawal amount',
    MINIMUM_AMOUNT: 'Minimum withdrawal amount is $10',
    MAXIMUM_AMOUNT: 'Maximum withdrawal amount is $1,000',
  },
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  USER:{
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  WITHDRAW: '/withdraw',
  DEALS: '/deals',
  RETAILERS: '/retailers'
  },
  ADMIN: {
    LOGIN: '/admin/login',
    DASHBOARD: '/admin',
    USERS: '/admin/users',
    RETAILERS: '/admin/retailers',
    REPORTS: '/admin/reports',
    SETTINGS: '/admin/settings'
  },
} as const;