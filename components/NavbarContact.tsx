'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Home,
  RefreshCw,
  BarChart3,
  Info,
  Workflow,
  Blocks,
  Users,
} from 'lucide-react';

const companyMenu = [
  { icon: Info, label: 'About FFCVM', desc: 'Our mission and vision', href: '/about' },
  { icon: Workflow, label: 'How It Works', desc: 'Step-by-step process', href: '/how-it-works' },
  { icon: Blocks, label: 'FFC Ecosystem', desc: 'Force Finance Coin', href: '/ecosystem' },
  { icon: Users, label: 'Who We Serve', desc: 'Is FFCVM right for you?', href: '/who-we-serve' },
];

const programsMenu = [
  { icon: Home, label: 'Home Purchase', desc: 'Buy your dream property', href: '/programs/home-purchase' },
  { icon: RefreshCw, label: 'Refinance', desc: 'Lower your payments', href: '/programs/refinancing' },
  { icon: BarChart3, label: 'Investment Property', desc: 'Grow your portfolio', href: '/programs/investment-property' },
];

type DropdownKey = 'company' | 'programs' | null;

export default function NavbarContact() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleDropdown = (key: DropdownKey) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  const isCompanyPage = companyMenu.some((item) => item.href === pathname);
  const isProgramsPage = programsMenu.some((item) => item.href === pathname);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8" ref={navRef}>
      <nav className="max-w-6xl mx-auto bg-[#07111f]/85 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 px-5 h-14 flex items-center justify-between gap-4">

        {/* Brand Logo Integration */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 overflow-hidden relative flex-shrink-0">
            <Image 
              src="/force-finance.svg" 
              alt="Force Finance Logo" 
              width={34} 
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
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">

          {/* Company dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('company')}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                openDropdown === 'company' || isCompanyPage
                  ? 'text-[#cbfb45] bg-[#cbfb45]/8'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Company
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  openDropdown === 'company' ? 'rotate-180 text-[#cbfb45]' : 'text-white/30'
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 transition-all duration-200 ${
                openDropdown === 'company'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="relative bg-[#07111f] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-2">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#07111f] border-l border-t border-white/10 rotate-45" />
                {companyMenu.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group ${
                        isActive ? 'bg-[#cbfb45]/8' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? 'bg-[#cbfb45]/20' : 'bg-[#cbfb45]/10 group-hover:bg-[#cbfb45]/20'
                      }`}>
                        <Icon size={14} className="text-[#cbfb45]" />
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isActive ? 'text-[#cbfb45]' : 'text-white'}`}>{item.label}</p>
                        <p className="text-white/35 text-xs">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Programs dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('programs')}
              className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                openDropdown === 'programs' || isProgramsPage
                  ? 'text-[#cbfb45] bg-[#cbfb45]/8'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              Programs
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${
                  openDropdown === 'programs' ? 'rotate-180 text-[#cbfb45]' : 'text-white/30'
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 transition-all duration-200 ${
                openDropdown === 'programs'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="relative bg-[#07111f] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 p-2">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#07111f] border-l border-t border-white/10 rotate-45" />
                {programsMenu.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group ${
                        isActive ? 'bg-[#cbfb45]/8' : 'hover:bg-white/5'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? 'bg-[#cbfb45]/20' : 'bg-[#cbfb45]/10 group-hover:bg-[#cbfb45]/20'
                      }`}>
                        <Icon size={14} className="text-[#cbfb45]" />
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isActive ? 'text-[#cbfb45]' : 'text-white'}`}>{item.label}</p>
                        <p className="text-white/35 text-xs">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link href="/#calculator" className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
            Calculator
          </Link>

          <Link href="/#faq" className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 text-sm font-medium transition-all duration-200">
            FAQ
          </Link>

          <Link
            href="/contact"
            className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
              pathname === '/contact'
                ? 'text-[#cbfb45] bg-[#cbfb45]/8'
                : 'text-[#cbfb45]/80 hover:text-[#cbfb45] hover:bg-[#cbfb45]/8'
            }`}
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
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#07111f]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/50 p-4 flex flex-col gap-1">
          <p className="px-4 py-1 text-white/25 text-xs font-medium tracking-widest">COMPANY</p>
          {companyMenu.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                pathname === link.href ? 'text-[#cbfb45] bg-[#cbfb45]/8' : 'text-white/65 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="my-1 border-t border-white/5" />
          <p className="px-4 py-1 text-white/25 text-xs font-medium tracking-widest">PROGRAMS</p>
          {programsMenu.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                pathname === link.href ? 'text-[#cbfb45] bg-[#cbfb45]/8' : 'text-white/65 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="my-1 border-t border-white/5" />
          <Link href="/#calculator" onClick={() => setMobileOpen(false)} className="px-4 py-2.5 rounded-xl text-white/65 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">Calculator</Link>
          <Link href="/#faq" onClick={() => setMobileOpen(false)} className="px-4 py-2.5 rounded-xl text-white/65 hover:text-white hover:bg-white/5 text-sm font-medium transition-all">FAQ</Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium ${
              pathname === '/contact' ? 'text-[#cbfb45] bg-[#cbfb45]/8' : 'text-[#cbfb45]'
            }`}
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