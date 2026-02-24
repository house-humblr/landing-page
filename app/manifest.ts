import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zcomments — Comments on Zillow Listings',
    short_name: 'Zcomments',
    description:
      'Leave comments and see what people are saying about the real estate market. Zcomments adds a comment section to every Zillow listing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0b0f',
    theme_color: '#4c9aff',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
