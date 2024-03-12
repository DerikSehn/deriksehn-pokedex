
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { StoreProvider } from "../StoreProvider";

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
        <StoreProvider  >
          {children} 
        </StoreProvider>
    </ClerkProvider>
  )
}