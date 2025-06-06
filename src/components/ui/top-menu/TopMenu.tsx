'use client';

import Link from 'next/link';
import { HiOutlineShoppingBag, HiSearch } from 'react-icons/hi';
import { Sidebar } from '@/components/ui';
import { useUIStore } from '@/store';

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openMenu);

  return (
    <nav className='bg-bgSecondary flex h-14 items-center justify-between px-2 shadow sm:px-4'>
      <section className='mr-6'>
        <Link href='/' className='text-md' aria-label='Go to home'>
          <span className='font-semibold'>Women</span> <span> | Clothes</span>
        </Link>
      </section>
      <section className='hidden items-center gap-6 sm:flex'>
        <Link
          className='hover:text-primary transition-all duration-300'
          href='/categoria/remeras'
        >
          Remeras
        </Link>
        <Link
          className='hover:text-primary transition-all duration-300'
          href='/categoria/carteras'
        >
          Carteras
        </Link>
        <Link
          className='hover:text-primary transition-all duration-300'
          href='/categoria/abrigos'
        >
          Abrigos
        </Link>
      </section>
      <section className='flex items-center gap-6'>
        <Link href='/buscar' aria-label='Buscar'>
          <HiSearch className='text-xl' />
        </Link>
        <Link className='relative' href='/carrito' aria-label='Abrir carrito'>
          <span>
            <HiOutlineShoppingBag className='text-xl' />
          </span>
          <span className='bg-primary absolute top-[11px] -right-[7px] h-4 w-4 rounded-full text-center text-xs font-semibold text-white'>
            3
          </span>
        </Link>
        <button
          onClick={openMenu}
          className='hover:text-primary cursor-pointer p-2 uppercase transition-all duration-500'
          aria-label='Abrir menu'
        >
          Menu
        </button>

        <Sidebar />
      </section>
    </nav>
  );
};
