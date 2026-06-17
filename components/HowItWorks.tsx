'use client';

import { useInView } from '@/hooks/useInView';
import { UserPlus, ShieldCheck, ClipboardList, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Submit Your Application',
    desc: 'Create your secure FFCVM account and complete our digital mortgage pre-qualification process from anywhere in the world.',
    color: 'from-[#0ea5e9] to-[#0284c7]',
    glow: 'shadow-[#0ea5e9]/20',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Asset Verification',
    desc: 'Our platform securely verifies your FFC holdings and financial profile using enterprise-grade encryption protocols.',
    color: 'from-[#cbfb45] to-[#a8d426]',
    glow: 'shadow-[#cbfb45]/20',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Mortgage Approval',
    desc: 'Receive financing options tailored to your profile and property goals with real-time status updates throughout.',
    color: 'from-[#10b981] to-[#059669]',
    glow: 'shadow-[#10b981]/20',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Close Digitally',
    desc: 'Complete your entire mortgage process through our secure virtual platform without a single branch visit.',
    color: 'from-[#cbfb45] to-[#0ea5e9]',
    glow: 'shadow-[#cbfb45]/20',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView();

  return (
    <section id="how-it-works" className="relative py-24 bg-[#0a1628] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0ea5e9]/3 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-xs font-medium tracking-widest mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Four Simple Steps</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            From application to closing — entirely online, entirely on your terms.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#cbfb45]/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className={`relative group transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="gradient-border rounded-2xl p-6 h-full hover:bg-white/[0.02] transition-colors duration-300">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg ${step.glow} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={22} className="text-white" strokeWidth={2} />
                      </div>
                      <span className="text-4xl font-bold text-white/5 select-none">{step.number}</span>
                    </div>

                    <h3 className="text-white font-semibold text-base mb-3">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Arrow (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-12 z-10 w-8 items-center justify-center">
                      <div className="text-[#cbfb45]/20 text-lg">›</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <button
            onClick={() => document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/25 active:scale-[0.98]"
          >
            Start Your Application
          </button>
        </div>
      </div>
    </section>
  );
}
