export enum Section {
  HERO = 'hero',
  OVERVIEW = 'overview',
  RETAIL = 'retail',
  LUXURY = 'luxury',
  DINING = 'dining',
  ATTRACTIONS = 'attractions',
  EVENTS = 'events',
  DATA = 'data'
}

export interface NavigationItem {
  id: Section;
  label: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface Brand {
  name: string;
  category: string;
}

export interface Attraction {
  title: string;
  description: string;
}

export interface PlatformEvent {
  title: string;
  venue: string;
  icon: string;
}
