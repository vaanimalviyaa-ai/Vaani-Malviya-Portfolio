import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileText,
  MessageSquare,
  Loader2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Got opportunity for you',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone.replace(/\s+/g, ''));
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please include a brief message (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructMailtoUrl = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry: ${formData.inquiryType}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Vaani,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const mailtoUrl = constructMailtoUrl();
      // Trigger default email client
      try {
        window.location.href = mailtoUrl;
      } catch {
        // Fallback handled smoothly by success UI with manual trigger
      }
    }, 600);
  };

  const handleCopyDraft = () => {
    const text = `To: ${personalInfo.email}\nSubject: [Portfolio Inquiry: ${formData.inquiryType}] from ${formData.name}\n\nHi Vaani,\n\nI am ${formData.name} (${formData.email}).\n\n${formData.message}\n\nRegards,\n${formData.name}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
  };

  return (
    <section id="contact" className="py-20 bg-transparent border-b border-purple-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-purple-400/50 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_18px_rgba(168,85,247,0.3)]">
                <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                <span>Start a Conversation</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                Let's Connect & Create Value
              </h2>
              <p className="mt-3 text-base text-stone-300 leading-relaxed">
                Interested in building impactful brands, uncovering strategic market insights, or exploring the potential of Marketing? Let's connect and turn ideas into meaningful outcomes.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div
                id="contact-email-card"
                className="p-4 rounded-xl bg-black/80 border border-purple-500/30 flex items-center justify-between shadow-[0_0_25px_rgba(168,85,247,0.12)] backdrop-blur-xl hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(192,132,252,0.25)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/70 text-purple-200 border border-purple-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    <Mail className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <span className="text-xs text-purple-300/80 block font-medium">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-purple-900/40 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div
                id="contact-phone-card"
                className="p-4 rounded-xl bg-black/80 border border-purple-500/30 flex items-center justify-between shadow-[0_0_25px_rgba(168,85,247,0.12)] backdrop-blur-xl hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(192,132,252,0.25)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/70 text-purple-200 border border-purple-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    <Phone className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <span className="text-xs text-purple-300/80 block font-medium">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  id="contact-copy-phone-btn"
                  className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-purple-900/40 transition-colors cursor-pointer"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div
                id="contact-linkedin-card"
                className="p-4 rounded-xl bg-black/80 border border-purple-500/30 flex items-center justify-between shadow-[0_0_25px_rgba(168,85,247,0.12)] backdrop-blur-xl hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(192,132,252,0.25)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/70 text-purple-200 border border-purple-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    <Linkedin className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <span className="text-xs text-purple-300/80 block font-medium">LinkedIn Network</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-purple-300 transition-colors"
                    >
                      linkedin.com/in/vaani-malviya
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-purple-900/40 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
                  aria-label="Open LinkedIn profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-black/80 border border-purple-500/30 flex items-center gap-3 shadow-[0_0_25px_rgba(168,85,247,0.12)] backdrop-blur-xl">
                <div className="w-10 h-10 rounded-lg bg-purple-950/70 text-purple-200 border border-purple-400/40 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  <MapPin className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <span className="text-xs text-purple-300/80 block font-medium">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location} <span className="text-purple-300/90 text-xs font-normal">(Open to Relocation)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Resume Link */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black hover:bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:text-white hover:border-purple-400 text-sm font-semibold transition-all cursor-pointer shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Open Printable Resume View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Inquiry Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-black/80 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(168,85,247,0.18)] backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mb-6">
                Fill in the details below to dispatch a message directly to Vaani's inbox.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-black/90 border border-purple-400/50 text-center space-y-4 shadow-[0_0_40px_rgba(168,85,247,0.3)] animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Message Prepared & Ready to Send
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto mt-1 leading-relaxed">
                      We have compiled your note for <strong className="text-purple-200 font-semibold">{personalInfo.email}</strong> and prompted your default email app.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={constructMailtoUrl()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-purple-300/60 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Re-open Email App</span>
                    </a>

                    <button
                      onClick={handleCopyDraft}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:text-white font-semibold text-xs transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
                    >
                      {copiedDraft ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-300">Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-purple-300" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 border-t border-purple-500/20">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          inquiryType: 'Full-time Brand / Marketing Role',
                          message: '',
                        });
                        setErrors({});
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-purple-300 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Compose Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {Object.keys(errors).length > 0 && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-xs flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block">Please correct the highlighted fields:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-0.5 text-stone-300">
                          {errors.name && <li>{errors.name}</li>}
                          {errors.email && <li>{errors.email}</li>}
                          {errors.message && <li>{errors.message}</li>}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="sender-name"
                        className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-1"
                      >
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="sender-name"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Ananya Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-white text-sm bg-black/90 placeholder-stone-500 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] ${
                          errors.name
                            ? 'border-rose-500/70 focus-visible:ring-rose-400'
                            : 'border-purple-500/30 focus-visible:border-purple-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-email"
                        className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-1"
                      >
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="sender-email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. ananya@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-white text-sm bg-black/90 placeholder-stone-500 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] ${
                          errors.email
                            ? 'border-rose-500/70 focus-visible:ring-rose-400'
                            : 'border-purple-500/30 focus-visible:border-purple-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-1"
                    >
                      Inquiry Intent
                    </label>
                    <select
                      id="inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-500/30 text-white text-sm bg-black/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:border-purple-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    >
                      <option value="Full-time Brand / Marketing Role" className="bg-black text-white">
                        Full-time Brand / Marketing Role
                      </option>
                      <option value="Consultative Sales & Business Development" className="bg-black text-white">
                        Consultative Sales & Business Development
                      </option>
                      <option value="Market Intelligence & Research Consultation" className="bg-black text-white">
                        Market Intelligence & Research Consultation
                      </option>
                      <option value="General Networking & Mentorship" className="bg-black text-white">
                        General Networking & Discussion
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="sender-message"
                      className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-1"
                    >
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="sender-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Share brief details regarding your team, role scope, or collaboration inquiry..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-white text-sm bg-black/90 placeholder-stone-500 resize-y transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] ${
                        errors.message
                          ? 'border-rose-500/70 focus-visible:ring-rose-400'
                          : 'border-purple-500/30 focus-visible:border-purple-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(168,85,247,0.4)] border border-purple-300/50 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Vaani</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
