import Image from 'next/image';
import { Product } from '../../interfaces/products';
import Link from 'next/link';
import { QuantitySelector } from '../product';

interface Props {
  product: Product;
  type: 'Cart' | 'Checkout' | 'Order';
}

export const CartItem = ({ product, type }: Props) => {
  const { slug, title, price, images } = product;
  return (
    <li className='flex gap-2 border-b-2 border-gray-300 py-4 last-of-type:border-0'>
      <div>
        <Image
          src={`/products/${images[0]}`}
          alt={title}
          height={150}
          width={150}
          className='max-w-24 rounded-lg sm:max-w-32'
        />
      </div>
      <div className='flex w-full flex-col gap-3 md:gap-2'>
        <div className='flex justify-between gap-3 font-semibold'>
          <Link
            className='hover:text-primary block text-sm transition-all duration-300 md:text-base'
            href={`/producto/${slug}`}
          >
            {title}
          </Link>
          {type === 'Cart' && <p className='text-sm md:text-base'>${price}</p>}
        </div>

        {type === 'Cart' && (
          <>
            <div className='flex gap-2 text-xs font-semibold text-zinc-700 md:text-sm'>
              <p>Tamaño:</p>
              <p>XL</p>
            </div>
            <div className='flex items-center gap-2 text-xs font-semibold text-zinc-700 md:text-sm'>
              <p>Cantidad:</p>
              <QuantitySelector
                quantity={2}
                inStock={product.inStock}
                size={22}
              />
            </div>

            <div>
              <button className='hover:text-dark cursor-pointer text-xs font-semibold text-zinc-700 underline underline-offset-2 transition-all duration-300 md:text-sm'>
                Remover
              </button>
            </div>
          </>
        )}

        {type !== 'Cart' && (
          <>
            <div className='flex gap-2 text-xs font-semibold text-zinc-700 md:text-sm'>
              <p>$75</p>
              <p>x 2</p>
            </div>
            <div className='text-dark flex items-center gap-2 text-xs font-semibold md:text-sm'>
              <p>Subtotal:</p>
              <p>$280</p>
            </div>
          </>
        )}
      </div>
    </li>
  );
};
