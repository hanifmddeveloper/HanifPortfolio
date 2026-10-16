"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ArrowUp, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const currentYear = React.useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => 2026,
  );

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#070b12] text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-auto flex items-center overflow-hidden rounded bg-white p-1 border border-slate-200 dark:border-slate-700 shadow-xs">
                <Image
                  src="/images/logo2.jpg"
                  alt="Develop By Md. Hanif Logo"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              Full-Stack Web Developer dedicated to engineering responsive frontends, reliable RESTful microservices, and database-backed software solutions that solve real business problems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-all shadow-xs"
                aria-label="Md. Hanif on GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-all shadow-xs"
                aria-label="Md. Hanif on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="h-9 w-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-all shadow-xs"
                aria-label="Email Md. Hanif"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-all shadow-xs"
                aria-label="Chat on WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-semibold">
              Index
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About Background
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Work & Education
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Technical Stack
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Development Process
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels & Résumé */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-900 dark:text-white font-semibold">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-slate-400 dark:text-slate-500">Email: </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <span className="text-slate-400 dark:text-slate-500">Phone / WhatsApp: </span>
                <a
                  href={personalInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
                >
                  {personalInfo.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-slate-400 dark:text-slate-500">Location: </span>
                <span className="text-slate-900 dark:text-slate-200">{personalInfo.location}</span>
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/20 text-xs font-medium text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-950/50 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View & Download Official Résumé</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {currentYear} {personalInfo.brand}. Built with Next.js, React, and Tailwind CSS.</p>

          <a
            href="#"
            className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
