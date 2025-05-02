import clsx from 'clsx';
import { Size } from '@/interfaces/products';

interface Props {
  availableSizes: Size[];
  selectedSize: Size;
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div>
      <p className='mb-4 text-lg font-semibold md:mb-2'>Talles disponibles</p>
      <div className='flex justify-center gap-2 md:justify-start'>
        {availableSizes.map((size) => (
          <button
            className={clsx(
              'bg-details hover:bg-secondary h-10 w-10 cursor-pointer rounded-lg p-2 transition-colors duration-300 ease-in hover:text-white',
              { 'bg-secondary text-white': selectedSize === size },
            )}
            key={size}
            aria-pressed={selectedSize === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
