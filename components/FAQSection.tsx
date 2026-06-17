'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is a Virtual Mortgage?',
    a: 'A virtual mortgage is a digitally managed mortgage solution that streamlines the entire financing process through online applications, verification, and approvals — no branch visits required. FFCVM delivers the complete mortgage experience through our secure digital platform.',
  },
  {
    q: 'Can digital assets be considered during qualification?',
    a: 'Qualification requirements vary by jurisdiction, regulatory requirements, and lending criteria. FFCVM works with clients to explore how FFC digital asset holdings can be part of the qualification and collateral evaluation process within applicable legal frameworks.',
  },
  {
    q: 'Is FFCVM available internationally?',
    a: 'Availability depends on local regulations and eligibility requirements. FFCVM is designed with global accessibility in mind and serves clients across multiple jurisdictions. Contact our team to confirm availability in your region.',
  },
  {
    q: 'How secure is the platform?',
    a: 'FFCVM employs enterprise-grade security systems including AES-256 encryption, multi-factor authentication, blockchain-integrated verification, and advanced encryption protocols. Our platform undergoes continuous security monitoring to protect all client data and transactions.',
  },
  {
    q: 'Do I need a credit check to apply?',
    a: 'FFCVM offers innovative financing structures designed for digital asset holders. Traditional credit check requirements may differ from conventional mortgage processes. Our qualification process considers your FFC holdings and overall financial profile.',
  },
  {
    q: 'How long does the approval process take?',
    a: 'Our streamlined digital process is designed for speed. Many clients receive financing options within 48 hours of completing their application and asset verification — significantly faster than traditional mortgage processes.',
  },
  {
    q: 'What types of properties can I finance?',
    a: 'FFCVM supports financing for residential primary residences, refinancing existing properties, rental properties, multi-unit buildings, vacation properties, and select commercial opportunities through our Investment Property Financing program.',
  },
  {
    q: 'Is FFCVM a regulated financial institution?',
    a: 'All financing products are subject to underwriting, eligibility requirements, regulatory compliance, and applicable laws within the relevant jurisdiction. FFCVM maintains compliance with all relevant regulations in its operating jurisdictions.',
  },
];

export default function FAQSection() {
  const { ref, inView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 bg-[#0a1628]">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-xs font-medium tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything you need to know about FFCVM and the virtual mortgage process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`gradient-border rounded-xl overflow-hidden transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors group"
              >
                <span
                  className={`font-medium text-sm transition-colors duration-200 ${
                    openIndex === i ? 'text-[#cbfb45]' : 'text-white group-hover:text-white/90'
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                    openIndex === i ? 'rotate-180 text-[#cbfb45]' : 'text-white/30'
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 border-t border-white/5 pt-4">
                  <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
