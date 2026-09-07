import React, { useState } from 'react';
import { personalInfo, experiences } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Sparkles,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Copy,
  ExternalLink,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-purple-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            {/* Status Badge */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-purple-300 text-purple-900 text-xs sm:text-sm font-semibold shadow-[0_0_16px_rgba(168,85,247,0.25)] backdrop-blur-md transition-all hover:shadow-[0_0_22px_rgba(168,85,247,0.4)] hover:border-purple-400"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600 shadow-[0_0_8px_#9333ea]"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1
                id="hero-name"
                className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.08]"
              >
                {personalInfo.name}
              </h1>
              <p
                id="hero-title"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-900 max-w-2xl tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                {personalInfo.role}
              </p>
              <p className="text-sm sm:text-base text-purple-700/90 font-medium max-w-2xl">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Narrative summary */}
            <p
              id="hero-bio"
              className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl font-normal"
            >
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-view-work-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all shadow-[0_0_25px_rgba(147,51,234,0.45),0_4px_15px_rgba(126,34,206,0.3)] hover:shadow-[0_0_35px_rgba(147,51,234,0.65),0_0_15px_rgba(192,132,252,0.5)] border border-purple-400/50 group focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-hidden cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-purple-950 bg-white border border-purple-300 rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all shadow-[0_0_18px_rgba(168,85,247,0.18)] hover:shadow-[0_0_28px_rgba(168,85,247,0.35)] cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-hidden"
              >
                <FileText className="w-4 h-4 text-purple-600" />
                <span>View Full Resume</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-stone-700 hover:text-purple-950 hover:bg-purple-50/90 border border-stone-200 hover:border-purple-300 rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-hidden shadow-xs hover:shadow-[0_0_18px_rgba(168,85,247,0.2)]"
              >
                <Mail className="w-4 h-4 text-purple-600" />
                <span>Connect with me</span>
              </a>
            </div>

            {/* Quick Contact & Credentials Pills */}
            <div
              id="hero-contact-pills"
              className="flex flex-wrap items-center gap-2.5 pt-4 text-xs text-stone-700"
            >
              <button
                onClick={handleCopyEmail}
                id="hero-copy-email-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-purple-400 hover:text-purple-950 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-hidden"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                    <span>{personalInfo.email}</span>
                    <Copy className="w-3 h-3 text-purple-500 ml-0.5" />
                  </>
                )}
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-purple-400 hover:text-purple-950 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-hidden"
              >
                <Linkedin className="w-3.5 h-3.5 text-purple-600" />
                <span>in/vaani-malviya</span>
                <ExternalLink className="w-3 h-3 text-stone-400 ml-0.5" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                id="hero-phone-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-purple-400 hover:text-purple-950 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-hidden"
              >
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span>{personalInfo.phone}</span>
              </a>

              <div
                id="hero-location-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-purple-600" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Strategic Pillars Card */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(168,85,247,0.12),0_0_18px_rgba(192,132,252,0.12)] hover:shadow-[0_8px_35px_rgba(168,85,247,0.25),0_0_25px_rgba(192,132,252,0.25)] hover:border-purple-400/80 space-y-5 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                <span className="text-xs font-semibold text-purple-900 uppercase tracking-wider">
                  Core Specializations
                </span>
                <span className="text-xs text-purple-800 font-mono font-semibold px-2 py-0.5 rounded-md bg-purple-100/80 border border-purple-200 shadow-[0_0_8px_rgba(168,85,247,0.15)]">3 Strategic Pillars</span>
              </div>

              {/* Pillar 1 */}
              <div className="space-y-1.5 group">
                <div className="flex items-center gap-2.5 text-stone-900 font-semibold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-300 text-purple-800 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    <Sparkles className="w-4 h-4 text-purple-700" />
                  </div>
                  <span>Brand Strategy & Consumer Insights</span>
                </div>
                <p className="text-xs text-stone-600 pl-9 leading-relaxed">
                  Connecting consumer understanding with Go-To-Market strategy, brand architecture, and competitive market positioning.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-1.5 group">
                <div className="flex items-center gap-2.5 text-stone-900 font-semibold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-300 text-purple-800 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    <TrendingUp className="w-4 h-4 text-purple-700" />
                  </div>
                  <span>Digital Marketing & GA4 Analytics</span>
                </div>
                <p className="text-xs text-stone-600 pl-9 leading-relaxed">
                  Leveraging Google Analytics 4, performance marketing, SEO/SEM, and user behavior analytics to drive measurable business growth.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-1.5 group">
                <div className="flex items-center gap-2.5 text-stone-900 font-semibold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-purple-100 border border-purple-300 text-purple-800 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                    <BarChart3 className="w-4 h-4 text-purple-700" />
                  </div>
                  <span>Technical Modeling & AI Innovation</span>
                </div>
                <p className="text-xs text-stone-600 pl-9 leading-relaxed">
                  Integrating Power BI, Advanced Excel, SQL, Python, and modern generative AI tools (Gemini, ChatGPT) for data-driven decisions.
                </p>
              </div>

              {/* Experience Highlights Micro-Card */}
              <div className="pt-3 border-t border-purple-100 flex items-center justify-between text-xs text-stone-600">
                <div>
                  <span className="text-purple-700 block text-[11px] font-medium">Latest Experience</span>
                  <span className="font-semibold text-stone-900">{experiences[0]?.company}</span>
                </div>
                <div className="text-right">
                  <span className="text-purple-700 block text-[11px] font-medium">Role & Focus</span>
                  <span className="font-semibold text-stone-900">{experiences[0]?.role.split('–')[0].trim()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
