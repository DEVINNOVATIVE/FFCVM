'use client';

import { useInView } from '@/hooks/useInView';

export default function AboutHero() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative pt-32 pb-20 overflow-hidden hero-bg grid-pattern">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full bg-[#cbfb45]/4 blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#0ea5e9]/4 blur-[120px]" />
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-6">
            ABOUT FFCVM
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reimagining Wealth:{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #cbfb45 0%, #e8ff8a 60%, #cbfb45 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Bridging Digital Assets with Physical Real Estate
            </span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-8 max-w-3xl">
            Welcome to FFCVM — the premier, institutional-grade virtual mortgage ecosystem
            engineered to dissolve the boundaries between high-yield digital wealth and premier
            tangible real estate.
          </p>
          <p className="text-white/50 text-lg leading-relaxed max-w-3xl">
            We empower qualified clients, high-net-worth individuals, and institutional investors
            to unlock the true liquidity of their Force Finance ($FFC) holdings — transforming
            digital assets into a dynamic mechanism for real estate acquisition, refinancing, and
            cross-border property development.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050d1a] to-transparent" />
    </section>
  );
}