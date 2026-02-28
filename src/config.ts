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
    
    {
      name: "Blog",
      description:
        " Architected and built a production-style full-stack web application using React and Node.js, focusing on backend development.",
      skills: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Jira"],
      link: "https://github.com/Nagul75/BlogBackend-ts",
      sections: [
      {
        bullets: [
          "Designed and developed RESTful APIs backed by PostgreSQL to manage users, blog posts, comments, and vote tracking with data integrity constraints.",
          "Implemented responsive UI with light/dark mode and adaptive layouts using shadcn/ui.",          
        ],
      },
    ]
    },

    {
      name: "Cheapskate (In Progress)",
      description:
        "A production-style, full-stack personal finance application enabling users to securely track accounts, transactions, budgets, and spending insights with real-time analytics.",
      skills: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Jira"],
      link: "https://github.com/Nagul75/Cheapskate-backend",
      sections: [
      {
        bullets: [
          "Architected a secure, token-based authentication system using JWT (access + refresh tokens).",
          "Designed and implemented a normalized PostgreSQL schema for users, accounts, transactions, categories, and budgets, with balance reconciliation handled at the API layer.",
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
        heading: "Configuration Audit Website",
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
        "SSLC - 88.2%",
        "HLC - 82.8%"
      ],
    },
  ],
};
