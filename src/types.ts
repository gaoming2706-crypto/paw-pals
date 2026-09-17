export type TabType = 'home' | 'passport' | 'health' | 'square' | 'mine';

export interface PetInfo {
  id: string;
  name: string;
  englishName: string;
  breed: string;
  age: string;
  weight: number;
  gender: 'male' | 'female';
  birthday: string;
  color: string;
  neutered: boolean;
  avatar: string;
  chipCode: string;
  ownerName: string;
  ownerPhone: string;
  statusText: string;
}

export interface MeetupItem {
  id: string;
  title: string;
  tag: string;
  subTag: string;
  tagColor: 'primary' | 'secondary' | 'tertiary';
  time: string;
  location: string;
  distance: string;
  price: number;
  features: string[];
  image: string;
  joinedCount: number;
  maxCount: number;
  attendeeAvatars: string[];
  isJoined?: boolean;
}

export interface PhotoFeedItem {
  id: string;
  author: string;
  avatar: string;
  location: string;
  tag?: string;
  content: string;
  image: string;
  likes: number;
  isLiked: boolean;
  comments?: number;
}

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  badgeType: 'primary' | 'secondary' | 'tertiary';
  category: string;
  subTitle: string;
  sales: string;
  price: number;
  image: string;
}

export interface SupplementItem {
  id: string;
  name: string;
  tag: string;
  tagColor: 'primary' | 'secondary' | 'tertiary';
  instructions: string;
  checked: boolean;
  icon: string;
}
