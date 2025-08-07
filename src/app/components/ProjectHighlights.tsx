import React from 'react';
import Link from 'next/link';

export default function ProjectHighlights() {
  return (
    <section 
      id="solutions" 
      className="max-w-7xl mx-auto px-6 py-24 bg-surface scroll-mt-16"
    >
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-newsreader font-bold text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-onSurface max-w-2xl mx-auto">
            We deliver intelligent automation for every stage of your business. Explore our core solutions:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Workflow Automation */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4 text-3xl font-bold">1</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Workflow Automation</h3>
            <p className="text-onSurface mb-4">Automate repetitive tasks, approvals, and notifications to boost productivity and reduce errors across your organization.</p>
          </div>
          {/* Data Integration */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4 text-3xl font-bold">2</div>
            <h3 className="text-xl font-semibold text-primary mb-2">Data Integration</h3>
            <p className="text-onSurface mb-4">Connect your apps, databases, and cloud services for seamless, real-time data flow and unified business intelligence.</p>
          </div>
          {/* AI Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-4 text-3xl font-bold">3</div>
            <h3 className="text-xl font-semibold text-primary mb-2">AI Analytics</h3>
            <p className="text-onSurface mb-4">Leverage machine learning to uncover insights, predict trends, and drive smarter business decisions with automated analytics.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 