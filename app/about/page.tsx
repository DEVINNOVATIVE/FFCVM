// import type { Metadata } from 'next';
// import NavbarContact from '@/components/NavbarContact';
// import Footer from '@/components/Footer';

// // Core Sub-Sections Imports
// import AboutHero from '@/components/about/AboutHero';
// import CorePhilosophy from '@/components/about/CorePhilosophy';
// import Pillars from '@/components/about/Pillars';
// import Architecture from '@/components/about/Architecture';
// import Vision from '@/components/about/Vision';


// import { Zap, Shield, TrendingUp, Globe, DollarSign, Layers } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'About FFCVM – FFC Virtual Mortgages',
//   description:
//     'FFCVM is an institutional-grade virtual mortgage ecosystem that dissolves the boundaries between digital wealth and real estate. Learn our mission, philosophy, and vision.',
// };





// const whyChoices = [
//   'Liquidate Digital Portfolios — selling long-term $FFC positions, triggering massive capital gains tax liabilities and forfeiting future market upside.',
//   'Miss Real Estate Opportunities — leaving wealth locked entirely in the digital ecosystem, missing prime residential developments and physical portfolio diversification.',
// ];

// export default function AboutPage() {
//   return (
//     <div className="bg-[#050d1a] min-h-screen">
//       <NavbarContact />
      
//       {/* Atomic Components Composition */}
//       <AboutHero />
  
//       <CorePhilosophy whyChoices={whyChoices} />
//       <Pillars  />
//       <Architecture />
//       <Vision />

//       <Footer />
//     </div>
//   );
// }

import type { Metadata } from 'next';
import NavbarContact from '@/components/NavbarContact';
import Footer from '@/components/Footer';

// Core Sub-Sections Imports
import AboutHero from '@/components/about/AboutHero';
import CorePhilosophy from '@/components/about/CorePhilosophy';
import Pillars from '@/components/about/Pillars';
import Architecture from '@/components/about/Architecture';
import Vision from '@/components/about/Vision';

export const metadata: Metadata = {
  title: 'About FFCVM – FFC Virtual Mortgages',
  description:
    'FFCVM is an institutional-grade virtual mortgage ecosystem that dissolves the boundaries between digital wealth and real estate. Learn our mission, philosophy, and vision.',
};

// All text blocks for choices perfectly match your explicit paragraphs
const whyChoices = [
  'Liquidate Digital Portfolios: Selling long-term $FFC positions to purchase physical property, thereby triggering massive, premature capital gains tax liabilities and completely forfeiting any future market upside.',
  'Miss Real Estate Opportunities: Leaving wealth locked entirely in the digital ecosystem, missing out on prime residential developments, commercial real estate yields, and physical portfolio diversification.',
];

export default function AboutPage() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <NavbarContact />
      
      {/* Atomic Components Composition */}
      <AboutHero />
      <CorePhilosophy whyChoices={whyChoices} />
      <Pillars  />
      <Architecture />
      <Vision />

      <Footer />
    </div>
  );
}