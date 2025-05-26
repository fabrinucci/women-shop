import { redirect } from 'next/navigation';
import { getPaginatedProducts } from '@/actions';
import { ProductGrid } from '@/components/products';
import { Pagination, Title } from '@/components/ui';

interface Params {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home({ searchParams }: Params) {
  const { page } = await searchParams;
  const parsedPage = page ? parseInt(page) : 1;

  const { products, totalPages } = await getPaginatedProducts({
    page: parsedPage,
  });

  if (products.length === 0) redirect('/');

  return (
    <div>
      <Title title='Tienda' subtitle='Todos los productos' />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
