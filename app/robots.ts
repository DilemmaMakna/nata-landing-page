import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Search and AI crawlers are welcome on the public pages; only the API is off limits.
const AI_CRAWLERS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot',
  'Bingbot', 'DuckDuckBot', 'Amazonbot', 'Bytespider', 'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/', disallow: '/api/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
