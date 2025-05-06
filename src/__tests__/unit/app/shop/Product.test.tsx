import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Product from '@/app/(shop)/producto/[slug]/page';

vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

vi.mock('@/components/product', () => ({
  ProductMobileSlideshow: () => (
    <div data-testid='ProductMobileSlideshow'></div>
  ),
  ProductDesktopSlideshow: () => (
    <div data-testid='ProductDesktopSlideshow'></div>
  ),
  QuantitySelector: () => <div data-testid='QuantitySelector'></div>,
  SizeSelector: () => <div data-testid='SizeSelector'></div>,
}));

describe('Product', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render components', async () => {
    render(
      await Product({
        params: Promise.resolve({ slug: 'men_s3xy_tee' }),
      }),
    );

    expect(screen.getByTestId('ProductMobileSlideshow')).toBeInTheDocument();
    expect(screen.getByTestId('ProductDesktopSlideshow')).toBeInTheDocument();
    expect(screen.getByTestId('QuantitySelector')).toBeInTheDocument();
    expect(screen.getByTestId('SizeSelector')).toBeInTheDocument();
  });
});
