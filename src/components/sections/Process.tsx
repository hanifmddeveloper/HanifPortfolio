import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Search, Compass, Database, Layers, GitMerge, CheckCheck } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Requirements & User Flow",
      icon: <Search className="w-5 h-5 text-indigo-500" />,
      description:
        "Clarifying business scope, identifying target users, mapping input boundaries, and creating a detailed checklist of functional requirements before writing any code."
    },
    {
      num: "02",
      title: "UI & Component Architecture",
      icon: <Compass className="w-5 h-5 text-indigo-500" />,
      description:
        "Drafting responsive layouts, defining component hierarchies, establishing design tokens in Tailwind CSS, and structuring client state versus server state boundaries."
    },
    {
      num: "03",
      title: "Database Schemas & REST APIs",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      description:
        "Modeling MongoDB collections via Mongoose schemas. Planning relational references, validation constraints, and defining clean RESTful endpoints with appropriate HTTP verbs."
    },
    {
      num: "04",
      title: "Modular Frontend Development",
      icon: <Layers className="w-5 h-5 text-indigo-500" />,
      description:
        "Engineering accessible, reusable React components. Writing semantic HTML, configuring keyboard navigability, and optimizing responsive CSS for mobile and desktop."
    },
    {
      num: "05",
      title: "Frontend-to-Backend Integration",
      icon: <GitMerge className="w-5 h-5 text-indigo-500" />,
      description:
        "Connecting client interfaces to API endpoints via asynchronous fetch handlers. Managing loading states, optimistic UI updates, error boundaries, and token handling."
    },
    {
      num: "06",
      title: "Testing, Optimization & Vercel Deploy",
      icon: <CheckCheck className="w-5 h-5 text-indigo-500" />,
      description:
        "Validating endpoints in Postman, inspecting layout rendering across devices, eliminating layout shifts, and deploying to production on Vercel with automated CI/CD."
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="05 / Engineering Approach"
          title="How I Approach"
          italicTitle="Building Software."
          description="A structured, predictable development workflow from initial requirement discovery to production deployment."
        />

        {/* Process Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors duration-300 space-y-4 group shadow-xs relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  PHASE {step.num}
                </span>
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
