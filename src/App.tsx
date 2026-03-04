import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timetable from './components/Timetable';
import Speakers from './components/Speakers';
import TargetAudience from './components/TargetAudience';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Sponsors from './components/Sponsors';
import Prize from './components/Prize';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timetable />
        <Speakers />
        <TargetAudience />
        <Features />
        <Architecture />
        <Sponsors />
        <Prize />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
