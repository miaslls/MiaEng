import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans, Outfit } from 'next/font/google';

export const metadata: Metadata = {
  title: "MiaEng",
  description: "",
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
      <body>{children}</body>
    </html>
  );
}
