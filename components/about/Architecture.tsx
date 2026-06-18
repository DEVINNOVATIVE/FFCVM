'use client';

import { useInView } from '@/hooks/useInView';

import { Zap, Shield, TrendingUp, Globe, DollarSign, Layers } from 'lucide-react';



export default function Architecture() {
  const { ref, inView } = useInView();
  const features = [
  {
    icon: DollarSign,
    title: 'Tax-Efficient Capital Access',
    desc: 'Because you are borrowing against your assets rather than selling them, your transaction does not trigger a taxable disposition event — allowing you to legally and strategically optimize your tax exposure.',
    color: '#10b981',
  },
  {
    icon: TrendingUp,
    title: 'Retained Market Exposure',
    desc: 'Keep your FFC holdings working for you. Retain full exposure to the growth potential of your digital assets while simultaneously living in, developing, or generating rental yields from newly acquired property.',
    color: '#cbfb45',
  },
  {
    icon: Layers,
    title: 'Customized Loan Structuring',
    desc: 'We offer bespoke financing terms, flexible repayment schedules, and competitive LTV ratios structured strictly around your broader financial goals and portfolio dynamics.',
    color: '#0ea5e9',
  },
  {
    icon: Globe,
    title: 'Cross-Border Flexibility',
    desc: 'Seamlessly transition digital value across geographical borders to build a globally diversified physical property portfolio, navigating international real estate markets with ease.',
    color: '#f59e0b',
  },
];

  return (
    <section ref={ref} className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            THE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            The Virtual Mortgage Architecture
          </h2>
          <p className="text-white/55 text-lg leading-relaxed max-w-3xl mx-auto">
            The traditional lending sector has failed to adapt to the reality of modern wealth.
            FFCVM completely rewrites these rules, introducing a tailored suite of financial
            advantages for digital asset holders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className={`gradient-border rounded-2xl p-7 group hover:bg-white/[0.02] transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}