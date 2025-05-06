import { ProductGrid } from '@/components/products';
import { Title } from '@/components/ui';

import { initialData } from '@/seed';

export default async function Home() {
  const products = initialData.products.slice(30, 39);

  return (
    <div>
      <Title title='Tienda' subtitle='Todos los productos' />
      <ProductGrid products={products} />
    </div>
  );
}
