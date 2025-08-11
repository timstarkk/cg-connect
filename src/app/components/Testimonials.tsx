import React from 'react';

type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'CG Connect transformed our operations. Their AI automation solutions helped us cut manual work by 60% and improved our data accuracy tremendously.',
    author: 'Sarah Lee',
    title: 'COO, FinTech Corp',
  },
  {
    quote:
      'The team at CG Connect delivered seamless integration with our existing systems. We saw ROI in just a few months.',
    author: 'Michael Chen',
    title: 'IT Director, HealthPlus',
  },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gray-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="circles" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="currentColor" className="text-gray-600"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-newsreader font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-onBg/70">
            Real outcomes from teams who automated with CG Connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="h-full rounded-2xl bg-gray-900/80 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-800/50 border border-gray-800/30 transition hover:shadow-2xl hover:ring-gray-700/50"
            >
              <div className="relative">
                <svg
                  className="absolute -top-2 -left-1 h-6 w-6 text-primary/30"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.17 6A5.17 5.17 0 002 11.17V22h8V11.17A5.17 5.17 0 004.83 6H7.17zm12 0A5.17 5.17 0 0014 11.17V22h8V11.17A5.17 5.17 0 0016.83 6h2.34z" />
                </svg>
                <blockquote className="text-onBg/80 text-base leading-7">
                  "{t.quote}"
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 text-primary grid place-content-center text-sm font-semibold ring-1 ring-primary/30">
                  {getInitials(t.author)}
                </div>
                <div>
                  <div className="font-medium text-onBg">{t.author}</div>
                  <div className="text-sm text-onBg/60">{t.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Optional: subtle note for social proof */}
        <div className="mt-10 text-center text-sm text-onBg/50">
          Trusted by teams across finance and healthcare
        </div>
      </div>
    </section>
  );
}