'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const stats = [
  { value: '100%', label: 'Digital Process' },
  { value: '48h', label: 'Fast Approval' },
  { value: '50+', label: 'Countries Served' },
  { value: '$0', label: 'Application Fee' },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg grid-pattern overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0ea5e9]/5 blur-[120px]" />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-[#cbfb45]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[#0ea5e9]/4 blur-[80px]" />

        {/* Floating particles */}
        <div className="particle w-1.5 h-1.5 bg-[#cbfb45]/40 top-[20%] left-[10%] animate-delay-100" style={{ animationDuration: '7s' }} />
        <div className="particle w-1 h-1 bg-[#0ea5e9]/40 top-[40%] left-[85%] animate-delay-300" style={{ animationDuration: '5s' }} />
        <div className="particle w-2 h-2 bg-[#cbfb45]/20 top-[70%] left-[20%] animate-delay-500" style={{ animationDuration: '8s' }} />
        <div className="particle w-1 h-1 bg-white/20 top-[15%] left-[70%] animate-delay-200" style={{ animationDuration: '6s' }} />
        <div className="particle w-1.5 h-1.5 bg-[#0ea5e9]/30 top-[60%] left-[60%] animate-delay-400" style={{ animationDuration: '9s' }} />

        {/* Rotating ring */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#cbfb45]/5 rounded-full animate-spin-slow" />
        <div className="absolute top-32 right-32 w-40 h-40 border border-[#0ea5e9]/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 mb-6 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#cbfb45] animate-pulse" />
              <span className="text-[#cbfb45] text-xs font-medium tracking-wider">POWERED BY FORCE FINANCE COIN</span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 transition-all duration-700 delay-150 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="text-white">Own Real Estate.</span>
              <br />
              <span className="text-gold-shimmer">Keep Your Crypto.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-white/60 leading-relaxed mb-4 max-w-lg transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Virtual Mortgages Backed by FFC Digital Assets
            </p>
            <p
              className={`text-base text-white/50 leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              FFCVM is a next-generation digital mortgage platform designed to help qualified
              clients leverage their FFC holdings toward real estate ownership and financing
              opportunities.
            </p>

            {/* Pills */}
            <div
              className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-350 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                { icon: Zap, label: 'Fast' },
                { icon: Shield, label: 'Secure' },
                { icon: Globe, label: 'Global' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm"
                >
                  <Icon size={12} className="text-[#cbfb45]" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <button
                onClick={() => scrollTo('#apply')}
                className="group flex items-center gap-2 px-7 py-3.5 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#cbfb45]/25 active:scale-[0.98] animate-pulse-glow"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white hover:border-[#cbfb45]/40 hover:text-[#cbfb45] font-medium rounded-xl transition-all duration-200 hover:bg-[#cbfb45]/5"
              >
                Book Consultation
              </button>
            </div>
          </div>

          {/* Right card */}
          <div
            className={`relative transition-all duration-900 delay-500 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Main card */}
            <div className="gradient-border rounded-2xl p-6 lg:p-8 animate-float">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/40 text-xs font-medium tracking-widest mb-1">FFC VIRTUAL MORTGAGE</p>
                  <p className="text-white font-semibold text-lg">Digital Asset Financing</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cbfb45] to-[#a8d426] flex items-center justify-center shadow-lg shadow-[#cbfb45]/20">
                  <span className="text-[#03080f] font-bold text-sm">FFC</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Application Progress</span>
                  <span>75%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#cbfb45] to-[#0ea5e9] transition-all duration-1000"
                    style={{ width: visible ? '75%' : '0%' }}
                  />
                </div>
              </div>

              {/* Status items */}
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Identity Verified', done: true },
                  { label: 'FFC Holdings Confirmed', done: true },
                  { label: 'Property Evaluation', done: true },
                  { label: 'Final Approval', done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.done
                          ? 'bg-[#cbfb45]/20 border border-[#cbfb45]/40'
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      {item.done && (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#cbfb45]" />
                      )}
                    </div>
                    <span className={`text-sm ${item.done ? 'text-white/70' : 'text-white/30'}`}>
                      {item.label}
                    </span>
                    {item.done && (
                      <span className="ml-auto text-[#cbfb45] text-xs font-medium">Done</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Estimated Rate</p>
                  <p className="text-[#cbfb45] font-bold text-xl">5.2%</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-xs mb-0.5">Platform</p>
                  <p className="text-white font-medium text-sm">100% Digital</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-10 md:-top-9 -left-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl animate-delay-600 animate-fadeInLeft">
              <div className="w-7 h-7 rounded-lg bg-green-500/15 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div>
                <p className="text-white text-xs font-medium">No Credit Check</p>
                <p className="text-white/40 text-[10px]">Digital Qualification</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl animate-delay-600 animate-fadeInRight">
              <div className="w-7 h-7 rounded-lg bg-[#cbfb45]/15 flex items-center justify-center">
                <Shield size={14} className="text-[#cbfb45]" />
              </div>
              <div>
                <p className="text-white text-xs font-medium">Bank-Level Security</p>
                <p className="text-white/40 text-[10px]">Encrypted & Safe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-600 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-[#cbfb45] mb-1">{stat.value}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050d1a] to-transparent pointer-events-none" />
    </section>
  );
}
