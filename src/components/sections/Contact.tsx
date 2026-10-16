"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalInfo } from "@/data/personal";
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "notice";
    text: string;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your full name (at least 2 characters).";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Subject must be at least 3 characters long.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: data.notice ? "notice" : "success",
          text: data.message
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          honeypot: ""
        });
      } else {
        setStatusMessage({
          type: "error",
          text: data.message || "Failed to deliver message. Please contact me directly via email or WhatsApp."
        });
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch (err) {
      console.error(err);
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please reach out to me directly at hanif007.dev@gmail.com or via WhatsApp."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16 bg-slate-50/50 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="06 / Contact & Inquiries"
          title="Let’s Discuss Your Next"
          italicTitle="Web Project."
          description="Whether you have an open full-stack role, contract opportunity, or need to architect a web platform, feel free to drop a message."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-8 shadow-xs space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Email Address
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:border-emerald-400 dark:hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        WhatsApp Message
                      </span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {personalInfo.phoneDisplay}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500" />
                  </div>
                </a>

                {/* Phone Call */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Mobile Telephone
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {personalInfo.phoneDisplay}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Primary Location
                    </span>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {personalInfo.workingHours} ({personalInfo.timezone})
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c121e] p-8 sm:p-10 shadow-xs">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-normal">
                Fill in the form below and I will respond within 24 hours.
              </p>

              {statusMessage && (
                <div
                  className={`p-4 rounded-2xl mb-6 flex items-start gap-3 text-sm ${
                    statusMessage.type === "success"
                      ? "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200"
                      : statusMessage.type === "notice"
                      ? "bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200"
                      : "bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200"
                  }`}
                  role="alert"
                >
                  {statusMessage.type === "error" ? (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                  )}
                  <p className="leading-relaxed">{statusMessage.text}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot anti-spam field (hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave empty</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.name
                          ? "border-rose-400 dark:border-rose-600 ring-rose-200"
                          : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-600 dark:text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium"
                    >
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.email
                          ? "border-rose-400 dark:border-rose-600 ring-rose-200"
                          : "border-slate-200 dark:border-slate-700"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-600 dark:text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Developer Role / Project Proposal"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.subject
                        ? "border-rose-400 dark:border-rose-600 ring-rose-200"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-rose-600 dark:text-rose-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-medium"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, scope, or job opportunity..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y ${
                      errors.message
                        ? "border-rose-400 dark:border-rose-600 ring-rose-200"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 dark:text-rose-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-medium text-sm shadow-md hover:shadow-indigo-500/25 transition-all duration-200 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
