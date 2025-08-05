import React from 'react';

const testimonials = [
  {
    quote: "Tim is a dedicated and motivated developer with a keen eye for identifying solutions to problems that come his way. In each project that we have worked together, Tim has worked tirelessly to make sure the solution that we are providing is above and beyond expectations. He is motivated, humble, sharp, and willing to learn whatever is asked of him. He would, without a doubt, be an asset to any team that he works on.",
    author: "Tommy Vinyard",
    title: "Lead Software Engineer, Oracle"
  },
  {
    quote: "Tim is a knowledgeable developer who will effortlessly prove to be an asset in any development team he's part of. He thinks quick in his feet, and will continuously surprise you with his 'out of the box' thinking and fresh approaches to problems. He's effective, fast, and is an excellent problem-solver. I would recommend Tim to any developer related position.",
    author: "Erwin Angeles",
    title: "Software Engineer, TrackFive"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
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