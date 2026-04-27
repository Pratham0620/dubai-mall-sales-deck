import { Section, NavigationItem } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: Section.HERO, label: '00. The Vision', shortLabel: 'The Vision', description: 'The Future of Destination' },
  { id: Section.OVERVIEW, label: '01. Scale', shortLabel: 'Scale', description: 'Impact & Demographics' },
  { id: Section.RETAIL, label: '02. Retail', shortLabel: 'Retail', description: 'Massive Scale' },
  { id: Section.LUXURY, label: '03. Fashion Avenue', shortLabel: 'Fashion Avenue', description: 'World Luxury Hub' },
  { id: Section.DINING, label: '04. Culinary', shortLabel: 'Culinary', description: 'Global Lifestyle' },
  { id: Section.ATTRACTIONS, label: '05. Attractions', shortLabel: 'Attractions', description: 'Iconic Landmarks' },
  { id: Section.EVENTS, label: '06. Platform', shortLabel: 'Platform', description: 'Grand Stage' },
  { id: Section.DATA, label: '07. Invest', shortLabel: 'Invest', description: 'Future Growth' }
];

export const DECK_CONTENT = {
  hero: {
    title: 'The Dubai Mall',
    subtitle: 'The Center of Now // 001',
    description: 'The world\'s most visited retail and entertainment destination, redefined for the modern era.'
  },
};
