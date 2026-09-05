import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          const sections = ['hero', 'experience', 'projects', 'skills', 'leadership', 'contact'];
          const scrollPosition = window.scrollY + 220;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#hero', id: 'hero' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Case Studies', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/30 shadow-[0_4px_30px_rgba(168,85,247,0.2)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            id="nav-brand-logo"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-900 to-black border border-purple-400/50 text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:border-purple-300 group-hover:shadow-[0_0_25px_rgba(192,132,252,0.6)] transition-all">
              VM
            </div>
            <div>
              <span className="block text-base font-semibold text-white tracking-tight leading-tight group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="block text-xs font-medium text-purple-300/80 tracking-normal">
                Brand & Marketing Strategist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden ${
                    isActive
                      ? 'text-white bg-purple-600/30 border border-purple-400/50 font-semibold shadow-[0_0_15px_rgba(168,85,247,0.35)]'
                      : 'text-stone-300 hover:text-white hover:bg-purple-950/50 hover:shadow-[0_0_12px_rgba(168,85,247,0.15)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white hover:bg-purple-950/60 rounded-lg focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-dropdown"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-purple-500/30 px-4 pt-2 pb-5 space-y-1 shadow-[0_10px_35px_rgba(168,85,247,0.2)]"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              id={`mobile-nav-link-${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                activeSection === link.id
                  ? 'text-white bg-purple-600/30 border border-purple-400/50 font-semibold shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                  : 'text-stone-300 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
