import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorks from '@/components/HowItWorks';
import ProgramsSection from '@/components/ProgramsSection';
import WhyChoose from '@/components/WhyChoose';
import FfcEcosystem from '@/components/FfcEcosystem';
import WhoWeServe from '@/components/WhoWeServe';
import SecuritySection from '@/components/SecuritySection';
import Calculator from '@/components/Calculator';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <ProgramsSection />
      <WhyChoose />
      <FfcEcosystem />
      <WhoWeServe />
      <SecuritySection />
      <Calculator />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
