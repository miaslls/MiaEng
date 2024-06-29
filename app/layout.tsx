import * as React from 'react';
import './globals.css';

import dynamic from 'next/dynamic';
import type { Metadata, Viewport } from 'next';
import { Work_Sans, Outfit } from 'next/font/google';
import { getTheme } from '@lib/theme';

import Header from '@components/header/Header';
import HamburgerMenu from '@components/menu/HamburgerMenu';
import Footer from '@components/footer/Footer';
import DeviceProvider from '@providers/DeviceContextProvider';
import MenuProvider from '@providers/MenuContextProvider';

const ThemeProvider = dynamic(() => import('@providers/ThemeContextProvider'), {
  ssr: false,
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#663399' },
    { media: '(prefers-color-scheme: dark)', color: '#663399' },
  ],
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  title: 'MiaEng - tools & games',
  description: '',
  keywords: [],
  authors: [
    {
      name: 'Camila Salles',
      url: new URL('https://github.com/miaslls'),
    },
  ],
  generator: 'Next.js',
  referrer: 'no-referrer',
};

const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${work_sans.variable} ${outfit.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>

      <body>
        <DeviceProvider>
          <ThemeProvider>
            <MenuProvider>
              <div className="layout-container">
                <Header />
                <HamburgerMenu />
                <div className="child-container">{children}</div>
                <Footer />
              </div>
            </MenuProvider>
          </ThemeProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
