import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Server,
  Database,
  Code2,
  Lightbulb,
  ShieldAlert,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: `${project.title} — Technical Case Study | Md. Hanif`,
    description: project.summary
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen py-24 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Navigation & Return */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-colors shadow-2xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow-indigo-500/20 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Application</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Tech pills row */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Narrative & Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
          {/* Main Case Study Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-indigo-500" />
                <span>Project Overview</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {caseStudy.overview}
              </p>
            </section>

            {/* Problem Statement */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <ShieldAlert className="w-5 h-5 text-indigo-500" />
                <span>The Problem & Engineering Scope</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {caseStudy.problemStatement}
              </p>
            </section>

            {/* Functional Requirements */}
            <section className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Functional Requirements Implemented
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.functionalRequirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-indigo-500" />
                <span>Software Architecture</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {caseStudy.architecture}
              </p>
            </section>

            {/* REST API Endpoints (if present) */}
            {caseStudy.apiEndpoints && caseStudy.apiEndpoints.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Server className="w-5 h-5 text-indigo-500" />
                  <span>REST API Specifications</span>
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-900 text-xs font-mono uppercase tracking-wider text-slate-500 border-b border-slate-200 dark:border-slate-800">
                      <tr>
                        <th className="py-3 px-4">Method</th>
                        <th className="py-3 px-4">Endpoint</th>
                        <th className="py-3 px-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 font-mono text-xs">
                      {caseStudy.apiEndpoints.map((ep, epIdx) => (
                        <tr key={epIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                          <td className="py-3 px-4 font-bold">
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] ${
                                ep.method === "GET"
                                  ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300"
                                  : ep.method === "POST"
                                  ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                                  : ep.method === "DELETE"
                                  ? "bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300"
                                  : "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300"
                              }`}
                            >
                              {ep.method}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-900 dark:text-white font-medium">
                            {ep.path}
                          </td>
                          <td className="py-3 px-4 font-sans text-xs text-slate-600 dark:text-slate-400">
                            {ep.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Database Schemas (if present) */}
            {caseStudy.databaseSchema && caseStudy.databaseSchema.length > 0 && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Database className="w-5 h-5 text-indigo-500" />
                  <span>MongoDB Document Schemas & Models</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.databaseSchema.map((schema, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <span className="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">
                          {schema.modelName} Model
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Mongoose</span>
                      </div>
                      <div className="space-y-2">
                        {schema.fields.map((f, fIdx) => (
                          <div key={fIdx} className="text-xs">
                            <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                              {f.name}
                            </span>
                            <span className="text-slate-400 font-mono ml-2">({f.type})</span>
                            {f.notes && (
                              <p className="text-[11px] text-slate-500 font-sans mt-0.5">{f.notes}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Technical Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {caseStudy.challengesAndSolutions.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] space-y-2"
                  >
                    <p className="text-xs font-mono uppercase tracking-wider text-rose-500 font-bold">
                      Challenge:
                    </p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.challenge}
                    </p>
                    <p className="text-xs font-mono uppercase tracking-wider text-emerald-500 font-bold pt-2">
                      Engineered Solution:
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Learnings */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Key Engineering Takeaways
              </h2>
              <ul className="space-y-3">
                {caseStudy.keyLearnings.map((learning, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Tech Specs (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] space-y-6 sticky top-28">
              <h3 className="text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold border-b border-slate-200 dark:border-slate-800 pb-3">
                Technology Rationale
              </h3>

              <div className="space-y-4">
                {caseStudy.techChoices.map((choice, cIdx) => (
                  <div key={cIdx} className="space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {choice.tech}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {choice.rationale}
                    </p>
                  </div>
                ))}
              </div>

              {project.metrics && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Performance Indicators
                  </h4>
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{m.label}</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs uppercase tracking-wider shadow-sm transition-all"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 text-slate-800 dark:text-slate-200 font-medium text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Inspect GitHub Code</span>
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
