import type { Product } from '@/interfaces/products';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const { title, images, price, slug } = product;
  return (
    <li className='fade-in overflow-hidden'>
      <div className='group relative aspect-[1/1] w-full overflow-hidden rounded-lg'>
        <Link href={`/producto/${slug}`}>
          <Image
            src={`/products/${images[0]}`}
            alt={product.title}
            className='h-auto w-full object-cover transition-opacity duration-500 group-hover:opacity-0'
            fill
          />
          <Image
            src={`/products/${images[1]}`}
            alt={product.title}
            className='absolute top-0 left-0 h-[auto] w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100'
            fill
          />
        </Link>
      </div>

      <div className='flex flex-col gap-3 p-6'>
        <Link
          href={`/producto/${slug}`}
          className='text-dark hover:text-primary max-w-72 text-base font-semibold transition-all duration-300'
        >
          {title}
        </Link>
        <span className='text-secondary font-semibold'>${price}</span>
      </div>
    </li>
  );
};
