import type { Metadata } from 'next';
import NavbarContact from '@/components/NavbarContact';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import {
  Mail,
  Globe,
  Clock,
  Shield,
  MessageCircle,
  CalendarDays,
  ArrowRight,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us – FFCVM | FFC Virtual Mortgages',
  description:
    'Get in touch with the FFCVM team. Ask about virtual mortgages, FFC asset qualification, or schedule a free consultation with our specialists.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@ffcvm.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@ffcvm.com',
    color: '#cbfb45',
  },
  {
    icon: Globe,
    title: 'Website',
    value: 'FFCVM.com',
    sub: 'Explore all our services',
    href: '#',
    color: '#0ea5e9',
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: 'Within 24 Hours',
    sub: 'Mon – Fri, 9am – 6pm EST',
    color: '#10b981',
  },
  {
    icon: MapPin,
    title: 'Platform',
    value: '100% Digital',
    sub: 'No physical office needed',
    color: '#8b5cf6',
  },
];

const reasons = [
  {
    icon: MessageCircle,
    title: 'General Inquiry',
    desc: 'Questions about how FFCVM works or how to get started with a virtual mortgage.',
  },
  {
    icon: CalendarDays,
    title: 'Schedule a Consultation',
    desc: 'Book a one-on-one session with a mortgage specialist who understands digital assets.',
  },
  {
    icon: Shield,
    title: 'Asset Verification Support',
    desc: 'Get guidance on the FFC holdings verification process and what to expect.',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <NavbarContact />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden hero-bg grid-pattern">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[#cbfb45]/4 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#0ea5e9]/4 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full border border-[#cbfb45]/20 bg-[#cbfb45]/5 text-[#cbfb45] text-xs font-medium tracking-widest mb-5">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Contact{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #cbfb45 0%, #e8ff8a 50%, #cbfb45 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              FFCVM
            </span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Have questions about virtual mortgages or FFC asset financing? Our specialists are
            ready to guide you through every step of the process.
          </p>

          {/* Quick contact badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              '24h Response Time',
              'No Obligation',
              'Confidential',
              'Free Consultation',
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/55 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#cbfb45]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050d1a] to-transparent" />
      </section>

      {/* Main content */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact info cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="gradient-border rounded-xl p-5 flex items-start gap-4 group hover:bg-white/[0.02] transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <p className="text-white/40 text-xs font-medium mb-0.5">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white font-semibold text-sm hover:text-[#cbfb45] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-semibold text-sm">{item.value}</p>
                        )}
                        <p className="text-white/30 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Why contact us */}
              <div className="gradient-border rounded-xl p-6">
                <h3 className="text-white font-semibold text-base mb-4">Common Reasons to Contact Us</h3>
                <div className="space-y-4">
                  {reasons.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#cbfb45]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon size={13} className="text-[#cbfb45]" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium mb-0.5">{item.title}</p>
                          <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick apply CTA */}
              <div className="relative overflow-hidden rounded-xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(203,251,69,0.08) 0%, rgba(14,165,233,0.06) 100%)',
                  border: '1px solid rgba(203,251,69,0.15)',
                }}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#cbfb45]/5 blur-xl" />
                <p className="text-[#cbfb45] text-xs font-medium tracking-widest mb-2">READY TO START?</p>
                <h3 className="text-white font-bold text-lg mb-2">Apply in Minutes</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  Skip the form — go straight to our digital pre-qualification application.
                </p>
                <a
                  href="/#apply"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/20"
                >
                  Apply Now <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm mb-3">Looking for quick answers?</p>
          <h2 className="text-2xl font-bold text-white mb-4">Check Our FAQ First</h2>
          <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
            Many common questions about virtual mortgages, FFC qualification, and our process are answered in our FAQ section.
          </p>
          <a
            href="/#faq"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#cbfb45]/25 text-[#cbfb45] hover:bg-[#cbfb45]/5 hover:border-[#cbfb45]/40 font-medium rounded-xl transition-all duration-200"
          >
            View FAQ <ArrowRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
