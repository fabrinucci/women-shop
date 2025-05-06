import { Title } from '@/components/ui';

import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

export default function Orders() {
  return (
    <>
      <Title title='Órdenes' />

      <div className='mb-10'>
        <table className='bg-bgSecondary min-w-full rounded-md shadow'>
          <thead className='border-b'>
            <tr>
              <th
                scope='col'
                className='px-6 py-4 text-left text-sm font-medium text-gray-900'
              >
                #ID
              </th>
              <th
                scope='col'
                className='px-6 py-4 text-left text-sm font-medium text-gray-900'
              >
                Nombre completo
              </th>
              <th
                scope='col'
                className='px-6 py-4 text-left text-sm font-medium text-gray-900'
              >
                Estado
              </th>
              <th
                scope='col'
                className='px-6 py-4 text-left text-sm font-medium text-gray-900'
              >
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b transition duration-300 ease-in-out last-of-type:border-0 hover:bg-purple-200'>
              <td className='px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900'>
                1
              </td>
              <td className='px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900'>
                Mark
              </td>
              <td className='flex items-center px-6 py-4 text-sm font-light whitespace-nowrap text-gray-900'>
                <IoCardOutline className='text-green-800' />
                <span className='mx-2 text-green-800'>Pagada</span>
              </td>
              <td className='px-6 text-sm font-light text-gray-900'>
                <Link
                  href='/ordenes/123'
                  className='hover:underline hover:underline-offset-2'
                >
                  Ver orden
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
