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
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            {/* Status Badge */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-purple-400/40 text-purple-200 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1
                id="hero-name"
                className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.08] drop-shadow-[0_0_35px_rgba(168,85,247,0.25)]"
              >
                {personalInfo.name}
              </h1>
              <p
                id="hero-title"
                className="text-lg sm:text-xl md:text-2xl font-medium text-purple-200 max-w-2xl tracking-tight"
              >
                {personalInfo.role}
              </p>
              <p className="text-sm sm:text-base text-purple-300/85 font-normal max-w-2xl">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Narrative summary */}
            <p
              id="hero-bio"
              className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-3xl font-normal"
            >
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-view-work-btn"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 rounded-xl hover:from-purple-500 hover:to-indigo-600 transition-all shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_45px_rgba(192,132,252,0.7)] border border-purple-400/50 group focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-purple-100 bg-black/80 border border-purple-500/40 rounded-xl hover:bg-purple-950/60 hover:border-purple-400/80 hover:text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(192,132,252,0.4)] backdrop-blur-md cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Full Resume</span>
              </button>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-stone-300 hover:text-white hover:bg-purple-950/50 border border-transparent hover:border-purple-500/30 rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <Mail className="w-4 h-4" />
                <span>Connect with me</span>
              </a>
            </div>

            {/* Quick Contact & Credentials Pills */}
            <div
              id="hero-contact-pills"
              className="flex flex-wrap items-center gap-2.5 pt-4 text-xs text-stone-300"
            >
              <button
                onClick={handleCopyEmail}
                id="hero-copy-email-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 border border-purple-500/30 hover:border-purple-400 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] transition-all backdrop-blur-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-medium">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    <span>{personalInfo.email}</span>
                    <Copy className="w-3 h-3 text-purple-400 ml-0.5" />
                  </>
                )}
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 border border-purple-500/30 hover:border-purple-400 hover:text-purple-200 hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] transition-all backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              >
                <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                <span>in/vaani-malviya</span>
                <ExternalLink className="w-3 h-3 text-stone-500 ml-0.5" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                id="hero-phone-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 border border-purple-500/30 hover:border-purple-400 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] transition-all backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.phone}</span>
              </a>

              <div
                id="hero-location-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 border border-purple-500/25 text-stone-300"
              >
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Strategic Pillars Card */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-black/75 border border-purple-500/35 hover:border-purple-400/60 rounded-2xl p-6 sm:p-7 shadow-[0_0_35px_rgba(168,85,247,0.22)] hover:shadow-[0_0_50px_rgba(192,132,252,0.35)] backdrop-blur-xl space-y-5 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                  Core Specializations
                </span>
                <span className="text-xs text-purple-400 font-mono">3 Strategic Pillars</span>
              </div>

              {/* Pillar 1 */}
              <div className="space-y-1.5 group">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-purple-900/40 border border-purple-400/50 text-purple-300 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span>Brand Strategy & Consumer Insights</span>
                </div>
                <p className="text-xs text-stone-300 pl-9 leading-relaxed">
                  Connecting consumer understanding with Go-To-Market strategy, brand architecture, and competitive market positioning.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-1.5 group">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-purple-900/40 border border-purple-400/50 text-purple-300 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>Digital Marketing & GA4 Analytics</span>
                </div>
                <p className="text-xs text-stone-300 pl-9 leading-relaxed">
                  Leveraging Google Analytics 4, performance marketing, SEO/SEM, and user behavior analytics to drive measurable business growth.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="space-y-1.5 group">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-purple-900/40 border border-purple-400/50 text-purple-300 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.35)]">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <span>Technical Modeling & AI Innovation</span>
                </div>
                <p className="text-xs text-stone-300 pl-9 leading-relaxed">
                  Integrating Power BI, Advanced Excel, SQL, Python, and modern generative AI tools (Gemini, ChatGPT) for data-driven decisions.
                </p>
              </div>

              {/* Experience Highlights Micro-Card */}
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-stone-300">
                <div>
                  <span className="text-purple-400 block text-[11px]">Latest Experience</span>
                  <span className="font-medium text-white">{experiences[0]?.company}</span>
                </div>
                <div className="text-right">
                  <span className="text-purple-400 block text-[11px]">Role & Focus</span>
                  <span className="font-medium text-white">{experiences[0]?.role.split('–')[0].trim()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
