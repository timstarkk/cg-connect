import React from 'react';

export default function Bio() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-gray-50/50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            About Me
          </h3>
          <div className="grid grid-cols-1 gap-y-2 gap-x-4 text-xs text-gray-600">
            <p className="text-sm leading-relaxed text-gray-600">
              I&apos;m a software engineer who builds web apps and marketplaces. Over 4+ years, my work has helped secure funding rounds and driven business growth.
            </p>
          </div>
        </div>

        <div className="bg-gray-50/50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-900 mb-3">
            Technical Focus
          </h3>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              React/Next.js
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              TypeScript
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              Java Spring Boot
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              AWS
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              Flutter
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              Dart
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 