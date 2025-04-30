'use client';

import { useState } from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;
  inStock: number;
  size: number;
}

export const QuantitySelector = ({ quantity, inStock, size }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    if (count >= 5) return;
    if (count >= inStock) return;
    setCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div className='flex items-center justify-center md:justify-start'>
        <button onClick={handleRemove} className='cursor-pointer'>
          <AiOutlineMinusCircle size={size} />
        </button>
        <span className='rounded px-4 text-center'>{count}</span>
        <button onClick={handleAdd} className='cursor-pointer'>
          <IoAddCircleOutline size={size} />
        </button>
      </div>
    </div>
  );
};
