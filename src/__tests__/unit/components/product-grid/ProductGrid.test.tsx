import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import type { Product } from '@/interfaces/products';
import { ProductGrid } from '@/components/products';

vi.mock('@/components/products/product-grid/ProductGridItem', () => ({
  ProductGridItem: vi.fn(() => <div data-testid='ProductGridItem'></div>),
}));

describe('ProductGrid', () => {
  const mockProducts = [
    {
      description: "The Women's Quilted Shirt Jacket features a uniquely fit.",
      images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
      inStock: 5,
      price: 200,
      sizes: ['XS', 'S', 'M'],
      slug: 'women_shirt',
      type: 'shirts',
      tags: ['jacket'],
      title: 'Women Shirt',
      gender: 'women',
    },
    {
      description: "Designed to celebrate Tesla's incredible performance mode.",
      images: ['1549275-00-A_0_2000.jpg', '1549275-00-A_1.jpg'],
      inStock: 16,
      price: 35,
      sizes: ['S', 'M'],
      slug: 'women_plaid_mode_tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Women's Plaid Mode Tee",
      gender: 'women',
    },
  ] as Product[];

  test('Should be the correct amount of Items', () => {
    render(<ProductGrid products={mockProducts} />);
    expect(screen.getAllByTestId('ProductGridItem')).length(2);
  });
});
