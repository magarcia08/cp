
export interface Product {
  id: string;
  name: string;
  ref: string;
  colorsAvailable: string[];
  material: string;
  images: string[];
  categories: string[]; // Changed from category to categories (array)
  gender: 'hombres' | 'mujeres' | 'niños' | 'unisex';
  brand: string;
  description?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}
