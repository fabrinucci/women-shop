export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
}

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface ProductData {
  products: Product[];
}
