# Develop By Md. Hanif — Full-Stack Developer Portfolio

A production-quality personal developer portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**. Designed with an editorial aesthetic inspired by high-end software engineering portfolios, featuring deep navy dark-mode backgrounds, electric indigo accents, technical case studies, responsive media queries, and verified curriculum vitae integration.

---

## 👨‍💻 Developer Profile

- **Name:** Md. Hanif
- **Title:** Full-Stack Web Developer
- **Brand:** Develop By Md. Hanif
- **Location:** Dhaka, Bangladesh
- **Email:** [hanif007.dev@gmail.com](mailto:hanif007.dev@gmail.com)
- **Phone / WhatsApp:** [+8801813286277](https://wa.me/8801813286277)
- **GitHub:** [https://github.com/hanifoo7dev](https://github.com/hanifoo7dev)
- **LinkedIn:** [https://www.linkedin.com/in/hanif007/](https://www.linkedin.com/in/hanif007/)
- **Education:** Diploma in Computer Science and Engineering (2024–2026)

---

## 🚀 Key Features

1. **Sticky Glassmorphic Navigation:**
   - Develop By Md. Hanif branding with responsive logo (`logo2.jpg`).
   - Active section spy on scroll (`#about`, `#experience`, `#projects`, `#skills`, `#process`, `#contact`).
   - Quick-action buttons: "Let's Talk" CTA, theme toggle, and dedicated Résumé link.
   - Mobile-first slide-out drawer navigation with keyboard accessibility.

2. **Editorial Hero Section:**
   - Real developer portrait (`myImage.jpg`) framed with ambient glow.
   - Availability badge for full-time roles and client contracts.
   - 4-column performance metrics ribbon highlighting project count and stack scope.

3. **In-Depth Technical Case Studies (`/projects/[slug]`):**
   - **Cabbage — Grocery E-Commerce Platform**: MERN stack marketplace with dynamic cataloging, stateful shopping cart, and RESTful inventory APIs.
   - **Responsive Graphics Design Landing Page**: High-performance agency landing page with zero layout shift (CLS) and 99+ Lighthouse performance.
   - **Student & Course Management REST API**: Relational-style MongoDB backend service with Mongoose ObjectId referencing and dynamic `.populate()` queries.
   - **Secure JWT Authentication & Admin Portal**: Stateless token auth pipeline with salted bcrypt hashing and role-based guards.
   - Each case study features problem statements, functional requirements, architectural diagrams, REST API specs, MongoDB schemas, and engineering learnings.

4. **Verified Experience & Qualifications:**
   - Frontend Developer Intern at Creative IT Institute (Jan 2026 – May 2026).
   - Frontend Developer at Contesa IT Institute (Jan 2024 – Nov 2025).
   - Diploma in Computer Science and Engineering (2024–2026).
   - Government NSDA Level 3 Certification (`NSC-ICT-WDDF-L3-002969`) & Full Stack Development Track.

5. **Integrated Official Résumé (`/resume`):**
   - Embedded PDF preview frame using actual verified file (`/resume/Md-Hanif-Resume.pdf`).
   - One-click PDF download with accessible filename.
   - "Open in New Tab" action.
   - Fully accessible screen-reader outline.

6. **Defensive Contact Processing (`/api/contact`):**
   - Client-side and server-side validation.
   - Anti-spam honeypot protection.
   - Nodemailer SMTP integration with graceful fallback mode and direct WhatsApp (`https://wa.me/8801813286277`) / Email alternatives.

7. **Technical SEO & Accessibility:**
   - Structured JSON-LD schema (`Person`) in RootLayout.
   - Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Automated dynamic XML sitemap (`/sitemap.xml`) and search engine crawler instructions (`/robots.txt`).
   - Custom favicon and OpenGraph social metadata.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Server Components, Route Handlers)
- **UI Library:** React with TypeScript
- **Styling:** Tailwind CSS (Utility-First, Dark & Light Mode, Responsive Breakpoints)
- **Theming:** `next-themes`
- **Icons:** Lucide React & Custom SVG Brand Icons
- **Backend / Mailer:** Node.js Route Handlers + Nodemailer
- **Testing:** Automated Node.js HTTP Endpoint Suite

---

## 📁 Project Directory Structure

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── logo2.jpg                     # Brand Logo
│   │   ├── myImage.jpg                   # High-res Developer Portrait
│   │   └── projects/                     # Project Screenshots & Assets
│   │       ├── cabbage.png
│   │       ├── creative.png
│   │       ├── eduact.png
│   │       ├── orebi.png
│   │       ├── p1.png
│   │       ├── port.png
│   │       └── roiser.png
│   └── resume/
│       └── Md-Hanif-Resume.pdf           # Downloadable Official Résumé
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts              # Contact API Handler with Nodemailer
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx              # Deep Technical Case Study Pages
│   │   ├── resume/
│   │   │   └── page.tsx                  # Dedicated Résumé Preview & Download
│   │   ├── globals.css                   # Theme Tokens, Glow Utilities & Styling
│   │   ├── layout.tsx                    # Root Layout, Metadata, ThemeProvider
│   │   ├── not-found.tsx                 # 404 Page
│   │   ├── page.tsx                      # Main Page
│   │   ├── robots.ts                     # Search Engine Directives
│   │   └── sitemap.ts                    # Dynamic XML Sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx                # Brand Footer with Dynamic Year
│   │   │   ├── Navbar.tsx                # Glassmorphic Sticky Header
│   │   │   └── ThemeProvider.tsx         # Theme Provider Wrapper
│   │   ├── sections/
│   │   │   ├── About.tsx                 # Real Narrative & 4 Architectural Pillars
│   │   │   ├── Contact.tsx               # Direct Channels & Inquiry Form
│   │   │   ├── Experience.tsx            # Work History, Diploma & Certifications
│   │   │   ├── Hero.tsx                  # Editorial Headline, Photo & Metrics
│   │   │   ├── Process.tsx               # 6-Step Software Development Approach
│   │   │   ├── Projects.tsx              # Filterable Project Catalog
│   │   │   └── Skills.tsx                # Categorized Skills Taxonomy
│   │   └── ui/
│   │       ├── Icons.tsx                 # SVG Icons
│   │       ├── ProjectCard.tsx           # Project Preview Card
│   │       ├── SectionHeading.tsx        # Standardized Editorial Header
│   │       └── ThemeToggle.tsx           # Dark / Light Mode Switcher
│   ├── data/
│   │   ├── experience.ts                 # Work History & Academic Data
│   │   ├── personal.ts                   # Contact, Bio & Social Links
│   │   ├── projects.ts                   # Case Studies, Schemas & Endpoints
│   │   └── skills.ts                     # Technical Skills Data
│   └── lib/
│       ├── utils.ts                      # Tailwind Merge Helper
│       └── validation.ts                 # Form & Honeypot Validation Rules
├── tests/
│   └── test-endpoints.mjs                # Automated Verification Suite
├── .env.example                          # Environment Variables Template
└── package.json
```

---

## 💻 Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env.local` if you wish to configure live SMTP sending:
```bash
cp .env.example .env.local
```
Fill in your credentials:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=hanif007.dev@gmail.com
SMTP_PASS=your-google-app-password
CONTACT_RECEIVER_EMAIL=hanif007.dev@gmail.com
```
*(If omitted, contact messages will safely log to the server console and provide the user with the direct WhatsApp/Email fallback).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production & Test
```bash
npm run build
npm run start
```
Run automated endpoint verification tests:
```bash
node tests/test-endpoints.mjs
```

---

## 🚢 Deploying to Vercel

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete professional portfolio build"
   git remote add origin https://github.com/hanifoo7dev/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Set the **Framework Preset** to **Next.js**.
5. In **Environment Variables**, optionally paste the SMTP keys from `.env.example`.
6. Click **Deploy**. Vercel will automatically build the static pages and deploy the edge-ready application!
