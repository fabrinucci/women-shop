import { PrimaryButton, SecondaryLink } from '@/components/ui';

export default function SignUp() {
  return (
    <section>
      <h1 className='mb-5 text-4xl font-semibold'>Registrarse</h1>

      <form className='flex flex-col'>
        <label htmlFor='fullname'>Nombre completo</label>
        <input
          className='bg-bgSecondary focus:border-primary focus:ring-primary mb-5 rounded-md border-2 border-zinc-500 px-3 py-2 outline-0'
          type='text'
          id='fullname'
        />

        <label htmlFor='email'>Correo electrónico</label>
        <input
          className='bg-bgSecondary focus:border-primary focus:ring-primary mb-5 rounded-md border-2 border-zinc-500 px-3 py-2 outline-0'
          type='email'
          id='email'
        />

        <label htmlFor='password'>Contraseña</label>
        <input
          className='focus:border-primary focus:ring-primary bg-bgSecondary mb-5 rounded-md border-2 border-zinc-500 px-3 py-2 outline-0'
          type='password'
          id='password'
        />

        <label htmlFor='new-password'>Repetir contraseña</label>
        <input
          className='focus:border-primary focus:ring-primary bg-bgSecondary mb-5 rounded-md border-2 border-zinc-500 px-3 py-2 outline-0'
          type='password'
          id='new-password'
        />

        <PrimaryButton>Registrarse</PrimaryButton>

        {/* divisor l ine */}
        <div className='my-5 flex items-center'>
          <div className='flex-1 border-t border-gray-500'></div>
          <div className='px-2 text-gray-800'>O</div>
          <div className='flex-1 border-t border-gray-500'></div>
        </div>

        <SecondaryLink href='/auth/ingresar'>
          Ingresar con cuenta existente
        </SecondaryLink>
      </form>
    </section>
  );
}
