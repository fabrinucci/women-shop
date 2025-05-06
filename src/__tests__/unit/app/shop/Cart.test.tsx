import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Cart from '@/app/(shop)/carrito/page';

describe('Cart', () => {
  test('Should render title', async () => {
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
