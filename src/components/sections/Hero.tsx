import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, Phone, FileDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/personal";

export function Hero() {
  return (
    <section className="relative isolate pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[550px] w-[550px] rounded-full blur-3xl opacity-35 dark:opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(59,130,246,0.2) 60%, transparent 80%)"
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-[-15%] -z-10 h-[450px] w-[450px] rounded-full blur-3xl opacity-25 dark:opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {personalInfo.availability} · {personalInfo.timezone}
              </span>
            </div>

            {/* Editorial Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                Building Modern Web Experiences{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-serif italic font-normal">
                  From Frontend to Backend.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
                I&apos;m <span className="font-semibold text-slate-900 dark:text-white">{personalInfo.name}</span>, a{" "}
                <span className="font-medium text-indigo-600 dark:text-indigo-400">{personalInfo.title}</span> focused on building responsive interfaces, reliable REST APIs, and database-driven applications using React, Next.js, Node.js, Express.js, and MongoDB.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-md hover:shadow-indigo-500/25 transition-all duration-200 group"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 bg-white/60 dark:bg-slate-900/40 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium text-sm backdrop-blur-sm transition-all duration-200"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Résumé</span>
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-mono uppercase tracking-wider text-[11px] text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center lg:items-end">
            <div className="relative group">
              {/* Subtle ambient halo glow matching Develop By Md. Hanif purple/blue logo */}
              <div
                className="absolute -inset-1.5 rounded-3xl bg-linear-to-tr from-indigo-600/30 via-purple-600/25 to-blue-600/30 opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Portrait Container with restrained border and soft shadow */}
              <div className="relative w-64 sm:w-72 lg:w-80 aspect-4/5 rounded-2xl overflow-hidden border border-indigo-200/60 dark:border-indigo-500/30 ring-1 ring-slate-900/5 dark:ring-white/10 bg-slate-100 dark:bg-slate-900 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/images/myImage.jpg"
                  alt="Md. Hanif — Full-Stack Web Developer"
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-[50%_18%] transition-transform duration-500 group-hover:scale-103"
                  priority
                />

                {/* Bottom glass tag */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 bg-linear-to-t from-slate-950/90 via-slate-950/60 to-transparent text-white backdrop-blur-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-wide">{personalInfo.name}</p>
                      <p className="text-[11px] font-mono text-indigo-300">{personalInfo.title}</p>
                    </div>
                    <div className="h-6 px-2.5 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-2.5 h-2.5 text-indigo-300" />
                      <span>{personalInfo.brand}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-label under portrait */}
            <div className="mt-5 text-center lg:text-right space-y-1">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Location
              </p>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {personalInfo.location} · BST (UTC+6)
              </p>
            </div>
          </div>
        </div>

        {/* Stats Ribbon (inspired by reference site's metrics bar) */}
        <div className="mt-16 md:mt-24 border-y border-slate-200 dark:border-slate-800/80 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800/80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="py-6 px-4 sm:px-6 flex flex-col justify-between">
              <span className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
                {stat.value}
              </span>
              <div className="mt-2">
                <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-medium">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
