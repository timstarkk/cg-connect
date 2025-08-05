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
      <h2 className="text-6xl font-newsreader font-bold">Tim Stark</h2>
      <h3 className="text-xl font-newsreader font-semibold">Full-Stack Software Engineer</h3>
      <div className="flex gap-4 py-4">
        <Link href="https://www.linkedin.com/in/tim-stark-00722a113/" target="_blank" rel="noreferrer">
          <Image
            className="h-5 w-5"
            priority
            src={linkedInIcon}
            alt="Follow us on Twitter"
          />
        </Link>
        <Link href="https://www.github.com/timstarkk" target="_blank" rel="noreferrer">
          <Image
            className="h-5 w-5 "
            priority
            src={githubIcon}
            alt="Follow us on Twitter"
          />
        </Link>
        <Link href="https://leetcode.com/timstarkk/" target="_blank" rel="noreferrer">
          <Image
            className="h-5 w-5"
            priority
            src={leetcodeIcon}
            alt="Follow us on Twitter"
          />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link href="/projects">
          <button className="bg-spaceWhite text-spaceGray font-semibold px-12 py-4 rounded-sm text-sm hover:bg-opacity-90">Projects</button>
        </Link>
        <Link href="https://docs.google.com/document/d/15bet1sTfrKPRN7pOPpI_3DOL0TMJysrxlmUCPI_Xxkg/edit?usp=sharing" target="_blank" rel="noreferrer">
        <button className="bg-spaceWhite text-spaceGray font-semibold px-12 py-4 rounded-sm text-sm hover:bg-opacity-90">Resume</button>
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