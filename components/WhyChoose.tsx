'use client';

import { useInView } from '@/hooks/useInView';
import { Monitor, Zap, Lock, Globe2, Activity, Users } from 'lucide-react';

const advantages = [
  {
    icon: Monitor,
    title: '100% Digital Experience',
    desc: 'Apply from anywhere in the world. Our entire process lives online — no physical visits, no paperwork delays.',
    color: '#0ea5e9',
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    desc: 'No lengthy branch appointments. Get decisions in as little as 48 hours with our streamlined digital review.',
    color: '#cbfb45',
  },
  {
    icon: Lock,
    title: 'Advanced Security',
    desc: 'Enterprise-grade encryption and blockchain-integrated verification protect every step of your application.',
    color: '#10b981',
  },
  {
    icon: Globe2,
    title: 'Global Accessibility',
    desc: "Designed for today's international investors and entrepreneurs — no matter where you call home.",
    color: '#8b5cf6',
  },
  {
    icon: Activity,
    title: 'Transparent Process',
    desc: 'Real-time application tracking and status updates keep you informed at every milestone.',
    color: '#cbfb45',
  },
  {
    icon: Users,
    title: 'Dedicated Experts',
    desc: 'Mortgage specialists are available throughout your financing journey to guide every decision.',
    color: '#0ea5e9',
  },
];

export default function WhyChoose() {
  const { ref, inView } = useInView();

  return (
    <section id="why-us" className="relative py-24 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#cbfb45]/3 blur-[150px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0ea5e9]/3 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            WHY CHOOSE FFCVM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Advantages of Virtual Mortgages</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Built from the ground up for the digital age — faster, safer, and more accessible than anything before it.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`gradient-border rounded-2xl p-6 group hover:bg-white/[0.03] transition-all duration-700 cursor-default ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <Icon size={20} style={{ color: item.color }} strokeWidth={2} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
