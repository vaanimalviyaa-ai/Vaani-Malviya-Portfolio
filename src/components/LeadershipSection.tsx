import React from 'react';
import { achievements, educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, CheckCircle2, Star, Trophy } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-transparent border-b border-purple-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Campus Leadership & Achievements */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-purple-400/50 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_18px_rgba(168,85,247,0.3)]">
                <Trophy className="w-3.5 h-3.5 text-purple-400" />
                <span>Leadership & Campus Impact</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                Departmental & Regional Leadership
              </h2>
              <p className="mt-2 text-base text-stone-300">
                Steering cross-functional teams, orchestrating departmental brand presence, and driving large-scale campaign activations.
              </p>
            </div>

            <div className="space-y-6">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  id={`achievement-card-${item.id}`}
                  className="bg-black/80 border border-purple-500/30 rounded-2xl p-6 sm:p-7 hover:border-purple-400/70 hover:shadow-[0_0_40px_rgba(192,132,252,0.3)] transition-all shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-950/70 border border-purple-400/50 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.25)]">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium text-purple-300/80">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-purple-200 mt-0.5 mb-3">
                    {item.role}
                  </div>

                  <p className="text-sm text-stone-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-purple-500/20 flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <Star className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Demonstrated Impact:</strong> {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Foundation & Education */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-purple-400/50 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_18px_rgba(168,85,247,0.3)]">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                <span>Academic Credentials</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-white tracking-tight drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                Education
              </h2>
              <p className="mt-2 text-base text-stone-300">
                Rigorous business management and commercial foundations.
              </p>
            </div>

            <div className="space-y-6">
              {educationList.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-black/80 border border-purple-500/30 rounded-2xl p-6 sm:p-7 hover:border-purple-400/70 hover:shadow-[0_0_40px_rgba(192,132,252,0.3)] transition-all shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-400/50 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.25)]">
                      {edu.score}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-purple-300/80">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-purple-200 mt-0.5">
                    {edu.field}
                  </div>
                  <div className="text-xs text-stone-400 mb-4">
                    {edu.institution}
                  </div>

                  {edu.highlights && (
                    <div className="pt-3 border-t border-purple-500/20 space-y-2">
                      {edu.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-xs text-stone-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
