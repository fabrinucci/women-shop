import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Title } from '@/components/ui';

describe('Title', () => {
  test('Show the correct title', () => {
    render(<Title title='Title test' />);
    expect(
      screen.getByRole('heading', { name: 'Title test' }),
    ).toBeInTheDocument();

    expect(screen.queryByRole('paragraph')).not.toBeInTheDocument();
  });

  test('Show subtitle if exists', () => {
    render(<Title title='Title test' subtitle='Nuevo producto' />);
    expect(screen.getByText('Nuevo producto')).toBeInTheDocument();
  });
});
