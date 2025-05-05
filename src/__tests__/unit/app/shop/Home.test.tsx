import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Home from '@/app/(shop)/page';

vi.mock('@/components/products', () => ({
  ProductGrid: () => <div data-testid='ProductGrid'>Mocked ProductGrid</div>,
}));

describe('Home', () => {
  test('Should render title and products', async () => {
    render(await Home());

    expect(screen.getByRole('heading', { name: 'Tienda' })).toBeInTheDocument();
    expect(screen.getByText('Todos los productos')).toBeInTheDocument();
    expect(screen.getByTestId('ProductGrid')).toBeInTheDocument();
  });
});
