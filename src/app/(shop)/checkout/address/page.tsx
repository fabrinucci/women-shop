import { PrimaryLink, Title } from '@/components/ui';

export default function CheckoutAddress() {
  return (
    <div className='px-4 sm:px-6 sm:py-6 lg:px-12'>
      <Title title='Dirección' subtitle='Dirección de entrega' />

      <div className='mt-10 flex flex-col sm:items-center sm:justify-center'>
        <form className='flex w-full flex-col justify-center text-left xl:w-[1000px]'>
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-5'>
            <div className='mb-2 flex flex-col'>
              <span>Nombres</span>
              <input
                type='text'
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <span>Apellidos</span>
              <input
                type='text'
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <span>Dirección</span>
              <input
                type='text'
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <span>Código postal</span>
              <input
                type='text'
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <span>País</span>
              <select className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'>
                <option value='' disabled>
                  [ Seleccione ]
                </option>
                <option value='AR'>Argentina</option>
              </select>
            </div>

            <div className='mb-2 flex flex-col'>
              <span>Provincia</span>
              <input
                type='text'
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <span>Ciudad</span>
              <input
                type='text'
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <span>Teléfono</span>
              <input
                type='text'
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
              />
            </div>

            <div className='mb-2 flex flex-col sm:mt-10'>
              <PrimaryLink href='/checkout'>Siguiente</PrimaryLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
