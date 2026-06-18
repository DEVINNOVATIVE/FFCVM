'use client';

import { useInView } from '@/hooks/useInView';

const phases = [
  {
    number: '01',
    label: 'Phase 1',
    title: 'Connect & Collateral Valuation',
    color: '#0ea5e9',
    summary: 'Your journey begins by connecting with our secure platform to safely assess the borrowing power of your digital portfolio.',
    steps: [
      { title: 'Instant Digital Portfolio Analysis', desc: 'Connect your secure Web3 wallet or institutional custody gateway to the FFCVM interface. Our protocol performs a read-only cryptographic assessment of your verified $FFC holdings.' },
      { title: 'Real-Time LTV Calculation', desc: 'Our automated valuation engine checks live market liquidity depth and dynamically calculates your maximum Loan-to-Value (LTV) ratio.' },
      { title: 'Zero Credit Friction', desc: 'This evaluation is handled entirely on-chain and through our secure portal. It provides immediate transparency on your available borrowing capacity without performing hard credit checks that negatively impact your traditional credit score.' },
    ],
  },
  {
    number: '02',
    label: 'Phase 2',
    title: 'Tailor Your Virtual Mortgage Terms',
    color: '#cbfb45',
    summary: 'Every investment strategy, tax profile, and real estate target is unique. FFCVM provides a bespoke structuring engine designed to align precisely with your broader financial goals.',
    steps: [
      { title: 'Bespoke Loan Structuring', desc: 'Select your preferred loan duration, target funding amount, and repayment frequency.' },
      { title: 'Risk Tolerance Alignment', desc: 'Choose from varying tiered LTV structures (e.g., conservative, balanced, or aggressive). Lower LTV profiles unlock our most competitive, institutional-grade interest rates and build a massive buffer against digital market volatility.' },
      { title: 'Instant Digital Pre-Approval', desc: 'Upon finalizing your preferred parameters, our system generates an official, legally backed digital pre-approval offer. This letter outlines your exact terms, giving you the purchasing power and credibility of a cash buyer when making competitive offers to real estate agents and property sellers.' },
    ],
  },
  {
    number: '03',
    label: 'Phase 3',
    title: 'Secure Institutional Vault Escrow',
    color: '#10b981',
    summary: 'Once your property offer is accepted and your mortgage terms are locked, your digital assets are transitioned into a dedicated, highly secure escrow environment.',
    steps: [
      { title: 'Isolated Multi-Signature Custody', desc: "Your FFC holdings are transferred into isolated, smart-contract-backed, multi-signature vaults. These vaults utilize institutional-grade custody frameworks, completely separating your collateral from the platform's operational assets." },
      { title: 'Retained Market Exposure', desc: 'While your assets act as collateral to back your financing, you retain 100% ownership of the tokens. You remain fully exposed to the long-term growth and market upside of your FFC holdings throughout the duration of the mortgage.' },
      { title: 'Absolute Capital Protection', desc: 'The sandboxed nature of our smart-contract architecture ensures your tokens cannot be rehypothecated or lent out, eliminating counterparty risk entirely.' },
    ],
  },
  {
    number: '04',
    label: 'Phase 4',
    title: 'Property Funding & Closing Execution',
    color: '#8b5cf6',
    summary: 'With your collateral safely secured in escrow, FFCVM coordinates directly with your real estate legal team, title company, or escrow agent to finalize the physical acquisition.',
    steps: [
      { title: 'Frictionless Fiat or Stablecoin Dispatch', desc: 'FFCVM dispatches the approved mortgage funds directly to the closing escrow agent. Depending on local jurisdictions, regulatory compliance, and seller preferences, funding can be settled in major fiat currencies (USD, GBP, EUR) or institutional-grade stablecoins.' },
      { title: 'Deed and Title Acquisition', desc: 'The closing agent processes the payment, transferring the physical title, deed, and ownership rights directly to you.' },
      { title: 'Dual-Asset Optimization', desc: 'You successfully walk away with a tangible, yield-generating or residential property, while your underlying digital wealth remains completely intact, compounding in value inside your secure vault.' },
    ],
  },
];

function PhaseCard({ phase }: { phase: typeof phases[0] }) {
  const { ref, inView } = useInView();

  return (
    <div 
      ref={ref}
      className={`gradient-border rounded-2xl overflow-hidden transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div
        className="px-8 py-5 flex items-center gap-4"
        style={{ background: `${phase.color}08`, borderBottom: `1px solid ${phase.color}15` }}
      >
        <span className="text-4xl font-black select-none" style={{ color: `${phase.color}30` }}>
          {phase.number}
        </span>
        <div>
          <p className="text-xs font-medium tracking-widest mb-0.5" style={{ color: phase.color }}>
            {phase.label}
          </p>
          <h2 className="text-white font-bold text-xl">{phase.title}</h2>
        </div>
      </div>

      <div className="p-8">
        <p className="text-white/60 text-base leading-relaxed mb-7">{phase.summary}</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {phase.steps.map((step, j) => (
            <div key={j} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `${phase.color}20` }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: phase.color }} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold mb-1">{step.title}</p>
                <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function JourneyPhases() {
  return (
    <section className="py-20 bg-[#050d1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {phases.map((phase, i) => (
            <PhaseCard key={i} phase={phase} />
          ))}
        </div>
      </div>
    </section>
  );
}