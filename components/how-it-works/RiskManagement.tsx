'use client';

import { useInView } from '@/hooks/useInView';
import { Bell, PlusCircle, Lock, Banknote } from 'lucide-react';

export default function RiskManagement() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            RISK MANAGEMENT
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Advanced Risk Management & Volatility Protection</h2>
          <p className="text-white/50 text-base max-w-3xl mx-auto leading-relaxed">
            Because digital asset markets operate 24/7, FFCVM incorporates sophisticated, automated risk mitigation safeguards. These systems are carefully engineered to protect your personal equity and maintain the platform's structural stability during market shifts.
          </p>
        </div>

        {/* Feature Grid layout maps content explicitly */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          {/* Card 1: Margin Alerts */}
          <div className={`gradient-border rounded-2xl p-7 bg-white/[0.01] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#cbfb45]/15 border border-[#cbfb45]/25 flex-shrink-0">
                <Bell size={20} className="text-[#cbfb45]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Proactive Margin Notifications</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We believe in absolute transparency, not surprise liquidations. If broader market fluctuations cause the value of your FFC collateral to shift closer to a predefined threshold, our system provides early, real-time alerts. You will receive automated notifications via encrypted dashboard updates, emails, and SMS long before your position reaches a critical level.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Rebalancing */}
          <div className={`gradient-border rounded-2xl p-7 bg-white/[0.01] transition-all duration-700 delay-75 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#0ea5e9]/15 border border-[#0ea5e9]/25 flex-shrink-0">
                <PlusCircle size={20} className="text-[#0ea5e9]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">Flexible Collateral Rebalancing</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-3">
                  Borrowers are equipped with multiple seamless options to maintain a healthy, stress-free LTV ratio during market downturns:
                </p>
                <ul className="space-y-1.5 text-xs text-white/40">
                  <li><strong className="text-white/70">Collateral Top-Ups:</strong> Easily deposit additional $FFC tokens into your vault to increase your collateral cushion.</li>
                  <li><strong className="text-white/70">Principal Paydowns:</strong> Use stablecoins or fiat to pay down a portion of your outstanding loan principal, instantly lowering your LTV.</li>
                  <li><strong className="text-white/70">Cross-Collateral Flexibility:</strong> Temporarily supplement your vault using approved institutional stablecoins to stabilize your ratios until the market normalizes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Release */}
          <div className={`gradient-border rounded-2xl p-7 bg-white/[0.01] transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#10b981]/15 border border-[#10b981]/25 flex-shrink-0">
                <Lock size={20} className="text-[#10b981]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Automated Capital Release</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  As you consistently pay down your virtual mortgage principal over time through your structured payment plan, the debt burden on your collateral decreases. FFCVM’s automated smart contracts calculate this adjustment proportionally, safely unlocking and returning corresponding portions of your locked FFC tokens directly back to your active wallet balance.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Escrow Model */}
          <div className={`gradient-border rounded-2xl p-7 bg-white/[0.01] transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#f59e0b]/15 border border-[#f59e0b]/25 flex-shrink-0">
                <Banknote size={20} className="text-[#f59e0b]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">Proportional Escrow Model</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Smart contracts calculate debt reduction proportionally. Each payment permanently reduces your collateral obligation, creating a transparent, verifiable path to full portfolio recovery.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}