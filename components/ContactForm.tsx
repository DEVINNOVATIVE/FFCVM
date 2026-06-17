'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, User, Mail, Phone, MessageSquare, FileText } from 'lucide-react';


const subjects = [
  'Home Purchase Mortgage',
  'Mortgage Refinance',
  'Investment Property Financing',
  'FFC Asset Verification',
  'General Inquiry',
  'Schedule a Consultation',
  'Other',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;

    setStatus('loading');
    setErrorMsg('');

    // const { error } = await supabase.from('contact_submissions').insert({
    //   name: form.name.trim(),
    //   email: form.email.trim(),
    //   phone: form.phone.trim() || null,
    //   subject: form.subject,
    //   message: form.message.trim(),
    // });

    // if (error) {
    //   setStatus('error');
    //   setErrorMsg('Something went wrong. Please try again or email us directly.');
    // } else {
    //   setStatus('success');
    //   setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    // }
  };

  if (status === 'success') {
    return (
      <div className="gradient-border rounded-2xl p-10 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-[#cbfb45]/10 border border-[#cbfb45]/20 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} className="text-[#cbfb45]" />
        </div>
        <h3 className="text-white font-bold text-2xl mb-3">Message Sent!</h3>
        <p className="text-white/55 text-base leading-relaxed mb-8 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 bg-[#cbfb45] hover:bg-[#a8d426] text-[#03080f] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/25"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputBase =
    'w-full bg-white/[0.04] border border-white/10 text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#cbfb45]/40 focus:bg-white/[0.06] focus:ring-1 focus:ring-[#cbfb45]/20';

  return (
    <form onSubmit={handleSubmit} className="gradient-border rounded-2xl p-6 lg:p-8 space-y-5">
      <h3 className="text-white font-bold text-xl mb-6">Send Us a Message</h3>

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
            Full Name <span className="text-[#cbfb45]">*</span>
          </label>
          <div className="relative">
            <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              className={`${inputBase} pl-10`}
            />
          </div>
        </div>
        <div>
          <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
            Email Address <span className="text-[#cbfb45]">*</span>
          </label>
          <div className="relative">
            <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={`${inputBase} pl-10`}
            />
          </div>
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
            Phone Number <span className="text-white/20">(optional)</span>
          </label>
          <div className="relative">
            <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className={`${inputBase} pl-10`}
            />
          </div>
        </div>
        <div>
          <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
            Subject <span className="text-[#cbfb45]">*</span>
          </label>
          <div className="relative">
            <FileText size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none z-10" />
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className={`${inputBase} pl-10 appearance-none cursor-pointer`}
              style={{ backgroundImage: 'none' }}
            >
              <option value="" disabled className="bg-[#0a1628] text-white/40">
                Select a subject...
              </option>
              {subjects.map((s) => (
                <option key={s} value={s} className="bg-[#0a1628] text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
          Message <span className="text-[#cbfb45]">*</span>
        </label>
        <div className="relative">
          <MessageSquare size={14} className="absolute left-3.5 top-3.5 text-white/25" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your mortgage needs, FFC holdings, or any questions you have..."
            required
            rows={5}
            className={`${inputBase} pl-10 resize-none`}
          />
        </div>
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={15} />
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#cbfb45] hover:bg-[#a8d426] disabled:opacity-60 disabled:cursor-not-allowed text-[#03080f] font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#cbfb45]/25 active:scale-[0.98]"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-white/25 text-xs text-center">
        We respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
