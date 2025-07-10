import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import FontAwesomeProvider from './FontAwesomeProvider';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
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
      <body className={`${spaceGrotesk.className} ${spaceGrotesk.variable}`}>
        <FontAwesomeProvider />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
