import React from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  italicTitle?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  italicTitle,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {/* Badge / Index line */}
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-6 sm:w-8 bg-indigo-600 dark:bg-indigo-400" aria-hidden="true" />
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400 font-medium">
          {badge}
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
        {title}{" "}
        {italicTitle && (
          <em className="italic font-serif font-normal text-indigo-600 dark:text-indigo-400">
            {italicTitle}
          </em>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
