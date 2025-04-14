import { Poppins, Playfair_Display } from 'next/font/google';

export const textFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const titleFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});
