import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const doc = (path: string, priority: number) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority,
  });
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    doc('/index.md', 0.6),
    doc('/llms.txt', 0.5),
    doc('/legal/kebijakan-privasi.md', 0.3),
    doc('/legal/syarat-ketentuan.md', 0.3),
    doc('/legal/keamanan-data.md', 0.3),
  ];
}
