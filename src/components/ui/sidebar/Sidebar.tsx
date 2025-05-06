'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IoMdClose } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import {
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineTicket,
  HiSearch,
} from 'react-icons/hi';
import { LuShirt } from 'react-icons/lu';
import { useUIStore } from '@/store';

export const Sidebar = () => {
  const pathname = usePathname();
  const isOpenMenu = useUIStore((state) => state.isOpenMenu);
  const closeMenu = useUIStore((state) => state.closeMenu);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    if (isOpenMenu) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenMenu, closeMenu]);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenMenu]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <div>
      {isOpenMenu && (
        <div
          role='presentation'
          onClick={closeMenu}
          className='fixed top-0 left-0 z-10 h-screen w-screen bg-black/30 backdrop-blur-xs'
        ></div>
      )}

      <nav
        data-testid='Sidebar'
        role='dialog'
        aria-modal='true'
        aria-label='Menú lateral'
        className={clsx(
          'bg-bgSecondary fixed top-0 right-0 z-20 h-screen w-full max-w-sm transform p-8 shadow-2xl transition-all duration-300',
          {
            'translate-x-full': !isOpenMenu,
          },
        )}
      >
        <div className='flex w-full justify-end'>
          <button
            className='cursor-pointer'
            onClick={closeMenu}
            aria-label='Cerrar menu'
          >
            <IoMdClose
              className='text-dark hover:text-primary transition-all'
              size={30}
            />
          </button>
        </div>

        <div className='flex flex-col gap-8 py-10'>
          <div>
            <label className='sr-only'>Search</label>
            <div className='relative'>
              <div className='pointer-events-none absolute top-[6px] left-0'>
                <HiSearch size={30} />
              </div>

              <input
                className='focus:border-primary focus:ring-primary text-dark w-full border-b-2 border-zinc-300 p-2.5 ps-10 outline-none'
                type='text'
                placeholder='Buscar'
              />
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <Link href='/' className='flex items-center gap-3'>
              <FiUser size={30} />
              <span className='text-lg'>Perfil</span>
            </Link>
            <Link href='/auth/ingresar' className='flex items-center gap-3'>
              <HiOutlineLogin size={30} />
              <span className='text-lg'>Ingresar</span>
            </Link>
            <Link href='/' className='flex items-center gap-3'>
              <HiOutlineLogout size={30} />
              <span className='text-lg'>Salir</span>
            </Link>
          </div>

          <div className='relative flex flex-col gap-6'>
            <div className='absolute -top-4 left-0 h-[2px] w-full bg-zinc-300'></div>

            <Link href='/ordenes' className='flex items-center gap-3'>
              <HiOutlineTicket size={30} />
              <span className='text-lg'>Órdenes</span>
            </Link>
            <Link href='/productos' className='flex items-center gap-3'>
              <LuShirt size={30} />
              <span className='text-lg'>Productos</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
