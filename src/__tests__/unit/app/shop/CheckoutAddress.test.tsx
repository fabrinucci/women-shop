import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import CheckoutAddress from '@/app/(shop)/checkout/address/page';

describe('CheckoutAddress', () => {
  test('Should render title', async () => {
    render(<CheckoutAddress />);

    expect(
      screen.getByRole('heading', { name: /dirección/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/dirección de entrega/i)).toBeInTheDocument();
  });

  test('Should render inputs correctly and button', async () => {
    render(<CheckoutAddress />);

    expect(screen.getByLabelText(/nombres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/apellidos/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dirección/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/código postal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/país/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/provincia/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ciudad/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /siguiente/i })).toHaveAttribute(
      'href',
      '/checkout',
    );
  });
});
