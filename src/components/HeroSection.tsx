"use client";

import Link from "next/link";

const HeroSection = () => {
  const navLinks = [
    { href: "/bands", label: "Bands" },
    { href: "/people", label: "People" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="relative z-10 bg-gray-800/50 p-8 md:p-12 rounded-lg shadow-2xl backdrop-blur-sm border border-white/10">
        <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Geyao Music</h1>
            <p className="text-lg text-gray-300 mt-2">Interactive Menu</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              passHref
              className="group relative flex items-center justify-center h-24 w-24 md:h-28 md:w-28 rounded-full bg-gray-700/50 text-white font-semibold shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-600/70 hover:scale-105"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 