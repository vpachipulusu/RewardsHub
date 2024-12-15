// Analytics utility functions
interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
}

export const trackEvent = (event: AnalyticsEvent): void => {
  if (typeof window === 'undefined') return;

  try {
    // Add analytics implementation here
    console.log('Analytics event:', event);
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

export const trackPageView = (path: string): void => {
  trackEvent({
    name: 'page_view',
    properties: { path },
  });
};

export const trackError = (error: Error): void => {
  trackEvent({
    name: 'error',
    properties: {
      message: error.message,
      stack: error.stack,
    },
  });
};