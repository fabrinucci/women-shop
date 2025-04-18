import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFound } from '@/components/ui';

describe('Not Found', () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  test('Show title, subtitle', () => {
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
    expect(
      screen.getByText('Ups! No encontramos la pagina'),
    ).toBeInTheDocument();
  });

  test('Show link', () => {
    const link = screen.getByRole('link', { name: 'Volver al inicio' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  test('Show image', () => {
    expect(
      screen.getByRole('img', { name: 'Página no encontrada' }),
    ).toBeInTheDocument();
  });
});
