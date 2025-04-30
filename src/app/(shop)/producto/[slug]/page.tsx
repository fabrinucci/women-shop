import { notFound } from 'next/navigation';
import { initialData } from '@/seed';
import {
  ProductDesktopSlideshow,
  ProductMobileSlideshow,
  QuantitySelector,
  SizeSelector,
} from '@/components/product/';
import { PrimaryButton } from '@/components/ui';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const seedProducts = initialData.products;
export default async function Product({ params }: Props) {
  const { slug } = await params;
  const product = seedProducts.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  const { title, images, price, description, sizes, inStock } = product;

  return (
    <article className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-3'>
      <div className='col-span-1 md:col-span-2'>
        <ProductMobileSlideshow
          className='block md:hidden'
          title={title}
          images={images}
        />

        <ProductDesktopSlideshow
          className='hidden md:block'
          title={title}
          images={images}
        />
      </div>

      <div className='flex flex-col gap-8 text-center md:gap-4 md:text-start'>
        <div>
          <h1 className='mb-2 text-2xl font-semibold md:text-start'>{title}</h1>
          <span className='text-secondary text-lg font-semibold'>${price}</span>
        </div>

        <SizeSelector availableSizes={sizes} selectedSize={sizes[0]} />

        <div>
          <p className='mb-4 text-lg font-semibold md:mb-2'>Cantidad</p>
          <QuantitySelector quantity={1} inStock={inStock} size={30} />
        </div>

        <div className='w-full'>
          <PrimaryButton>Agregar al carrito</PrimaryButton>
        </div>

        <div>
          <p className='mb-2 text-lg font-semibold'>Descripción</p>
          <p className='leading-8 font-light md:leading-7'>{description}</p>
        </div>
      </div>
    </article>
  );
}
