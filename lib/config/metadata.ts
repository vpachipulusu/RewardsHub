import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'RewardHub - Earn Cashback & Rewards',
  description: 'Discover amazing cashback offers and discounts from your favorite retailers',
  keywords: ['cashback', 'rewards', 'shopping', 'deals', 'discounts'],
  authors: [{ name: 'RewardHub Team' }],
  creator: 'RewardHub',
  publisher: 'RewardHub',
  robots: 'index, follow',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};