import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School of Aviation Management - Where Dreams Take Flight",
  description:
    "Leading aviation education institute offering comprehensive programs in aviation management, aeronautical engineering, pilot training, and more.",
  generator: "bkrishal- github",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-24`}>{children}</body>
    </html>
  );
}
