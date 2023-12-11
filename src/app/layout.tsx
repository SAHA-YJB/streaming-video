import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'streaming-video',
  description: 'streaming-video',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={`${inter.className} relative`}>
        <Header />
        <NavBar />
        <div className='h-[1900px]'></div>
        {children}
      </body>
    </html>
  );
}
