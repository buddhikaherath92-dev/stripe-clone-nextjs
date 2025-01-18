import { Sono, Trispace, Roboto } from "next/font/google";

export const sono = Sono({
  variable: "--font-sono",
  subsets: ["latin"],
});

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
  weight: '500'
});

export const trispace = Trispace({
  variable: "--font-trispace",
  subsets: ["latin"],
});
