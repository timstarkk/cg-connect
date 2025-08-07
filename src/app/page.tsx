import Link from 'next/link';
import type { FC } from 'react';
import Image from 'next/image';
import linkedInIcon from '../../public/LinkedIn.svg';
import githubIcon from '../../public/github.svg';
import leetcodeIcon from '../../public/leet.svg';
import Bio from './components/Bio';
import ProjectHighlights from './components/ProjectHighlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Home: FC = () => {
  return <div className="relative">
    <header className="relative bg-bg text-onBg py-20 md:py-32 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column: Text and CTAs */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-primary">AI Automation</span> for Modern Business
          </h1>
          <p className="text-lg md:text-2xl text-onBg/80 max-w-xl">
            CG Connect helps companies streamline operations, reduce costs, and unlock new growth with intelligent automation solutions powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <Link href="/services">
              <button className="bg-primary text-onPrimary font-semibold px-8 py-3 rounded-full text-base shadow-md hover:bg-primary-dark transition-colors w-full sm:w-auto">Our Services</button>
            </Link>
            <Link href="#contact">
              <button className="bg-accent text-onAccent font-semibold px-8 py-3 rounded-full text-base shadow-md hover:bg-accent-dark transition-colors w-full sm:w-auto">Request a Demo</button>
            </Link>
          </div>
        </div>
        {/* Right column: Illustration or screenshot */}
        <div className="relative flex justify-center md:justify-end items-center">
          <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-bg shadow-xl flex items-center justify-center overflow-hidden">
            {/* Placeholder for product screenshot or illustration */}
            <div className="w-4/5 h-4/5 bg-onBg/10 rounded-xl flex items-center justify-center text-onBg/30 text-2xl font-bold">
              Illustration
            </div>
          </div>
          {/* Subtle background pattern */}
          <div className="absolute -z-10 inset-0 pointer-events-none">
            <svg width="100%" height="100%" className="opacity-20" style={{position:'absolute',top:0,left:0}}>
              <defs>
                <radialGradient id="hero-bg" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#18181B" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-bg)" />
            </svg>
          </div>
        </div>
      </div>
    </header>
    <Bio />
    <Testimonials />
    <ProjectHighlights />
    <Footer />
  </div>;
};

export default Home;