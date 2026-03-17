export const siteConfig = {
  name: "Nagul Kanna T",
  title: "Software | Fullstack engineer",
  description: "Portfolio website of Nagul Kanna T",
  accentColor: "#0d9488",
  social: {
    email: "nagulk697@gmail.com",
    linkedin: "https://linkedin.com/in/nagul25",
    github: "https://github.com/Nagul75",
  },
  aboutMe:
    "Software Engineer building scalable web applications and high-performance systems, with experience across frontend, backend, and modern C++.",
  skills: ["Javascript", "React", "Node.js", "Python", "C++", "Django"],
  projects: [
    {
      name: "Cheapskate",
      description:
        "A production-style, full-stack personal finance application enabling users to securely track accounts, transactions, budgets, and spending insights with real-time analytics.",
      skills: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Jira"],
      link: "https://cheapskate.in/",
      sections: [
      {
        bullets: [
          "Designed and deployed a full-stack application on AWS (EC2 Docker backend, S3 frontend, RDS PostgreSQL)",
          "Built 25+ REST APIs with JWT auth (access/refresh), and tiered rate limiting for security",
          "Modeled relational schema with Prisma and implemented transaction-safe balance reconciliation",
          "Developed data-heavy dashboard with aggregation endpoints (category/time-series analytics)",
          "Achieved 100/100 Lighthouse (landing) and 96/100 (dashboard); reduced bundle size 1.7MB → <500KB (~70%)",
          "Built responsive UI with React, shadcn/ui, React Query, and Recharts with optimized UX (updates, skeletons, filtering)",
          "Implemented end-to-end validation (Zod) and multi-currency support for consistent financial tracking",
        ],
      },
    ]
    },

    {
      name: "User-Space TCP Stack",
      description: "A user-space reimplementation of core TCP protocol mechanisms in C++, designed for high concurrency and correctness. The project abstracts low-level C networking APIs behind safe RAII constructs while supporting large-scale concurrent connections.",
      skills: ["C++", "Linux", "POSIX Sockets", "epoll", "RAII"],
      link: "https://github.com/Nagul75/EasyTCP",
      sections: [
      {
        bullets: [
          "Designed RAII wrappers around low-level C APIs (Socket, epoll, file descriptors) to ensure exception-safe resource management and zero leaks.",
          "Built a Connection abstraction encapsulating protocol state, buffers, and event handling logic.",
          "Implemented a scalable event-driven architecture using epoll, efficiently handling 15,000+ simultaneous concurrent connections.",
        ],
      },
    ]
    },
  ],
  experience: [
    {
      company: "Defsecone Consulting and Technologies",
      title: "Fullstack Intern",
      dateRange: "April - October 2025",
      sections: [
      {
        heading: "Security Compliance Monitoring Dashboard",
        bullets: [
          "Built a full-stack compliance dashboard using React, Django, and PostgreSQL.",
          "Implemented Excel-based data ingestion mapping 100+ security controls to NIST and IEC 62443.",
          "Tracked and visualized compliance maturity levels across controls.",
        ],
      },
      {
        heading: "Configuration Audit / Vulnerability Assessment Website",
        bullets: [
          "Architected a Python automation engine bundling 300+ Bash audit scripts for 5 Linux distros.",
          "Reduced audit execution time by 99% (from ~8 hours to under 2 minutes).",
          "Mentored a 4-person intern team and led 30+ code reviews.",
        ],
      },
    ],
    },
    {
      company: "Kaartech",
      title: "Intern",
      dateRange: "February 2026 - Present",
      sections: [
      {
        heading: "SAP consultant training",
        bullets: [
        ],
      },
    ],
    },
  ],
  education: [
    {
      school: "S.A Engineering College",
      degree: "B.E CSE",
      dateRange: "2022 - 2026",
      achievements: [
        "CGPA - 8.68",
      ],
    },
    {
      school: "Shree Niketan",
      degree: "SSLC and HLC",
      dateRange: "2020 - 2022",
      achievements: [
        "X - 88.2%",
        "XII - 82.8%"
      ],
    },
  ],
};
