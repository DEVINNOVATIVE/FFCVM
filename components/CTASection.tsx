'use client';

import { useInView } from '@/hooks/useInView';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection() {
  const { ref, inView } = useInView();

  return (
    <section id="apply" className="relative py-24 bg-[#050d1a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#cbfb45]/5 blur-[150px]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-6">
            GET STARTED TODAY
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Start Your Mortgage
            <br />
            <span className="text-gold-shimmer">Journey Today</span>
          </h2>

          <p className="text-white/55 text-lg mb-4 max-w-2xl mx-auto">
            Join the future of real estate financing with FFC Virtual Mortgages.
          </p>
          <p className="text-[#cbfb45] font-semibold text-xl mb-10">
            Get Pre-Qualified in Minutes
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-2 px-8 py-4 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-bold text-base rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-[#cbfb45]/30 active:scale-[0.98] w-full sm:w-auto justify-center animate-pulse-glow">
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="contact"
              className="flex items-center gap-2 px-8 py-4 border border-white/15 text-white hover:border-[#cbfb45]/40 hover:text-[#cbfb45] font-medium text-base rounded-xl transition-all duration-200 hover:bg-[#cbfb45]/5 w-full sm:w-auto justify-center"
            >
              <Calendar size={17} />
              Schedule Consultation
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-white/5">
            {[
              '100% Digital Process',
              'No Credit Check Required',
              'Fast 48h Approval',
              'Global Accessibility',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/40 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#cbfb45]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
