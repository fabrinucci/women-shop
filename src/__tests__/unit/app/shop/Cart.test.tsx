import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import Cart from '@/app/(shop)/carrito/page';
import { getPaginatedProducts } from '@/actions';

vi.mock('@/components/ui', () => ({
  Title: ({ title }: { title: string }) => (
    <div>
      <h1>{title}</h1>
    </div>
  ),
  PrimaryLink: () => (
    <button data-testid='PrimaryLink'>Mocked PrimaryLink</button>
  ),
}));

vi.mock('@/components/cart', () => ({
  CartItem: () => <div data-testid='CartItem'>Mocked CartItem</div>,
}));

vi.mock('@/actions', () => ({
  getPaginatedProducts: vi.fn(),
}));

describe('Cart', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render title', async () => {
    (getPaginatedProducts as Mock).mockResolvedValue({
      products: [{ id: '1' }, { id: '2' }],
      page: 1,
    });

    render(await Cart());

    expect(
      screen.getByRole('heading', { name: /carrito/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/¿querés ver más productos?/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /continuar comprando/i }),
    ).toHaveAttribute('href', '/');
  });
});
