import React from 'react';
import Link from 'next/link';

export default function ProjectHighlights() {
  return (
    <section 
      id="projects" 
      className="max-w-7xl mx-auto px-6 py-24 bg-gray-50 scroll-mt-16"
    >
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-newsreader font-bold text-spaceGray mb-4">
            My Work
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 max-w-2xl xl:max-w-none mx-auto">
          {/* MDisrupt */}
          <div className="xl:order-2 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 flex flex-col">
            <div className="h-36 sm:h-48 bg-gray-100 bg-cover bg-center bg-mdisrupt bg-no-repeat" />
            <div className="p-6 relative flex-1 flex flex-col justify-between">
              <a 
                href="https://mdisrupt.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-6 right-6 inline-flex items-center px-3 py-1.5 bg-gray-100 text-spaceGray hover:bg-gray-200 transition-colors duration-200 rounded-sm text-xs font-medium"
              >
                View Project
                <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div className="flex flex-col justify-between h-[175px]">
                <h3 className="text-xl font-newsreader font-semibold text-spaceGray">
                  MDisrupt
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    An AI-powered, Flutter-based expert marketplace for Web, iOS, and Android. Focused on providing operational expertise to health-tech companies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Flutter</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Dart</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Java</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compass Law Group */}
          <div className="xl:order-1 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 flex flex-col">
            <div className="h-48 bg-gray-100 bg-cover bg-center bg-compass bg-no-repeat" />
            <div className="p-6 relative flex-1 flex flex-col justify-between">
              <a 
                href="https://www.compasslawgroup.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-6 right-6 inline-flex items-center px-3 py-1.5 bg-gray-100 text-spaceGray hover:bg-gray-200 transition-colors duration-200 rounded-sm text-xs font-medium"
              >
                View Project
                <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div className="flex flex-col justify-between h-[175px]">
                <h3 className="text-xl font-newsreader font-semibold text-spaceGray">
                  Compass Law Group
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    This website uses a Vue.js frontend, PHP/Laravel backend, and Statamic CMS. There are some great animations on the homepage, and the blog is custom built.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Vue.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">PHP</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Laravel</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Statamic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fivestone */}
          <div className="xl:order-3 bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 flex flex-col">
            <div className="h-48 bg-gray-100 bg-cover bg-center bg-fivestone bg-no-repeat" />
            <div className="p-6 relative flex-1 flex flex-col justify-between">
              <a 
                href="https://fivestone.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-6 right-6 inline-flex items-center px-3 py-1.5 bg-gray-100 text-spaceGray hover:bg-gray-200 transition-colors duration-200 rounded-sm text-xs font-medium"
              >
                View Project
                <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div className="flex flex-col justify-between h-[175px]">
                <h3 className="text-xl font-newsreader font-semibold text-spaceGray">
                  Fivestone
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    I created the website for a design agency in New York using a Vue.js frontend, PHP/Laravel backend, and Statamic CMS.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Vue.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">PHP</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Laravel</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Statamic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 