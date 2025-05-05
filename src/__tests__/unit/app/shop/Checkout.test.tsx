import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Checkout from '@/app/(shop)/checkout/page';

describe('Checkout', () => {
  test('Should render title', async () => {
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
