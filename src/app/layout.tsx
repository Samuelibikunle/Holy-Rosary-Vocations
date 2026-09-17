import type { Metadata } from 'next';
import { Anton, Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Holy Rosary Vocations | Missionary Sisters of the Holy Rosary',
  description:
    'For young women exploring religious life. A place to ask the question honestly, in your own time, with Sisters who once asked it too.',
  keywords: [
    'Holy Rosary Sisters',
    'MSHR',
    'Catholic Vocations',
    'Religious Life',
    'Missionary Sisters',
    'Discernment',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${anton.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
