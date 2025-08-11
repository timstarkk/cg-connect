import React from 'react';
import Link from 'next/link';

type Solution = {
  title: string;
  description: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const solutions: Solution[] = [
  {
    title: 'Workflow Automation',
    description:
      'Automate repetitive tasks, approvals, and notifications to boost productivity and reduce errors across your organization.',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M3 6.75A2.75 2.75 0 015.75 4h3.5A2.75 2.75 0 0112 6.75v.5A2.75 2.75 0 019.25 10H8v4h1.25A2.75 2.75 0 0112 16.75v.5A2.75 2.75 0 019.25 20h-3.5A2.75 2.75 0 013 17.25v-.5A2.75 2.75 0 015.75 14H7v-4H5.75A2.75 2.75 0 013 7.25v-.5zM12 7.5a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v2a.75.75 0 01-.75.75h-5.5A.75.75 0 0112 9.5v-2zm0 9a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v2a.75.75 0 01-.75.75h-5.5a.75.75 0 01-.75-.75v-2z" />
      </svg>
    ),
  },
  {
    title: 'Data Integration',
    description:
      'Connect apps, databases, and cloud services for real-time, reliable data flow and unified business intelligence.',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M12 3c-4.418 0-8 1.79-8 4v2c0 2.21 3.582 4 8 4s8-1.79 8-4V7c0-2.21-3.582-4-8-4zm8 8.5c0 2.21-3.582 4-8 4s-8-1.79-8-4m16 4.5c0 2.21-3.582 4-8 4s-8-1.79-8-4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI Analytics',
    description:
      'Use machine learning to uncover insights, predict trends, and drive smarter decisions with automated analytics.',
    Icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
        <path d="M4 13.5l4-4 3 3 5-5 4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 19.25h18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProjectHighlights() {
  return (
    <section id="solutions" className="relative py-24 scroll-mt-16">
      {/* Background band */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-newsreader font-bold text-primary">
            Our Solutions
          </h2>
          <p className="mt-3 text-lg text-onSurface/80 max-w-2xl mx-auto">
            Intelligent automation tailored to your organization’s needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:-translate-y-0.5 flex flex-col"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-700 leading-7">{description}</p>
              <div className="mt-auto pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark"
                >
                  Learn more
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L14 6.414V17a1 1 0 11-2 0V6.414l-2.293 2.293A1 1 0 018.293 7.293l4-4z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <span className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-onPrimary font-semibold shadow-md hover:bg-primary-dark transition-colors">
              Explore all services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}