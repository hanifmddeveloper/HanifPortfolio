import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { personalInfo } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanif-portfolio.vercel.app"),
  title: {
    default: `${personalInfo.name} — ${personalInfo.title} | React, Node.js & MongoDB`,
    template: `%s | ${personalInfo.name}`
  },
  description:
    "Full-Stack Web Developer based in Dhaka, Bangladesh. Building responsive interfaces, reliable REST APIs, and database-driven applications using React, Next.js, Node.js, Express.js, and MongoDB.",
  keywords: [
    "Md. Hanif",
    "Md Hanif",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB",
    "Dhaka Bangladesh Developer",
    "Web Developer Portfolio"
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.github }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hanif-portfolio.vercel.app",
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description:
      "Full-Stack Web Developer focused on building responsive interfaces, reliable REST APIs, and database-driven applications using React, Next.js, Node.js, Express.js, and MongoDB.",
    siteName: personalInfo.brand,
    images: [
      {
        url: "/images/myImage.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — ${personalInfo.title}`,
    description:
      "Full-Stack Web Developer building responsive interfaces, reliable REST APIs, and database-driven applications.",
    images: ["/images/myImage.jpg"]
  },
  icons: {
    icon: "/images/logo2.jpg",
    apple: "/images/logo2.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh"
    },
    sameAs: [personalInfo.github, personalInfo.linkedin],
    knowsAbout: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "RESTful APIs",
      "Full Stack Development"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fafc] dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content accessibility link */}
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:text-xs focus:font-mono"
          >
            Skip to main content
          </a>

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
