'use client';

import { useInView } from '@/hooks/useInView';
import { CheckCircle2 } from 'lucide-react';

const comparison = [
  { feature: 'Approval Timeline', traditional: '30 to 60 Days of manual processing', ffcvm: 'Hours to Days via digital automation' },
  { feature: 'Asset Recognition', traditional: 'Rejects or heavily discounts digital portfolios', ffcvm: 'Natively values $FFC as premium collateral' },
  { feature: 'Tax Implications', traditional: 'High (Forces asset liquidation & capital gains)', ffcvm: 'Zero (Tax-efficient borrowing against assets)' },
  { feature: 'Market Upside', traditional: 'Forfeited (If you sell your crypto to buy property)', ffcvm: 'Retained (Tokens stay yours inside the vault)' },
  { feature: 'Process Transparency', traditional: 'Opaque, bureaucratic, and highly fragmented', ffcvm: 'Transparent, on-chain, and trackable 24/7' },
];

export default function ComparisonSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-[#050d1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Compare the Difference: FFCVM vs. Traditional Banks</h2>
          <p className="text-white/50 text-lg">See the difference for yourself.</p>
        </div>

        <div 
          className={`gradient-border rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Table Header Row */}
          <div className="grid grid-cols-3 bg-white/[0.03] border-b border-white/8">
            <div className="px-6 py-4 text-white/40 text-xs font-medium tracking-widest">FEATURE</div>
            <div className="px-6 py-4 text-white/40 text-xs font-medium tracking-widest border-l border-white/8">TRADITIONAL BANK MORTGAGES</div>
            <div className="px-6 py-4 border-l border-[#cbfb45]/15" style={{ background: 'rgba(203,251,69,0.04)' }}>
              <span className="text-[#cbfb45] text-xs font-semibold tracking-widest">FFCVM VIRTUAL MORTGAGES</span>
            </div>
          </div>
          
          {/* Table Data Rows */}
          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 items-center ${i < comparison.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              <div className="px-6 py-4 text-white text-sm font-medium">{row.feature}</div>
              <div className="px-6 py-4 border-l border-white/5 h-full flex items-center">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 text-xs select-none">✕</span>
                  <p className="text-white/40 text-xs leading-relaxed">{row.traditional}</p>
                </div>
              </div>
              <div className="px-6 py-4 border-l border-[#cbfb45]/10 h-full flex items-center" style={{ background: 'rgba(203,251,69,0.02)' }}>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={12} className="text-[#cbfb45] mt-0.5 flex-shrink-0" />
                  <p className="text-white/70 text-xs leading-relaxed">{row.ffcvm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}