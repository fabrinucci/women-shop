import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

export const PrimaryLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href={props.href!}
      className='bg-secondary hover:bg-primary block w-full cursor-pointer rounded-[8px] px-2 py-4 text-center font-[500] text-white capitalize transition-all duration-300 ease-in'
      {...props}
    ></Link>
  );
};
