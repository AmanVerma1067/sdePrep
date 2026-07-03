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
            { name: "PHP & MongoDB Integration", desc: "Explain how you engineered 20+ RESTful API endpoints, connected PHP to MongoDB, and handled BSON objects.", links: [] },
            { name: "Multi-tenant & Middleware Architecture", desc: "How did you structure the route architecture? Explain the multi-tenant, company-scoped data model, workspace provisioning, and plan-based quota enforcement.", links: [] },
            { name: "JWT Auth & RBAC", desc: "Explain the implementation of JWT authentication, role-based access control, and invite-based onboarding.", links: [] },
            { name: "Complex CRUD & Workflow States", desc: "How did you build CRUD APIs with workflow-state transitions, revision versioning, and cascading soft-deletes? Discuss validation via Postman and PHPUnit.", links: [] }
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
            { name: "Next.js & Node.js Architecture", desc: "How is the frontend interacting with the backend? Explain the project structure.", links: [] },
            { name: "Socket.IO Real-time Sync", desc: "Explain how live board synchronization and spectator mode handle 100+ concurrent users with low latency.", links: [] },
            { name: "Server-side Move Validation", desc: "How did you ensure moves are valid and prevent client-side cheating?", links: [] },
            { name: "Minimax Algorithm & Alpha-Beta Pruning", desc: "Explain how your custom AI works (depth 3), the heuristic evaluation function, and pruning logic.", links: [] },
            { name: "Flask & Stockfish Integration", desc: "How does the Python backend communicate with the Node.js server, Stockfish engine (ELO 1800), and Polyglot opening book?", links: [] }
          ]
        },
        {
          title: "StudySync (Smart Timetable & Calendar App)",
          topics: [
            { name: "Flutter Offline-First Architecture", desc: "Explain how local caching and auto-sync ensure 100% accessibility during network outages.", links: [] },
            { name: "Express & MongoDB Backend", desc: "How did you architect the REST APIs with an authenticated admin panel for centralized management?", links: [] },
            { name: "Sub-second Real-time Updates", desc: "Explain the mechanism used for pushing sub-second real-time updates to connected clients.", links: [] }
          ]
        },
        {
          title: "SahYatri (Public Transport Analytics)",
          topics: [
            { name: "YOLOv5n on Raspberry Pi 4", desc: "Explain the deployment process, model fine-tuning, adaptive thresholding for 15 FPS, and achieving 90%+ accuracy.", links: [] },
            { name: "Time-Series Data Pipeline", desc: "How is the data structured in PostgreSQL to handle time-series occupancy data efficiently?", links: [] },
            { name: "React.js & Flutter Integration", desc: "How does the Node.js RESTful inference pipeline stream live data to both the operator dashboard and commuter app?", links: [] }
          ]
        }
      ]
    },
    {
      name: "Technical Skills Deep Dive",
      phases: [
        {
          title: "Core CS & Engineering",
          topics: [
            { name: "Core Subjects", desc: "DSA, Operating Systems, DBMS, OOP, Computer Networks, and System Design.", links: [] }
          ]
        },
        {
          title: "AI, ML & Data Science",
          topics: [
            { name: "LangChain, Hugging Face, RAG", desc: "Be ready to explain Retrieval-Augmented Generation, and how LangChain connects LLMs to data sources.", links: [] },
            { name: "Deep Learning (PyTorch, TensorFlow)", desc: "Understand tensor operations, backpropagation, and basic neural network architectures.", links: [] },
            { name: "NLP Concepts", desc: "Tokenization, embeddings, sequence models, and your Generative AI knowledge.", links: [] }
          ]
        },
        {
          title: "Web & Mobile Development",
          topics: [
            { name: "React.js & Next.js", desc: "Virtual DOM, hooks (useState, useEffect), SSR vs SSG in Next.js.", links: [] },
            { name: "Backend (Node.js, Express, Flask, FastAPI)", desc: "Event loop in Node.js, ASGI in FastAPI, RESTful principles, and WebSockets.", links: [] }
          ]
        },
        {
          title: "Databases & DevOps",
          topics: [
            { name: "SQL vs NoSQL (PostgreSQL, MongoDB, MySQL)", desc: "When to use which? ACID properties vs CAP theorem.", links: [] },
            { name: "Docker, Linux & CI/CD", desc: "Explain containerization, Dockerfiles, Linux fundamentals, and how you set up CI/CD pipelines.", links: [] },
            { name: "Cloud (AWS, Azure)", desc: "Basic services (EC2, S3, Lambda) and deployment strategies.", links: [] }
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
            { name: "BitBox 5.0 (1st Place) & Innovate 3.0", desc: "Explain your exact contribution to SahYatri and Drive-Sure, challenges faced, and how your team won/reached finals.", links: [] },
            { name: "LeetCode Knight (2094 Rating)", desc: "Be prepared to solve hard problems and explain your 1000+ problem-solving journey across LC/CF/GFG with a 250-days consecutive algorithmic coding streak.", links: [] },
            { name: "Letter of Appreciation (JIIT)", desc: "Discuss your outstanding academic performance in core engineering subjects.", links: [] }
          ]
        }
      ]
    }
  ]
};
