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
    <section id="skills" className="py-20 bg-transparent border-b border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-purple-300 text-purple-900 text-xs font-semibold uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(168,85,247,0.22)]">
            <Layers className="w-3.5 h-3.5 text-purple-600" />
            <span>Core Competencies & Tool Stack</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-900 tracking-tight">
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
                    ? 'bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 text-white shadow-[0_0_22px_rgba(147,51,234,0.45)] border border-purple-400'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-purple-50 hover:text-purple-950 hover:border-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] shadow-xs'
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
              className="bg-white border border-purple-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_4px_25px_rgba(168,85,247,0.1),0_0_15px_rgba(192,132,252,0.08)] flex flex-col justify-between hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(168,85,247,0.22),0_0_20px_rgba(192,132,252,0.2)] transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100/90 border border-purple-300 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    {getIcon(cat.iconName, cat.title)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                        skill.highlight
                          ? 'bg-purple-100 text-purple-950 border border-purple-300 font-semibold shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                          : 'bg-stone-50 text-stone-700 border border-stone-200 hover:border-purple-300 hover:text-purple-950 hover:shadow-[0_0_10px_rgba(168,85,247,0.15)]'
                      }`}
                    >
                      {skill.highlight && <Check className="w-3.5 h-3.5 text-purple-700" />}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Generative AI & Digital Productivity Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-purple-50/80 border border-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-purple-900 uppercase tracking-wider">
              Productivity & AI Fluency
            </span>
            <p className="text-sm font-medium text-stone-700">
              Proficient with modern LLM workflows (ChatGPT, Google Gemini, Gamma, Google AI Studio) & technical tools including Python, SQL, Power BI, Advanced Excel, and Canva.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-purple-900">
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">Power BI</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">Advance Excel</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">SQL</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">Python</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">Canva</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">Google AI Studio</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">ChatGPT</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">Google Gemini</span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.18)]">Gamma</span>
          </div>
        </div>
      </div>
    </section>
  );
};
