import React from "react";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { workExperience, educationHistory, certifications } from "@/data/experience";
import { personalInfo } from "@/data/personal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Official Résumé — ${personalInfo.name}`,
  description: `Download and review the verified curriculum vitae of ${personalInfo.name}, Full-Stack Web Developer.`
};

export default function ResumePage() {
  const resumePdfPath = "/resume/Md-Hanif-Resume.pdf";

  return (
    <div className="min-h-screen py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Navigation Breadcrumb & Actions Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-colors shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <a
              href={resumePdfPath}
              download="Md-Hanif-Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-indigo-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Résumé (PDF)</span>
            </a>
          </div>
        </div>

        {/* Header Block */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/30 text-xs font-mono text-indigo-700 dark:text-indigo-300">
            <FileText className="w-3.5 h-3.5" />
            <span>Verified Curriculum Vitae</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Curriculum Vitae — {personalInfo.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {personalInfo.bioLede}
          </p>
        </div>

        {/* Embedded PDF Viewer Frame */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-lg">
          <div className="px-6 py-4 bg-slate-200/70 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-300">
            <span>DOCUMENT PREVIEW: Md-Hanif-Resume.pdf</span>
            <a
              href={resumePdfPath}
              download="Md-Hanif-Resume.pdf"
              className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
            >
              <Download className="w-3 h-3" />
              Save File
            </a>
          </div>

          <div className="relative w-full h-[650px] sm:h-[850px] bg-white">
            <iframe
              src={`${resumePdfPath}#toolbar=0&navpanes=0`}
              title="Md. Hanif Résumé PDF"
              className="w-full h-full border-none"
            />
          </div>
        </div>

        {/* Structured Readable Text Outline for Screen Readers & Fast Mobile Review */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-8 sm:p-12 space-y-10 shadow-xs">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h2>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 font-mono mt-0.5">
                {personalInfo.title} · {personalInfo.location}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 space-y-1">
              <p>Email: {personalInfo.email}</p>
              <p>Phone: {personalInfo.phoneDisplay}</p>
              <p>GitHub: {personalInfo.github}</p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {job.role} — <span className="text-indigo-600 dark:text-indigo-400">{job.company}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500">{job.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pl-4 list-disc">
                    {job.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
              Education
            </h3>
            {educationHistory.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{edu.degree}</p>
                  <p className="text-xs text-slate-500">{edu.institution} · {edu.location}</p>
                </div>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
              Certifications & Training
            </h3>
            {certifications.map((cert, idx) => (
              <div key={idx} className="text-sm space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <p className="font-bold text-slate-900 dark:text-white">{cert.title}</p>
                  <span className="text-xs font-mono text-slate-500">{cert.periodOrId}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
