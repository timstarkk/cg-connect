import React from 'react';

const testimonials = [
  {
    quote: "CG Connect transformed our operations. Their AI automation solutions helped us cut manual work by 60% and improved our data accuracy tremendously.",
    author: "Sarah Lee",
    title: "COO, FinTech Corp"
  },
  {
    quote: "The team at CG Connect delivered seamless integration with our existing systems. We saw ROI in just a few months.",
    author: "Michael Chen",
    title: "IT Director, HealthPlus"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-surface border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-primary mb-10 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tommy's testimonial - First on mobile, Last on desktop */}
          <div className="relative order-first md:order-last md:col-span-2">
            <div className="absolute -top-2 left-0 text-4xl text-spaceGray opacity-20">
              &ldquo;
            </div>
            <blockquote className="relative pl-6">
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-6 mb-3">
                {testimonials[0].quote}
              </p>
              <footer>
                <div className="font-semibold text-spaceGray text-sm">
                  {testimonials[0].author}
                </div>
                <div className="text-xs text-gray-600">
                  {testimonials[0].title}
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Erwin's testimonial - Second on mobile, First on desktop */}
          <div className="relative order-last md:order-first">
            <div className="absolute -top-2 left-0 text-4xl text-spaceGray opacity-20">
              &ldquo;
            </div>
            <blockquote className="relative pl-6">
              <p className="text-gray-700 text-sm leading-relaxed line-clamp-4 mb-3">
                {testimonials[1].quote}
              </p>
              <footer>
                <div className="font-semibold text-spaceGray text-sm">
                  {testimonials[1].author}
                </div>
                <div className="text-xs text-gray-600">
                  {testimonials[1].title}
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
} 