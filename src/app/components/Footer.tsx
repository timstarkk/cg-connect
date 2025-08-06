import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <div className="space-y-1">
            <div>© {new Date().getFullYear()} CG Connect</div>
            <div>Texas, USA</div>
          </div>
          <div className="space-y-1 md:text-right">
            <div>
              <a 
                href="mailto:timstark.co@gmail.com"
                className="hover:text-gray-800 transition-colors"
              >
                devops@cg-connect.com
              </a>
            </div>
            <div>
              <a 
                href="tel:+18327738377"
                className="hover:text-gray-800 transition-colors"
              >
                (555) 555-5555
              </a>
            </div>
          </div>
          <div className="flex gap-4 md:ml-8">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#" 
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