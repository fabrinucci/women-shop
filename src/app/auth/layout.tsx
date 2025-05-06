import { Footer } from '@/components/ui';
import Link from 'next/link';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <nav className='bg-bgSecondary flex h-14 w-full items-center justify-between px-2 shadow sm:px-4'>
        <section className='mr-6'>
          <Link href='/' className='text-md' aria-label='Go to home'>
            <span className='font-semibold'>Women</span> <span> | Clothes</span>
          </Link>
        </section>
      </nav>
      <main className='mx-auto w-full flex-1 px-6 py-4 sm:w-[400px] sm:px-0 sm:py-8'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
