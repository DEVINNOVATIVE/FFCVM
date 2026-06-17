'use client';

import { useInView } from '@/hooks/useInView';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'FFCVM delivered a smooth and professional mortgage experience from start to finish. The digital process was flawless.',
    author: 'Michael R.',
    role: 'Property Investor',
    location: 'Dubai, UAE',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    quote: 'The digital process saved weeks compared to traditional financing. I closed my property without ever visiting a branch.',
    author: 'Sarah K.',
    role: 'Homeowner',
    location: 'Toronto, Canada',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    quote: 'A forward-thinking platform built for the future of finance. Finally a mortgage solution designed for crypto holders.',
    author: 'James T.',
    role: 'Entrepreneur',
    location: 'London, UK',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    quote: 'As an international investor, FFCVM gave me access to real estate financing without the traditional geographic barriers.',
    author: 'Priya M.',
    role: 'Real Estate Investor',
    location: 'Singapore',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section id="testimonials" className="relative py-24 bg-[#050d1a]">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Real experiences from clients who financed their real estate journey with FFCVM.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`gradient-border rounded-2xl p-6 flex flex-col group hover:bg-white/[0.02] transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <div key={j} className="w-3.5 h-3.5 text-[#cbfb45]">★</div>
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-[#cbfb45]/30 mb-3" />

              {/* Quote text */}
              <p className="text-white/60 text-sm leading-relaxed italic flex-1 mb-6">
                "{item.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-9 h-9 rounded-full object-cover border border-[#cbfb45]/20"
                />
                <div>
                  <p className="text-white font-medium text-sm">{item.author}</p>
                  <p className="text-white/40 text-xs">{item.role} · {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
