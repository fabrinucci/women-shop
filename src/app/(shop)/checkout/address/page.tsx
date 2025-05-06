import { PrimaryLink, Title } from '@/components/ui';

export default function CheckoutAddress() {
  return (
    <div className='px-4 sm:px-6 sm:py-6 lg:px-12'>
      <Title title='Dirección' subtitle='Dirección de entrega' />

      <div className='mt-10 flex flex-col sm:items-center sm:justify-center'>
        <form className='flex w-full flex-col justify-center text-left xl:w-[1000px]'>
          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-5'>
            <div className='mb-2 flex flex-col'>
              <label htmlFor='name'>Nombres</label>
              <input
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                type='text'
                id='name'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <label htmlFor='lastname'>Apellidos</label>
              <input
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                type='text'
                id='lastname'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <label htmlFor='address'>Dirección</label>
              <input
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                type='text'
                id='address'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <label htmlFor='postal-code'>Código postal</label>
              <input
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                type='text'
                id='postal-code'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <label htmlFor='country'>País</label>
              <select
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                id='country'
              >
                <option value='' disabled>
                  [ Seleccione ]
                </option>
                <option value='AR'>Argentina</option>
              </select>
            </div>

            <div className='mb-2 flex flex-col'>
              <label htmlFor='province'>Provincia</label>
              <input
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                type='text'
                id='province'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <label htmlFor='city'>Ciudad</label>
              <input
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                type='text'
                id='city'
              />
            </div>

            <div className='mb-2 flex flex-col'>
              <label htmlFor='tel'>Teléfono</label>
              <input
                className='bg-bgSecondary focus:border-primary rounded-md border-2 border-zinc-400 p-2 focus:outline-0'
                type='tel'
                id='tel'
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
