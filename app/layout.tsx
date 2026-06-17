import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  // 1. Base URL config for absolute links (OG Images, Favicons, canonicals)
  metadataBase: new URL('https://ffcvm.com'),

  title: 'FFCVM – FFC Virtual Mortgages | The Future of Home Financing',
  description:
    'FFC Virtual Mortgages (FFCVM) is a next-generation digital mortgage platform. Leverage your FFC digital assets toward real estate ownership. Fast. Secure. Digital. Global.',
  keywords: 'FFC Virtual Mortgages, FFCVM, crypto mortgage, digital assets, real estate financing, blockchain mortgage',
  
  // 2. Favicon and Icons config
  icons: {
    icon: '/favicon.ico',               // Standard classic fallback
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',     // For iOS home screen bookmarking (optional)
  },

  // 3. OpenGraph (Facebook, LinkedIn, Discord, and WhatsApp/Telegram preview)
  openGraph: {
    title: 'FFCVM – FFC Virtual Mortgages',
    description: 'Own Real Estate. Keep Your Crypto. Virtual Mortgages Backed by FFC Digital Assets.',
    siteName: 'FFCVM.com',
    url: 'https://ffcvm.com',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',           // Primary image for FB/LinkedIn (1200x630)
        width: 1200,
        height: 630,
        alt: 'FFC Virtual Mortgages Platform Preview',
        type: 'image/png',
      },
      {
        url: '/og-image.png',   // WhatsApp optimized fallback (JPEG, under 300KB)
        width: 400,
        height: 400,
        alt: 'FFCVM Logo Preview',
        type: 'image/jpeg',
      }
    ],
  },

  // 4. Twitter Card Preview config
  twitter: {
    card: 'summary_large_image',
    title: 'FFCVM – FFC Virtual Mortgages',
    description: 'Own Real Estate. Keep Your Crypto. Virtual Mortgages Backed by FFC Digital Assets.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}