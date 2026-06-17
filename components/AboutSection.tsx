'use client';

import { useInView } from '@/hooks/useInView';
import { Target, Eye, TrendingUp, Building2 } from 'lucide-react';

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="relative py-24 bg-[#050d1a]">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            ABOUT FFCVM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Reimagining Home Financing
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Traditional mortgage systems were built for the banking world of yesterday.
            <br />
            <span className="text-white/70 font-medium">FFCVM was built for the digital economy of tomorrow.</span>
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left text */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              We provide innovative mortgage solutions that allow qualified clients to utilize FFC
              digital assets as part of the mortgage qualification process while maintaining
              exposure to their digital asset portfolio.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              The emergence of crypto-backed and crypto-assisted mortgage products demonstrates
              growing interest in integrating digital assets into home financing solutions. FFCVM
              is at the forefront of this revolution.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {[
                'Leverage FFC holdings without liquidating your portfolio',
                'Fully digital application and approval process',
                'Tailored financing for global digital asset holders',
                'Transparent, real-time application tracking',
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#cbfb45]/10 border border-[#cbfb45]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#cbfb45]" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To become the world\'s leading virtual mortgage ecosystem connecting blockchain technology, digital assets, and real estate financing.',
                delay: '200ms',
              },
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To make property ownership more accessible, efficient, and transparent through digital finance innovation.',
                delay: '300ms',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                desc: 'Pioneering the integration of digital assets into mainstream real estate financing solutions.',
                delay: '400ms',
              },
              {
                icon: Building2,
                title: 'Real Estate',
                desc: 'Bridging the gap between cutting-edge digital finance and tangible real-world property ownership.',
                delay: '500ms',
              },
            ].map(({ icon: Icon, title, desc, delay }, i) => (
              <div
                key={i}
                className={`gradient-border rounded-xl p-5 transition-all duration-700 hover:border-[#cbfb45]/20 group ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: delay }}
              >
                <div className="w-9 h-9 rounded-lg bg-[#cbfb45]/10 flex items-center justify-center mb-3 group-hover:bg-[#cbfb45]/20 transition-colors">
                  <Icon size={18} className="text-[#cbfb45]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
