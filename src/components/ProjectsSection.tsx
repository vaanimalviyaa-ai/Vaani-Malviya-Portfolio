import React from 'react';
import { projects } from '../data/portfolioData';
import {
  BookOpen,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-transparent border-b border-purple-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-purple-400/50 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_18px_rgba(168,85,247,0.3)]">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>Research & Strategic Case Studies</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            Consumer Insights & Brand Frameworks
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300">
            Rigorous quantitative investigations and diagnostic brand personality audits that translate psychological consumer drivers into actionable marketing strategies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-black/80 border border-purple-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-400/70 hover:shadow-[0_0_45px_rgba(192,132,252,0.3)] transition-all shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-400/40 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-purple-300/80 font-mono">
                    {project.framework}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white leading-tight mb-1 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm font-medium text-purple-200/90 mb-4">
                  {project.subtitle}
                </div>

                {/* Overview */}
                <p className="text-sm sm:text-base text-stone-300 mb-5 leading-relaxed">
                  {project.overview}
                </p>

                {/* Framework Highlight Box */}
                <div className="p-4 rounded-xl bg-black/90 border border-purple-500/25 mb-5 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    <span>Theoretical Core</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.framework}
                  </div>
                  <div className="text-xs text-stone-400 mt-1">
                    {project.methodology}
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-500/20">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-xs font-medium bg-purple-950/40 text-purple-200 border border-purple-500/25 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
