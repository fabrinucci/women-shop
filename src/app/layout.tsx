import type { Metadata } from 'next';
import './globals.css';
import { textFont } from '../config/fonts';

export const metadata: Metadata = {
  title: 'Women clothes',
  description: 'Encuentra tu ropa ideal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${textFont.className} bg-bgPrimary antialiased`}>
        {children}
      </body>
    </html>
  );
}
