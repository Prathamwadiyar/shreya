export type DietaryFlag = 'V' | 'VG' | 'GF' | 'J';

export type MenuCategory = 'all' | 'tea' | 'toast' | 'snacks' | 'desserts' | 'combos';

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  category: 'tea' | 'toast' | 'snacks' | 'desserts' | 'combos';
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  dietary: DietaryFlag[];
  isSignature?: boolean;
  prepTimeMinutes?: number;
  pairingSuggestion?: string;
  spiceLevel?: 1 | 2 | 3;
  caffeineLevel?: 'Zero' | 'Low' | 'Medium' | 'High';
  customizable?: boolean;
}

export interface ChaiCustomization {
  base: 'Assam Strong CTC' | 'Darjeeling First Flush' | 'Kashmiri Kahwa Green' | 'Oat Milk Golden Tea';
  flavor: 'Crushed Adrak (Ginger)' | 'Elaichi (Green Cardamom)' | 'Kesar Masala (Saffron & Spices)' | 'Lemongrass Mint' | 'Classic Pure';
  sweetness: 'Unsweetened (0%)' | 'Mild Jaggery (25%)' | 'Desi Khand (50%)' | 'Standard Sweet (100%)';
  size: 'Cutting (120ml)' | 'Kulhad (200ml)' | 'Sanctuary Mug (350ml)';
  milk: 'Whole Buffalo Milk' | 'Cow Milk' | 'Oat Milk (Plant-based)' | 'Black / No Milk';
  addOns: string[];
  totalPrice: number;
}

export interface CartItem {
  cartItemId: string;
  menuItemId: string;
  name: string;
  category: string;
  unitPrice: number;
  quantity: number;
  image: string;
  customizationSummary?: string;
  customizations?: Partial<ChaiCustomization>;
}

export type SanctuaryZone = 'courtyard' | 'focus_pods' | 'chai_bar' | 'lounge_booth';

export interface ReservationBooking {
  id: string;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  date: string;
  timeSlot: string;
  guestsCount: number;
  zone: SanctuaryZone;
  specialRequests?: string;
  status: 'confirmed' | 'seated' | 'cancelled';
  createdAt: string;
}

export interface CulturalEvent {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dayOfWeek: string;
  time: string;
  category: 'Live Music' | 'Open Mic' | 'Art & Craft' | 'Board Games' | 'Community Talk';
  description: string;
  capacity: number;
  registeredCount: number;
  image: string;
  hostName: string;
  entryFeeINR: number;
}

export interface PassportStamp {
  id: string;
  index: number;
  teaName: string;
  tastingNote: string;
  region: string;
  isUnlocked: boolean;
  unlockedDate?: string;
}

export interface LoyaltyReward {
  id: string;
  title: string;
  pointsRequired: number;
  description: string;
  code: string;
  badge: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'cart';
}
