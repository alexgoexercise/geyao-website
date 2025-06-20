"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/bands", label: "Bands" },
    { href: "/people", label: "People" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out animate-fade-in-down ${
        hasScrolled
          ? "bg-background/80 shadow-lg backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-2xl font-bold">
            Geyao
          </Link>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-lg text-gray-300 hover:text-white transition-colors duration-300",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out",
                  "hover:after:scale-x-100",
                   pathname === link.href && "after:scale-x-100 text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-3xl text-gray-400 hover:text-white transition-colors duration-300",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 