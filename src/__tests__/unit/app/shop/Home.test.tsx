import { render, screen } from '@testing-library/react';
import { describe, expect, Mock, test, vi } from 'vitest';
import Home from '@/app/(shop)/page';
import { beforeEach } from 'node:test';
import { getPaginatedProducts } from '@/actions';
import { redirect } from 'next/navigation';

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
  redirect: vi.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render Title, ProductGrid and Pagination', async () => {
    (getPaginatedProducts as Mock).mockResolvedValue({
      products: [{ id: '1' }, { id: '2' }],
      totalPages: 3,
    });
    render(
      await Home({
        searchParams: Promise.resolve({ page: '2' }),
      }),
    );

    expect(screen.getByRole('heading', { name: 'Tienda' })).toBeInTheDocument();
    expect(screen.getByText('Todos los productos')).toBeInTheDocument();
    expect(screen.getByTestId('ProductGrid')).toBeInTheDocument();
    expect(screen.getByTestId('Pagination')).toBeInTheDocument();
  });

  test('Should call redirect when there are no products', async () => {
    const mockedGetPaginatedProducts = getPaginatedProducts as unknown as Mock;
    mockedGetPaginatedProducts.mockResolvedValue({
      products: [],
      totalPages: 0,
    });

    await Home({ searchParams: Promise.resolve({ page: '1' }) });

    expect(redirect).toHaveBeenCalledWith('/');
  });

  test('Should use page 1 if no page is received', async () => {
    const mockedGetPaginatedProducts = getPaginatedProducts as unknown as Mock;
    mockedGetPaginatedProducts.mockResolvedValue({
      products: [{ id: '1' }],
      totalPages: 2,
    });

    await Home({ searchParams: Promise.resolve({}) });

    expect(mockedGetPaginatedProducts).toHaveBeenCalledWith({ page: 1 });
  });
});
