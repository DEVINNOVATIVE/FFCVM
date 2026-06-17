'use client';

import { useInView } from '@/hooks/useInView';
import { Shield, Key, Smartphone, Eye, Database, AlertCircle } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Bank-Level Encryption', desc: 'AES-256 encryption across all data transmissions and storage.' },
  { icon: Eye, title: 'Secure Identity Verification', desc: 'Multi-layer KYC verification to protect every account.' },
  { icon: Smartphone, title: 'Multi-Factor Authentication', desc: '2FA and biometric options for all platform access.' },
  { icon: AlertCircle, title: 'Compliance Monitoring', desc: 'Continuous regulatory compliance across all jurisdictions.' },
  { icon: Database, title: 'Data Protection Protocols', desc: 'GDPR-aligned data handling and privacy standards.' },
  { icon: Key, title: 'Risk Management Systems', desc: 'Automated risk scoring and anomaly detection systems.' },
];

export default function SecuritySection() {
  const { ref, inView } = useInView();

  return (
    <section id="security" className="relative py-24 bg-[#050d1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#10b981]/3 blur-[150px]" />
      </div>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-block px-3 py-1 rounded-full border border-[#10b981]/20 bg-[#10b981]/5 text-[#10b981] text-xs font-medium tracking-widest mb-4">
                SECURITY & COMPLIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Your Trust Is Our Foundation
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-8">
                FFCVM utilizes industry-leading security standards to protect client information
                and transactions at every step. Your data, your assets, and your privacy are
                our highest priority.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-3 p-4 gradient-border rounded-xl group hover:bg-white/[0.02] transition-all duration-700 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#10b981]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#10b981]/20 transition-colors">
                      <Icon size={15} className="text-[#10b981]" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-medium mb-0.5">{item.title}</h3>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right visual */}
          <div
            className={`relative flex items-center justify-center transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="gradient-border rounded-2xl p-8 w-full">
              {/* Shield graphic */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#10b981]/20 to-[#0ea5e9]/20 border border-[#10b981]/20 flex items-center justify-center">
                    <Shield size={44} className="text-[#10b981]" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                </div>
              </div>

              {/* Security score */}
              <div className="text-center mb-6">
                <p className="text-white/40 text-xs mb-1">Platform Security Score</p>
                <p className="text-5xl font-black text-[#10b981]">99.9<span className="text-2xl">%</span></p>
                <p className="text-white/30 text-xs mt-1">Uptime & Security Rating</p>
              </div>

              {/* Compliance badges */}
              <div className="grid grid-cols-3 gap-3">
                {['ISO 27001', 'GDPR', 'SOC 2', 'AML', 'KYC', 'PCI DSS'].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center justify-center py-2 px-3 rounded-lg bg-[#10b981]/5 border border-[#10b981]/10 text-[#10b981] text-xs font-medium"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
