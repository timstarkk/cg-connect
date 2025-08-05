import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <div className="space-y-1">
            <div>© {new Date().getFullYear()} Tim Stark</div>
            <div>Texas, USA</div>
          </div>
          <div className="space-y-1 md:text-right">
            <div>
              <a 
                href="mailto:timstark.co@gmail.com"
                className="hover:text-gray-800 transition-colors"
              >
                tim@timstark.dev
              </a>
            </div>
            <div>
              <a 
                href="tel:+18327738377"
                className="hover:text-gray-800 transition-colors"
              >
                (512) 650-8565
              </a>
            </div>
          </div>
          <div className="flex gap-4 md:ml-8">
            <a 
              href="https://github.com/timstarkk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/tim-stark-00722a113/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 