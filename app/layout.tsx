import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, Instrument_Serif } from 'next/font/google';
import { MixpanelProvider } from '@/components/MixpanelProvider';
import './globals.css';

const GA_ID = 'G-RCXNQN4D4C';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://humblr.house'),

  title: {
    default: 'Zcomments — Comments on Zillow Listings | Real Estate Discussion',
    template: '%s | Zcomments',
  },

  description:
    'Zcomments adds a comment section to every Zillow listing. Discuss home prices, neighborhoods, and what people really think about properties. Free browser extension for Chrome and Safari.',

  keywords: [
    'Zillow comments',
    'Zillow discussion',
    'Zillow listing comments',
    'real estate comments',
    'real estate discussion',
    'home price discussion',
    'Zillow browser extension',
    'Zillow Chrome extension',
    'Zillow Safari extension',
    'real estate community',
    'property comments',
    'housing market opinions',
    'Zillow reviews',
    'neighborhood discussion',
    'Zcomments',
    'Zcomments extension',
  ],

  applicationName: 'Zcomments',
  authors: [{ name: 'Zcomments', url: 'https://humblr.house' }],
  creator: 'Zcomments',
  publisher: 'Zcomments',
  category: 'Real Estate',
  classification: 'Browser Extension',
  referrer: 'origin-when-cross-origin',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://humblr.house',
  },

  openGraph: {
    title: 'Zcomments — The Comment Section Zillow Is Missing',
    description:
      'Discuss home prices, neighborhoods, and what people really think about Zillow listings. Free browser extension for Chrome and Safari.',
    url: 'https://humblr.house',
    siteName: 'Zcomments',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zcomments — Comments on every Zillow listing. Download for Chrome and Safari.',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Zcomments — The Comment Section Zillow Is Missing',
    description:
      'Discuss home prices, neighborhoods, and what people really think about Zillow listings. Free for Chrome and Safari.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Zcomments — Comments on every Zillow listing',
      },
    ],
    creator: '@humblrhouse',
    site: '@humblrhouse',
  },

  other: {
    'apple-mobile-web-app-title': 'Zcomments',
    'msapplication-TileColor': '#0a0a0f',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/zLogo.png" />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} ${inter.className}`}>
        <MixpanelProvider>{children}</MixpanelProvider>
      </body>
    </html>
  );
}
