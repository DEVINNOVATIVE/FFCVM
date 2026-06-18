import type { Metadata } from 'next';
import NavbarContact from '@/components/NavbarContact';
import Footer from '@/components/Footer';
import HowItWorksHero from '@/components/how-it-works/HowItWorksHero';
import JourneyPhases from '@/components/how-it-works/JourneyPhases';
import RiskManagement from '@/components/how-it-works/RiskManagement';
import ComparisonSection from '@/components/how-it-works/ComparisonSection';
import CallToAction from '@/components/how-it-works/CallToAction';


export const metadata: Metadata = {
    title: 'How It Works – FFCVM | FFC Virtual Mortgages',
    description:
        'A step-by-step walkthrough of the FFCVM virtual mortgage process: Connect & Value, Custom Terms, Vault Escrow, and Property Funding.',
};

export default function HowItWorksPage() {
    return (
        <div className="bg-[#050d1a] min-h-screen overflow-x-hidden">
            <NavbarContact />
            <HowItWorksHero />
            {/* <JourneyPhases />
            <RiskManagement />
            <ComparisonSection />
            <CallToAction /> */}
            <Footer />
        </div>
    );
}