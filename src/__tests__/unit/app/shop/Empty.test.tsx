import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Empty from '@/app/(shop)/empty/page';

describe('Empty', () => {
  test('Should render title, link and image correctly', () => {
    render(<Empty />);

    expect(
      screen.getByRole('heading', { name: /tu carrito esta vacío/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /volver al inicio/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAccessibleName('Carrito vacío');
  });
});
