import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Sparkles, TrendingUp, Cpu, Users, Award, Check, Layers, BarChart3, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string, title: string) => {
    if (title.toLowerCase().includes('technical') || title.toLowerCase().includes('analytical tools')) {
      return <Terminal className="w-5 h-5 text-sky-400" />;
    }
    if (title.toLowerCase().includes('google analytics')) {
      return <BarChart3 className="w-5 h-5 text-emerald-400" />;
    }
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-purple-400" />;
      default:
        return <Award className="w-5 h-5 text-purple-300" />;
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Competencies' },
    ...skillCategories.map((cat) => ({
      id: cat.title,
      label: cat.title,
    })),
  ];

  const categoriesToDisplay =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-transparent border-b border-purple-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/80 border border-purple-400/50 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_18px_rgba(168,85,247,0.3)]">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>Core Competencies & Tool Stack</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            Strategic, Digital & Technical Toolkit
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] border border-purple-300/60'
                    : 'bg-black/80 text-stone-300 border border-purple-500/30 hover:bg-purple-950/50 hover:text-white hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesToDisplay.map((cat) => (
            <div
              key={cat.title}
              className="bg-black/80 border border-purple-500/30 rounded-2xl p-6 sm:p-7 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl flex flex-col justify-between hover:border-purple-400/70 hover:shadow-[0_0_45px_rgba(192,132,252,0.3)] transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-400/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.35)]">
                    {getIcon(cat.iconName, cat.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                        skill.highlight
                          ? 'bg-purple-600 text-white shadow-[0_0_18px_rgba(168,85,247,0.45)] border border-purple-300/60'
                          : 'bg-black/90 text-stone-200 border border-purple-500/30 hover:border-purple-400 hover:text-white hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]'
                      }`}
                    >
                      {skill.highlight && <Check className="w-3.5 h-3.5 text-purple-200" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Generative AI & Digital Productivity Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-black/90 border border-purple-500/35 shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
              Productivity & AI Fluency
            </span>
            <p className="text-sm font-medium text-stone-200">
              Proficient with modern LLM workflows (ChatGPT, Google Gemini, Gamma, Google AI Studio) & technical tools including Python, SQL, Power BI, Advanced Excel, and Canva.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-purple-200">
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Power BI</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Advance Excel</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">SQL</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Python</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Canva</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Google AI Studio</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">ChatGPT</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Google Gemini</span>
            <span className="px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-400/40 shadow-[0_0_10px_rgba(168,85,247,0.2)]">Gamma</span>
          </div>
        </div>
      </div>
    </section>
  );
};
