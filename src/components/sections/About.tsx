import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/personal";
import { Layout, Server, Database, ShieldCheck, CheckCircle2 } from "lucide-react";

export function About() {
  const pillars = [
    {
      num: "01",
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      title: "Responsive Frontend Systems",
      description:
        "Building accessible, pixel-accurate user interfaces with React, Next.js, and Tailwind CSS. Emphasizing semantic markup, modular component hierarchies, and fluid layouts tested across all device breakpoints."
    },
    {
      num: "02",
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      title: "RESTful API Architecture",
      description:
        "Designing modular Express and Node.js backend services. Implementing standardized REST endpoints, HTTP status codes, structured middleware pipelines, and centralized error handling."
    },
    {
      num: "03",
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      title: "Database Modeling & Mongoose",
      description:
        "Architecting normalized document schemas in MongoDB. Leveraging Mongoose ODM for type validation, ObjectId relationships, and dynamic population queries that keep data consistent and performant."
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      title: "Authentication & Security",
      description:
        "Implementing stateless JSON Web Token (JWT) workflows, cryptographic password hashing with bcrypt, role-based access control (RBAC), and sanitization against injection and XSS."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="01 / Background & Philosophy"
          title="Bridging Interface Design with"
          italicTitle="Reliable Backend Systems."
          description="I build full-stack software from the ground up: accessible UI components, structured database schemas, and dependable APIs that hold up under real usage."
        />

        {/* Narrative & Details Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {personalInfo.bioFull.map((para, idx) => (
              <p key={idx} className="text-pretty">
                {para}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold mb-3">
                Key Engineering Focus Areas:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Full-Stack Web Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>RESTful API Design & Controllers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>MongoDB Document Modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Reusable React UI Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Mobile-First Responsive Layouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Pragmatic Error Resilience</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Spec Block */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm space-y-6 shadow-sm">
              <h3 className="text-sm font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold border-b border-slate-200 dark:border-slate-800 pb-3">
                Operating Specification
              </h3>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Location
                  </dt>
                  <dd className="mt-1 font-medium text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Primary Stack
                  </dt>
                  <dd className="mt-1 font-medium text-slate-900 dark:text-white">
                    React.js · Next.js · Node.js · Express.js · MongoDB
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Working Schedule
                  </dt>
                  <dd className="mt-1 font-medium text-slate-900 dark:text-white">
                    {personalInfo.workingHours} ({personalInfo.timezone})
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Open Engagement
                  </dt>
                  <dd className="mt-1 font-medium text-slate-900 dark:text-white">
                    Full-Time Positions, Remote Engineering, Selected Contracts
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Communication
                  </dt>
                  <dd className="mt-1 text-slate-600 dark:text-slate-400">
                    Async & Real-time via Email, WhatsApp, GitHub, and Slack.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors duration-300 space-y-4 group shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {pillar.num}
                </span>
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {pillar.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
