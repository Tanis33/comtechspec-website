import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-slate-300 text-white py-2 font-istok sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-8 py-4">
        <div className="text-lg font-bold">
          <a href="/">
            <Image
              src="/logo-main.png"
              alt="ComTech Specialist Logo"
              width={240}
              height={64}
            />
          </a>
        </div>

        <div className="md:hidden relative">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className={`${menuOpen ? 'bg-gray-700' : ''}`}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </Button>
          <div className={`absolute right-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg ${menuOpen ? 'block' : 'hidden'}`}>
            <Button variant="ghost" className="text-lg text-black font-bold w-full text-left px-4 py-2" asChild>
              <a href="/#services" onClick={closeMenu}>Services</a>
            </Button>
            <Button variant="ghost" className="text-lg text-black font-bold w-full text-left px-4 py-2" asChild>
              <a href="/#about" onClick={closeMenu}>About Us</a>
            </Button>
            <Button variant="ghost" className="text-lg text-black font-bold w-full text-left px-4 py-2" asChild>
              <a href="/#faq" onClick={closeMenu}>FAQ</a>
            </Button>
            <Button variant="ghost" className="text-lg text-black font-bold w-full text-left px-4 py-2" asChild>
              <a href="/customer" onClick={closeMenu}>Customer Portal</a>
            </Button>
            <Button variant="ghost" className="text-lg text-black font-bold w-full text-left px-4 py-2" asChild>
              <a href="/#contact" onClick={closeMenu}>Contact</a>
            </Button>
          </div>
        </div>

        <div className="hidden md:flex space-x-4 text-black text-2xl">
          <Button variant="ghost" className="px-8 font-bold text-lg" asChild>
            <a href="/#services">Services</a>
          </Button>
          <Button variant="ghost" className="px-8 font-bold text-lg" asChild>
            <a href="/#about">About Us</a>
          </Button>
          <Button variant="ghost" className="px-8 font-bold text-lg" asChild>
            <a href="/#faq">FAQ</a>
          </Button>
          <Button variant="secondary" className="px-8 font-bold text-lg" asChild>
            <a href="/customer">Customer Portal</a>
          </Button>
          <Button variant="secondary" className="px-12 font-bold text-lg" asChild>
            <a href="/#contact">Contact</a>
          </Button>
        </div>
      </nav>
    </header>
  );
}