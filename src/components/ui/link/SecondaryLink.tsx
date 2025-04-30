import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

export const SecondaryLink = (
  props: AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  return (
    <Link
      href={props.href!}
      className='bg-bgSecondary text-dark border-secondary hover:bg-details block w-full cursor-pointer rounded-[8px] border-2 px-2 py-4 text-center font-[500] capitalize transition-all duration-300 ease-in hover:border-2'
      {...props}
    ></Link>
  );
};
