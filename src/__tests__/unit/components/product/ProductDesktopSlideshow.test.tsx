import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';
import { ProductDesktopSlideshow } from '@/components/product';

describe('ProductDesktopSlideshow', () => {
  const mockImages = ['shirt1.jpg', 'shirt2.jpg', 'shirt3.jpg'];
  const mockTitle = 'Test Shirt';

  beforeEach(() => {
    render(<ProductDesktopSlideshow title={mockTitle} images={mockImages} />);
  });

  test('Should render the correct number of slides including thumbs', () => {
    const slides = screen.getAllByRole('img');
    expect(slides).toHaveLength(mockImages.length * 2);
  });

  test('Should render product images correctly', () => {
    mockImages.forEach((img, index) => {
      const image = screen
        .getAllByAltText(`${mockTitle} ${index + 1}`)
        .find((element) => element.getAttribute('src')?.includes(img));

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute(
        'src',
        expect.stringContaining(`/products/${img}`),
      );
    });
  });
});
