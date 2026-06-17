'use client';

import { useInView } from '@/hooks/useInView';
import { Coins, Link2, Cpu, Blocks } from 'lucide-react';

const utilities = [
  {
    icon: Coins,
    title: 'Digital Asset Participation',
    desc: 'Use your FFC holdings as part of the mortgage qualification and collateral process.',
  },
  {
    icon: Link2,
    title: 'Real Estate Integration',
    desc: 'Seamlessly connect your digital portfolio to real-world property financing.',
  },
  {
    icon: Cpu,
    title: 'Financial Technology Innovation',
    desc: 'Benefit from cutting-edge fintech infrastructure powering the FFCVM platform.',
  },
  {
    icon: Blocks,
    title: 'Future DeFi Applications',
    desc: 'Part of a growing ecosystem with planned decentralized finance features.',
  },
];

export default function FfcEcosystem() {
  const { ref, inView } = useInView();

  return (
    <section id="ecosystem" className="relative py-24 bg-[#050d1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#cbfb45]/3 blur-[200px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual */}
          <div
            className={`relative flex items-center justify-center transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative w-72 h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-[#cbfb45]/10 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-[#cbfb45]/8" style={{ animationDirection: 'reverse', animation: 'spin-slow 12s linear infinite' }} />

              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-dashed border-[#0ea5e9]/15 animate-spin-slow" style={{ animationDuration: '15s' }} />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#cbfb45] to-[#a8d426] flex items-center justify-center shadow-2xl shadow-[#cbfb45]/30 animate-pulse-glow">
                  <div className="text-center">
                    <p className="text-[#03080f] font-black text-2xl leading-none">FFC</p>
                    <p className="text-[#03080f]/70 text-[9px] font-bold tracking-wider mt-0.5">FORCE FINANCE</p>
                  </div>
                </div>
              </div>

              {/* Orbit dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#cbfb45' : '#0ea5e9',
                    opacity: 0.6,
                    top: `${50 + 44 * Math.sin((deg * Math.PI) / 180)}%`,
                    left: `${50 + 44 * Math.cos((deg * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: `0 0 8px ${i % 2 === 0 ? '#cbfb45' : '#0ea5e9'}`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right content */}
          <div>
            <div
              className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
                FFC ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powered By Force Finance Coin
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-8">
                FFC Virtual Mortgages operates within the growing Force Finance Coin ecosystem,
                connecting digital finance with real-world asset ownership. As the ecosystem
                expands, so do the possibilities for FFCVM participants.
              </p>
            </div>

            <div className="space-y-4">
              {utilities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-4 gradient-border rounded-xl group hover:bg-white/[0.02] transition-all duration-700 ${
                      inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#cbfb45]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cbfb45]/20 transition-colors">
                      <Icon size={17} className="text-[#cbfb45]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                      <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
