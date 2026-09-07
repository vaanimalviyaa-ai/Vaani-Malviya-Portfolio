import React from 'react';
import { achievements, educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, CheckCircle2, Star, Trophy } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-transparent border-b border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Campus Leadership & Achievements */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(168,85,247,0.22)]">
                <Trophy className="w-3.5 h-3.5 text-purple-600" />
                <span>Leadership & Campus Impact</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
                Departmental & Regional Leadership
              </h2>
              <p className="mt-2 text-base text-stone-600">
                Steering cross-functional teams, orchestrating departmental brand presence, and driving large-scale campaign activations.
              </p>
            </div>

            <div className="space-y-6">
              {achievements.map((item) => (
                <div
                  key={item.id}
                  id={`achievement-card-${item.id}`}
                  className="bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-7 hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.22),0_0_20px_rgba(192,132,252,0.2)] transition-all shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-100 border border-purple-300 text-purple-950 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-purple-800">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-1">
                    {item.title}
                  </h3>
                  <div className="text-sm font-semibold text-purple-800 mt-0.5 mb-3">
                    {item.role}
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-purple-100 flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                    <Star className="w-4 h-4 text-purple-600 shrink-0 mt-0.5 drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]" />
                    <span>
                      <strong className="text-stone-900">Demonstrated Impact:</strong> {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Foundation & Education */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(168,85,247,0.22)]">
                <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
                <span>Academic Credentials</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
                Education
              </h2>
              <p className="mt-2 text-base text-stone-600">
                Rigorous business management and commercial foundations.
              </p>
            </div>

            <div className="space-y-6">
              {educationList.map((edu) => (
                <div
                  key={edu.degree}
                  className="bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-7 hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.22),0_0_20px_rgba(192,132,252,0.2)] transition-all shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 border border-purple-300 text-purple-900 shadow-[0_0_10px_rgba(168,85,247,0.18)]">
                      {edu.score}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-purple-800 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-purple-600" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-purple-800 mt-0.5">
                    {edu.field}
                  </div>
                  <div className="text-xs text-stone-500 mb-4">
                    {edu.institution}
                  </div>

                  {edu.highlights && (
                    <div className="pt-3 border-t border-purple-100 space-y-2">
                      {edu.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-start gap-2 text-xs text-stone-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
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
