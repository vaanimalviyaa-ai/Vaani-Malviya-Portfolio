import React from 'react';
import { projects } from '../data/portfolioData';
import {
  BookOpen,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-transparent border-b border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(168,85,247,0.22)]">
            <BookOpen className="w-3.5 h-3.5 text-purple-600" />
            <span>Research & Strategic Case Studies</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
            Consumer Insights & Brand Frameworks
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Rigorous quantitative investigations and diagnostic brand personality audits that translate psychological consumer drivers into actionable marketing strategies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-400 hover:shadow-[0_8px_35px_rgba(168,85,247,0.22),0_0_25px_rgba(192,132,252,0.2)] transition-all shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)] group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-purple-100 border border-purple-300 text-purple-900 shadow-[0_0_12px_rgba(168,85,247,0.25)]">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-purple-800 font-mono px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200 shadow-[0_0_8px_rgba(168,85,247,0.12)]">
                    {project.framework}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-stone-900 leading-tight mb-1 group-hover:text-purple-800 transition-colors">
                  {project.title}
                </h3>
                <div className="text-sm font-medium text-purple-800 mb-4">
                  {project.subtitle}
                </div>

                {/* Overview */}
                <p className="text-sm sm:text-base text-stone-600 mb-5 leading-relaxed">
                  {project.overview}
                </p>

                {/* Framework Highlight Box */}
                <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-300/80 mb-5 shadow-[0_0_14px_rgba(168,85,247,0.15)]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-purple-800 uppercase tracking-wider mb-1">
                    <Layers className="w-3.5 h-3.5 text-purple-600" />
                    <span>Theoretical Core</span>
                  </div>
                  <div className="text-sm font-bold text-stone-900">
                    {project.framework}
                  </div>
                  <div className="text-xs text-stone-600 mt-1">
                    {project.methodology}
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(168,85,247,0.35)]" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-100">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium bg-purple-50 text-purple-900 border border-purple-200 rounded-md hover:border-purple-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all"
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
