import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featuredPriority?: boolean;
}

export function ProjectCard({ project, featuredPriority = false }: ProjectCardProps) {
  return (
    <article className="group relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] overflow-hidden transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-xl dark:hover:shadow-indigo-950/20 flex flex-col justify-between">
      {/* Top Media / Thumbnail Container */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
        <Image
          src={project.image}
          alt={`${project.title} - Preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
          priority={featuredPriority}
        />

        {/* Category Pill Tag Overlay */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase bg-slate-950/80 text-white backdrop-blur-md shadow-sm">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-slate-300 bg-slate-950/60 backdrop-blur-md">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {project.summary}
          </p>

          {/* Metrics if present */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800/80 text-center">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="block text-xs font-bold font-mono text-slate-900 dark:text-white">
                    {m.value}
                  </span>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
          {/* Case study button */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors group/btn"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </Link>

          {/* External links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label={`Source code for ${project.title}`}
                title="View Source Code"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
                aria-label={`Live demo for ${project.title}`}
                title="Visit Live Application"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
