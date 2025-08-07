import React from 'react';

export default function Bio() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-primary mb-3">
            About CG Connect
          </h3>
          <div className="text-base text-onSurface leading-relaxed">
            <p>
              CG Connect empowers businesses to automate complex processes, integrate data, and accelerate growth using cutting-edge AI technology. Our mission is to make advanced automation accessible, secure, and scalable for organizations of all sizes.
            </p>
            <p className="mt-3">
              We believe in delivering measurable results—improved efficiency, reduced costs, and new opportunities for innovation—by combining deep technical expertise with a client-first approach.
            </p>
          </div>
        </div>
        <div className="bg-surface p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Why Choose Us
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-base text-onSurface">
            <li>End-to-end automation solutions tailored to your business</li>
            <li>Seamless integration with your existing tools and workflows</li>
            <li>Enterprise-grade security and compliance</li>
            <li>Expert support from strategy to implementation</li>
            <li>Proven results across multiple industries</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 