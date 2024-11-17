import type { Metadata } from "next";
import {Inter} from "next/font/google"
import { twMerge } from "tailwind-merge";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Taskprod",
  description: "Optimize your workflow with taskprod",
  icons:{
    icon:"taskprod.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(twMerge(inter.className,"antialiased min-h-screen"))}
      >
        {children}
      </body>
    </html>
  );
}
