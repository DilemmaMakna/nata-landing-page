import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nataku',
    short_name: 'Nataku',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFAF7',
    theme_color: '#F0441E',
    lang: 'id',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
