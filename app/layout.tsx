import type { Metadata } from "next";
import "./globals.css";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
