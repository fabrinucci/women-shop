import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import type { Size } from '@/interfaces/products';
import { SizeSelector } from '@/components/product';

describe('SizeSelector', () => {
  const mockAvailableSizes = ['M', 'S', 'XL', 'L'] as Size[];
  beforeEach(() => {
    render(
      <SizeSelector selectedSize={'S'} availableSizes={mockAvailableSizes} />,
    );
  });

  test('Should render the element', () => {
    expect(screen.getByText(/talles disponibles/i)).toBeInTheDocument();
  });

  test('Should render the correct number of buttons', () => {
    expect(screen.getAllByRole('button')).length(4);

    mockAvailableSizes.forEach((size) => {
      expect(screen.getByText(size)).toBeInTheDocument();
    });
  });

  test('Should have the expect class', () => {
    const selectedButton = screen.getByText('S');
    expect(selectedButton).toHaveClass('bg-secondary');
    expect(selectedButton).toHaveClass('text-white');
  });
});
