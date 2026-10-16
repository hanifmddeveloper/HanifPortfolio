"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";

type CategoryFilter = "All" | "Full-Stack" | "Frontend" | "Backend / API";

const categories: CategoryFilter[] = ["All", "Full-Stack", "Frontend", "Backend / API"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <SectionHeading
            badge="03 / Selected Work"
            title="Production Systems &"
            italicTitle="Software Projects."
            description="Explore real full-stack web applications, frontend landing platforms, and database REST APIs engineered with the MERN and Next.js ecosystems."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featuredPriority={idx === 0}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
            <p className="text-sm font-mono text-slate-500">
              No projects found matching the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
