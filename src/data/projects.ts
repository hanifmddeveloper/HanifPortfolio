export interface ApiEndpoint {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
  authRequired?: boolean;
}

export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  functionalRequirements: string[];
  techChoices: {
    tech: string;
    rationale: string;
  }[];
  architecture: string;
  apiEndpoints?: ApiEndpoint[];
  databaseSchema?: {
    modelName: string;
    fields: { name: string; type: string; notes?: string }[];
  }[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  keyLearnings: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Full-Stack" | "Frontend" | "Backend / API";
  tags: string[];
  image: string;
  year: string;
  featured: boolean;
  summary: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: ProjectCaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "cabbage-grocery",
    slug: "cabbage-grocery-ecommerce",
    title: "Cabbage — Grocery E-Commerce Platform",
    subtitle: "Full-stack grocery marketplace with dynamic cataloging, stateful cart, and RESTful inventory APIs",
    category: "Full-Stack",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
    image: "/images/projects/cabbage.png",
    year: "2025",
    featured: true,
    summary:
      "A complete grocery e-commerce solution enabling customers to discover fresh produce, filter by grocery categories, manage a persistent shopping basket with live quantity increments, and submit orders via a dedicated Express & MongoDB backend.",
    githubUrl: "https://github.com/hanifoo7dev/cabbageProject",
    liveUrl: "https://cabbagee-commerce.vercel.app/",
    metrics: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Data Pipeline", value: "MongoDB + ODM" },
      { label: "UI Response", value: "< 80ms Latency" }
    ],
    caseStudy: {
      overview:
        "Cabbage is a full-stack grocery e-commerce application designed to streamline daily household shopping. It addresses the common pain points of clunky product exploration and sluggish cart interactions by marrying a responsive React frontend with a structured Express and MongoDB REST API.",
      problemStatement:
        "Most local grocery shoppers face disorganized product categories and cumbersome checkout processes on mobile devices. The objective was to build a fluid, mobile-first interface capable of real-time search, instant category filtering, accurate order subtotal calculations, and dependable database persistence for product catalogs and customer orders.",
      functionalRequirements: [
        "Product catalog with keyword search and dynamic category filtering.",
        "Interactive shopping cart with item incrementation, decrementation, and zero-count removal.",
        "Live subtotal, delivery fee calculation, and order summary generation.",
        "Backend RESTful endpoints for querying products, checking inventory, and persisting orders.",
        "Responsive design catering to mobile, tablet, and desktop shoppers."
      ],
      techChoices: [
        {
          tech: "React.js & Tailwind CSS",
          rationale: "Allows predictable component state for the shopping cart and rapid utility styling without CSS bundle bloat."
        },
        {
          tech: "Node.js & Express.js",
          rationale: "Provides a non-blocking asynchronous event loop ideal for handling concurrent product catalog queries and order submissions."
        },
        {
          tech: "MongoDB & Mongoose",
          rationale: "Flexible document model accommodating diverse product attributes (unit sizes, weights, perishable flags) with Mongoose schema validation."
        }
      ],
      architecture:
        "The client application communicates over HTTP/JSON with the Express REST API. The API processes incoming payloads through validation middleware before interacting with MongoDB via Mongoose models. Order calculations and inventory deductions are handled with atomic database updates.",
      apiEndpoints: [
        { method: "GET", path: "/api/products", description: "Fetch all active grocery items with optional search & category query params" },
        { method: "GET", path: "/api/products/:id", description: "Retrieve single product details, stock count, and nutritional info" },
        { method: "POST", path: "/api/orders", description: "Submit customer cart payload, calculate totals, and record new order" },
        { method: "GET", path: "/api/orders/:id", description: "Check order status and itemized delivery confirmation" }
      ],
      databaseSchema: [
        {
          modelName: "Product",
          fields: [
            { name: "title", type: "String", notes: "Required, trimmed, indexed for search" },
            { name: "price", type: "Number", notes: "Required, min: 0" },
            { name: "category", type: "String", notes: "Enum: ['Vegetables', 'Fruits', 'Dairy', 'Bakery', 'Pantry']" },
            { name: "stock", type: "Number", notes: "Default: 0" },
            { name: "imageUrl", type: "String", notes: "Asset URL" }
          ]
        },
        {
          modelName: "Order",
          fields: [
            { name: "customerName", type: "String", notes: "Required" },
            { name: "customerEmail", type: "String", notes: "Validated email string" },
            { name: "items", type: "Array", notes: "Array of [{ product: ObjectId, quantity: Number, unitPrice: Number }]" },
            { name: "totalAmount", type: "Number", notes: "Computed server-side" },
            { name: "status", type: "String", notes: "Enum: ['Pending', 'Confirmed', 'Dispatched', 'Delivered']" }
          ]
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing client-side cart drift when users refresh or navigate pages.",
          solution:
            "Implemented synchronized local state persistence combined with server validation at the checkout boundary to guarantee total pricing integrity."
        },
        {
          challenge: "Maintaining smooth 60fps scrolling on mobile devices with large grocery product grids.",
          solution:
            "Applied CSS containment, optimized responsive image sizes, and streamlined component re-rendering by lifting cart calculations into a memoized context."
        }
      ],
      keyLearnings: [
        "Learned how to model e-commerce cart line-items to preserve historical purchase prices even if product base prices change later.",
        "Deepened mastery of Express routing, status code semantics (201 Created, 400 Bad Request, 404 Not Found), and MongoDB aggregation queries."
      ]
    }
  },
  {
    id: "graphics-design-landing",
    slug: "graphics-design-landing-page",
    title: "Responsive Graphics Design Agency Platform",
    subtitle: "High-performance digital agency landing page with fluid typography and zero layout shift",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vercel", "Performance & SEO"],
    image: "/images/projects/port.png",
    year: "2025",
    featured: true,
    summary:
      "A fast, modern digital creative agency landing page engineered for optimal conversion. Built with responsive layout techniques, fluid typography, subtle micro-interactions, and deployed on Vercel with near-instant load times.",
    liveUrl: "https://web-gd-dusky.vercel.app",
    metrics: [
      { label: "Performance", value: "99+ Lighthouse" },
      { label: "Layout Shift", value: "0.00 CLS" },
      { label: "Responsiveness", value: "320px to 4K" }
    ],
    caseStudy: {
      overview:
        "A commercial landing page for a creative graphics and digital branding agency. The goal was to produce a visually captivating yet ultra-lightweight portfolio showcase that highlights client service tiers, design portfolios, and contact avenues.",
      problemStatement:
        "Many creative agency sites suffer from heavy animation libraries and oversized unoptimized media that frustrate prospective clients on mobile connections. This project proves that high design aesthetic and blistering performance can coexist seamlessly.",
      functionalRequirements: [
        "Fully responsive multi-section layout (Hero, Services, Portfolio Showcase, Testimonials, Inquiry Form).",
        "Accessible navigation with responsive mobile slide-out drawer.",
        "Interactive portfolio filter tabs with zero dependency bloat.",
        "Optimized image loading pipeline with explicit aspect ratios to eliminate Cumulative Layout Shift (CLS)."
      ],
      techChoices: [
        {
          tech: "Tailwind CSS",
          rationale: "Enables consistent design token reuse (colors, spacing scale, typographic hierarchy) while purging all unused styles in production."
        },
        {
          tech: "Vanilla JavaScript (ES6+)",
          rationale: "Keeps bundle size under 15KB total, providing instant interactivity without downloading bulky frontend runtimes."
        },
        {
          tech: "Vercel Edge CDN",
          rationale: "Ensures global caching, automated SSL provisioning, and sub-100ms Time to First Byte (TTFB)."
        }
      ],
      architecture:
        "Static-first architecture leveraging semantic HTML5 tags (<header>, <nav>, <main>, <section>, <article>, <footer>) structured for optimal crawler indexing, keyboard navigation, and fast hydration.",
      challengesAndSolutions: [
        {
          challenge: "Preventing layout shifts during lazy loading of portfolio graphics across unpredictable screen resolutions.",
          solution:
            "Implemented intrinsic CSS aspect-ratio containers and modern responsive srcset attributes to reserve layout geometry prior to asset download."
        },
        {
          challenge: "Crafting modern glassmorphic headers and gradients without compromising mobile battery and GPU performance.",
          solution:
            "Used CSS hardware-accelerated transforms and backdrop-filter with fallback solid borders for low-power mobile devices."
        }
      ],
      keyLearnings: [
        "Gained deep appreciation for web vital optimization and the power of pure CSS utility frameworks for landing page conversions.",
        "Refined accessibility patterns including ARIA expanded states, keyboard focus traps on mobile menus, and semantic heading hierarchies."
      ]
    }
  },
  {
    id: "student-course-api",
    slug: "student-course-management-api",
    title: "Student & Course Management REST API",
    subtitle: "Relational-style MongoDB backend service with Mongoose ObjectId referencing and dynamic population",
    category: "Backend / API",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Postman", "CRUD"],
    image: "/images/projects/eduact.png",
    year: "2025",
    featured: true,
    summary:
      "A database-driven REST API engineered with Node.js and Express to manage academic entities. Features full CRUD operations, course capacity validation, student course enrollment, and Mongoose ObjectId referencing with `.populate()` queries.",
    githubUrl: "https://github.com/hanifoo7dev/cabbageProject",
    metrics: [
      { label: "Data Model", value: "Referenced NoSQL" },
      { label: "Endpoints", value: "10+ REST Routes" },
      { label: "Validation", value: "Schema & Business Guards" }
    ],
    caseStudy: {
      overview:
        "An educational management backend service modeling academic institutions. It provides structured REST endpoints allowing administrators to create academic courses, register students, and enroll students in available courses while preventing schedule collisions and enrollment over-capacity.",
      problemStatement:
        "Relational relationships in document databases often lead junior developers into deeply nested embedded arrays that quickly exceed document size limits or duplicate data inconsistently. This project implements clean normalization using Mongoose ObjectId references.",
      functionalRequirements: [
        "Create, read, update, and delete courses with credits, department, and seat capacity limits.",
        "Student registration with email uniqueness validation and contact profiles.",
        "Atomic enrollment endpoint that links course ObjectIds to the student record and validates prerequisites.",
        "Query student details with dynamic Mongoose `.populate('enrolledCourses')` returning resolved course metadata."
      ],
      techChoices: [
        {
          tech: "Node.js & Express.js",
          rationale: "Lightweight, unopinionated routing engine allowing modular separation between routes, controllers, and database models."
        },
        {
          tech: "Mongoose ODM",
          rationale: "Enables schema-level casting, reference definitions (`ref: 'Course'`), and automatic population of related documents."
        },
        {
          tech: "Postman",
          rationale: "Used for comprehensive integration testing, automated status code assertions, and request payload debugging."
        }
      ],
      architecture:
        "Layered architectural pattern: Router layer receives requests -> Validation middleware inspects body -> Controller executes business logic -> Mongoose Model queries MongoDB -> Centralized Error Handler formats unified JSON responses.",
      apiEndpoints: [
        { method: "GET", path: "/api/courses", description: "Retrieve all courses with pagination and department filters" },
        { method: "POST", path: "/api/courses", description: "Create a new course offering (code, title, credits, capacity)" },
        { method: "POST", path: "/api/students", description: "Register a new student with unique student ID & email" },
        { method: "POST", path: "/api/students/:id/enroll", description: "Enroll student in course (checks capacity & duplicate enrollment)" },
        { method: "GET", path: "/api/students/:id", description: "Get student profile with populated enrolledCourses array" },
        { method: "DELETE", path: "/api/students/:id/courses/:courseId", description: "Drop course and release student seat" }
      ],
      databaseSchema: [
        {
          modelName: "Course",
          fields: [
            { name: "courseCode", type: "String", notes: "Unique, uppercase (e.g. CSE-201)" },
            { name: "title", type: "String", notes: "Course name" },
            { name: "credits", type: "Number", notes: "1 to 4" },
            { name: "capacity", type: "Number", notes: "Max enrolled students" },
            { name: "enrolledCount", type: "Number", notes: "Current active enrollments" }
          ]
        },
        {
          modelName: "Student",
          fields: [
            { name: "studentId", type: "String", notes: "Unique registration code" },
            { name: "fullName", type: "String", notes: "Student full legal name" },
            { name: "email", type: "String", notes: "Unique index, email validation" },
            { name: "enrolledCourses", type: "[Schema.Types.ObjectId]", notes: "References 'Course' collection" }
          ]
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Avoiding duplicate course enrollment when concurrent requests are fired.",
          solution:
            "Employed MongoDB `$addToSet` operator and conditional query checks to guarantee idempotency and ensure students can only be enrolled once per course."
        },
        {
          challenge: "Preventing circular reference leaks and payload bloat when populating deep relations.",
          solution:
            "Explicitly projected needed fields via `.populate({ path: 'enrolledCourses', select: 'title courseCode credits' })`."
        }
      ],
      keyLearnings: [
        "Mastered the trade-offs between embedded document patterns and referenced ObjectId patterns in MongoDB.",
        "Built robust centralized error-handling middleware that catches CastErrors, Mongo duplicate key errors (code 11000), and validation failures."
      ]
    }
  },
  {
    id: "auth-admin-dashboard",
    slug: "jwt-auth-admin-dashboard",
    title: "Secure JWT Authentication & Admin Portal",
    subtitle: "Stateless JSON Web Token auth pipeline with password hashing, protected routes, and role guards",
    category: "Full-Stack",
    tags: ["React.js", "Node.js", "Express.js", "JWT", "bcryptjs", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/roiser.png",
    year: "2025",
    featured: false,
    summary:
      "A secure authentication foundation and administrative dashboard system. Implements stateless JWT authentication, password hashing with bcrypt, protected API middleware, role-based authorization (Admin vs Member), and dynamic user management tables.",
    githubUrl: "https://github.com/hanifoo7dev/cabbageProject",
    metrics: [
      { label: "Security", value: "JWT + Salted Bcrypt" },
      { label: "Access Control", value: "Role-Based RBAC" },
      { label: "Session State", value: "Stateless Bearer" }
    ],
    caseStudy: {
      overview:
        "A foundational authentication and administrative portal built to secure full-stack web applications. Provides complete user lifecycle management from registration and login to session verification, password resets, and restricted admin capabilities.",
      problemStatement:
        "Improper password storage, exposed credentials, and lack of role verification are among the most common vulnerabilities in web applications. The goal was to build a reusable, security-conscious authentication pipeline adhering to modern standards.",
      functionalRequirements: [
        "User registration with input sanitization and password complexity checks.",
        "Secure password hashing utilizing bcryptjs with 10 salt rounds.",
        "Stateless JWT generation on login with configurable expiration times.",
        "Express middleware to verify Authorization Bearer tokens and attach user identity to request objects.",
        "Role-based authorization middleware restricting admin endpoints to users with 'admin' role.",
        "Frontend protected route wrapper in React redirecting unauthenticated visitors to login."
      ],
      techChoices: [
        {
          tech: "JSON Web Tokens (JWT)",
          rationale: "Stateless authentication that eliminates server-side session memory storage and scales effortlessly."
        },
        {
          tech: "bcryptjs",
          rationale: "Adaptive hashing algorithm with cryptographic salting to neutralize rainbow table and brute-force attacks."
        },
        {
          tech: "React Context & Protected Routes",
          rationale: "Centralizes user authentication state, login/logout handlers, and conditional route guards."
        }
      ],
      architecture:
        "The client stores the token and attaches it to request headers (`Authorization: Bearer <token>`). Express middleware verifies the token using the secret key. If valid, `req.user` is populated and handed to the controller; otherwise, a 401 Unauthorized response is dispatched.",
      challengesAndSolutions: [
        {
          challenge: "Securing routes against tampering without database round-trips on every simple read request.",
          solution:
            "Embedded essential role claims within the signed JWT payload, verifying cryptographic validity in memory and reserving full database reads for sensitive operations."
        }
      ],
      keyLearnings: [
        "Understood the operational nuances of token lifecycle, expiration windows, and defending against common attacks (XSS, CSRF).",
        "Created reusable higher-order components and custom React hooks (`useAuth`) for clean frontend state consumption."
      ]
    }
  },
  {
    id: "orebi-ecommerce",
    slug: "orebi-ecommerce-storefront",
    title: "Orebi E-Commerce Storefront",
    subtitle: "Modern online retail storefront with interactive product cataloging and responsive shopping workflows",
    category: "Full-Stack",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs", "State Management"],
    image: "/images/projects/orebi.png",
    year: "2024",
    featured: false,
    summary:
      "A modern web application managing online retail operations, including product cataloging, interactive category browsing, customer carts, and responsive UI for a smooth shopping experience.",
    githubUrl: "https://github.com/hanifoo7dev/cabbageProject",
    caseStudy: {
      overview:
        "An expansive retail e-commerce application focusing on brand presentation, multi-category navigation, and responsive shopping cart interactions.",
      problemStatement:
        "Retail stores require intuitive browsing and seamless transitions between product detail pages and checkout queues to prevent customer churn.",
      functionalRequirements: [
        "Dynamic product filtering by brand, price, and category.",
        "Persistent cart storage across browser sessions.",
        "Interactive product quick-view modals and image galleries."
      ],
      techChoices: [
        { tech: "React.js", rationale: "Component reusability across catalog and checkout views." },
        { tech: "Tailwind CSS", rationale: "Consistent design tokens and rapid responsive layout creation." }
      ],
      architecture: "Component-driven React architecture with centralized cart state management.",
      challengesAndSolutions: [
        {
          challenge: "Handling complex responsive layouts on older mobile browsers.",
          solution: "Standardized flexbox and CSS grid rules with appropriate fallbacks."
        }
      ],
      keyLearnings: ["Refined state synchronization techniques across multi-page web applications."]
    }
  },
  {
    id: "creative-it-portal",
    slug: "creative-it-department-portal",
    title: "Creative IT Web & Software Department Hub",
    subtitle: "Institutional departmental portal featuring course curriculum access and student enrollment workflows",
    category: "Frontend",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "API Integration"],
    image: "/images/projects/creative.png",
    year: "2024",
    featured: false,
    summary:
      "A dedicated web platform for Creative IT's Web & Software department, featuring a streamlined student enrollment flow, curriculum outlines, and instructor profiles.",
    liveUrl: "https://mern.creativeitinstitute.com/",
    caseStudy: {
      overview:
        "A departmental portal serving prospective students and enrolled learners seeking technical course information and admission registration.",
      problemStatement:
        "Students needed an accessible, fast-loading destination to review syllabus modules, project outcomes, and admission guidelines.",
      functionalRequirements: [
        "Curriculum overview accordion and module details.",
        "Interactive inquiry and enrollment registration form.",
        "Departmental project showcase."
      ],
      techChoices: [
        { tech: "React.js", rationale: "Dynamic rendering of syllabus modules and interactive FAQ accordions." },
        { tech: "Tailwind CSS", rationale: "Clean corporate aesthetic conforming to institute branding." }
      ],
      architecture: "Modular UI architecture integrated with external API services for inquiries.",
      challengesAndSolutions: [
        {
          challenge: "Formatting extensive technical curriculum into easily digestible chunks on mobile screens.",
          solution: "Designed expandable tabbed accordions with clear typographic hierarchy."
        }
      ],
      keyLearnings: ["Gained practical experience presenting dense academic information clearly for mobile users."]
    }
  }
];
