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
    <header className="h-[551px] bg-spaceGray text-spaceWhite flex flex-col justify-center items-center gap-4 bg-[url('../../astro.avif')] bg-[center_200px_left_200px] bg-no-repeat bg-contain">
      <h2 className="text-6xl font-newsreader font-bold">CG Connect</h2>
      <h3 className="text-xl font-newsreader font-semibold">Automate your business with AI</h3>
      <div className="flex gap-4">
        <Link href="/services">
          <button className="bg-spaceWhite text-spaceGray font-semibold px-12 py-4 rounded-sm text-sm hover:bg-opacity-90">Our Services</button>
        </Link>
        <Link href="#" target="_blank" rel="noreferrer">
        <button className="bg-spaceWhite text-spaceGray font-semibold px-12 py-4 rounded-sm text-sm hover:bg-opacity-90">Request a Demo</button>
        </Link>
      </div>
    </header>
    <Bio />
    <Testimonials />
    <ProjectHighlights />
    <Footer />
  </div>;
};

export default Home;