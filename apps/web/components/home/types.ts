export interface Manufacturer {
  id: number;
  name: string;
  location: string;
  rating: number;
  followers: string;
  verified: boolean;
  gradient: string;
}

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  originalPrice: number | null;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  colors: string[];
} 