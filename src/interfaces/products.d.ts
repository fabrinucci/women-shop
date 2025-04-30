export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  type: Type;
}

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type Type =
  | 'remeras'
  | 'pantalones'
  | 'abrigos'
  | 'sombreros'
  | 'carteras'
  | 'vestidos';

export interface ProductData {
  products: Product[];
}
