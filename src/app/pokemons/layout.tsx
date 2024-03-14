
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
  
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokéDex",
  description: "Derik Sehn made this PokéDex. It's a example of how to use Next.js, Redux and TailwindCSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return children 
}