interface Props {
  params: Promise<{ id: string }>;
}

import { BiCreditCard } from 'react-icons/bi';
import { CartItem } from '@/components/cart';
import { Title } from '@/components/ui';
import { initialData } from '@/seed';

export default async function Order({ params }: Props) {
  const { id } = await params;
  const cartProducts = initialData.products.slice(0, 3);

  return (
    <div className='px-4 sm:px-6 sm:py-6 lg:px-12'>
      <Title title={`Órden #${id}`} />

      <section className='mx-auto grid max-w-[500px] grid-cols-1 gap-6 sm:gap-12 md:max-w-full md:grid-cols-3'>
        <section className='md:col-span-2'>
          <div className='mb-2 flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-white'>
            <BiCreditCard size={20} />
            <span className='text-base md:text-lg'>Pagada</span>
          </div>
          <ul className='border-b-2 border-gray-600 pb-6 md:border-0'>
            {cartProducts.map((product) => (
              <CartItem key={product.slug} product={product} type='Order' />
            ))}
          </ul>
        </section>

        <aside className='bg-bgSecondary h-fit rounded-md p-2 shadow-2xl md:col-span-1 lg:p-4'>
          <div>
            <h2 className='text-2xl font-semibold sm:text-3xl'>Tus Datos</h2>
            <div className='my-6 flex flex-col gap-3 text-sm md:gap-2 md:text-base'>
              <p>Juan Perez</p>
              <p>Direccion: Av. Gimenez</p>
              <p>Ciudad Perdida</p>
              <p>Argentina</p>
              <p>CP. 2544</p>
              <p>Tel: 2564564187</p>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-semibold sm:text-3xl'>Resumen</h2>
            <div className='my-6 flex flex-col gap-3 md:gap-2'>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base'>Productos</p>
                <p className='text-sm md:text-base'>6</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base'>Envio</p>
                <p className='text-sm md:text-base'>No</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base'>Impuestos</p>
                <p className='text-sm md:text-base'>$30</p>
              </div>
              <div className='flex justify-between'>
                <h3 className='text-lg font-semibold md:text-xl'>Subtotal</h3>
                <h3 className='text-lg font-semibold md:text-xl'>$180</h3>
              </div>
            </div>

            <div className='mb-2 flex items-center gap-2 rounded-lg bg-green-700 p-4 text-white'>
              <BiCreditCard size={20} />
              <span className='text-base md:text-lg'>Pagada</span>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
