import type { Metadata } from "next";
import { Sono, Trispace } from "next/font/google";
import "./globals.css";
import  Navbar  from '@/app/_components/advanced/navbar';

const sono = Sono({
  variable: "--font-sono",
  subsets: ["latin"],
});

const trispace = Trispace({
  variable: "--font-trispace",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stripe Clone NextJs",
  description: "Clone of Stripe landing page with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sono.variable} ${trispace.variable} antialiased`}
      >
        <header>
            <Navbar></Navbar>
        </header>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
