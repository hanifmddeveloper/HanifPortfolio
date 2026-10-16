"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalInfo } from "@/data/personal";

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy logic
      if (pathname === "/") {
        const sections = ["about", "experience", "projects", "skills", "process", "contact"];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-[#080c14]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
              aria-label="Develop By Md. Hanif - Homepage"
            >
              <div className="relative h-10 w-auto flex items-center overflow-hidden rounded-md bg-white p-0.5 border border-slate-200 dark:border-slate-700 shadow-xs">
                <Image
                  src="/images/logo2.jpg"
                  alt="Develop By Md. Hanif Logo"
                  width={140}
                  height={40}
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                  Md. Hanif
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Full-Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary Navigation">
              {navItems.map((item) => {
                const sectionId = item.href.replace("/#", "");
                const isActive = pathname === "/" && activeSection === sectionId;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 text-[13px] font-medium tracking-tight rounded-full transition-colors duration-200 ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    )}
                  </Link>
                );
              })}

              {/* Résumé Link */}
              <Link
                href="/resume"
                className={`relative px-3.5 py-1.5 text-[13px] font-medium tracking-tight rounded-full transition-colors duration-200 flex items-center gap-1.5 ${
                  pathname === "/resume"
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/40"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Résumé
              </Link>
            </nav>

            {/* Right Action Cluster */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Let's Talk CTA button */}
              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm hover:shadow-indigo-500/20 hover:shadow-md transition-all duration-200"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Open mobile navigation"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-[#0b101c] border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-auto flex items-center overflow-hidden rounded bg-white p-0.5 border border-slate-200 dark:border-slate-700">
                <Image
                  src="/images/logo2.jpg"
                  alt="Develop By Md. Hanif"
                  width={110}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="mt-6 flex flex-col gap-2" aria-label="Mobile links">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
              </Link>
            ))}

            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-colors"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Download Résumé
              </span>
              <span className="text-xs font-mono text-indigo-400">PDF</span>
            </Link>
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-md"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <p className="text-xs text-center text-slate-500 dark:text-slate-400 font-mono">
            {personalInfo.workingHours} · {personalInfo.timezone}
          </p>
        </div>
      </aside>
    </>
  );
}
