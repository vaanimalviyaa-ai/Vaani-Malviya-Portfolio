/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveResumeModal } from './components/InteractiveResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-[#F1F5F9] relative overflow-x-hidden flex flex-col selection:bg-purple-600/50 selection:text-white">
      {/* Ambient background glows & futuristic lighting atmosphere against pure black */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden no-print">
        {/* Pitch black base with subtle ultraviolet depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#06020c] to-black" />

        {/* Vibrant radial purple glow: Top-Left behind Hero */}
        <div className="absolute -top-[12%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.32)_0%,rgba(126,34,206,0.18)_38%,transparent_70%)] blur-[120px]" />

        {/* Vibrant radial purple glow: Top-Right ambient accent */}
        <div className="absolute top-[6%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.22)_0%,rgba(147,51,234,0.16)_40%,transparent_70%)] blur-[110px]" />

        {/* Soft radial glow: Mid-page behind Case Studies & Experience */}
        <div className="absolute top-[35%] -left-[15%] w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.25)_0%,rgba(88,28,135,0.18)_45%,transparent_75%)] blur-[130px]" />

        {/* Soft radial glow: Mid-Right behind Skills */}
        <div className="absolute top-[56%] -right-[12%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.26)_0%,rgba(107,33,168,0.16)_45%,transparent_70%)] blur-[120px]" />

        {/* Soft radial glow: Bottom ambient behind Contact */}
        <div className="absolute bottom-[2%] left-[18%] w-[800px] h-[550px] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.28)_0%,rgba(88,28,135,0.16)_50%,transparent_75%)] blur-[120px]" />

        {/* Subtle futuristic micro-grid texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#C084FC_1px,transparent_1px)] [background-size:32px_32px]" />
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
      <InteractiveResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

