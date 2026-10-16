import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { Code2, Server, Database, Terminal, CheckCircle2 } from "lucide-react";

export function Skills() {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Frontend")) return <Code2 className="w-5 h-5 text-indigo-500" />;
    if (category.includes("Backend")) return <Server className="w-5 h-5 text-indigo-500" />;
    if (category.includes("Database")) return <Database className="w-5 h-5 text-indigo-500" />;
    return <Terminal className="w-5 h-5 text-indigo-500" />;
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="04 / Technical Stack"
          title="Technologies, Languages &"
          italicTitle="Tools."
          description="A pragmatic inventory of the technologies I use to build scalable web applications. No exaggerated percentages or arbitrary ratings — just genuine tools and their practical implementation."
        />

        {/* 4 Skill Category Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] shadow-xs space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50">
                      {getCategoryIcon(group.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {group.badge}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {group.description}
                </p>

                {/* Items List */}
                <div className="pt-2 divide-y divide-slate-100 dark:divide-slate-800/80">
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          {item.name}
                        </span>
                      </div>

                      {item.highlight && (
                        <span className="text-xs text-slate-500 dark:text-slate-400 sm:text-right font-normal pl-5 sm:pl-0">
                          {item.highlight}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
