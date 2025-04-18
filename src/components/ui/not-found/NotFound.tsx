import Image from 'next/image';
import Link from 'next/link';

export const NotFound = () => {
  return (
    <main className='flex h-[700px] w-full flex-col items-center justify-center gap-6 px-10 sm:flex-row sm:gap-10'>
      <div className='text-center'>
        <h1 className='mb-6 text-9xl font-semibold antialiased'>404</h1>
        <p className='mb-6 text-lg'>Ups! No encontramos la pagina</p>
        <Link
          className='bg-primary rounded-lg p-2 text-white transition-opacity hover:opacity-85'
          href='/'
          aria-label='Volver al inicio'
        >
          Volver al inicio
        </Link>
      </div>
      <div>
        <Image
          src='/imgs/cartera.webp'
          alt='Página no encontrada'
          height={500}
          width={500}
        />
      </div>
    </main>
  );
};
