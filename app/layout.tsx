import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheng Sirui - Next Gen Resume",
  description: "Interactive Scrollytelling Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}