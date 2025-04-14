import Link from 'next/link';
import { HiOutlineShoppingBag, HiSearch } from 'react-icons/hi';

export const TopMenu = () => {
  return (
    <nav className='bg-bgSecondary flex h-14 items-center justify-between px-2 sm:px-4'>
      <section className='mr-6'>
        <Link href='/' className='text-md'>
          <span className='font-semibold'>Women</span> <span> | Clothes</span>
        </Link>
      </section>
      <section className='hidden items-center gap-6 sm:flex'>
        <Link href='/categoria/ropa'>Ropa</Link>
        <Link href='/categoria/carteras'>Carteras</Link>
        <Link href='/categoria/zapatos'>Zapatos</Link>
      </section>
      <section className='flex items-center gap-6'>
        <Link href='/buscar'>
          <HiSearch className='text-xl' />
        </Link>
        <Link className='relative' href='/carrito'>
          <span>
            <HiOutlineShoppingBag className='text-xl' />
          </span>
          <span className='bg-primary absolute top-[11px] -right-[7px] h-4 w-4 rounded-full text-center text-xs font-semibold text-white'>
            3
          </span>
        </Link>
        <button className='hover:text-primary cursor-pointer p-2 uppercase transition-all'>
          Menu
        </button>
      </section>
    </nav>
  );
};
