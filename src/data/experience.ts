export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  field: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  periodOrId: string;
  description: string;
  credentialId?: string;
}

export const workExperience: ExperienceItem[] = [
  {
    period: "Jan 2026 – May 2026",
    role: "Frontend Developer Intern",
    company: "Creative IT Institute",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    description:
      "Contributed to front-facing web applications, turning design wireframes and component specifications into accessible, high-performance interfaces while collaborating within an agile team.",
    responsibilities: [
      "Developed responsive, modern web interfaces using HTML5, CSS3, JavaScript (ES6+), React.js, and Tailwind CSS.",
      "Engineered modular and reusable React components with clean props interfaces, state isolation, and maintainable styling.",
      "Implemented mobile-first responsive layouts meticulously tested across mobile, tablet, laptop, and ultra-wide desktop breakpoints.",
      "Integrated client-side interfaces with backend RESTful APIs, handling asynchronous data retrieval, request states, and error resilience.",
      "Employed Git and GitHub for team version control, participating in code reviews, branching workflows, and pull requests."
    ],
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "RESTful APIs", "Git", "GitHub", "Responsive Design"]
  },
  {
    period: "Jan 2024 – Nov 2025",
    role: "Frontend Developer",
    company: "Contesa IT Institute",
    location: "Dhaka, Bangladesh",
    type: "Contract / Full-time",
    description:
      "Engineered responsive user interfaces and maintained web assets with an emphasis on cross-browser compatibility, component modularity, and rapid page delivery.",
    responsibilities: [
      "Developed and maintained performant web interfaces for client and internal educational platforms.",
      "Designed and implemented reusable UI design system elements, utility helpers, and responsive navigation layouts.",
      "Audited frontend performance, eliminating layout shifts and optimizing asset loading across diverse network conditions.",
      "Collaborated closely with designers and project stakeholders to ensure pixel-perfect delivery from design specifications."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "UI/UX Implementation", "Cross-Browser Testing"]
  }
];

export const educationHistory: EducationItem[] = [
  {
    degree: "Diploma in Computer Science and Engineering",
    institution: "Bangladesh Technical Education Board / Institute",
    period: "2024 – 2026",
    location: "Dhaka, Bangladesh",
    field: "Computer Science and Engineering",
    description:
      "Comprehensive coursework covering software engineering principles, algorithms, data structures, database management systems (DBMS), computer networks, and full-stack web application development."
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "Web Design and Development for Freelancing",
    issuer: "National Skills Development Authority (NSDA)",
    periodOrId: "NSC-ICT-WDDF-L3-002969",
    credentialId: "NSC-ICT-WDDF-L3-002969",
    description:
      "Government-accredited Level 3 competency certification validating professional standards in web design, semantic markup, responsive frontend engineering, and freelance delivery practices."
  },
  {
    title: "Full Stack Development Professional Track",
    issuer: "Creative IT Institute",
    periodOrId: "Mar 2025 – Present",
    description:
      "Advanced hands-on program focusing on MERN architecture (MongoDB, Express.js, React.js, Node.js), RESTful API design, state management, authentication flows, and production deployments."
  }
];
