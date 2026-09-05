import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, Globe, Target } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('great-learning');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-transparent border-b border-purple-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-purple-400/50 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_18px_rgba(168,85,247,0.3)]">
            <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            <span>Work Experience & Training</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            Brand Management, Marketing Analytics & Digital Marketing
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300">
            Marketing & Brand Strategy Professional focused on consumer insights, market intelligence and AI-driven business growth.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                id={`experience-card-${exp.id}`}
                className="bg-black/80 border border-purple-500/30 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.16)] backdrop-blur-xl transition-all hover:border-purple-400/70 hover:shadow-[0_0_45px_rgba(192,132,252,0.3)]"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-purple-500/20">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.period.toLowerCase().includes('present') && (
                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-950/80 border border-purple-400/50 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
                            Current Role
                          </span>
                        )}
                      </div>
                      <div className="text-base sm:text-lg font-medium text-purple-200 mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone-300">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/90 border border-purple-500/30 font-medium text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/90 border border-purple-500/30 text-stone-300 shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm sm:text-base text-purple-100 font-medium mt-4">
                    {exp.tagline}
                  </p>

                  {/* Bullet Points */}
                  <div className="mt-5 space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-stone-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Metrics / Highlights if any */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-purple-500/20 flex flex-wrap gap-4">
                      {exp.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="px-3.5 py-2 rounded-xl bg-black/90 border border-purple-500/35 text-xs shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                        >
                          <span className="text-purple-300/80 block">{m.label}</span>
                          <span className="font-semibold text-white text-sm">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills Applied Tags */}
                  <div className="mt-6 pt-4 border-t border-purple-500/20 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-purple-300 mr-2">Competencies:</span>
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-200 hover:border-purple-400/60 hover:text-white hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Strategic Deep Dive Toggle */}
                  <div className="mt-5 pt-3">
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      id={`toggle-deep-dive-${exp.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)] transition-all cursor-pointer"
                    >
                      <span>
                        {isExpanded ? 'Hide Strategic Methodology' : 'View Strategic Methodology & Details'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Collapsible Deep Dive Content */}
                {isExpanded && (
                  <div
                    id={`experience-deep-dive-${exp.id}`}
                    className="px-6 sm:px-8 py-5 bg-black/95 border-t border-purple-500/30 text-xs sm:text-sm text-stone-300 space-y-3 backdrop-blur-md shadow-inner"
                  >
                    {exp.id === 'great-learning' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-purple-400" />
                            <span>Latin America Region Consultative Dynamic</span>
                          </div>
                          <p className="text-stone-300 leading-relaxed">
                            Engaging cross-border executives across Mexico, Brazil, Colombia, and Argentina. Overcoming linguistic and market-specific hurdles through value-centric consultation on emergent AI workforce shifts.
                          </p>
                        </div>
                        <div className="space-y-1.5">
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            <Target className="w-4 h-4 text-purple-400" />
                            <span>Agentic AI as a Value Proposition</span>
                          </div>
                          <p className="text-stone-300 leading-relaxed">
                            Positioning autonomous AI systems not merely as automated tools, but as transformative executive leverage—crafting customized learning paths tailored to technical proficiency levels.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            <Target className="w-4 h-4 text-purple-400" />
                            <span>GCC Ecosystem Market Intelligence</span>
                          </div>
                          <p className="text-stone-300 leading-relaxed">
                            Systematically indexed 480+ Global Capability Centers in Karnataka and Telangana. Segmented employee health benefits, recurring wellness expenditures, and captive tech hubs to prioritize high-yield target accounts.
                          </p>
                        </div>
                        <div className="space-y-1.5">
                          <div className="font-semibold text-white flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-purple-400" />
                            <span>₹644 Cr Pristyn Care Model Benchmarking</span>
                          </div>
                          <p className="text-stone-300 leading-relaxed">
                            Deconstructed asset-light surgical and ambulatory delivery models. Isolated customer acquisition costs, hospital partnership margins, and clinical trust deficits to formulate HCL Healthcare's competitive edge.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
