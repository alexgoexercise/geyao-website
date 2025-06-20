import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Geyao Music CCA",
  description: "Official website for Geyao Music CCA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={manrope.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
