

// // 'use client';

// // import { useInView } from '@/hooks/useInView';

// // const linearGradientStyles = {
// //   background: 'linear-gradient(90deg, #cbfb45 0%, #e8ff8a 60%, #cbfb45 100%)',
// //   backgroundSize: '200% auto',
// //   WebkitBackgroundClip: 'text',
// //   WebkitTextFillColor: 'transparent',
// //   backgroundClip: 'text',
// // };

// // export default function AboutHero() {
// //   const { ref, inView } = useInView();

// //   return (
// //     <section ref={ref} className="relative pt-32 pb-20 overflow-hidden grid-pattern">
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full bg-[#cbfb45]/4 blur-[180px]" />
// //         <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#0ea5e9]/4 blur-[120px]" />
// //       </div>

// //       <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
// //         inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
// //       }`}>
// //         <div className="max-w-4xl">
// //           <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-6">
// //             ABOUT FFCVM
// //           </span>
// //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
// //             Reimagining Wealth:{' '}
// //             <span style={linearGradientStyles}>
// //               Bridging Digital Assets with Physical Real Estate
// //             </span>
// //           </h1>
// //           <p className="text-white/80 text-xl leading-relaxed mb-6 max-w-3xl">
// //             Welcome to FFCVM, the premier, institutional-grade virtual mortgage ecosystem engineered to dissolve the boundaries between high-yield digital wealth and premier tangible real estate.
// //           </p>
// //           <p className="text-white/60 text-base leading-relaxed mb-4 max-w-3xl">
// //             We empower qualified clients, high-net-worth individuals, and institutional investors to unlock the true liquidity of their Force Finance ($FFC) holdings. By transforming digital assets into a dynamic mechanism for real estate acquisition, refinancing, and cross-border property development, FFCVM introduces an unprecedented level of capital efficiency to the wealth management space.
// //           </p>
// //           <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-3xl">
// //             By fusing cutting-edge decentralized architecture with established real estate infrastructure, FFCVM provides a sophisticated, secure, and fully compliant alternative to legacy lending. We bypass the systemic friction, administrative overhead, and rigid boundaries of traditional retail banking, allowing you to turn your digital footprint into a premium global financial passport.
// //           </p>
// //         </div>
// //       </div>
// //       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050d1a] to-transparent" />
// //     </section>
// //   );
// // }

// 'use client';

// import { useInView } from '@/hooks/useInView';

// const linearGradientStyles = {
//   background: 'linear-gradient(90deg, #cbfb45 0%, #e8ff8a 60%, #cbfb45 100%)',
//   backgroundSize: '200% auto',
//   WebkitBackgroundClip: 'text',
//   WebkitTextFillColor: 'transparent',
//   backgroundClip: 'text',
// };

// export default function AboutHero() {
//   const { ref, inView } = useInView();

//   return (
//     <section ref={ref} className="relative pt-32 pb-20 overflow-hidden grid-pattern">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full bg-[#cbfb45]/4 blur-[180px]" />
//         <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#0ea5e9]/4 blur-[120px]" />
//       </div>

//       <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
//         inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//       }`}>
//         <div className="max-w-4xl mx-auto text-left sm:text-center">
//           <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-6 uppercase">
//             About FFCVM
//           </span>
          
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
//             Reimagining Wealth:{' '}
//             <span style={linearGradientStyles} className="block mt-2 sm:inline sm:mt-0">
//               Bridging Digital Assets with Physical Real Estate
//             </span>
//           </h1>

//           {/* Intro highlight block to break paragraph fatigue */}
//           <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-8 border-l-2 sm:border-l-0 sm:border-b border-[#cbfb45]/20 pl-4 sm:pl-0 sm:pb-8">
//             Welcome to FFCVM, the premier, institutional-grade virtual mortgage ecosystem engineered to dissolve the boundaries between high-yield digital wealth and premier tangible real estate.
//           </p>
          
//           {/* Main body descriptive copy container */}
//           <div className="grid sm:grid-cols-2 gap-6 text-left mt-10 border-t border-white/5 pt-8">
//             <p className="text-white/60 text-sm sm:text-base leading-relaxed">
//               We empower qualified clients, high-net-worth individuals, and institutional investors to unlock the true liquidity of their Force Finance ($FFC) holdings. By transforming digital assets into a dynamic mechanism for real estate acquisition, refinancing, and cross-border property development, FFCVM introduces an unprecedented level of capital efficiency to the wealth management space.
//             </p>
//             <p className="text-white/45 text-sm sm:text-base leading-relaxed">
//               By fusing cutting-edge decentralized architecture with established real estate infrastructure, FFCVM provides a sophisticated, secure, and fully compliant alternative to legacy lending. We bypass the systemic friction, administrative overhead, and rigid boundaries of traditional retail banking, allowing you to turn your digital footprint into a premium global financial passport.
//             </p>
//           </div>
//         </div>
//       </div>
      
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050d1a] to-transparent" />
//     </section>
//   );
// }

'use client';

import { useInView } from '@/hooks/useInView';

const linearGradientStyles = {
  background: 'linear-gradient(90deg, #cbfb45 0%, #e8ff8a 60%, #cbfb45 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

export default function AboutHero() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative pt-32 pb-24 overflow-hidden grid-pattern">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full bg-[#cbfb45]/4 blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#0ea5e9]/4 blur-[120px]" />
      </div>

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Top Header Label */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-semibold tracking-widest uppercase">
            ABOUT FFCVM
          </span>
        </div>

        {/* Dynamic Split Layout to optimize whitespace and line-length */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Title & Hook Statement (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Reimagining Wealth:{' '}
              <span style={linearGradientStyles} className="block mt-2">
                Bridging Digital Assets with Physical Real Estate
              </span>
            </h1>
            
            <div className="h-px w-20 bg-gradient-to-r from-[#cbfb45] to-transparent" />
            
            <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
              Welcome to FFCVM, the premier, institutional-grade virtual mortgage ecosystem engineered to dissolve the boundaries between high-yield digital wealth and premier tangible real estate.
            </p>
          </div>

          {/* Right Column: Supporting Pillars Content (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:mt-4 border-l border-white/5 pl-6 lg:pl-8">
            <div className="space-y-2">
              <span className="text-[#cbfb45] font-semibold text-xs tracking-wider uppercase">Capital Efficiency</span>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                We empower qualified clients, high-net-worth individuals, and institutional investors to unlock the true liquidity of their Force Finance ($FFC) holdings. By transforming digital assets into a dynamic mechanism for real estate acquisition, refinancing, and cross-border property development, FFCVM introduces an unprecedented level of capital efficiency to the wealth management space.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/5">
              <span className="text-[#0ea5e9] font-semibold text-xs tracking-wider uppercase">Global Mobility</span>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed">
                By fusing cutting-edge decentralized architecture with established real estate infrastructure, FFCVM provides a sophisticated, secure, and fully compliant alternative to legacy lending. We bypass the systemic friction, administrative overhead, and rigid boundaries of traditional retail banking, allowing you to turn your digital footprint into a premium global financial passport.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050d1a] to-transparent" />
    </section>
  );
}

