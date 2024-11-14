export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverImage?: string; // Add optional field for image
  price?: number; // Add optional field for price
}