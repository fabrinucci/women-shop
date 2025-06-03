import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import Category from '@/app/(shop)/categoria/[category]/page';
import { notFound } from 'next/navigation';
import { getPaginatedProducts } from '@/actions';

vi.mock('@/components/products', () => ({
  ProductGrid: () => <div data-testid='ProductGrid'>Mocked ProductGrid</div>,
}));

vi.mock('@/components/ui', () => ({
  Title: ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  ),
  Pagination: () => <div data-testid='Pagination'>Mocked Pagination</div>,
}));

vi.mock('@/actions', () => ({
  getPaginatedProducts: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

describe('Category', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render title and products', async () => {
    (getPaginatedProducts as Mock).mockResolvedValue({
      products: [{ id: '1' }, { id: '2' }],
      totalPages: 3,
    });
    render(
      await Category({
        params: Promise.resolve({ category: 'remeras' }),
        searchParams: Promise.resolve({ page: '2' }),
      }),
    );

    expect(
      screen.getByRole('heading', { name: 'remeras' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Todos los productos')).toBeInTheDocument();
    expect(screen.getByTestId('ProductGrid')).toBeInTheDocument();
  });

  test('Should call redirect when there are no products', async () => {
    (getPaginatedProducts as Mock).mockResolvedValue({
      products: [],
      totalPages: 0,
    });
    await Category({
      params: Promise.resolve({ category: 'remeras' }),
      searchParams: Promise.resolve({ page: '2' }),
    });
    expect(notFound).toHaveBeenCalled();
  });
});
