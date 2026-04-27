import { Section, NavigationItem } from '../types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: Section.HERO, label: '00. The Vision', description: 'The Future of Destination' },
  { id: Section.OVERVIEW, label: '01. Scale', description: 'Impact & Demographics' },
  { id: Section.RETAIL, label: '02. Retail', description: 'Limitless Synergy' },
  { id: Section.LUXURY, label: '03. The Avenue', description: 'Luxury Redefined' },
  { id: Section.DINING, label: '04. Lifestyle', description: 'Global Flavors' },
  { id: Section.ATTRACTIONS, label: '05. Entertainment', description: 'World-Class Brands' },
  { id: Section.EVENTS, label: '06. Platform', description: 'Global Reach' },
  { id: Section.DATA, label: '07. Invest', description: 'Leasing & Partnership' }
];

export const DECK_CONTENT = {
  hero: {
    title: 'American Dream',
    subtitle: 'Documenting the Future // 001',
    description: 'A high-velocity destination platform where culture, commerce, and curiosity converge.'
  },
  // Add other section content here for easy CMS injection
};
