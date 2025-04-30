import React from 'react';
import '@testing-library/jest-dom';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { server } from './src/mocks';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

// css
vi.mock('swiper/css', () => ({ default: '' }));
vi.mock('swiper/css/free-mode', () => ({ default: '' }));
vi.mock('swiper/css/pagination', () => ({ default: '' }));
vi.mock('swiper/css/navigation', () => ({ default: '' }));
vi.mock('swiper/css/thumbs', () => ({ default: '' }));

vi.mock('@/components/product/slideshow/slideshow.css', () => ({
  default: '',
}));
