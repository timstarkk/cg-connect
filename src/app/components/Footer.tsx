import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-onBg mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-bold text-primary">CG Connect</div>
          <div className="text-onBg/70">© {new Date().getFullYear()} CG Connect</div>
          <div className="text-onBg/70">Texas, USA</div>
        </div>
        <nav className="flex gap-6">
          <a href="/about" className="text-onBg/70 hover:text-primary transition-colors">About</a>
          <a href="/services" className="text-onBg/70 hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-onBg/70 hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-onBg/60 hover:bg-gray-700 transition-colors cursor-pointer">GH</div>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-onBg/60 hover:bg-gray-700 transition-colors cursor-pointer">LI</div>
        </div>
      </div>
    </footer>
  );
} 