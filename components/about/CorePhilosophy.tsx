'use client';

import { useInView } from '@/hooks/useInView';

export default function CorePhilosophy({ whyChoices }: { whyChoices: string[] }) {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-block px-3 py-1 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-xs font-medium tracking-widest mb-4">
              CORE PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Why FFCVM Exists</h2>
            <p className="text-white/55 text-lg leading-relaxed">
              As the digital asset economy matures, the financial strategies of sophisticated
              investors must mature with it. For decades, real estate has served as the ultimate
              asset class for wealth preservation, tax optimization, and generational security.
              Conversely, digital assets represent the frontier of high-growth innovation.
            </p>
          </div>

          <div className={`gradient-border rounded-2xl p-8 mb-8 transition-all duration-700 delay-200 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-[#cbfb45] text-sm font-semibold tracking-wider mb-5">
              Until now, investors were forced to make a counterproductive choice:
            </p>
            <div className="space-y-4">
              {whyChoices.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-400 text-xs font-bold">✕</span>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div 
            className={`p-6 rounded-2xl text-center transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ background: 'linear-gradient(135deg, rgba(203,251,69,0.08) 0%, rgba(14,165,233,0.06) 100%)', border: '1px solid rgba(203,251,69,0.15)' }}
          >
            <p className="text-white font-semibold text-lg mb-2">FFCVM was built to shatter this compromise.</p>
            <p className="text-white/60 text-base leading-relaxed">
              Our virtual mortgage infrastructure recognizes that your digital portfolio is a
              highly valuable, legitimate form of capital. We enable you to borrow against your
              FFC holdings natively — maintaining your long-term investment thesis while
              simultaneously closing on physical real estate deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}