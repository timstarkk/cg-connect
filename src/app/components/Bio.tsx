import React from 'react';

export default function Bio() {
  return (
    <section className="relative py-20 bg-bg">
      {/* Subtle background pattern for visual interest */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" className="opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-700"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* About card */}
          <div className="md:col-span-7">
            <div className="h-full rounded-2xl bg-gray-900/80 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-800/50 border border-gray-800/30">
              <h3 className="text-2xl font-newsreader font-semibold text-primary mb-4">
                About CG Connect
              </h3>
              <div className="space-y-4 text-onBg/90 leading-7">
                <p>
                  CG Connect empowers businesses to automate complex processes, integrate data,
                  and accelerate growth using cutting-edge AI technology. Our mission is to make
                  advanced automation accessible, secure, and scalable for organizations of all sizes.
                </p>
                <p>
                  We deliver measurable outcomes—higher efficiency, reduced costs, and new opportunities
                  for innovation—by combining deep technical expertise with a client-first approach.
                </p>
              </div>
            </div>
          </div>

          {/* Why choose us card */}
          <div className="md:col-span-5">
            <div className="h-full rounded-2xl bg-gray-900/80 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-800/50 border border-gray-800/30">
              <h3 className="text-2xl font-newsreader font-semibold text-primary mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-3">
                {[
                  'End-to-end automation solutions tailored to your business',
                  'Seamless integration with your existing tools and workflows',
                  'Enterprise-grade security and compliance',
                  'Expert support from strategy to implementation',
                  'Proven results across multiple industries',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-onBg/90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.28 4.514-1.74-1.74a.75.75 0 10-1.06 1.061l2.25 2.25a.75.75 0 001.14-.094l3.904-5.109z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}