import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Category from '@/app/(shop)/categoria/[id]/page';
import { notFound } from 'next/navigation';

vi.mock('@/components/products', () => ({
  ProductGrid: () => <div data-testid='ProductGrid'>Mocked ProductGrid</div>,
}));

vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

describe('Category', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render title and products', async () => {
    render(
      await Category({
        params: Promise.resolve({ id: 'shirts' }),
      }),
    );

    expect(screen.getByRole('heading', { name: 'shirts' })).toBeInTheDocument();
    expect(screen.getByText('Todos los productos')).toBeInTheDocument();
    expect(screen.getByTestId('ProductGrid')).toBeInTheDocument();
  });

  test('Should call notFound when there are no products', async () => {
    await Category({ params: Promise.resolve({ id: 'categoria-falsa' }) });
    expect(notFound).toHaveBeenCalled();
  });
});
