
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dérik Sehn",
  description: "Desenvolvedor Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  return (
    <ClerkProvider> 
          {children}  
    </ClerkProvider>
  )
}