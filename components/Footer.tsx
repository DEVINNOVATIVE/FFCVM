'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Platform: [
    { label: 'Home Purchase', href: '#programs' },
    { label: 'Refinancing', href: '#programs' },
    { label: 'Investment Properties', href: '#programs' },
    { label: 'Mortgage Calculator', href: '#calculator' },
  ],
  Company: [
    { label: 'About FFCVM', href: '#about' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FFC Ecosystem', href: '#ecosystem' },
    { label: 'Who We Serve', href: '#who-we-serve' },
  ],
  Support: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Security', href: '#security' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Apply Now', href: '#apply' },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03080f] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* Size matching the optimized Navbar layout without background colors */}
              <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 overflow-hidden relative flex-shrink-0">
                <Image 
                  src="/force-finance.svg" 
                  alt="Force Finance Logo" 
                  width={32} 
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-white font-bold text-base tracking-wide">
                  FFC<span className="text-[#cbfb45]">VM</span>
                </span>
                <span className="text-white/40 text-[9px] tracking-widest font-medium">VIRTUAL MORTGAGES</span>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              The Future of Digital Real Estate Financing. Bridging blockchain technology with
              real-world property ownership.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:info@ffcvm.com"
                className="flex items-center gap-2 text-white/40 hover:text-[#cbfb45] text-sm transition-colors group"
              >
                <Mail size={14} />
                <span>info@ffcvm.com</span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <Globe size={14} />
                <span>FFCVM.com</span>
              </div>
            </div>

            {/* FFC badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#cbfb45]/5 border border-[#cbfb45]/10">
              <div className="w-4 h-4 rounded-full bg-[#cbfb45] flex items-center justify-center">
                <span className="text-[#03080f] text-[7px] font-black">FFC</span>
              </div>
              <span className="text-[#cbfb45]/70 text-xs">Powered by Force Finance Coin</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href.startsWith('/') && !href.startsWith('/#') ? (
                      <Link
                        href={href}
                        className="text-white/40 hover:text-[#cbfb45] text-sm transition-colors duration-200"
                      >
                        {label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollTo(href)}
                        className="text-white/40 hover:text-[#cbfb45] text-sm transition-colors duration-200 text-left"
                      >
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-white/20 text-xs leading-relaxed mb-4">
            <strong className="text-white/30">Legal Disclaimer:</strong> FFCVM does not guarantee mortgage approval. All financing
            products are subject to underwriting, eligibility requirements, regulatory compliance, and applicable laws within the
            relevant jurisdiction. Cryptocurrency and digital assets involve risk and may be subject to market volatility.
            References to digital assets are for informational purposes only and do not constitute investment, legal, tax, or
            financial advice. Some lenders and mortgage programs are exploring the use of digital assets in qualification and
            collateral structures, but availability varies by lender and jurisdiction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/5">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} FFC Virtual Mortgages (FFCVM). All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/20 text-xs">
              <button className="hover:text-white/40 transition-colors">Privacy Policy</button>
              <button className="hover:text-white/40 transition-colors">Terms of Service</button>
              <button className="hover:text-white/40 transition-colors">Compliance</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}