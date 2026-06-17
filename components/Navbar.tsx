'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Home, RefreshCw, BarChart3 } from 'lucide-react';

const programsMenu = [
  { icon: Home, label: 'Home Purchase', desc: 'Buy your dream property', href: '#programs' },
  { icon: RefreshCw, label: 'Refinance', desc: 'Lower your payments', href: '#programs' },
  { icon: BarChart3, label: 'Investment Property', desc: 'Grow your portfolio', href: '#programs' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setProgramsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      {/* Floating pill container */}
      <nav className="max-w-6xl mx-auto bg-[#07111f]/85 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 px-5 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 flex-shrink-0 group"
        >
          {/* Container size maintained, but background color/gradient removed */}
          <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 overflow-hidden relative flex-shrink-0">
            <Image 
              src="/force-finance.svg" 
              alt="Force Finance Logo" 
              width={34} // Increased slightly to fill the space better without a background
              height={34}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight text-left">
            <span className="text-white font-bold text-sm tracking-wide">
              FFC<span className="text-[#cbfb45]">VM</span>
            </span>
            <span className="text-white/35 text-[9px] tracking-widest font-medium">VIRTUAL MORTGAGES</span>
          </div>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {/* About */}
          <button
            onClick={() => scrollTo('#about')}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
          >
            About
          </button>

          {/* Programs dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProgramsOpen(!programsOpen)}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                programsOpen ? 'text-[#cbfb45] bg-[#cbfb45]/8' : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Programs
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${programsOpen ? 'rotate-180 text-[#cbfb45]' : 'text-white/30'}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 transition-all duration-200 ${
                programsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="bg-[#07111f] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-2 overflow-hidden">
                {/* Arrow */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#07111f] border-l border-t border-white/10 rotate-45" />
                {programsMenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#cbfb45]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cbfb45]/20 transition-colors">
                        <Icon size={14} className="text-[#cbfb45]" />
                      </div>
                      <div className="text-left">
                        <p className="text-white text-sm font-medium">{item.label}</p>
                        <p className="text-white/35 text-xs">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Calculator */}
          <button
            onClick={() => scrollTo('#calculator')}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
          >
            Calculator
          </button>

          {/* FAQ */}
          <button
            onClick={() => scrollTo('#faq')}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
          >
            FAQ
          </button>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-[#cbfb45]/80 hover:text-[#cbfb45] hover:bg-[#cbfb45]/8 text-sm font-medium transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* CTA button */}
        <button
          onClick={() => scrollTo('#apply')}
          className="hidden md:flex flex-shrink-0 items-center gap-1.5 px-5 py-2.5 bg-[#cbfb45] hover:bg-[#d4ff5a] text-[#03080f] text-sm font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/30 active:scale-[0.97]"
        >
          Apply Now
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-all"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu — drops below the pill */}
      <div
        className={`md:hidden mt-2 max-w-6xl mx-auto transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#07111f]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 p-4 flex flex-col gap-1">
          {[
            { label: 'About', href: '#about' },
            { label: 'Programs', href: '#programs' },
            { label: 'Calculator', href: '#calculator' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left px-4 py-3 rounded-xl text-white/65 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-3 rounded-xl text-[#cbfb45] text-sm font-medium"
          >
            Contact
          </Link>
          <div className="pt-1 mt-1 border-t border-white/5">
            <button
              onClick={() => scrollTo('#apply')}
              className="w-full py-3 bg-[#cbfb45] hover:bg-[#d4ff5a] text-[#03080f] font-bold rounded-xl transition-all text-sm"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}