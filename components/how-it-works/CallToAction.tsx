'use client';

import { useInView } from '@/hooks/useInView';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, rgba(14,165,233,0.06) 0%, rgba(203,251,69,0.04) 100%)',
        borderTop: '1px solid rgba(14,165,233,0.1)',
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to unlock the power of your digital wealth?</h2>
          <p className="text-white/50 text-lg mb-8">
            Transform your digital footprint into physical ownership today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/25 active:scale-[0.98]"
            >
              Apply for Virtual Pre-Approval <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              Schedule a Consult with an Asset Advisor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}