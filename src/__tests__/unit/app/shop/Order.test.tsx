import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Order from '@/app/(shop)/ordenes/[id]/page';

describe('Order', () => {
  test('Should render title', async () => {
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
