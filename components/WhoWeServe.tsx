'use client';

import { useInView } from '@/hooks/useInView';
import { Wallet, Briefcase, TrendingUp, Globe } from 'lucide-react';

const audiences = [
  {
    icon: Wallet,
    title: 'Digital Asset Holders',
    desc: 'Individuals seeking innovative financing options that leverage their existing digital portfolio without liquidating.',
    image: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=400',
    stat: 'Hold FFC',
  },
  {
    icon: Briefcase,
    title: 'Entrepreneurs',
    desc: 'Business owners requiring flexible mortgage solutions tailored to the dynamic needs of modern commerce.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    stat: 'Self-Employed',
  },
  {
    icon: TrendingUp,
    title: 'Real Estate Investors',
    desc: 'Seasoned investors looking to expand property portfolios with innovative digital-first financing solutions.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=400',
    stat: 'Multi-Property',
  },
  {
    icon: Globe,
    title: 'Global Citizens',
    desc: 'Internationally mobile clients seeking borderless financial opportunities across global real estate markets.',
    image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=400',
    stat: 'Worldwide',
  },
];

export default function WhoWeServe() {
  const { ref, inView } = useInView();

  return (
    <section id="who-we-serve" className="relative py-24 bg-[#0a1628]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-xs font-medium tracking-widest mb-4">
            WHO WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Designed For</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            FFCVM was built with diverse clients in mind — from first-time buyers to seasoned global investors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`gradient-border rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-0.5 rounded-full bg-[#cbfb45]/20 border border-[#cbfb45]/30 text-[#cbfb45] text-xs font-medium">
                      {item.stat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="w-9 h-9 rounded-lg bg-[#cbfb45]/10 flex items-center justify-center mb-3 group-hover:bg-[#cbfb45]/20 transition-colors">
                    <Icon size={17} className="text-[#cbfb45]" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
