import Image from 'next/image';
import { PrimaryLink } from '@/components/ui';

export const NotFound = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center sm:flex-row'>
      <div className='text-center'>
        <h1 className='mb-6 text-7xl font-semibold antialiased sm:text-9xl'>
          404
        </h1>
        <p className='mb-6 text-base sm:text-lg'>
          Ups! No encontramos la pagina
        </p>
        <div className='max-w-sm'>
          <PrimaryLink href='/' aria-label='Volver al inicio'>
            Volver al inicio
          </PrimaryLink>
        </div>
      </div>
      <div>
        <Image
          src='/imgs/cartera.webp'
          alt='Página no encontrada'
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};
