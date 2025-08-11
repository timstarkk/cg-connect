"use client";

import { useState } from 'react';
import Link from 'next/link';
import type { FC } from 'react';

export type NavbarProps = {
  something?: any;
};

export const Navbar: FC<NavbarProps> = ({ something, ...props }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-bg/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="h-[62px] w-full max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <h2 className="text-2xl font-newsreader font-semibold text-onBg">CG Connect</h2>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link href="/about" className="text-onBg/80 hover:text-onBg transition-colors">About</Link>
          <Link href="/services" className="text-onBg/80 hover:text-onBg transition-colors">Services</Link>
          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-onBg/80 hover:text-onBg transition-colors"
          >
            Request a Demo
          </Link>
        </div>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-800 focus:outline-none text-onBg"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 pb-4 flex flex-col gap-2">
            <Link href="/about" className="block py-2 text-onBg/80 hover:text-onBg transition-colors">
              About
            </Link>
            <Link href="/services" className="block py-2 text-onBg/80 hover:text-onBg transition-colors">
              Services
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="block py-2 text-onBg/80 hover:text-onBg transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};