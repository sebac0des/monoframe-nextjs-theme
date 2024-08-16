// Next
import type { Metadata } from "next";

// Fonts
import { primary } from "@/app/fonts";

// Styles
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Jalf",
  description: "Productos para profesionales de estetica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={primary.className}>
            {children}
      </body>
    </html>
  );
}
