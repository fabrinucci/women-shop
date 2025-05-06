import { PrimaryLink } from '@/components/ui';
import Image from 'next/image';

export default function Empty() {
  return (
    <section className='flex w-full flex-col items-center justify-center sm:flex-row'>
      <div className='max-w-xs text-center'>
        <h1 className='mb-6 text-3xl font-semibold antialiased sm:text-5xl'>
          Tu carrito esta vacío
        </h1>
        <PrimaryLink href='/' aria-label='Volver al inicio'>
          Volver al inicio
        </PrimaryLink>
      </div>
      <div>
        <Image
          src='/imgs/carrito.webp'
          alt='Carrito vacío'
          height={350}
          width={350}
        />
      </div>
    </section>
  );
}
