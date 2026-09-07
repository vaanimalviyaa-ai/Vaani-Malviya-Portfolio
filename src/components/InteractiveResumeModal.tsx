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
        score: 'CGPA: 7.2/10',
      },
      {
        period: '07/2020 – 07/2023',
        degree: 'Bachelor of Commerce (University of Lucknow)',
        score: 'CGPA: 6.8/10',
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

  const generateNativeVectorPdf = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 36;
    const contentWidth = pageWidth - margin * 2;
    let y = 38;

    // Header: Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(15, 23, 42);
    doc.text(resumeData.name, pageWidth / 2, y, { align: 'center' });
    y += 18;

    // Contact details bar
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    const contactLine = `LinkedIn: ${resumeData.linkedinText}   |   Email: ${resumeData.email}   |   Phone: ${resumeData.phone}`;
    doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
    y += 18;

    const printSectionHeader = (title: string) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(15, 23, 42);
      doc.text(title.toUpperCase(), margin, y);
      y += 3;
      doc.setDrawColor(30, 41, 59);
      doc.setLineWidth(1);
      doc.line(margin, y, margin + contentWidth, y);
      y += 11;
    };

    // Summary Section
    printSectionHeader('Summary');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const summaryLines = doc.splitTextToSize(resumeData.summary, contentWidth);
    doc.text(summaryLines, margin, y);
    y += summaryLines.length * 11 + 8;

    // Work Experience & Training
    printSectionHeader('Work Experience & Training');
    resumeData.experiences.forEach((exp) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(30, 58, 138);
      doc.text(exp.company, margin, y);

      const compWidth = doc.getTextWidth(exp.company);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);
      doc.text(` | ${exp.role}`, margin + compWidth, y);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(71, 85, 105);
      doc.text(`(${exp.period})`, margin + contentWidth, y, { align: 'right' });
      y += 11;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      exp.bullets.forEach((bullet) => {
        const bulletLines = doc.splitTextToSize(`– ${bullet}`, contentWidth - 8);
        doc.text(bulletLines, margin + 4, y);
        y += bulletLines.length * 10;
      });
      y += 3;
    });
    y += 4;

    // Projects
    printSectionHeader('Projects');
    resumeData.projects.forEach((proj) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(proj.title, margin, y);
      y += 10;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      proj.bullets.forEach((bullet) => {
        const bulletLines = doc.splitTextToSize(`– ${bullet}`, contentWidth - 8);
        doc.text(bulletLines, margin + 4, y);
        y += bulletLines.length * 10;
      });
      y += 3;
    });
    y += 4;

    // Skills
    printSectionHeader('Skills');
    resumeData.skills.forEach((skill) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      const prefix = `– ${skill.category}: `;
      doc.text(prefix, margin, y);
      const prefixWidth = doc.getTextWidth(prefix);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      const itemsLines = doc.splitTextToSize(skill.items, contentWidth - prefixWidth);
      doc.text(itemsLines, margin + prefixWidth, y);
      y += itemsLines.length * 10;
    });
    y += 5;

    // Certifications
    printSectionHeader('Certifications');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    resumeData.certifications.forEach((cert) => {
      doc.text(`– ${cert}`, margin, y);
      y += 10;
    });
    y += 5;

    // Education
    printSectionHeader('Education');
    resumeData.education.forEach((edu) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(71, 85, 105);
      doc.text(edu.period, margin, y);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);
      doc.text(edu.degree, margin + 80, y);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text(edu.score, margin + contentWidth, y, { align: 'right' });
      y += 11;
    });

    doc.save('Vaani_Malviya_Resume.pdf');
  };

  const handleDownloadPdf = async () => {
    const paperElement = document.getElementById('resume-paper');
    if (!paperElement) {
      generateNativeVectorPdf();
      return;
    }

    setIsGeneratingPdf(true);

    const prevWidth = paperElement.style.width;
    const prevMaxWidth = paperElement.style.maxWidth;
    const prevShadow = paperElement.style.boxShadow;
    const prevBorder = paperElement.style.border;
    const prevRadius = paperElement.style.borderRadius;

    try {
      // Temporarily lock element to desktop standard A4 width for consistent pixel-perfect rendering
      paperElement.style.width = '800px';
      paperElement.style.maxWidth = '800px';
      paperElement.style.boxShadow = 'none';
      paperElement.style.border = 'none';
      paperElement.style.borderRadius = '0';

      const dataUrl = await toPng(paperElement, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        cacheBust: true,
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
      const marginX = 6;
      const marginY = 6;
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
      console.warn('DOM to image conversion notice, generating pristine vector PDF:', error);
      // Seamless native vector PDF fallback ensures 100% reliable download in any browser context
      generateNativeVectorPdf();
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
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-dialog-title"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[94vh] flex flex-col shadow-[0_10px_50px_rgba(168,85,247,0.18),0_0_25px_rgba(192,132,252,0.15)] overflow-hidden border border-purple-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white border-b border-stone-200 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span id="resume-dialog-title" className="font-semibold text-stone-900 text-sm">
              Curriculum Vitae View
            </span>
            <span className="text-xs text-purple-700 font-medium px-2 py-0.5 rounded-md bg-purple-50 border border-purple-200 shadow-[0_0_8px_rgba(168,85,247,0.15)] hidden sm:inline">
              1-Page Standard Resume Format
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleCopyText}
              id="resume-copy-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-50 border border-stone-300 text-stone-700 hover:bg-purple-50 hover:text-purple-900 hover:border-purple-300 hover:shadow-[0_0_12px_rgba(168,85,247,0.2)] transition-all shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              title="Copy plain-text resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-purple-600" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadText}
              id="resume-download-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-50 border border-stone-300 text-stone-700 hover:bg-purple-50 hover:text-purple-900 hover:border-purple-300 hover:shadow-[0_0_12px_rgba(168,85,247,0.2)] transition-all shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              title="Download plain-text CV (.txt)"
            >
              <FileText className="w-3.5 h-3.5 text-purple-600" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              id="resume-download-pdf-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-800 text-white hover:from-purple-600 hover:to-indigo-700 transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_28px_rgba(147,51,234,0.6)] border border-purple-400 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
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
              className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors ml-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-hidden"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Paper Content */}
        <div id="resume-modal-paper-wrapper" className="overflow-y-auto p-3 sm:p-6 md:p-8 bg-stone-100/90">
          <div
            id="resume-paper"
            className="bg-white rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.15)] p-6 sm:p-8 md:p-10 text-stone-900 border border-stone-300 max-w-[800px] mx-auto text-[13px] leading-relaxed select-text"
            style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
          >
            {/* Header: Name & Role */}
            <div className="text-center pb-2 border-b border-stone-200">
              <h1 className="text-2xl sm:text-[28px] font-bold tracking-tight text-stone-950">
                {resumeData.name}
              </h1>

              {/* Contact bar with clean alignment and icons */}
              <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 mt-2 text-xs text-stone-700">
                <a
                  href={resumeData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-stone-900 hover:text-purple-700 transition-colors font-medium"
                >
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-xs bg-[#0a66c2] text-white text-[9px] font-bold">
                    in
                  </span>
                  <span>{resumeData.linkedinText}</span>
                </a>

                <span className="text-stone-300 font-bold">|</span>

                <a
                  href={`mailto:${resumeData.email}`}
                  className="inline-flex items-center gap-1 text-stone-900 hover:text-purple-700 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-700" />
                  <span>{resumeData.email}</span>
                </a>

                <span className="text-stone-300 font-bold">|</span>

                <a
                  href={`tel:${resumeData.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1 text-stone-900 hover:text-purple-700 transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-purple-700" />
                  <span>{resumeData.phone}</span>
                </a>
              </div>
            </div>

            {/* Section 1: Summary */}
            <section className="mt-3.5">
              <h2 className="text-[13px] font-bold uppercase tracking-wider text-stone-900 border-b border-stone-800 pb-0.5 mb-1.5">
                Summary
              </h2>
              <p className="text-stone-700 text-left leading-relaxed text-[12px]">
                {resumeData.summary}
              </p>
            </section>

            {/* Section 2: Work Experience & Training */}
            <section className="mt-3.5">
              <h2 className="text-[13px] font-bold uppercase tracking-wider text-stone-900 border-b border-stone-800 pb-0.5 mb-2">
                Work Experience &amp; Training
              </h2>

              <div className="space-y-3">
                {resumeData.experiences.map((exp) => (
                  <div key={exp.company} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-[12.5px]">
                      <div>
                        <span className="font-bold text-[#1e3a8a]">{exp.company}</span>
                        <span className="font-semibold text-stone-900"> | {exp.role}</span>
                      </div>
                      <span className="font-medium text-stone-600 sm:text-right text-[12px]">
                        ({exp.period})
                      </span>
                    </div>
                    <ul className="space-y-1 text-stone-700 text-[12px] leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-left">
                          <span className="select-none font-bold text-stone-900 shrink-0">–</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Projects */}
            <section className="mt-3.5">
              <h2 className="text-[13px] font-bold uppercase tracking-wider text-stone-900 border-b border-stone-800 pb-0.5 mb-2">
                Projects
              </h2>

              <div className="space-y-3">
                {resumeData.projects.map((proj) => (
                  <div key={proj.title} className="space-y-1">
                    <div className="text-[12.5px] font-bold text-stone-900">
                      {proj.title}
                    </div>
                    <ul className="space-y-1 text-stone-700 text-[12px] leading-relaxed">
                      {proj.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-left">
                          <span className="select-none font-bold text-stone-900 shrink-0">–</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Skills */}
            <section className="mt-3.5">
              <h2 className="text-[13px] font-bold uppercase tracking-wider text-stone-900 border-b border-stone-800 pb-0.5 mb-2">
                Skills
              </h2>
              <div className="space-y-1 text-stone-700 text-[12px] leading-relaxed">
                {resumeData.skills.map((skill) => (
                  <p key={skill.category} className="flex items-start gap-1.5 text-left">
                    <span className="select-none font-bold text-stone-900 shrink-0">–</span>
                    <span>
                      <strong className="font-semibold text-stone-900">{skill.category}:</strong> {skill.items}
                    </span>
                  </p>
                ))}
              </div>
            </section>

            {/* Section 5: Certifications */}
            <section className="mt-3.5">
              <h2 className="text-[13px] font-bold uppercase tracking-wider text-stone-900 border-b border-stone-800 pb-0.5 mb-2">
                Certifications
              </h2>
              <ul className="space-y-1 text-stone-700 text-[12px] leading-relaxed">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 text-left">
                    <span className="select-none font-bold text-stone-900 shrink-0">–</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6: Education */}
            <section className="mt-3.5">
              <h2 className="text-[13px] font-bold uppercase tracking-wider text-stone-900 border-b border-stone-800 pb-0.5 mb-2">
                Education
              </h2>
              <div className="space-y-1 text-stone-700 text-[12px]">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-semibold text-stone-900">{edu.period}</span>
                      <span className="text-stone-800">{edu.degree}</span>
                    </div>
                    <span className="font-semibold text-stone-900 sm:text-right whitespace-nowrap">
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

