import { notFound } from 'next/navigation';

import { initialData } from '@/seed';
import { Title } from '@/components/ui';
import { ProductGrid } from '@/components/products';

interface Props {
  params: Promise<{ id: string }>;
}

const seedProducts = initialData.products;

export default async function Category({ params }: Props) {
  const { id } = await params;

  const products = seedProducts.filter((product) => product.type === id);
  if (products.length === 0) notFound();

  return (
    <>
      <Title title={id} subtitle='Todos los productos' />
      <ProductGrid products={products} />
    </>
  );
}
