import { usePathname } from 'next/navigation';
import { describe, expect, Mock, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from '@/components/ui';
import { useUIStore } from '@/store';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn().mockReturnValue('/'),
}));

const renderSidebar = (isOpenMenu: boolean) => {
  useUIStore.setState({ isOpenMenu, closeMenu: vi.fn() });
  return render(<Sidebar />);
};

describe('Sidebar', () => {
  test('Should have the class "translate-x-full" if isOpenMenu is false', () => {
    renderSidebar(false);

    const sidebar = screen.getByLabelText('Menú lateral');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('translate-x-full');
  });

  test('Should have not the class "translate-x-full" if isOpenMenu is true', () => {
    renderSidebar(true);

    const sidebar = screen.getByLabelText('Menú lateral');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).not.toHaveClass('translate-x-full');
  });

  test('Should close the menu by clicking the close button', () => {
    const closeMenu = vi.fn();
    useUIStore.setState({ isOpenMenu: true, closeMenu });

    render(<Sidebar />);

    fireEvent.click(screen.getByLabelText(/cerrar menu/i));
    expect(closeMenu).toHaveBeenCalled();
  });

  test('Should close the menu by clicking the background', () => {
    const closeMenu = vi.fn();
    useUIStore.setState({ isOpenMenu: true, closeMenu });

    render(<Sidebar />);

    const backdrop = screen.getByRole('presentation');
    fireEvent.click(backdrop);
    expect(closeMenu).toHaveBeenCalled();
  });

  test('Should close the menu by pressing "Escape"', () => {
    const closeMenu = vi.fn();
    useUIStore.setState({ isOpenMenu: true, closeMenu });

    render(<Sidebar />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(closeMenu).toHaveBeenCalled();
  });

  test('Should close the menu when changing the route', () => {
    const closeMenu = vi.fn();
    useUIStore.setState({ isOpenMenu: true, closeMenu });
    (usePathname as Mock).mockReturnValueOnce('/nuevo-path');

    render(<Sidebar />);

    expect(closeMenu).toHaveBeenCalled();
  });
});
