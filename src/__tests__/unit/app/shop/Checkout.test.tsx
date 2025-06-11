import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import Checkout from '@/app/(shop)/checkout/page';
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

describe('Checkout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('Should render title', async () => {
    (getPaginatedProducts as Mock).mockResolvedValue({
      products: [{ id: '1' }, { id: '2' }],
      page: 1,
    });

    render(await Checkout());

    expect(
      screen.getByRole('heading', { name: 'Verificar Órden' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/¿querés cambiar algún producto?/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /editar carrito/i }),
    ).toHaveAttribute('href', '/carrito');
  });
});
