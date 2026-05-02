const OPT = 'fm=webp&q=75&fit=crop&w=2560';

export const SECTION_MEDIA = {
  hero: {
    background: `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?${OPT}`,
    video: 'https://cdn.coverr.co/videos/coverr-dubai-at-night-5438/1080p.mp4',
  },
  overview: {
    background: `https://images.unsplash.com/photo-1546412414-8035e1776c9a?${OPT}`, // Scale / Aerial Dubai
    images: [
      `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=webp&q=70&w=1200`, // Square Feet
      `https://images.unsplash.com/photo-1518684079-3c830dcef090?fm=webp&q=70&w=1200`, // Annual Visitors
      `https://images.unsplash.com/photo-1519501025264-65ba15a82390?fm=webp&q=70&w=1200`, // Retail Stores
      `https://images.unsplash.com/photo-1559339352-11d035aa65de?fm=webp&q=70&w=1200`, // F&B Outlets
    ]
  },
  retail: {
    background: `https://images.unsplash.com/photo-1519501025264-65ba15a82390?${OPT}`, // Retail / Luxury Mall Interior
    images: [
      `https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=webp&q=70&w=1200`, // Global Dominance
      `https://images.unsplash.com/photo-1555529771-835f59fc5efe?fm=webp&q=70&w=1200`, // Market Velocity
      `https://images.unsplash.com/photo-1546412414-8035e1776c9a?fm=webp&q=70&w=1200`, // Economic Core
    ]
  },
  luxury: {
    background: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${OPT}`,
    brands: [
      `https://images.unsplash.com/photo-1548036328-c9fa89d128fa?fm=webp&q=70&w=1200`, // Hermès / Luxury Scents & Leather
      `` + `https://images.unsplash.com/photo-1584917865442-de89df76afd3?fm=webp&q=70&w=1200`, // Louis Vuitton / Iconic Accessories
      `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?fm=webp&q=70&w=1200`, // Cartier / High Jewelry
      `https://images.unsplash.com/photo-1524592094714-0f0654e20314?fm=webp&q=70&w=1200`, // Rolex / Precision Horology
    ]
  },
  dining: {
    background: `https://images.unsplash.com/photo-1559339352-11d035aa65de?${OPT}`,
    showcase: `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?fm=webp&q=70&w=1600`,
  },
  attractions: {
    background: `https://images.unsplash.com/photo-1518684079-3c830dcef090?${OPT}`,
    showcase: `https://images.unsplash.com/photo-1544526226-d4568090ffb8?fm=webp&q=70&w=1600`,
    gallery: [
      `https://images.unsplash.com/photo-1544526226-d4568090ffb8?fm=webp&q=70&w=1200`, // Dubai Aquarium
      `https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=webp&q=70&w=1200`, // Fountain View
      `https://images.unsplash.com/photo-1559339352-11d035aa65de?fm=webp&q=70&w=1200`, // Michelin Experience
      `https://images.unsplash.com/photo-1509232314974-ae3762886f40?fm=webp&q=70&w=1200`, // Aquarium Shark
      `https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?fm=webp&q=70&w=1200`, // Fashion Event
      `https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?fm=webp&q=70&w=1200`, // Night Fountain
      `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fm=webp&q=70&w=1200`, // Gourmet Dining
      `https://images.unsplash.com/photo-1514525253361-b83f85df0f5c?fm=webp&q=70&w=1200`, // Grand Event
    ]
  },
  events: {
    background: `https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?${OPT}`, // Platform / Concert Stage
    images: [
      `https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=webp&q=70&w=1200`, // Shopping Festival
      `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?fm=webp&q=70&w=1200`, // Fashion Week
      `https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fm=webp&q=70&w=1200`, // Brand takeovers
      `https://images.unsplash.com/photo-1518684079-3c830dcef090?fm=webp&q=70&w=1200`, // New Year Gala
    ]
  },
  data: {
    background: `https://images.unsplash.com/photo-1549643276-fdf2fab574f5?${OPT}`, // Invest / Modern Architecture
    images: [
      `https://images.unsplash.com/photo-1486406146926-c627a92ad11ab?fm=webp&q=70&w=1200`, // Annual Reach
      `https://images.unsplash.com/photo-1551288049-bbbda595c7b3?fm=webp&q=70&w=1200`, // Market Retention
    ]
  },
} as const;
