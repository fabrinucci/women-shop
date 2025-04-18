import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import type { Product } from '@/interfaces/products';
import { ProductGridItem } from '@/components/products/product-grid/ProductGridItem';

describe('ProductGridItem', () => {
  const mockProduct = {
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
  } as Product;

  test('Render title, price and image correctly', () => {
    render(<ProductGridItem product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();

    const imgs = screen.getAllByRole('img');

    expect(imgs.length).toBe(2);
    expect(imgs[0]).toHaveAttribute('src', `products/${mockProduct.images[0]}`);
    expect(imgs[1]).toHaveAttribute('src', `products/${mockProduct.images[1]}`);
  });

  test('Have a link to the product', () => {
    render(<ProductGridItem product={mockProduct} />);
    const links = screen.getAllByRole('link');

    links.forEach((link) =>
      expect(link).toHaveAttribute('href', `producto/${mockProduct.slug}`),
    );
  });
});
