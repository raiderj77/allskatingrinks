import type { MetadataRoute } from 'next';
import locations from '@/data/locations.json';

const BASE_URL = 'https://allskatingrinks.com';

const STATIC_PATHS = ['', '/about', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path, index) => ({
    url: `${BASE_URL}${path}`,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : 0.7,
  }));

  const stateSlugs = [...new Set(locations.map((l) => l.stateSlug))].sort();
  const stateEntries: MetadataRoute.Sitemap = stateSlugs.map((stateSlug) => ({
    url: `${BASE_URL}/${stateSlug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const venueEntries: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${BASE_URL}/${l.stateSlug}/${l.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...stateEntries, ...venueEntries];
}
