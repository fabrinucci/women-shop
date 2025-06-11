import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';

import Order from '@/app/(shop)/ordenes/[id]/page';
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

describe('Order', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test('Should render title', async () => {
    (getPaginatedProducts as Mock).mockResolvedValue({
      products: [{ id: '1' }, { id: '2' }],
      page: 1,
    });
    render(
      await Order({
        params: Promise.resolve({ id: 'abc' }),
      }),
    );

    expect(
      screen.getByRole('heading', { name: 'Órden #abc' }),
    ).toBeInTheDocument();
  });
});
