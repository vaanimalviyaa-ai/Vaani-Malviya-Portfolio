import React, { useState, useEffect } from 'react';
import { certifications } from '../data/portfolioData';
import { X, Copy, Check, Download, FileText, Mail, Phone, Loader2 } from 'lucide-react';
import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeModal: React.FC<InteractiveResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumeData = {
    name: 'Vaani Malviya',
    linkedinText: 'vaani-malviya',
    linkedinUrl: 'https://linkedin.com/in/vaani-malviya',
    email: 'vaanimalviyaa@gmail.com',
    phone: '+91 8853366980',
    summary:
      'MBA - Marketing Professional with strong foundation in strategic marketing, market research, and AI-driven business data analysis. Skilled in consumer insights, stakeholder management, brand communication, and strategic growth initiatives. Aspiring Brand Manager, passionate about building impactful brands, driving consumer engagement, and creating scalable marketing strategies.',
    experiences: [
      {
        company: 'Great Learning',
        role: 'Learning Consultant – International Sales',
        period: 'May 2026 – Present',
        bullets: [
          'Managing consultative international sales for the Latin America region, engaging with working professionals across multiple industries. Advising professionals on career transformation and AI adoption by positioning Agentic AI as a productivity and business growth enabler.',
          'Building expertise in B2C consultative selling, objection handling and high-ticket education sales strategies. Conducting need-based consultations to align customer career goals with emerging AI and automation trends.',
        ],
      },
      {
        company: 'HCL Healthcare',
        role: 'Marketing Intern',
        period: 'May 2025 – Jun 2025',
        bullets: [
          'Built a market intelligence framework by analyzing 480+ GCCs and a 2.1 lakh+ talent ecosystem, enabling leadership to identify high-potential expansion markets across Bengaluru and Hyderabad.',
          'Developed competitive growth insights through deep benchmarking of Pristyn Care’s ₹644 Cr FY24 business model, identifying strategic gaps and positioning opportunities for HCL Healthcare.',
        ],
      },
    ],
    projects: [
      {
        title: 'MASTER THESIS – A Study of Gustatory Marketing in Tourism:',
        bullets: [
          'Conducted quantitative consumer behavior research with 353 respondents to analyze how culinary experiences influence destination loyalty, emotional brand attachment, and revisit intention.',
          'Developed strategic marketing insights using Push-Pull Motivation Theory, identifying cultural authenticity and immersive food experiences as key drivers of consumer engagement and word-of-mouth advocacy.',
        ],
      },
      {
        title: 'Brand Portfolio & Brand Personality Analysis of Puma in the Indian Market:',
        bullets: [
          'Analyzed Puma’s brand portfolio using Aaker’s Brand Personality Framework to evaluate market positioning, consumer perception, and competitive differentiation while identifying growth opportunities in digital engagement, sustainable branding, and tier 2/3 market expansion through consumer and competitive analysis.',
        ],
      },
    ],
    skills: [
      {
        category: 'Marketing',
        items:
          'Google Analytics, Digital Marketing, SEO, SEM/PPC terminology, Content Marketing, Marketing Automation, Email Marketing, Marketing Analytics, Brand Management',
      },
      {
        category: 'Analytics & Tools',
        items:
          'HubSpot, Mailchimp, CRM Management, Google Analytics 4, MS Excel, Power BI, Canva, Data Visualization, ChatGPT, Perplexity, Python (Basic), SQL (Basic), Google Ads, Meta Ads',
      },
      {
        category: 'Interpersonal Skills',
        items:
          'Strategic Communication, Cross-Functional Collaboration, Team Leadership, Problem Solving, Presentation & Storytelling, Adaptability, Time Management',
      },
    ],
    certifications: [
      'Foundations of Digital Marketing and E-commerce (Coursera Professional Certification)',
      'Marketing Analytics Foundation (Meta)',
      'AI-Powered Performance Ads Certification (Google Skillshop)',
      'Google Analytics Certification (Google Digital Academy)',
    ],
    education: [
      {
        period: '08/2024 – 04/2026',
        degree: 'Master of Business Administration in Marketing (Christ University, Delhi)',
        score: 'CGPA: (7.2/10)',
      },
      {
        period: '07/2020 – 07/2023',
        degree: 'Bachelor of Commerce (University of Lucknow)',
        score: 'CGPA: 6.8/10)',
      },
    ],
  };

  const getPlainTextResume = () => {
    return `
${resumeData.name.toUpperCase()}
LinkedIn: ${resumeData.linkedinUrl} (${resumeData.linkedinText}) | Email: ${resumeData.email} | Phone: ${resumeData.phone}

Summary
${resumeData.summary}

Work Experience & Training
${resumeData.experiences
  .map(
    (exp) => `${exp.company} | ${exp.role} (${exp.period})
${exp.bullets.map((b) => `– ${b}`).join('\n')}`
  )
  .join('\n\n')}

Projects
${resumeData.projects
  .map(
    (proj) => `${proj.title}
${proj.bullets.map((b) => `– ${b}`).join('\n')}`
  )
  .join('\n\n')}

Skills
${resumeData.skills.map((s) => `– ${s.category}: ${s.items}`).join('\n')}

Certifications
${resumeData.certifications.map((c) => `– ${c}`).join('\n')}

Education
${resumeData.education.map((e) => `${e.period}   ${e.degree}   ${e.score}`).join('\n')}
    `.trim();
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(getPlainTextResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadText = () => {
    const element = document.createElement('a');
    const file = new Blob([getPlainTextResume()], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Vaani_Malviya_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDownloadPdf = async () => {
    const paperElement = document.getElementById('resume-paper');
    if (!paperElement) return;

    setIsGeneratingPdf(true);

    const prevWidth = paperElement.style.width;
    const prevMaxWidth = paperElement.style.maxWidth;
    const prevShadow = paperElement.style.boxShadow;
    const prevBorder = paperElement.style.border;
    const prevRadius = paperElement.style.borderRadius;

    try {
      // Temporarily lock element to desktop standard A4 width for consistent rendering
      paperElement.style.width = '800px';
      paperElement.style.maxWidth = '800px';
      paperElement.style.boxShadow = 'none';
      paperElement.style.border = 'none';
      paperElement.style.borderRadius = '0';

      // Capture exact DOM structure including font family, size, weights, and alignment
      const dataUrl = await toPng(paperElement, {
        quality: 0.98,
        pixelRatio: 2.5,
        backgroundColor: '#ffffff',
      });

      const img = new Image();
      img.src = dataUrl;
      await new Promise<void>((resolve) => {
        img.onload = () => resolve();
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const marginX = 8;
      const marginY = 8;
      const printableWidth = pageWidth - marginX * 2;
      const imgAspect = img.width / img.height;
      const calculatedHeight = printableWidth / imgAspect;

      let finalWidth = printableWidth;
      let finalHeight = calculatedHeight;
      let posX = marginX;
      let posY = marginY;

      const maxPrintableHeight = pageHeight - marginY * 2;
      if (calculatedHeight > maxPrintableHeight) {
        finalHeight = maxPrintableHeight;
        finalWidth = finalHeight * imgAspect;
        posX = (pageWidth - finalWidth) / 2;
      }

      pdf.addImage(dataUrl, 'PNG', posX, posY, finalWidth, finalHeight, undefined, 'FAST');
      pdf.save('Vaani_Malviya_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      paperElement.style.width = prevWidth;
      paperElement.style.maxWidth = prevMaxWidth;
      paperElement.style.boxShadow = prevShadow;
      paperElement.style.border = prevBorder;
      paperElement.style.borderRadius = prevRadius;
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="bg-black rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-[0_0_70px_rgba(168,85,247,0.45)] overflow-hidden border border-purple-500/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/95 border-b border-purple-500/30 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span id="resume-dialog-title" className="font-semibold text-white text-sm drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              Curriculum Vitae View
            </span>
            <span className="text-xs text-purple-300/80 hidden sm:inline">
              (1-Page Standard Resume Format)
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyText}
              id="resume-copy-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-black border border-purple-500/40 text-purple-200 hover:bg-purple-950/60 hover:text-white transition-all shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              title="Copy plain-text resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-purple-300" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadText}
              id="resume-download-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-black border border-purple-500/40 text-purple-200 hover:bg-purple-950/60 hover:text-white transition-all shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              title="Download plain-text CV (.txt)"
            >
              <FileText className="w-3.5 h-3.5 text-purple-300" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              id="resume-download-pdf-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-300/50 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
              title="Download PDF of this resume"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-1.5 text-stone-400 hover:text-white hover:bg-purple-900/40 rounded-lg transition-colors ml-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Paper Content (Exact reproduction of authentic 1-page PDF) */}
        <div id="resume-modal-paper-wrapper" className="overflow-y-auto p-3 sm:p-6 md:p-8 bg-stone-950/80">
          <div
            id="resume-paper"
            className="bg-white rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.3)] p-6 sm:p-10 md:p-12 text-[#111] border border-stone-300 max-w-[800px] mx-auto text-[13px] sm:text-[13.5px] leading-snug font-sans select-text"
            style={{ fontFamily: 'Calibri, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
          >
            {/* Header: Name */}
            <div className="text-center pb-2">
              <h1 className="text-3xl sm:text-[34px] font-normal tracking-tight text-black">
                {resumeData.name}
              </h1>

              {/* Contact bar with icons matching original document */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2 text-xs sm:text-[13px] text-[#222]">
                <a
                  href={resumeData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-black group"
                >
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-xs bg-[#0a66c2] text-white text-[9px] font-bold">
                    in
                  </span>
                  <span>{resumeData.linkedinText}</span>
                </a>

                <span className="text-stone-400">|</span>

                <a
                  href={`mailto:${resumeData.email}`}
                  className="inline-flex items-center gap-1.5 hover:underline text-black group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0066cc]" />
                  <span>{resumeData.email}</span>
                </a>

                <span className="text-stone-400">|</span>

                <a
                  href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1 hover:underline text-black"
                >
                  <Phone className="w-3.5 h-3.5 text-[#003366]" />
                  <span>{resumeData.phone}</span>
                </a>
              </div>
            </div>

            {/* Section 1: Summary */}
            <section className="mt-4">
              <h2 className="text-[17px] font-bold text-black border-b border-black pb-0.5 mb-1.5">
                Summary
              </h2>
              <p className="text-justify text-[#222] leading-relaxed text-[12.5px] sm:text-[13px]">
                {resumeData.summary}
              </p>
            </section>

            {/* Section 2: Work Experience & Training */}
            <section className="mt-4">
              <h2 className="text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Work Experience &amp; Training
              </h2>

              <div className="space-y-3">
                {resumeData.experiences.map((exp) => (
                  <div key={exp.company} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[13px]">
                      <div>
                        <span className="text-[#335588] font-medium">{exp.company}</span>
                        <span className="text-black"> | {exp.role}</span>
                      </div>
                      <span className="text-black font-medium sm:text-right">
                        ({exp.period})
                      </span>
                    </div>
                    <ul className="space-y-1 text-[#222] text-[12.5px] sm:text-[13px] leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-justify">
                          <span className="select-none font-bold text-black">–</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Projects */}
            <section className="mt-4">
              <h2 className="text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Projects
              </h2>

              <div className="space-y-3">
                {resumeData.projects.map((proj) => (
                  <div key={proj.title} className="space-y-1">
                    <div className="text-[13px] font-bold text-black">
                      {proj.title}
                    </div>
                    <ul className="space-y-1 text-[#222] text-[12.5px] sm:text-[13px] leading-relaxed">
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-justify">
                          <span className="select-none font-bold text-black">–</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Skills */}
            <section className="mt-4">
              <h2 className="text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Skills
              </h2>
              <div className="space-y-1.5 text-[#222] text-[12.5px] sm:text-[13px] leading-relaxed">
                {resumeData.skills.map((skill) => (
                  <p key={skill.category} className="flex items-start gap-1.5">
                    <span className="select-none font-bold text-black">–</span>
                    <span>
                      <strong className="font-semibold text-black">{skill.category}:</strong> {skill.items}
                    </span>
                  </p>
                ))}
              </div>
            </section>

            {/* Section 5: Certifications */}
            <section className="mt-4">
              <h2 className="text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Certifications
              </h2>
              <ul className="space-y-1 text-[#222] text-[12.5px] sm:text-[13px] leading-relaxed">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="select-none font-bold text-black">–</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6: Education */}
            <section className="mt-4">
              <h2 className="text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Education
              </h2>
              <div className="space-y-1 text-[#222] text-[12.5px] sm:text-[13px]">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-medium text-black">{edu.period}</span>
                      <span className="text-[#222]">{edu.degree}</span>
                    </div>
                    <span className="font-medium text-black sm:text-right whitespace-nowrap">
                      {edu.score}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

