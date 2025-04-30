import { Footer, TopMenu } from '@/components/ui';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <TopMenu />
      <main className='flex-1'>
        <div className='p-4 sm:p-8'>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
