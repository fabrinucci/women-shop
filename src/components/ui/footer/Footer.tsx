import Link from 'next/link';
import { Fragment } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Facebook',
    Icon: FaFacebookF,
    href: 'https://www.facebook.com',
  },
  {
    name: 'Instagram',
    Icon: FaInstagram,
    href: 'https://instagram.com/',
  },
  {
    name: 'WhatsApp',
    Icon: FaWhatsapp,
    href: 'https://web.whatsapp.com',
  },
];

export const Footer = () => {
  return (
    <footer className='bg-bgSecondary rounded-lg p-4 antialiased shadow sm:flex sm:items-center sm:justify-between sm:p-6 xl:p-8'>
      <p className='mb-4 text-center text-sm sm:mb-0'>
        &copy; {new Date().getFullYear()} Women Clothes. Todos los derechos
        reservados.
      </p>
      <div className='flex items-center justify-center space-x-1'>
        {socialLinks.map((link) => {
          const { name, href, Icon } = link;
          return (
            <Fragment key={name}>
              <Link
                href={href}
                data-tooltip-target={`tooltip-${name}`}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:bg-secondary inline-flex cursor-pointer justify-center rounded-lg p-2 transition-all duration-300 ease-in hover:text-white'
              >
                <Icon size={20} />
                <span className='sr-only'>{name}</span>
              </Link>
              <div
                id={`tooltip-${name}`}
                role='tooltip'
                className='tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700'
              >
                Búscanos en {name}
                <div className='tooltip-arrow' data-popper-arrow></div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </footer>
  );
};
