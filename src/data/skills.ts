export interface SkillGroup {
  category: string;
  description: string;
  badge: string;
  items: {
    name: string;
    level: string; // e.g. "Core", "Advanced", "Proficient", "Practical"
    highlight?: string;
  }[];
}

export const skillCategories: SkillGroup[] = [
  {
    category: "Frontend Development",
    description:
      "Crafting performant, accessible, and responsive user interfaces with semantic markup, modern CSS architecture, and component-driven React paradigms.",
    badge: "Client-Side",
    items: [
      { name: "React.js", level: "Core", highlight: "Hooks, Context API, component modularity, state management" },
      { name: "JavaScript (ES6+)", level: "Core", highlight: "Async/await, DOM manipulation, promises, modern syntax" },
      { name: "Tailwind CSS", level: "Core", highlight: "Utility-first architecture, responsive layouts, design systems" },
      { name: "Next.js", level: "Practical", highlight: "App Router, Server Components, Route Handlers, SEO" },
      { name: "HTML5 & Semantic Markup", level: "Core", highlight: "Accessible DOM structure, WCAG compliance, SEO optimization" },
      { name: "CSS3 & Modern Layouts", level: "Core", highlight: "Flexbox, CSS Grid, media queries, animations, transitions" },
      { name: "Bootstrap", level: "Proficient", highlight: "Rapid grid prototyping, responsive utilities, UI modules" }
    ]
  },
  {
    category: "Backend & API Engineering",
    description:
      "Building scalable Node.js microservices, resilient Express servers, RESTful endpoints, and secure authentication pipelines.",
    badge: "Server-Side",
    items: [
      { name: "Node.js", level: "Core", highlight: "Asynchronous I/O, event loop, runtime execution, server environments" },
      { name: "Express.js", level: "Core", highlight: "Middleware orchestration, routing, controller separation, error handlers" },
      { name: "RESTful API Design", level: "Core", highlight: "Stateless architecture, HTTP verbs, status codes, query filtering" },
      { name: "CRUD Operations", level: "Core", highlight: "Robust Create, Read, Update, Delete cycles with atomic operations" },
      { name: "Authentication & Security", level: "Proficient", highlight: "JWT tokens, password hashing with bcrypt, role-based guards" },
      { name: "Request Validation", level: "Core", highlight: "Schema sanitization, payload inspection, defensive validation" }
    ]
  },
  {
    category: "Databases & Data Modeling",
    description:
      "Designing structured schema definitions, document relationships, indexing, and data validation rules with MongoDB and Mongoose.",
    badge: "Data Layer",
    items: [
      { name: "MongoDB", level: "Core", highlight: "NoSQL document collections, aggregation pipelines, indexing" },
      { name: "Mongoose ODM", level: "Core", highlight: "Schema typing, validation hooks, virtuals, query middleware" },
      { name: "Data Relations & Population", level: "Core", highlight: "ObjectId referencing, `.populate()` queries, relational integrity" },
      { name: "Data Validation", level: "Core", highlight: "Required constraints, enum boundaries, custom sanitizers" }
    ]
  },
  {
    category: "Tools, Workflow & DevOps",
    description:
      "Modern tooling and continuous deployment workflows to test, inspect, version, and deploy production-ready applications.",
    badge: "Workflow",
    items: [
      { name: "Git & Version Control", level: "Core", highlight: "Branching strategies, commits, conflict resolution, rebase" },
      { name: "GitHub", level: "Core", highlight: "Repositories, pull requests, issue tracking, collaboration" },
      { name: "Postman", level: "Core", highlight: "API testing, environment variables, endpoint debugging, payload tests" },
      { name: "VS Code", level: "Core", highlight: "Productive development environment, extensions, debugging setup" },
      { name: "Vercel", level: "Proficient", highlight: "Continuous deployment, preview environments, serverless edge functions" },
      { name: "npm & Package Management", level: "Core", highlight: "Dependency resolution, scripts execution, lockfile maintenance" }
    ]
  }
];
