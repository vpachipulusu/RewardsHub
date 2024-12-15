// Feature flags and configuration
export const FEATURES = {
  AUTH: {
    ENABLED: true,
    PROVIDERS: ['email', 'google', 'github'],
    REQUIRE_EMAIL_VERIFICATION: false,
  },
  RETAILERS: {
    MAX_FEATURED: 6,
    CACHE_TTL: 3600, // 1 hour
  },
  DEALS: {
    MAX_FEATURED: 4,
    AUTO_EXPIRE: true,
  },
  CASHBACK: {
    MIN_WITHDRAWAL: 10,
    MAX_WITHDRAWAL: 1000,
    PROCESSING_DAYS: 3,
  },
} as const;