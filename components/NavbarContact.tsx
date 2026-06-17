'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Coins, ChevronDown, Menu, X, Home, RefreshCw, BarChart3 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Calculator', href: '/#calculator' },
  { label: 'FAQ', href: '/#faq' },
];

const programsMenu = [
  { icon: Home, label: 'Home Purchase', desc: 'Buy your dream property', href: '/#programs' },
  { icon: RefreshCw, label: 'Refinance', desc: 'Lower your payments', href: '/#programs' },
  { icon: BarChart3, label: 'Investment Property', desc: 'Grow your portfolio', href: '/#programs' },
];

export default function NavbarContact() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      {/* Floating pill container */}
      <nav className="max-w-6xl mx-auto bg-[#07111f]/85 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 px-5 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#cbfb45] to-[#a8d426] flex items-center justify-center shadow-md shadow-[#cbfb45]/25 group-hover:shadow-[#cbfb45]/40 transition-all duration-300">
            <Coins className="w-4 h-4 text-[#03080f]" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-sm tracking-wide">
              FFC<span className="text-[#cbfb45]">VM</span>
            </span>
            <span className="text-white/35 text-[9px] tracking-widest font-medium">VIRTUAL MORTGAGES</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* Programs dropdown */}
          <div className="relative">
            <button
              onClick={() => setProgramsOpen(!programsOpen)}
              onBlur={() => setTimeout(() => setProgramsOpen(false), 150)}
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

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 transition-all duration-200 ${
                programsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="bg-[#07111f] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-2">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#07111f] border-l border-t border-white/10 rotate-45" />
                {programsMenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#cbfb45]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#cbfb45]/20 transition-colors">
                        <Icon size={14} className="text-[#cbfb45]" />
                      </div>
                      <div className="text-left">
                        <p className="text-white text-sm font-medium">{item.label}</p>
                        <p className="text-white/35 text-xs">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact — highlighted as active */}
          <Link
            href="/contact"
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-[#cbfb45] bg-[#cbfb45]/8 text-sm font-medium transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/#apply"
          className="hidden md:flex flex-shrink-0 items-center px-5 py-2.5 bg-[#cbfb45] hover:bg-[#d4ff5a] text-[#03080f] text-sm font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/30 active:scale-[0.97]"
        >
          Apply Now
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-all"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden mt-2 max-w-6xl mx-auto transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#07111f]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-white/65 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
            >
              {link.label}
            </Link>
          ))}
          {programsMenu.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 rounded-xl text-white/65 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-3 rounded-xl text-[#cbfb45] text-sm font-medium bg-[#cbfb45]/5"
          >
            Contact
          </Link>
          <div className="pt-1 mt-1 border-t border-white/5">
            <Link
              href="/#apply"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-3 bg-[#cbfb45] hover:bg-[#d4ff5a] text-[#03080f] font-bold rounded-xl transition-all text-sm text-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
