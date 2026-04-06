import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="space-y-16 pb-6 sm:space-y-20 sm:pb-8 md:space-y-24 md:pb-12">
      <Hero />
      <Services />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
