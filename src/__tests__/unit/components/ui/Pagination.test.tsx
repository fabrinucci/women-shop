import { beforeEach, describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pagination } from '@/components/ui';

const usePathnameMock = vi.fn();
const useSearchParamsMock = vi.fn();

vi.mock('next/navigation', () => ({
  usePathname: () => usePathnameMock(),
  useSearchParams: () => useSearchParamsMock(),
}));

describe('Pagination', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    usePathnameMock.mockReturnValue('/');
  });

  test('Should render pagination correctly', () => {
    useSearchParamsMock.mockReturnValue(new URLSearchParams('page=3'));

    render(<Pagination totalPages={8} />);

    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
    expect(screen.getByText('8')).toBeInTheDocument();

    const activePage = screen.getByText('3');
    expect(activePage).toHaveClass('bg-secondary');
  });

  test('Should render correctly on the first page', () => {
    useSearchParamsMock.mockReturnValue(new URLSearchParams('page=1'));

    render(<Pagination totalPages={5} />);
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    const previous = screen.getByText('Anterior');
    expect(previous).toHaveClass('pointer-events-none');
  });

  test('Should render correctly on the last page', () => {
    useSearchParamsMock.mockReturnValue(new URLSearchParams('page=10'));

    render(<Pagination totalPages={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();

    const next = screen.getByText('Siguiente');
    expect(next).toHaveClass('pointer-events-none');
  });

  test('Should use "page 1" when there is no "page" param', () => {
    useSearchParamsMock.mockReturnValue(new URLSearchParams(''));

    render(<Pagination totalPages={5} />);
    expect(screen.getByText('1')).toHaveClass('bg-secondary');
  });
});
