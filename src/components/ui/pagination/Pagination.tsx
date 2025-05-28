'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { generatePagination } from '@/utils';
import { useCallback, useMemo } from 'react';

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const pages = useMemo(
    () => generatePagination({ totalPages, currentPage }),
    [totalPages, currentPage],
  );

  const createUrl = useCallback(
    (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);

      if (pageNumber === '...') {
        return `${pathname}?${params}`;
      }

      if (Number(pageNumber) <= 0) {
        return `${pathname}`;
      }

      if (currentPage > totalPages) {
        return `${pathname}?${params}`;
      }

      params.set('page', pageNumber.toString());
      return `${pathname}?${params}`;
    },
    [pathname, searchParams, currentPage, totalPages],
  );

  return (
    <div className='mt-14 mb-10 flex justify-center'>
      <nav aria-label='Navegación de productos'>
        <ul className='flex gap-2'>
          <li>
            <Link
              aria-label='Ir a la página anterior'
              className={clsx(
                'page-link relative block rounded border-0 bg-transparent px-3 py-1.5 outline-none focus:shadow-none',
                {
                  'hover:bg-primary text-dark transition-all duration-300 ease-in hover:text-white':
                    currentPage > 1,
                },
                {
                  'pointer-events-none text-gray-500': currentPage === 1,
                },
              )}
              href={createUrl(currentPage - 1)}
            >
              Anterior
            </Link>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <Link
                aria-label={`Ir a la página ${page}`}
                className={clsx(
                  'relative block rounded border-0 px-3 py-1.5 outline-none',
                  {
                    'hover:bg-primary text-dark bg-transparent transition-all duration-300 ease-in hover:text-white focus:shadow-none':
                      currentPage !== page,
                  },
                  {
                    'bg-secondary text-white shadow-md focus:shadow-md':
                      currentPage === page,
                  },
                )}
                href={createUrl(page)}
              >
                {page} <span className='visually-hidden'></span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              aria-label='Ir a la página siguiente'
              className={clsx(
                'relative block rounded border-0 bg-transparent px-3 py-1.5 outline-none focus:shadow-none',
                {
                  'hover:bg-primary text-dark transition-all duration-300 ease-in hover:text-white':
                    currentPage !== totalPages,
                },
                {
                  'pointer-events-none text-gray-500':
                    currentPage === totalPages,
                },
              )}
              href={createUrl(currentPage + 1)}
            >
              Siguiente
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
