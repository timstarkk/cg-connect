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
  return <div className="relative bg-bg min-h-screen">
    <header className="relative bg-bg text-onBg py-20 md:py-32 px-4 md:px-0 overflow-hidden">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-bg" />
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-700"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column: Text and CTAs */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-primary">AI Automation</span> for Modern Business
          </h1>
          <p className="text-lg md:text-2xl text-onBg/90 max-w-xl">
            CG Connect helps companies streamline operations, reduce costs, and unlock new growth with intelligent automation solutions powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <Link href="/services">
              <button className="bg-primary text-onPrimary font-semibold px-8 py-3 rounded-full text-base shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-300 w-full sm:w-auto transform hover:scale-105">Our Services</button>
            </Link>
            <Link href="#contact">
              <button className="bg-accent text-onAccent font-semibold px-8 py-3 rounded-full text-base shadow-lg hover:bg-accent-dark hover:shadow-xl transition-all duration-300 w-full sm:w-auto transform hover:scale-105">Request a Demo</button>
            </Link>
          </div>
        </div>
        {/* Right column: Illustration or screenshot */}
        <div className="relative flex justify-center md:justify-end items-center">
          <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-bg shadow-2xl flex items-center justify-center overflow-hidden ring-1 ring-primary/30 border border-primary/20">
            {/* Placeholder for product screenshot or illustration */}
            <div className="w-4/5 h-4/5 bg-onBg/15 rounded-xl flex items-center justify-center text-onBg/40 text-2xl font-bold backdrop-blur-sm">
              Illustration
            </div>
          </div>
          {/* Enhanced background pattern */}
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