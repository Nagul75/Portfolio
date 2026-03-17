export const siteConfig = {
  name: "Nagul Kanna T",
  title: "Software | Fullstack engineer",
  description: "Portfolio website of Nagul Kanna T",
  accentColor: "#db2777",
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
          "Designed and deployed a full-stack personal finance tracking platform on AWS using EC2 (Dockerized Node.js backend), S3 (React frontend), and RDS (PostgreSQL)",
          "Modeled relational database schema (users, accounts, transactions, budgets, tokens) using Prisma ORM, ensuring data integrity and scalability",
          "Built 25+ RESTful APIs with JWT-based authentication (access + refresh tokens) and secure authorization controls",
          "Designed and enforced tiered API rate limiting (stricter for auth routes) to prevent abuse, protect system resources, and improve backend stability under load",
          "Implemented transaction-safe balance reconciliation logic to maintain consistency across financial operations",
          "Developed a data-intensive dashboard with aggregation endpoints",
          "Achieved 100/100 Lighthouse performance score on landing page and 96/100 on dashboard through optimization strategies",
          "Reduced frontend bundle size from 1.7MB → <500KB (~70% reduction) via Vite optimization and code splitting",
          "Built responsive UI with React + shadcn/ui, including charts (Recharts), forms, and state management with React Query",
          "Designed system to support multi-currency transactions, enabling users to manage accounts in different currencies with consistent data modeling",
          "Implemented robust client-side + server-side validation using Zod and react-hook-form",
          "Optimized UX with optimistic updates, skeleton loaders, and pagination/filtering for large datasets",
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
