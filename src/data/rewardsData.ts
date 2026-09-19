import { PassportStamp, LoyaltyReward } from '@/types';

export const PASSPORT_STAMPS: PassportStamp[] = [
  {
    id: 'stamp-1',
    index: 1,
    teaName: 'OG Masala Chai',
    tastingNote: 'Crushed black ginger & Idukki green cardamom',
    region: 'Upper Assam Estate',
    isUnlocked: true,
    unlockedDate: 'Sep 12, 2026'
  },
  {
    id: 'stamp-2',
    index: 2,
    teaName: 'Gully Adrak Kadak Chai',
    tastingNote: 'Pungent double root & tellicherry pepper',
    region: 'Jorhat Gardens',
    isUnlocked: true,
    unlockedDate: 'Sep 15, 2026'
  },
  {
    id: 'stamp-3',
    index: 3,
    teaName: 'Kashmiri Saffron Kahwa',
    tastingNote: 'Saffron threads, cinnamon quill & almonds',
    region: 'Pampore Valley',
    isUnlocked: true,
    unlockedDate: 'Sep 18, 2026'
  },
  {
    id: 'stamp-4',
    index: 4,
    teaName: 'Darjeeling First Flush',
    tastingNote: 'Unfermented muscatel spring vintage',
    region: 'Mirik 6,000ft',
    isUnlocked: false
  },
  {
    id: 'stamp-5',
    index: 5,
    teaName: 'Smoked Cardamom Kulhad',
    tastingNote: 'Charred clay kiln steeped over hot coals',
    region: 'Bengal Potteries',
    isUnlocked: false
  },
  {
    id: 'stamp-6',
    index: 6,
    teaName: 'Unlocked: Master Sommelier Secret Brew',
    tastingNote: 'Complimentary sixth specialty pot & artisanal toast',
    region: 'House Sanctuary Reserve',
    isUnlocked: false
  }
];

export const LOYALTY_REWARDS: LoyaltyReward[] = [
  {
    id: 'reward-1',
    title: 'Complimentary Artisanal Toast',
    pointsRequired: 250,
    description: 'Redeem for any savory or sweet signature toast on the menu.',
    code: 'FREE-TOAST-250',
    badge: 'Popular'
  },
  {
    id: 'reward-2',
    title: 'Artisanal Double-Walled Clay Kulhad',
    pointsRequired: 400,
    description: 'Handcrafted grooved terracotta tea cup fired in Kumartuli to take home.',
    code: 'KULHAD-GIFT',
    badge: 'Collectible'
  },
  {
    id: 'reward-3',
    title: 'VIP Pass to The Acoustic Chai Sessions',
    pointsRequired: 600,
    description: 'Reserved front-row seating with complimentary tea flight for two.',
    code: 'ACOUSTIC-VIP',
    badge: 'Experience'
  },
  {
    id: 'reward-4',
    title: 'Private Sourdough & Tea Cupping Salon',
    pointsRequired: 1000,
    description: 'Exclusive 90-minute private workshop with our master baker & tea sommelier.',
    code: 'PRIVATE-SALON',
    badge: 'Masterclass'
  }
];
