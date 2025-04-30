import { CartItem } from '@/components/cart';
import { PrimaryLink, Title } from '@/components/ui';
import { initialData } from '@/seed';
import Link from 'next/link';

export default async function Checkout() {
  const cartProducts = initialData.products.slice(0, 3);
  return (
    <div className='px-4 sm:px-6 sm:py-6 lg:px-12'>
      <Title title='Verificar Órden' />

      <section className='mx-auto grid max-w-[500px] grid-cols-1 gap-6 sm:gap-12 md:max-w-full md:grid-cols-3'>
        <section className='md:col-span-2'>
          <div className='mb-2'>
            <p className='mb-1 text-base md:text-lg'>
              ¿Querés cambiar algún producto?
            </p>
            <Link
              href='/carrito'
              className='hover:text-dark cursor-pointer text-sm font-semibold text-zinc-700 underline underline-offset-2 transition-all duration-300 md:text-base'
            >
              Editar Carrito
            </Link>
          </div>
          <ul className='border-b-2 border-gray-600 pb-6 md:border-0'>
            {cartProducts.map((product) => (
              <CartItem key={product.slug} product={product} type='Checkout' />
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

            <div>
              <p className='mb-5'>
                <span className='text-xs'>
                  {'Al hacer clic en "Completar pago", aceptas nuestros '}
                  <Link href='/' className='underline underline-offset-2'>
                    términos y condiciones
                  </Link>{' '}
                  y{' '}
                  <Link href='/' className='underline underline-offset-2'>
                    política de privacidad
                  </Link>
                </span>
              </p>
            </div>

            <div className='mx-auto max-w-sm sm:w-full'>
              <PrimaryLink href='/ordenes/153456'>Completar pago</PrimaryLink>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
