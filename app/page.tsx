import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemFeatureSection from '@/components/ProblemFeatureSection';
import PillarsSection from '@/components/PillarsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ComplianceSection from '@/components/ComplianceSection';

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-[#FFFAF7]">
      <Navbar />
      <HeroSection />
      <ProblemFeatureSection />
      <PillarsSection />
      <PricingSection />
      <ComplianceSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
