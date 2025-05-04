import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CartItem } from '@/components/cart';
import type { Product } from '@/interfaces/products';

describe('ProductDesktopSlideshow', () => {
  const mockProduct = {
    description: "Women's Quilted Shirt Jacket features a uniquely fit.",
    images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
    inStock: 5,
    price: 200,
    sizes: ['XS', 'S', 'M'],
    slug: 'women_shirt',
    type: 'remeras',
    tags: ['jacket'],
    title: 'Women Shirt 3',
  } as Product;

  test('Should render correctly in "Cart" type', () => {
    render(<CartItem product={mockProduct} type='Cart' />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('Women Shirt 3')).toBeInTheDocument();
    expect(screen.getByText('$200')).toBeInTheDocument();
    expect(screen.getByText('Tamaño:')).toBeInTheDocument();
    expect(screen.getByText('Cantidad:')).toBeInTheDocument();
    expect(screen.getByLabelText(/remover producto/i)).toBeInTheDocument();

    expect(screen.queryByText('Subtotal:')).not.toBeInTheDocument();
  });

  test('Should render correctly in "Checkout" type', () => {
    render(<CartItem product={mockProduct} type='Checkout' />);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByText('Women Shirt 3')).toBeInTheDocument();
    expect(screen.getByText('Subtotal:')).toBeInTheDocument();
    expect(screen.queryByText('Tamaño:')).not.toBeInTheDocument();
    expect(screen.queryByText('Cantidad:')).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText(/remover producto/i),
    ).not.toBeInTheDocument();
  });
});
