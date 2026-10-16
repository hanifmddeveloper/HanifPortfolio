export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  brand: string;
  location: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  whatsappLink: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  availability: string;
  timezone: string;
  workingHours: string;
  bioLede: string;
  bioFull: string[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Md. Hanif",
  shortName: "Hanif",
  title: "Full-Stack Web Developer",
  brand: "Develop By Md. Hanif",
  location: "Dhaka, Bangladesh",
  email: "hanif007.dev@gmail.com",
  phone: "+8801813286277",
  phoneDisplay: "+880 1813-286277",
  whatsappLink: "https://wa.me/8801813286277",
  github: "https://github.com/hanifoo7dev",
  linkedin: "https://www.linkedin.com/in/hanif007/",
  resumeUrl: "/resume/Md-Hanif-Resume.pdf",
  availability: "Available for Full-Time Roles & Contracts",
  timezone: "BST (UTC+6)",
  workingHours: "9:00 AM – 11:00 PM BST",
  bioLede:
    "I'm Md. Hanif, a Full-Stack Web Developer focused on building responsive interfaces, reliable REST APIs, and database-driven applications using React, Next.js, Node.js, Express.js, and MongoDB.",
  bioFull: [
    "I work across the entire lifecycle of modern web applications — from crafting accessible, pixel-accurate user interfaces to engineering robust RESTful APIs, implementing JWT authentication, and architecting normalized MongoDB database models with Mongoose.",
    "My engineering philosophy emphasizes clean, maintainable component design, predictable server-side error handling, and pragmatic database queries. Rather than building shallow surface-level mockups, I focus on building complete software solutions that handle real-world state, data validation, and responsive device constraints.",
    "Whether designing an e-commerce platform with real-time cart manipulation, structuring relational documents in NoSQL, or optimizing Core Web Vitals for mobile users, I bring end-to-end accountability to every project."
  ],
  stats: [
    {
      value: "6+",
      label: "Full-Stack & Frontend Projects",
      sublabel: "Shipped & Open Source"
    },
    {
      value: "100%",
      label: "Responsive & Accessible UI",
      sublabel: "Mobile, Tablet & Desktop"
    },
    {
      value: "MERN + Next",
      label: "Core Technology Stack",
      sublabel: "React, Node, Express, Mongo"
    },
    {
      value: "RESTful",
      label: "API Architecture & CRUD",
      sublabel: "Secure & Validated Endpoints"
    }
  ]
};
