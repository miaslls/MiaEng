import './globals.css';

import dynamic from 'next/dynamic';
import type { Metadata, Viewport } from 'next';
import { Work_Sans, Outfit } from 'next/font/google';
import { getTheme } from '@lib/theme';

const DeviceProvider = dynamic(
  () => import('@providers/DeviceContextProvider'),
  { ssr: false },
);

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
  title: 'MiaEng',
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
  variable: '--font-work_sans',
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
            <div className="layout_container">
              <div className="child_container">{children}</div>
            </div>
          </ThemeProvider>
        </DeviceProvider>
      </body>
    </html>
  );
}
