'use client';

import { useInView } from '@/hooks/useInView';
import { Home, RefreshCw, BarChart3, Check } from 'lucide-react';

const programs = [
  {
    icon: Home,
    title: 'Home Purchase Mortgage',
    desc: 'Purchase residential properties using innovative financing structures designed for digital asset holders.',
    tag: 'Most Popular',
    tagColor: 'bg-[#cbfb45]/10 text-[#cbfb45] border-[#cbfb45]/20',
    features: [
      'Competitive Rates',
      'Fast Digital Approval',
      'Secure Asset Verification',
      'Flexible Terms',
      'International Accessibility',
      'No Credit Check',
    ],
    accent: '#cbfb45',
    cta: 'Apply for Home Loan',
  },
  {
    icon: RefreshCw,
    title: 'Mortgage Refinance',
    desc: 'Unlock opportunities through refinancing solutions tailored to the digital economy and your financial goals.',
    tag: 'Refinancing',
    tagColor: 'bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/20',
    features: [
      'Lower Monthly Payments',
      'Access Property Equity',
      'Debt Consolidation Options',
      'Flexible Repayment Structures',
      'Digital Processing',
      'Rate Lock Available',
    ],
    accent: '#0ea5e9',
    cta: 'Explore Refinancing',
  },
  {
    icon: BarChart3,
    title: 'Investment Property Financing',
    desc: 'Expand your real estate portfolio with financing solutions crafted specifically for qualified investors.',
    tag: 'Investors',
    tagColor: 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20',
    features: [
      'Rental Properties',
      'Multi-Unit Buildings',
      'Vacation Properties',
      'Commercial Opportunities',
      'Portfolio Diversification',
      'Global Market Access',
    ],
    accent: '#10b981',
    cta: 'Start Investing',
  },
];

export default function ProgramsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="programs" className="relative py-24 bg-[#050d1a]">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            MORTGAGE PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">FFC Virtual Mortgage Programs</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Tailored financing solutions for every stage of your real estate journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <div
                key={i}
                className={`gradient-border rounded-2xl p-7 flex flex-col group hover:bg-white/[0.02] transition-all duration-700 hover:shadow-2xl ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                  '--accent': program.accent,
                } as React.CSSProperties}
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${program.accent}15`, border: `1px solid ${program.accent}25` }}
                  >
                    <Icon size={22} style={{ color: program.accent }} strokeWidth={2} />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${program.tagColor}`}
                  >
                    {program.tag}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3">{program.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{program.desc}</p>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-6" />

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-8 flex-1">
                  {program.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <Check
                        size={12}
                        style={{ color: program.accent }}
                        strokeWidth={3}
                        className="flex-shrink-0"
                      />
                      <span className="text-white/55 text-xs">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
                  style={{
                    background: `${program.accent}15`,
                    border: `1px solid ${program.accent}30`,
                    color: program.accent,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `${program.accent}25`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `${program.accent}15`;
                  }}
                >
                  {program.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
