export const resumeData = {
  name: "Aman Verma",
  skills: {
    languages: ["C", "C++", "Python", "PHP", "JavaScript", "TypeScript", "SQL"],
    coreCS: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Object-Oriented Programming", "Computer Networks", "System Design"],
    aiml: ["Machine Learning", "NLP", "Deep Learning", "LangChain", "Hugging Face", "RAG", "PyTorch", "TensorFlow"],
    frontendMobile: ["React.js", "Next.js", "Flutter", "Streamlit", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "Flask", "FastAPI", "REST", "WebSocket", "JWT", "socket.io"],
    dbCloudTools: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Azure", "Docker", "Git", "Linux", "CI/CD", "Postman"]
  },
  experience: [
    {
      company: "DigiFlute Media Lab",
      role: "Backend Developer Intern",
      period: "Dec 2024 – June 2025",
      points: [
        "Engineered 66 production API endpoints for a multi-tenant SaaS packaging-spec platform using PHP & MongoDB Atlas, enabling dynamic workflows and role-based access control (Super Admin, Creator, Verifier, Approver).",
        "Developed a document-native snapshot versioning engine to track specification updates, reducing manual verification reconciliation effort by 65%.",
        "Implemented multi-document ACID transactions with WiredTiger storage engine to prevent data leaks across client workspaces.",
        "Scaled system to handle concurrent workflow modifications by structuring query execution via MongoDB index coverage."
      ]
    }
  ],
  projects: [
    {
      title: "Chessify AI",
      tech: "Next.js, Node.js, Express.js, Socket.io, Flask, Python",
      points: [
        "Developed a multiplayer chess platform with real-time room-based board synchronization and spectator mode supporting 100+ concurrent players.",
        "Built a custom minimax game engine with alpha-beta pruning (depth 3) and integrated Python Flask-based Stockfish ELO 1800 engine as a fallback."
      ]
    },
    {
      title: "StudySync",
      tech: "Flutter, Express.js, MongoDB, JWT",
      points: [
        "Built a cross-platform academic timetable application utilizing offline-first local caching and seamless server synchronization.",
        "Created an authenticated admin panel for centralized timetable updates, serving sub-second updates to active student devices."
      ]
    },
    {
      title: "SahYatri",
      tech: "React.js, FastAPI, YOLOv5n, PostgreSQL, Raspberry Pi 4",
      points: [
        "Deployed a passenger count detection pipeline inside public transit using a Raspberry Pi camera module, achieving 90%+ occupancy accuracy.",
        "Managed time-series data using PostgreSQL pooling to record transit history, streaming live occupancy analytics to an operator dashboard."
      ]
    }
  ],
  achievements: [
    "1st Place - BitBox 5.0 (SahYatri): Developed real-time hardware-software solution for transit analytics.",
    "Finalist - Innovate 3.0 (Drive-Sure): Created smart system for vehicle health monitoring.",
    "LeetCode Knight (Rating: 2036): Solved 1000+ problems, active 250+ days consecutive algorithmic coding streak.",
    "PDF Query Engine: Built a multi-agent retrieval system (LangChain, CrewAI) to synthesize answers from complex documents.",
    "Bootcamps: Completed Udemy courses in Data Science, Machine Learning, Deep Learning, NLP, and Generative AI.",
    "Academic: Received JIIT Letter of Appreciation for academic performance in core engineering subjects."
  ]
};

export const resumeRoadmap = {
  id: "resume-mastery",
  title: "Resume Content Mastery",
  accent: "#10b981",
  icon: "📄",
  subjects: [
    {
      name: "Experience & Internships",
      phases: [
        {
          title: "DigiFlute Media Lab (Backend Developer Intern)",
          topics: [
            { name: "SaaS API Endpoints (PHP & MongoDB)", desc: "Explain how you engineered 66 RESTful API endpoints, connected PHP to MongoDB Atlas, and handled workspace queries.", links: [] },
            { name: "Snapshot Versioning Engine", desc: "How did you build a document-native versioning engine to track packaging spec updates? Discuss reducing reconciliation effort by 65%.", links: [] },
            { name: "Multi-document ACID Transactions", desc: "Explain the implementation of WiredTiger multi-document transactions to prevent cross-tenant data leaks.", links: [] },
            { name: "Query Optimization & Indexing", desc: "How did you structure MongoDB indexes to cover queries and handle concurrent workflow updates?", links: [] }
          ]
        }
      ]
    },
    {
      name: "Core Projects Mastery",
      phases: [
        {
          title: "Chessify AI (Intelligent Chess Platform)",
          topics: [
            { name: "Real-time Room Synchronization", desc: "Explain the Socket.io setup for real-time room-based board synchronization and spectator mode supporting 100+ concurrent players.", links: [] },
            { name: "Minimax Engine & Alpha-Beta Pruning", desc: "Explain how your custom depth 3 minimax search, alpha-beta cutoffs, and transposition tables are implemented.", links: [] },
            { name: "Stockfish ELO 1800 & Flask API", desc: "How does the Python Flask server expose the Stockfish subprocess API, and how is the fallback chain structured in the Next.js API route?", links: [] }
          ]
        },
        {
          title: "StudySync (Academic Timetable Application)",
          topics: [
            { name: "Offline-First Flutter Sync", desc: "Explain the offline-first caching mechanism and how local data is reconciled with the Express server.", links: [] },
            { name: "Authenticated Admin Portal", desc: "Discuss the JWT-protected Express.js admin endpoints for pushing timetable modifications.", links: [] }
          ]
        },
        {
          title: "SahYatri (Public Transit Analytics)",
          topics: [
            { name: "YOLOv5n Passenger Detection", desc: "Explain how the Raspberry Pi 4 camera captures frames, POSTs them to the FastAPI service, and achieves 90%+ occupancy count accuracy.", links: [] },
            { name: "PostgreSQL Pooling & Time-Series Data", desc: "Discuss time-series database design and connection pooling to record high-frequency transit occupancy logs.", links: [] }
          ]
        }
      ]
    },
    {
      name: "Technical Skills Deep Dive",
      phases: [
        {
          title: "Technical Stack & Core CS",
          topics: [
            { name: "Languages & Core CS", desc: "Languages (C, C++, Python, PHP, JS, TS, SQL) and Core CS (DSA, OS, DBMS, OOP, Computer Networks, System Design).", links: [] },
            { name: "AI/ML Stack", desc: "Machine Learning, NLP, Deep Learning, LangChain, Hugging Face, RAG, PyTorch, TensorFlow.", links: [] },
            { name: "Web & DevOps Tools", desc: "Web (React, Next.js, Flutter, Node.js, Express, Flask, FastAPI) and Cloud/Tools (PostgreSQL, MongoDB, AWS, Azure, Docker, CI/CD, Git, Postman).", links: [] }
          ]
        }
      ]
    },
    {
      name: "Achievements & Core Competencies",
      phases: [
        {
          title: "Hackathons & Problem Solving",
          topics: [
            { name: "BitBox 5.0 (1st Place) & Innovate 3.0", desc: "Details of SahYatri (real-time transit analytics hardware-software solution) and Drive-Sure (vehicle health monitor).", links: [] },
            { name: "LeetCode Knight (2036 Rating)", desc: "Be prepared to explain your problem-solving approaches, 1000+ solved problems, and 250+ days coding streak.", links: [] },
            { name: "PDF Query Engine (Multi-Agent RAG)", desc: "How did you design a multi-agent LangChain/CrewAI system to retrieve and synthesize answers from complex PDFs?", links: [] }
          ]
        }
      ]
    }
  ]
};
