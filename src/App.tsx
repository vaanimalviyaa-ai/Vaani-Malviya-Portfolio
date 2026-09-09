/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Lazy load the resume modal so large PDF libraries are never loaded on initial page visit
const InteractiveResumeModal = React.lazy(() =>
  import('./components/InteractiveResumeModal').then((mod) => ({ default: mod.InteractiveResumeModal }))
);

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-stone-900 relative overflow-x-clip flex flex-col selection:bg-purple-100 selection:text-purple-900">
      {/* Ambient background glows & soft lighting atmosphere against clean white canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print" aria-hidden="true">
        {/* Crisp white base with delicate luminous ultraviolet depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />

        {/* Soft radial purple glow: Top-Left behind Hero */}
        <div className="absolute -top-[10%] -left-[10%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.18)_0%,rgba(168,85,247,0.07)_45%,transparent_70%)]" />

        {/* Soft radial purple glow: Top-Right ambient accent */}
        <div className="absolute top-[6%] -right-[10%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.14)_0%,rgba(147,51,234,0.05)_45%,transparent_70%)]" />

        {/* Soft radial glow: Mid-page behind Case Studies & Experience */}
        <div className="absolute top-[35%] -left-[12%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,rgba(168,85,247,0.05)_45%,transparent_75%)]" />

        {/* Soft radial glow: Mid-Right behind Skills */}
        <div className="absolute top-[56%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,rgba(192,132,252,0.05)_45%,transparent_70%)]" />

        {/* Soft radial glow: Bottom ambient behind Contact */}
        <div className="absolute bottom-[2%] left-[15%] w-[750px] h-[550px] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.14)_0%,rgba(147,51,234,0.05)_50%,transparent_75%)]" />

        {/* Subtle geometric micro-dot grid texture */}
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Top Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Full Resume Modal (Printable & Copyable) */}
      <Suspense fallback={null}>
        {resumeOpen && (
          <InteractiveResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}

