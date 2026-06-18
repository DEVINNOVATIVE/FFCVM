'use client';

import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

export default function Vision() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-[#050d1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#cbfb45]/3 blur-[150px]" />
      </div>
      <div className={`relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-6">
          OUR VISION
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Our Vision for the Future of Global Wealth
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-6">
          At FFCVM, we believe that the future of wealth management is hybrid. The boundaries between digital assets and legacy physical assets are dissolving, giving rise to a more fluid, interconnected global economy.
        </p>
        <p className="text-white/55 text-lg leading-relaxed mb-8">
          Our ultimate objective extends beyond just modifying how mortgages work. We are defining the definitive standard of financial mobility for the next generation of global asset holders. By continuously innovating at the intersection of blockchain architecture, real estate law, and institutional finance, FFCVM is paving the way for a frictionless world where capital flows effortlessly between the digital screen and the physical foundation.
        </p>
        <div
          className="inline-block px-8 py-5 rounded-2xl mb-10 text-left sm:text-center"
          style={{ background: 'linear-gradient(135deg, rgba(203,251,69,0.08) 0%, rgba(14,165,233,0.06) 100%)', border: '1px solid rgba(203,251,69,0.2)' }}
        >
          <p className="text-[#cbfb45] font-bold text-xl">
            Bridging Assets. Building Futures.
          </p>
          <p className="text-white/55 text-sm mt-2">
            FFCVM turns your digital vision into concrete reality. Let your digital wealth build your physical legacy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#apply"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/25"
          >
            Apply for Pre-Approval <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-xl transition-all duration-200"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}