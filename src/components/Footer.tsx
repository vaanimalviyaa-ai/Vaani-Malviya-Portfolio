import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-black/95 backdrop-blur-md py-12 text-stone-400 text-xs sm:text-sm border-t border-purple-500/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/20">
          {/* Brand */}
          <div className="text-center md:text-left space-y-1">
            <span className="font-editorial text-lg font-bold text-white block drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]">
              {personalInfo.name}
            </span>
            <span className="text-purple-300/90 text-xs">
              Marketing Professional & Aspiring Brand Manager
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-stone-300">
            <a href="#hero" className="hover:text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1">Overview</a>
            <a href="#experience" className="hover:text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1">Experience</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1">Case Studies</a>
            <a href="#skills" className="hover:text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1">Skills</a>
            <a href="#leadership" className="hover:text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1">Leadership</a>
            <button
              onClick={onOpenResume}
              className="hover:text-purple-300 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1"
            >
              Resume
            </button>
            <a href="#contact" className="hover:text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1">Contact</a>
          </div>

          {/* Return to top */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black border border-purple-500/40 hover:bg-purple-950/60 text-purple-200 hover:text-white text-xs font-medium transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Vaani Malviya. All rights reserved.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden rounded-md px-1"
            >
              LinkedIn
            </a>
            <span className="text-purple-500/40">•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-purple-300 transition-colors"
            >
              {personalInfo.email}
            </a>
            <span className="text-purple-500/40">•</span>
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
