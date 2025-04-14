import React, { ButtonHTMLAttributes } from 'react';

export const PrimaryButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return (
    <button
      className={`bg-primary cursor-pointer rounded-[8px] px-2 py-4 font-[500] text-white transition-all hover:opacity-85`}
      {...props}
    />
  );
};
