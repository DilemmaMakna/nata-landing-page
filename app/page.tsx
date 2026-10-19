'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemFeatureSection from '@/components/ProblemFeatureSection';
// QuoteSection is now seamlessly integrated inside ProblemFeatureSection
import PillarsSection from '@/components/PillarsSection';
import WaitlistSection from '@/components/WaitlistSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFAF7]">
      <Navbar />
      <HeroSection />
      <ProblemFeatureSection />
      {/* Figma Desktop - 10 (63:28732) */}
      <PillarsSection />
      {/* Figma Desktop - 6 (63:29441) */}
      <WaitlistSection />
      {/* Figma Desktop - 9 (73:34498) Tanya Jawab */}
      {/* Figma Desktop - 13 (100:2784) Pricing Section */}
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
