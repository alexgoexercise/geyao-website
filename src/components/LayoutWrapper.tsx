"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/";

  return (
    <>
      {showNavbar && <Navbar />}
      <main className={showNavbar ? "pt-14" : ""}>
        {children}
      </main>
    </>
  );
} 