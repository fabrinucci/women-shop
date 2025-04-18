import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TopMenu } from '@/components/ui';

describe('TopMenu', () => {
  beforeEach(() => {
    render(<TopMenu />);
  });

  test('Render the home link correctly', () => {
    const homelink = screen.getByRole('link', { name: 'Go to home' });
    expect(homelink).toBeInTheDocument();
    expect(homelink).toHaveTextContent(/^Women \| Clothes$/);
  });

  test('Render categories links', () => {
    expect(screen.getByRole('link', { name: 'Ropa' })).toHaveAttribute(
      'href',
      '/categoria/ropa',
    );
    expect(screen.getByRole('link', { name: 'Carteras' })).toHaveAttribute(
      'href',
      '/categoria/carteras',
    );
    expect(screen.getByRole('link', { name: 'Zapatos' })).toHaveAttribute(
      'href',
      '/categoria/zapatos',
    );
  });

  test('Render search, cart and menu links', () => {
    const searchLink = screen.getByRole('link', { name: /buscar/i });
    const cartLink = screen.getByRole('link', { name: /abrir carrito/i });
    const menuButton = screen.getByRole('button', { name: /abrir menu/i });

    expect(cartLink).toHaveAttribute('href', '/carrito');
    expect(menuButton).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });
});
