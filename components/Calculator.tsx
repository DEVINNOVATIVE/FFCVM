'use client';

import { useState, useCallback } from 'react';
import { useInView } from '@/hooks/useInView';
import { Calculator as CalcIcon, DollarSign, Percent, Calendar } from 'lucide-react';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
}

export default function Calculator() {
  const { ref, inView } = useInView();

  const [propertyValue, setPropertyValue] = useState(500000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(5.2);
  const [termYears, setTermYears] = useState(30);

  const downPayment = (propertyValue * downPaymentPct) / 100;
  const loanAmount = propertyValue - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = termYears * 12;
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / numPayments
      : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - loanAmount;

  const SliderInput = useCallback(
    ({
      label,
      value,
      min,
      max,
      step,
      onChange,
      format,
      icon: Icon,
    }: {
      label: string;
      value: number;
      min: number;
      max: number;
      step: number;
      onChange: (v: number) => void;
      format: (v: number) => string;
      icon: React.ElementType;
    }) => (
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon size={14} className="text-[#cbfb45]" />
            <span className="text-white/60 text-sm">{label}</span>
          </div>
          <span className="text-white font-semibold text-sm">{format(value)}</span>
        </div>
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #cbfb45 0%, #cbfb45 ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) ${((value - min) / (max - min)) * 100}%, rgba(255,255,255,0.1) 100%)`,
            }}
          />
        </div>
        <div className="flex justify-between text-white/25 text-xs mt-1.5">
          <span>{format(min)}</span>
          <span>{format(max)}</span>
        </div>
      </div>
    ),
    []
  );

  return (
    <section id="calculator" className="relative py-24 bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#cbfb45]/3 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-4">
            MORTGAGE CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">See What You Can Afford</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Estimate your monthly payments and explore financing possibilities with our interactive tool.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Controls */}
          <div className="gradient-border rounded-2xl p-6 lg:p-8 space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <CalcIcon size={18} className="text-[#cbfb45]" />
              <h3 className="text-white font-semibold">Adjust Parameters</h3>
            </div>

            <SliderInput
              label="Property Value"
              value={propertyValue}
              min={100000}
              max={2000000}
              step={10000}
              onChange={setPropertyValue}
              format={formatCurrency}
              icon={DollarSign}
            />
            <SliderInput
              label="Down Payment"
              value={downPaymentPct}
              min={5}
              max={50}
              step={1}
              onChange={setDownPaymentPct}
              format={(v) => `${v}%`}
              icon={Percent}
            />
            <SliderInput
              label="Interest Rate (Annual)"
              value={interestRate}
              min={1}
              max={15}
              step={0.1}
              onChange={setInterestRate}
              format={(v) => `${v.toFixed(1)}%`}
              icon={Percent}
            />
            <SliderInput
              label="Loan Term"
              value={termYears}
              min={5}
              max={30}
              step={5}
              onChange={setTermYears}
              format={(v) => `${v} yrs`}
              icon={Calendar}
            />
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {/* Main result */}
            <div className="gradient-border rounded-2xl p-6 lg:p-8 text-center flex-1 flex flex-col items-center justify-center">
              <p className="text-white/40 text-sm mb-2">Monthly Payment</p>
              <p className="text-5xl font-black text-[#cbfb45] mb-1">
                {formatCurrency(monthlyPayment)}
              </p>
              <p className="text-white/30 text-xs">Principal + Interest</p>

              <div className="w-full h-px bg-white/5 my-6" />

              {/* Breakdown */}
              <div className="w-full space-y-3">
                {[
                  { label: 'Property Value', value: formatCurrency(propertyValue), color: '#0ea5e9' },
                  { label: 'Down Payment', value: `${formatCurrency(downPayment)} (${downPaymentPct}%)`, color: '#cbfb45' },
                  { label: 'Loan Amount', value: formatCurrency(loanAmount), color: '#10b981' },
                  { label: 'Total Interest', value: formatCurrency(totalInterest), color: '#f97316' },
                  { label: 'Total Cost', value: formatCurrency(totalPayment + downPayment), color: '#8b5cf6' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                      <span className="text-white/50 text-sm">{label}</span>
                    </div>
                    <span className="text-white font-medium text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.querySelector('#apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/25 active:scale-[0.98]"
            >
              Apply for This Mortgage
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          background: #cbfb45;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(240, 180, 41, 0.4);
          transition: box-shadow 0.2s;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          box-shadow: 0 0 16px rgba(240, 180, 41, 0.6);
        }
        input[type='range']::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #cbfb45;
          border: none;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
