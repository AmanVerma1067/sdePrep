export const resumeData = {
  name: "Aman Verma",
  location: "Noida, Uttar Pradesh, India",
  phone: "+91-9451842598",
  email: "amanverma1067@gmail.com",
  linkedin: "https://linkedin.com/in/amanverma1067",
  github: "https://github.com/amanverma1067",
  website: "https://aman1067.xyz",
  education: {
    institution: "Jaypee Institute of Information Technology",
    location: "Noida, India",
    degree: "B.Tech, Electronics and Communication Engineering",
    cgpa: "8.6/10",
    period: "Aug 2023 – May 2027"
  },
  roles: {
    sde: {
      title: "Software Development Engineer",
      subtitle: "Full-Stack, Distributed Backends, Real-Time Systems & Systems Design",
      defenseUrl: "/AmanVerma-SDE-Interview-Defense.html",
      defenseRoadmapId: "sde-defense",
      skills: {
        languages: ["C", "C++", "Python", "PHP", "JavaScript", "TypeScript", "SQL"],
        coreCS: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Object-Oriented Programming", "Computer Networks", "System Design"],
        backend: ["Node.js", "Express.js", "Flask", "FastAPI", "RESTful APIs", "WebSocket", "JWT Authentication"],
        frontendMobile: ["React.js", "Next.js", "Flutter", "Streamlit", "Tailwind CSS", "HTML5", "CSS3"],
        databasesCloud: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Azure", "Docker", "Git", "Linux", "CI/CD", "Postman"],
        aiml: ["Machine Learning", "NLP", "Deep Learning", "LangChain", "Hugging Face", "RAG", "PyTorch", "TensorFlow"]
      },
      projectIds: ["chessify", "studysync", "sahyatri-sde"]
    },
    mldataeng: {
      title: "Machine Learning & Data Engineer",
      subtitle: "NLP, Computer Vision, LLM State Machines, Vector Search & Time-Series ETL",
      defenseUrl: "/AmanVerma-ML-DataEng-Interview-Defense.html",
      defenseRoadmapId: "ml-dataeng-defense",
      skills: {
        languages: ["Python", "SQL (PostgreSQL, MySQL)", "C++", "C", "JavaScript", "TypeScript", "Bash"],
        mlDeepLearning: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "CNNs", "ResNet-50", "Transfer Learning", "Fine-Tuning", "Feature Engineering", "Model Evaluation"],
        nlpVisionLLM: ["spaCy (custom NER)", "Hugging Face", "OpenCV", "YOLOv5", "Object Detection", "LangChain", "CrewAI", "RAG", "Embeddings & Vector Search", "Prompt Engineering", "Gemini API"],
        dataEngBackend: ["Data Modeling", "Schema Design", "Indexing & Query Optimization", "ETL Pipelines", "Time-Series Ingestion", "MongoDB Atlas", "FastAPI", "Flask", "Node.js", "REST APIs", "Streamlit"],
        toolsCoreCS: ["Docker", "Git", "Git LFS", "Linux", "CI/CD", "AWS", "Azure", "Jupyter", "Postman", "Data Structures & Algorithms", "DBMS", "Operating Systems", "System Design"]
      },
      projectIds: ["nutrivision", "recrutai", "sahyatri-ml"]
    }
  },
  skills: {
    languages: ["Python", "SQL (PostgreSQL, MySQL)", "C++", "C", "PHP", "JavaScript", "TypeScript", "Bash"],
    coreCS: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Object-Oriented Programming", "Computer Networks", "System Design"],
    mlDeepLearning: ["PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "CNNs", "ResNet-50", "Transfer Learning", "Fine-Tuning", "Feature Engineering", "Model Evaluation"],
    nlpVisionLLM: ["spaCy (custom NER)", "Hugging Face", "OpenCV", "YOLOv5", "Object Detection", "LangChain", "CrewAI", "RAG", "Embeddings & Vector Search", "Prompt Engineering", "Gemini API"],
    backendDataEng: ["Data Modeling", "Schema Design", "Indexing & Query Optimization", "ETL Pipelines", "Time-Series Ingestion", "MongoDB Atlas", "FastAPI", "Flask", "Node.js", "Express.js", "RESTful APIs", "WebSocket", "JWT Authentication", "Streamlit"],
    frontendMobile: ["React.js", "Next.js", "Flutter", "Streamlit", "Tailwind CSS", "HTML5", "CSS3"],
    cloudDevOpsTools: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Azure", "Docker", "Git", "Git LFS", "Linux", "CI/CD", "Postman", "Jupyter"]
  },
  experience: [
    {
      company: "DigiFlute Media Lab",
      role: "Backend Developer Intern",
      period: "May 2026 – Jul 2026",
      location: "Remote",
      points: [
        "Engineered 20+ RESTful API endpoints in PHP with MongoDB Atlas for Packspec, designing document schemas and query patterns for multi-tenant data isolation in a cross-functional Agile team of 8.",
        "Implemented JWT authentication and RBAC across 5 tenant tiers with atomic transactions and plan-based quota enforcement to prevent cross-tenant data leakage.",
        "Designed revision versioning and workflow-state transitions with cascading soft-deletes so record history stays auditable; validated consistency with Postman and PHPUnit."
      ],
      defenseJumps: [
        { label: "Packspec Architecture Notes", roadmap: "packspec", hash: "#overview" },
        { label: "SDE Defense Rehearsal", roadmap: "sde-defense", hash: "#exp1" },
        { label: "ML/DE Defense Rehearsal", roadmap: "ml-dataeng-defense", hash: "#exp1" }
      ]
    }
  ],
  projects: [
    {
      id: "nutrivision",
      roleTag: "ML & Data Eng",
      title: "Nutri-Vision AI",
      subtitle: "Nutrition Inference Pipeline",
      tech: "PyTorch, spaCy, FastAPI, ResNet-50, Git LFS, USDA API",
      github: "https://github.com/amanverma1067",
      points: [
        "Trained a custom spaCy NER model and paired it with a rule-based quantity parser in a hybrid extractor, resolving free-form meal text against the USDA FoodData Central database with confidence scoring.",
        "Fine-tuned a ResNet-50 food classifier in PyTorch via transfer learning, versioning weights with Git LFS and serving both models behind a FastAPI inference API with deterministic fallbacks."
      ],
      defenseJumps: [
        { label: "Nutri-Vision ML Defense", roadmap: "ml-dataeng-defense", hash: "#nv1" },
        { label: "FastAPI Backend Notes", roadmap: "flask-fastapi", hash: "#fastapi-overview" }
      ]
    },
    {
      id: "recrutai",
      roleTag: "ML & LLM Systems",
      title: "RecrutAI",
      subtitle: "LLM Technical Screening Engine",
      tech: "Gemini 2.5 Flash, Prompt Chaining, TypeScript, Next.js",
      github: "https://github.com/amanverma1067",
      points: [
        "Orchestrated an adaptive prompt-chaining state machine on Gemini 2.5 Flash scoring each response across 5 rubric dimensions to branch the interview at runtime instead of replaying a fixed script.",
        "Hardened the inference path with 6s timeouts, exponential-backoff retries, and regex/template fallbacks, and exposed the score matrix and LLM branching log in a recruiter audit dashboard."
      ],
      defenseJumps: [
        { label: "RecrutAI LLM Defense", roadmap: "ml-dataeng-defense", hash: "#ra1" },
        { label: "AI/ML RAG & LLM Notes", roadmap: "aiml-stack", hash: "#rag-llm" }
      ]
    },
    {
      id: "chessify",
      roleTag: "SDE & Systems",
      title: "Chessify AI",
      subtitle: "Real-Time Multiplayer Chess",
      tech: "Next.js, Node.js, Socket.IO, Flask, Stockfish ELO 1800, Minimax",
      github: "https://github.com/amanverma1067",
      points: [
        "Engineered a room-based real-time multiplayer server on Node.js & Socket.IO with player/spectator roles, board replay for late joiners, disconnect handling, and server-side move validation blocking tampered clients.",
        "Implemented a decoupled Flask AI microservice using a Polyglot opening book and the Stockfish engine (ELO 1800), degrading to a custom Minimax with alpha-beta pruning (depth 3) when the engine is unavailable."
      ],
      defenseJumps: [
        { label: "Chessify SDE Defense", roadmap: "sde-defense", hash: "#ch1" },
        { label: "Flask & Minimax Notes", roadmap: "flask-fastapi", hash: "#chessify" },
        { label: "Next.js Frontend Notes", roadmap: "react-nextjs", hash: "#repo-overview" }
      ]
    },
    {
      id: "studysync",
      roleTag: "SDE & Mobile",
      title: "StudySync",
      subtitle: "Offline-First Timetable App",
      tech: "Flutter, Express.js, MongoDB, JWT",
      github: "https://github.com/amanverma1067",
      points: [
        "Shipped a cross-platform timetable and academic-calendar app to Android, iOS, and web from one Flutter codebase, across 3 tagged releases, in daily use by students at JIIT.",
        "Architected an offline-first data layer rendering the full weekly schedule from local cache with zero network, backed by an Express + MongoDB REST API and an authenticated admin panel for centralized updates."
      ],
      defenseJumps: [
        { label: "StudySync SDE Defense", roadmap: "sde-defense", hash: "#ss1" },
        { label: "Express Backend Notes", roadmap: "node-express", hash: "#study-overview" },
        { label: "Flutter Mobile Notes", roadmap: "flutter", hash: "#ss-overview" }
      ]
    },
    {
      id: "sahyatri-sde",
      roleTag: "SDE / Full-Stack IoT",
      title: "SahYatri (SDE Track)",
      subtitle: "IoT Public Transport Analytics",
      tech: "IoT, YOLOv5, Node.js, PostgreSQL, React.js, Flutter",
      github: "https://github.com/amanverma1067",
      points: [
        "Ran a YOLOv5n model on-device on a Raspberry Pi 4 at 15 FPS with adaptive thresholding, counting passengers at the edge so no video frame ever leaves the vehicle.",
        "Constructed the Node.js & PostgreSQL time-series backend ingesting occupancy and GPS telemetry, serving load history to a React.js dashboard and Flutter rider app; delivered within a 4-person team."
      ],
      defenseJumps: [
        { label: "SahYatri SDE Defense", roadmap: "sde-defense", hash: "#sy1" },
        { label: "PostgreSQL Time-Series Notes", roadmap: "databases-cloud", hash: "#sahyatri-choice" }
      ]
    },
    {
      id: "sahyatri-ml",
      roleTag: "ML & Computer Vision",
      title: "SahYatri (ML Track)",
      subtitle: "Edge CV & Transit Telemetry",
      tech: "YOLOv5, Raspberry Pi 4, PostgreSQL, Node.js/Express, React",
      github: "https://github.com/amanverma1067",
      points: [
        "Deployed YOLOv5n on a Raspberry Pi 4 at 15 FPS with adaptive thresholding, computing occupancy density on-device so raw video never leaves the vehicle.",
        "Streamed occupancy and GPS telemetry into a PostgreSQL time-series store behind a Node.js/Express API, feeding a React analytics dashboard; delivered within a 4-person team."
      ],
      defenseJumps: [
        { label: "SahYatri ML Defense", roadmap: "ml-dataeng-defense", hash: "#sy1" },
        { label: "AI/ML CV & YOLOv5 Notes", roadmap: "aiml-stack", hash: "#sy-overview" }
      ]
    }
  ],
  achievements: [
    {
      type: "hackathon",
      title: "1st Place, BitBox 5.0 Hackathon (Google Developer Groups)",
      desc: "Won for SahYatri, an IoT edge analytics and public transit telemetry pipeline powered by Computer Vision and full-stack technologies.",
      badge: "🏆 1st Place (GDG)",
      jump: { roadmap: "sde-defense", hash: "#ach2" }
    },
    {
      type: "hackathon",
      title: "Finalist, Innovate 3.0 Hackathon (Jan 2026)",
      desc: "Selected among top teams for Drive-Sure, an AI/IoT vehicle telematics system processing live sensor streams for driver safety risk scoring.",
      badge: "🏅 Finalist",
      jump: { roadmap: "sde-defense", hash: "#ach2" }
    },
    {
      type: "dsa",
      title: "LeetCode Knight (Peak Rating: 2094)",
      desc: "Solved 1,000+ Data Structures & Algorithms problems across LeetCode, Codeforces, and GeeksforGeeks with a 250-day consecutive algorithmic coding streak.",
      badge: "⚔️ Knight (2094)",
      jump: { roadmap: "sde-defense", hash: "#ach1" }
    },
    {
      type: "agent",
      title: "Independent ML Engineering: RAG Multi-Agent PDF Query Engine",
      desc: "Designed and deployed a RAG-based PDF Query Engine on Hugging Face Spaces using LangChain and CrewAI multi-agent frameworks to automate document workflows.",
      badge: "🤖 RAG & CrewAI",
      jump: { roadmap: "ml-dataeng-defense", hash: "#cross3" }
    },
    {
      type: "certification",
      title: "ML & Generative AI Certifications (Udemy)",
      desc: "Completed Data Science, Machine Learning, Deep Learning & NLP Bootcamp (Mar 2026) and Generative AI with LangChain & Hugging Face (Apr 2026).",
      badge: "📜 Certifications",
      jump: { roadmap: "ml-dataeng-defense", hash: "#ach1" }
    },
    {
      type: "academic",
      title: "Academic Distinction (JIIT)",
      desc: "Awarded Letter of Appreciation for outstanding academic performance across core engineering coursework (8.6 CGPA).",
      badge: "🎓 8.6 CGPA Distinction",
      jump: { roadmap: "sde-defense", hash: "#cross1" }
    }
  ]
};
