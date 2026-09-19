export interface CafeMood {
  id: string;
  name: string;
  timeframe: string;
  tagline: string;
  description: string;
  atmosphereSound: string;
  idealFor: string;
  recommendedChai: string;
  recommendedToast: string;
  seatingZone: string;
  heroImage: string;
  ambientLightColor: string;
}

export const CAFE_MOODS: CafeMood[] = [
  {
    id: 'morning',
    name: 'MORNING RITUAL',
    timeframe: '8:00 AM — 11:00 AM',
    tagline: 'Quiet sunlight, fresh sourdough, and unhurried first sips.',
    description: 'The golden hour in our glass courtyard. Steaming milk froth, birdsong, and the aroma of morning sourdough straight out of the hearth oven.',
    atmosphereSound: 'Gentle morning ragas, courtyard water fountain, porcelain clinking',
    idealFor: 'Solo journaling, gentle starts, morning newspapers',
    recommendedChai: 'OG Masala Chai with double ginger',
    recommendedToast: 'Classic Mumbai Maska Bun with clotted malai',
    seatingZone: 'Sunlit Courtyard',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    ambientLightColor: '#FFF8E7'
  },
  {
    id: 'work',
    name: 'WORK & DEEP FOCUS',
    timeframe: '11:00 AM — 4:00 PM',
    tagline: 'Silent desks, fast fiber, and bottomless black brew.',
    description: 'Ergonomic oak tables equipped with international power sockets, soft warm overhead task lighting, and respectful silent work zones.',
    atmosphereSound: 'Lo-Fi acoustic sitar rhythms, soft keystrokes, muffled steam hiss',
    idealFor: 'Design sprints, long writing sessions, focused remote work',
    recommendedChai: 'Sanctuary Double-Brew Assam CTC Mug',
    recommendedToast: 'Confit Garlic & Rosemary Sourdough Toast',
    seatingZone: 'Focus Study Pods',
    heroImage: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
    ambientLightColor: '#F2EDE4'
  },
  {
    id: 'friends',
    name: 'FRIENDS & CHATTER',
    timeframe: '4:00 PM — 7:00 PM',
    tagline: 'The evening tea tapri hour — conversations worth staying for.',
    description: 'When the city breathes after work. Crowded brass tables, cutting chais passed across laughter, and shared platters of spicy cheese toast.',
    atmosphereSound: 'Lively hum of conversation, laughter, steaming brass samovars',
    idealFor: 'Reunions, creative debates, casual catchups',
    recommendedChai: 'The Cutting Chai Flight (Trio of glasses)',
    recommendedToast: 'Three-Cheese Chilli Toast & Lotus Crisps',
    seatingZone: 'Chai Bar Counter & Verandah',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    ambientLightColor: '#F5E6CC'
  },
  {
    id: 'family',
    name: 'FAMILY EVENINGS',
    timeframe: '7:00 PM — 9:00 PM',
    tagline: 'Multi-generational warmth around generous platters.',
    description: 'Large corner booth banquettes where grandparents and toddlers share stories over gentle Kashmiri Kahwa and sweet saffron bread puddings.',
    atmosphereSound: 'Warm vintage Indian jazz, shared plates, clinking brass spoons',
    idealFor: 'Family dinners, weekend treats, birthday celebrations',
    recommendedChai: 'Kashmiri Saffron Kahwa with shaved almonds',
    recommendedToast: 'The Tea Toast Heritage Platter',
    seatingZone: 'Velvet Lounge Booths',
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    ambientLightColor: '#ECD7B8'
  },
  {
    id: 'latenight',
    name: 'LATE NIGHT SANCTUARY',
    timeframe: '9:00 PM — MIDNIGHT',
    tagline: 'Dim amber pendants, nocturnal musings, and molten chocolate.',
    description: 'Soft jazz playing at low decibels. A restful sanctuary for night owls, book readers, and lovers savoring decadent midnight toasts.',
    atmosphereSound: 'Nocturnal ambient jazz, rainy street reverberations, whispering guests',
    idealFor: 'Midnight dates, novel reading, quiet philosophical talks',
    recommendedChai: 'Smoked Cardamom Kulhad Chai or Chamomile Mint',
    recommendedToast: 'Choco Crunch Toast with Sea Salt',
    seatingZone: 'Corner Library Nook',
    heroImage: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
    ambientLightColor: '#2B211C'
  }
];
