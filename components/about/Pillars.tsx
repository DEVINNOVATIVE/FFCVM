'use client';

import { useInView } from '@/hooks/useInView';
import { CheckCircle2, LucideIcon } from 'lucide-react';
import { Zap, Shield, TrendingUp, Globe, DollarSign, Layers } from 'lucide-react';



export default function Pillars() {
  const { ref, inView } = useInView();
  const pillars = [
  {
    icon: Zap,
    label: 'Pillar 1',
    title: 'Fast: Velocity Meets Modern Capital Allocation',
    color: '#cbfb45',
    points: [
      {
        title: 'Automated Underwriting & Real-Time Valuation',
        desc: 'Our platform utilizes advanced risk-assessment algorithms to dynamically evaluate collateral value, removing the administrative overhead and human error that slows down legacy banks.',
      },
      {
        title: 'Accelerated Approvals',
        desc: 'By digitizing the verification pipeline, we deliver rapid structural approvals and accelerated funding timelines — executing transactions in a fraction of the time required by traditional lenders.',
      },
      {
        title: 'Seamless Capital Deployment',
        desc: 'When you find a prime property opportunity, FFCVM ensures your capital moves at the speed of the digital market, giving you a distinct competitive advantage over cash-strapped or legacy-financed buyers.',
      },
    ],
  },
  {
    icon: Shield,
    label: 'Pillar 2',
    title: 'Secure: Institutional-Grade Architecture',
    color: '#0ea5e9',
    points: [
      {
        title: 'Elite Custody Infrastructure',
        desc: 'Your FFC holdings are secured through isolated, institutional-grade, multi-signature custody frameworks. Your underlying assets are held in isolated vaults, ensuring maximum protection against counterparty risk.',
      },
      {
        title: 'Proactive Volatility Mitigation',
        desc: 'FFCVM employs proprietary risk mitigation protocols and flexible loan-to-value (LTV) models engineered to handle market fluctuations smoothly, protecting both the borrower\'s equity and the platform\'s stability.',
      },
      {
        title: 'Audited & Compliant Frameworks',
        desc: 'Our smart contracts, data protocols, and compliance frameworks undergo continuous, rigorous third-party technical audits to ensure compliance with global financial security standards.',
      },
    ],
  },
];

  return (
    <section ref={ref} className="py-20 bg-[#050d1a] relative">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            FOUNDATIONAL PILLARS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Two Uncompromised Principles
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            To completely disrupt an industry as antiquated as traditional real estate lending,
            we built FFCVM on two uncompromised principles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={i} 
                className={`gradient-border rounded-2xl p-8 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : i === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}25` }}
                  >
                    <Icon size={22} style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-widest mb-1" style={{ color: pillar.color }}>{pillar.label}</p>
                    <h3 className="text-white font-bold text-lg leading-tight">{pillar.title}</h3>
                  </div>
                </div>
                <div className="space-y-5">
                  {pillar.points.map((point, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={15} style={{ color: pillar.color }} className="flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium mb-1">{point.title}</p>
                        <p className="text-white/45 text-xs leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}