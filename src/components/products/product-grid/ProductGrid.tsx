import type { ProductData } from '@/interfaces/products';
import { ProductGridItem } from './ProductGridItem';

export const ProductGrid = ({ products }: ProductData) => {
  return (
    <ul className='mt-6 grid grid-cols-2 gap-12 sm:grid-cols-3'>
      {products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
      ))}
    </ul>
  );
};
