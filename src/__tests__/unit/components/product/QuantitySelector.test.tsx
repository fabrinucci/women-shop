import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { QuantitySelector } from '@/components/product';

describe('QuantitySelector', () => {
  test('Should render the elements correctly', () => {
    render(<QuantitySelector quantity={3} inStock={10} iconSize={20} />);
    expect(screen.getByTestId('quantity-product')).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /remover un producto/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /agregar un producto/i,
      }),
    ).toBeInTheDocument();
  });

  test('Should the count working correctly', () => {
    render(<QuantitySelector quantity={1} inStock={10} iconSize={20} />);
    const removeButton = screen.getByRole('button', {
      name: /remover un producto/i,
    });
    const addButton = screen.getByRole('button', {
      name: /agregar un producto/i,
    });

    const count = screen.getByTestId('quantity-product');
    expect(count).toHaveTextContent('1');

    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(count).toHaveTextContent('3');

    fireEvent.click(removeButton);
    expect(count).toHaveTextContent('2');
  });

  test('Should not increase by more than 5', () => {
    render(<QuantitySelector quantity={4} inStock={10} iconSize={20} />);
    const addButton = screen.getByRole('button', {
      name: /agregar un producto/i,
    });

    const count = screen.getByTestId('quantity-product');
    expect(count).toHaveTextContent('4');

    fireEvent.click(addButton);
    expect(count).toHaveTextContent('5');
    fireEvent.click(addButton);
    expect(count).toHaveTextContent('5');
  });

  test('Should not increase if stock is exceeded', () => {
    render(<QuantitySelector quantity={2} inStock={4} iconSize={20} />);

    const addButton = screen.getByRole('button', {
      name: /agregar un producto/i,
    });
    const count = screen.getByTestId('quantity-product');
    expect(count).toHaveTextContent('2');

    fireEvent.click(addButton);
    fireEvent.click(addButton);

    expect(count).toHaveTextContent('4');

    fireEvent.click(addButton);
    expect(count).toHaveTextContent('4');
  });

  test('Should not reduce by more than 1', () => {
    render(<QuantitySelector quantity={2} inStock={4} iconSize={20} />);
    const removeButton = screen.getByRole('button', {
      name: /remover un producto/i,
    });

    const count = screen.getByTestId('quantity-product');
    expect(count).toHaveTextContent('2');

    fireEvent.click(removeButton);
    expect(count).toHaveTextContent('1');

    fireEvent.click(removeButton);
    expect(count).toHaveTextContent('1');
  });
});
