export interface Review {
  id: string;
  author: string;
  avatarUrl?: string;
  avatarColor?: string;
  rating: number;
  date: string;
  device: 'Telefone' | 'Tablet' | 'TV Box' | 'Smart TV' | 'Fire Stick';
  content: string;
  helpfulCount: number;
  userVoted?: 'yes' | 'no' | null;
}

export type DeviceFilter = 'Todos' | 'Telefone' | 'Tablet' | 'TV Box' | 'Smart TV' | 'Fire Stick';

export interface AppDetails {
  name: string;
  developer: string;
  category: string;
  rating: number;
  ratingCountText: string;
  ratingCount: number;
  downloadsText: string;
  contentRating: string;
  contentRatingAge: string;
  version: string;
  updatedAt: string;
  apkSize: string;
}
