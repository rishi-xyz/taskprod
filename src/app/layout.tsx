import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={twMerge(geistSans.variable,geistMono.variable,"antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
