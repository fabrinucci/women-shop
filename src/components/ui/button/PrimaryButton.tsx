import React, { ButtonHTMLAttributes } from 'react';

export const PrimaryButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return (
    <button
      className='bg-secondary hover:bg-primary w-full cursor-pointer rounded-[8px] px-2 py-4 font-[500] text-white capitalize transition-all duration-300 ease-in'
      {...props}
    />
  );
};
