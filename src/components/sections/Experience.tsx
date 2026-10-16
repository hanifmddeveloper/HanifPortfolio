import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { workExperience, educationHistory, certifications } from "@/data/experience";
import { Briefcase, GraduationCap, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="02 / Experience & Education"
            title="Work History, Training &"
            italicTitle="Qualifications."
            description="Verified employment history, academic diploma, and national technical certifications."
          />

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-colors shadow-2xs self-start md:self-end"
          >
            <span>View Full Résumé</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Work Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold border-b border-slate-200 dark:border-slate-800 pb-3">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>

            <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
              {workExperience.map((job, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot */}
                  <span
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full bg-white dark:bg-slate-950 border-2 border-indigo-600 dark:border-indigo-400 group-hover:scale-125 transition-transform"
                    aria-hidden="true"
                  />

                  <div className="space-y-3">
                    {/* Period & Badge */}
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {job.period}
                      </span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[11px]">
                        {job.type}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-base font-medium text-slate-700 dark:text-slate-300">
                        {job.company}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {job.description}
                    </p>

                    {/* Responsibilities list */}
                    <ul className="space-y-2 pt-1 text-sm text-slate-600 dark:text-slate-400 font-normal">
                      {job.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            {/* Education Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold border-b border-slate-200 dark:border-slate-800 pb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              {educationHistory.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Diploma</span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {edu.institution} · {edu.location}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold border-b border-slate-200 dark:border-slate-800 pb-3">
                <Award className="w-4 h-4" />
                <span>Training & Certifications</span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-2xs space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-medium text-indigo-600 dark:text-indigo-400">
                        {cert.issuer}
                      </span>
                      {cert.credentialId && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {cert.credentialId}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
