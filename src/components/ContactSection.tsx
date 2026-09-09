import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { copyToClipboard } from '../utils/clipboard';
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
    inquiryType: 'Full-time Brand / Marketing Role',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(personalInfo.email);
    if (success) {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleCopyPhone = async () => {
    const success = await copyToClipboard(personalInfo.phone.replace(/\s+/g, ''));
    if (success) {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
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

  const handleCopyDraft = async () => {
    const text = `To: ${personalInfo.email}\nSubject: [Portfolio Inquiry: ${formData.inquiryType}] from ${formData.name}\n\nHi Vaani,\n\nI am ${formData.name} (${formData.email}).\n\n${formData.message}\n\nRegards,\n${formData.name}`;
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 2200);
    }
  };

  return (
    <section id="contact" className="py-20 bg-transparent border-b border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-purple-200 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
                <MessageSquare className="w-3.5 h-3.5 text-purple-600" />
                <span>Start a Conversation</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
                Let's Connect & Create Value
              </h2>
              <p className="mt-3 text-base text-stone-600 leading-relaxed">
                Interested in building impactful brands, uncovering strategic market insights, or exploring the potential of Marketing? Let's connect and turn ideas into meaningful outcomes.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div
                id="contact-email-card"
                className="p-4 rounded-xl bg-white border border-purple-200/90 flex items-center justify-between shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)] hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2),0_0_20px_rgba(192,132,252,0.18)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100/90 text-purple-700 border border-purple-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-xs text-purple-800 block font-semibold">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-stone-900 hover:text-purple-800 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  id="contact-copy-email-btn"
                  className="p-2 rounded-lg text-stone-500 hover:text-purple-800 hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-all cursor-pointer hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div
                id="contact-phone-card"
                className="p-4 rounded-xl bg-white border border-purple-200/90 flex items-center justify-between shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)] hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2),0_0_20px_rgba(192,132,252,0.18)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100/90 text-purple-700 border border-purple-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                    <Phone className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-xs text-purple-800 block font-semibold">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-stone-900 hover:text-purple-800 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  id="contact-copy-phone-btn"
                  className="p-2 rounded-lg text-stone-500 hover:text-purple-800 hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-all cursor-pointer hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div
                id="contact-linkedin-card"
                className="p-4 rounded-xl bg-white border border-purple-200/90 flex items-center justify-between shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)] hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2),0_0_20px_rgba(192,132,252,0.18)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100/90 text-purple-700 border border-purple-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                    <Linkedin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-xs text-purple-800 block font-semibold">LinkedIn Network</span>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-stone-900 hover:text-purple-800 transition-colors"
                    >
                      linkedin.com/in/vaani-malviya
                    </a>
                  </div>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-stone-500 hover:text-purple-800 hover:bg-purple-100 border border-transparent hover:border-purple-300 transition-all focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  aria-label="Open LinkedIn profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white border border-purple-200/90 flex items-center gap-3 shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)]">
                <div className="w-10 h-10 rounded-lg bg-purple-100/90 text-purple-700 border border-purple-300 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                  <MapPin className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <span className="text-xs text-purple-800 block font-semibold">Location</span>
                  <span className="text-sm font-semibold text-stone-900">
                    {personalInfo.location} <span className="text-purple-700 text-xs font-normal">(Open to Relocation)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Resume Link */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-300 text-purple-950 text-sm font-semibold transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
              >
                <FileText className="w-4 h-4 text-purple-700" />
                <span>Open Printable Resume View</span>
              </button>
            </div>
          </div>

          {/* Right Column: Inquiry Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(168,85,247,0.12),0_0_20px_rgba(192,132,252,0.1)] hover:border-purple-400 hover:shadow-[0_8px_35px_rgba(168,85,247,0.22),0_0_25px_rgba(192,132,252,0.2)] transition-all">
              <h3 className="text-xl font-bold text-stone-900 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-6">
                Fill in the details below to dispatch a message directly to Vaani's inbox.
              </p>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-xl bg-purple-50/50 border border-purple-200 text-center space-y-4 shadow-xs animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600 shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900">
                      Message Prepared & Ready to Send
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto mt-1 leading-relaxed">
                      We have compiled your note for <strong className="text-purple-900 font-semibold">{personalInfo.email}</strong> and prompted your default email app.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={constructMailtoUrl()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold text-xs transition-all shadow-md shadow-purple-600/20 border border-purple-600 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Re-open Email App</span>
                    </a>

                    <button
                      onClick={handleCopyDraft}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-purple-50 border border-stone-200 text-stone-800 hover:text-purple-900 font-semibold text-xs transition-all shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
                    >
                      {copiedDraft ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-purple-700" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 border-t border-purple-100">
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
                      className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-purple-800 transition-colors cursor-pointer"
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
                      className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold block text-rose-950">Please correct the highlighted fields:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-0.5 text-rose-800">
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
                        className="block text-xs font-semibold text-purple-900 uppercase tracking-wider mb-1"
                      >
                        Your Name <span className="text-rose-600">*</span>
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
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-stone-900 text-sm bg-stone-50 placeholder-stone-400 transition-all focus-visible:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-600 shadow-xs ${
                          errors.name
                            ? 'border-rose-400 focus-visible:ring-rose-400'
                            : 'border-stone-300 focus-visible:border-purple-600'
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="sender-email"
                        className="block text-xs font-semibold text-purple-900 uppercase tracking-wider mb-1"
                      >
                        Your Email <span className="text-rose-600">*</span>
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
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-stone-900 text-sm bg-stone-50 placeholder-stone-400 transition-all focus-visible:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-600 shadow-xs ${
                          errors.email
                            ? 'border-rose-400 focus-visible:ring-rose-400'
                            : 'border-stone-300 focus-visible:border-purple-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-type"
                      className="block text-xs font-semibold text-purple-900 uppercase tracking-wider mb-1"
                    >
                      Inquiry Intent
                    </label>
                    <select
                      id="inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm bg-stone-50 focus-visible:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-purple-600 shadow-xs"
                    >
                      <option value="Full-time Brand / Marketing Role" className="bg-white text-stone-900">
                        Full-time Brand / Marketing Role
                      </option>
                      <option value="Consultative Sales & Business Development" className="bg-white text-stone-900">
                        Consultative Sales & Business Development
                      </option>
                      <option value="Market Intelligence & Research Consultation" className="bg-white text-stone-900">
                        Market Intelligence & Research Consultation
                      </option>
                      <option value="General Networking & Mentorship" className="bg-white text-stone-900">
                        General Networking & Discussion
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="sender-message"
                      className="block text-xs font-semibold text-purple-900 uppercase tracking-wider mb-1"
                    >
                      Message <span className="text-rose-600">*</span>
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
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-stone-900 text-sm bg-stone-50 placeholder-stone-400 resize-y transition-all focus-visible:bg-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-purple-600 shadow-xs ${
                        errors.message
                          ? 'border-rose-400 focus-visible:ring-rose-400'
                          : 'border-stone-300 focus-visible:border-purple-600'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] border border-purple-400/50 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
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
