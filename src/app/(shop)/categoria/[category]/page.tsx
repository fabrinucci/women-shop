import { redirect } from 'next/navigation';
import { Pagination, Title } from '@/components/ui';
import { ProductGrid } from '@/components/products';
import { getPaginatedProducts } from '@/actions';

interface Props {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function Category({ params, searchParams }: Props) {
  const { category } = await params;
  const { page } = await searchParams;

  const parsedPage = page ? parseInt(page) : 1;

  const { products, totalPages } = await getPaginatedProducts({
    page: parsedPage,
    categoryName: category,
  });

  if (products.length === 0) redirect(`/`);

  return (
    <>
      <Title title={category} subtitle='Todos los productos' />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
