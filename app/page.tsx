'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemFeatureSection from '@/components/ProblemFeatureSection';
import QuoteSection from '@/components/QuoteSection';
import PillarsSection from '@/components/PillarsSection';
import WaitlistSection from '@/components/WaitlistSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFAF7]">
      <Navbar />
      <HeroSection />
      {/* Component 8 Interactive Scroll Prototype (Figma 59:26233) */}
      <ProblemFeatureSection />
      {/* Figma Desktop - 4 (59:25029) */}
      <QuoteSection />
      {/* Figma Desktop - 10 (63:28732) */}
      <PillarsSection />
      {/* Figma Desktop - 6 (63:29441) */}
      <WaitlistSection />
      {/* Figma Desktop - 9 (73:34498) Tanya Jawab */}
      <FaqSection />
      <Footer />
    </main>
  );
}
