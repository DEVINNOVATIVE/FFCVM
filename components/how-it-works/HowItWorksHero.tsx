'use client';

import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

const linearGradientStyles = {
  background: 'linear-gradient(90deg, #cbfb45 0%, #e8ff8a 60%, #cbfb45 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export default function HowItWorksHero() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative pt-32 pb-20 overflow-hidden grid-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-[#0ea5e9]/4 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#cbfb45]/4 blur-[100px]" />
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <span className="inline-block px-3 py-1 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-xs font-medium tracking-widest mb-6">
          HOW IT WORKS
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          The FFCVM Virtual Mortgage{' '}
          <span style={linearGradientStyles}>Journey</span>
        </h1>

        <p className="text-white/80 text-xl font-medium max-w-4xl mx-auto leading-relaxed mb-6">
          Bridging Digital Wealth and Physical Real Estate in Four Simple Steps
        </p>

        <p className="text-white/55 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-6">
          Securing a traditional property mortgage is an arduous, opaque process that routinely takes months of manual underwriting, endless paperwork, and invasive background checks. For modern digital asset holders, legacy financial institutions add an extra layer of friction by failing to recognize digital portfolios as legitimate wealth.
        </p>

        <p className="text-white/45 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-4">
          FFCVM completely replaces this outdated model with a streamlined, institutional-grade digital pipeline. By leveraging your Force Finance ($FFC) holdings as collateral, you can transition from asset valuation to property funding smoothly, securely, and efficiently—without triggering premature liquidations or capital gains tax events.
        </p>

        {/* Pipeline Title */}
        <p className="text-white/35 text-xs font-bold uppercase tracking-widest mt-12 mb-4">
          The End-to-End Execution Pipeline
        </p>

        {/* Pipeline visual container */}
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {['Phase 1: Connect & Value', 'Phase 2: Custom Terms', 'Phase 3: Vault Escrow', 'Phase 4: Property Funding'].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/65 text-sm font-medium whitespace-nowrap shadow-md">
                  {step}
                </div>
                {i < 3 && <ArrowRight size={14} className="text-[#cbfb45]/40 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050d1a] to-transparent" />
    </section>
  );
}