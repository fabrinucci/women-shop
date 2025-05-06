import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Orders from '@/app/(shop)/ordenes/page';

describe('Orders', () => {
  test('Should render title', async () => {
    render(<Orders />);
    expect(
      screen.getByRole('heading', { name: /órdenes/i }),
    ).toBeInTheDocument();
  });
});
