// Extracted roadmap data from all 3 HTML files
export const roadmaps = [
  {
    id: 'cs-core',
    title: 'CS Core Subjects',
    accent: '#7c6cf5',
    icon: '🧠',
    subjects: [
      {
        name: 'Operating Systems', color: '#e86c8a',
        phases: [
          { title: 'OS Architecture & Basics', topics: ['Monolithic vs Microkernel','System Calls — fork(), exec(), wait()','User Mode vs Kernel Mode','Basic Linux Commands'] },
          { title: 'Process & Thread Management', topics: ['Process Control Block (PCB)','Process vs Thread — Memory Layout','Process States & Transitions','Context Switching','Inter-Process Communication (IPC)'] },
          { title: 'CPU Scheduling', topics: ['Scheduling Metrics','FCFS, SJF, Priority Scheduling','Round Robin','Multilevel Feedback Queue (MLFQ)'] },
          { title: 'Concurrency & Synchronization', topics: ['Race Conditions & Critical Section','Mutex vs Semaphores','Producer-Consumer, Dining Philosophers','Deadlock — 4 Conditions, Banker\'s Algorithm'] },
          { title: 'Memory Management', topics: ['Logical vs Physical Address — MMU','Paging — Page Table, Frame','TLB — Hit/Miss, Effective Access Time','Page Replacement — FIFO, LRU, Optimal','Segmentation vs Paging'] },
          { title: 'Storage & File Systems', topics: ['Disk Structure — Seek, Rotational Latency','Disk Scheduling — FCFS, SSTF, SCAN','File System — Inode, File Allocation'] }
        ]
      },
      {
        name: 'DBMS', color: '#48c78e',
        phases: [
          { title: 'ER Modeling & Schema', topics: ['Entities, Attributes, Relationships','Cardinality Constraints — 1:1, 1:N, M:N','Keys — Primary, Foreign, Super, Candidate'] },
          { title: 'SQL & Relational Algebra', topics: ['DDL, DML, DCL, TCL','All JOIN Types','Aggregate Functions, GROUP BY, HAVING','Window Functions','Subqueries — Correlated vs Non-correlated','Relational Algebra'] },
          { title: 'Normalization', topics: ['Functional Dependencies','1NF → 2NF → 3NF → BCNF','Insertion/Deletion/Update Anomalies'] },
          { title: 'Transactions & ACID', topics: ['ACID Properties','Transaction States'] },
          { title: 'Concurrency Control', topics: ['Dirty Read, Phantom Read, Lost Update','Isolation Levels','Locking — 2PL'] },
          { title: 'Indexing & B+ Trees', topics: ['Why Indexes Exist','B-Tree vs B+ Tree','B+ Tree Insertion & Deletion','Clustered vs Non-Clustered Indexes'] }
        ]
      },
      {
        name: 'Computer Networks', color: '#3b9de8',
        phases: [
          { title: 'OSI & TCP/IP Models', topics: ['OSI 7-Layer Model','TCP/IP vs OSI Mapping','Network Devices — Hub, Switch, Router'] },
          { title: 'IP Addressing & Subnetting', topics: ['IPv4 — Classes, Private Ranges','Subnetting — CIDR, Borrowing Bits','NAT','IPv6'] },
          { title: 'TCP vs UDP', topics: ['TCP 3-Way Handshake','TCP Flow & Congestion Control','TCP vs UDP — When to Use Each','Ports — Well-Known Numbers'] },
          { title: 'Routing Algorithms', topics: ['Distance Vector — Bellman-Ford','Link State — Dijkstra, OSPF'] },
          { title: 'Application Protocols', topics: ['DNS Resolution Process','HTTP/1.1 vs HTTP/2 vs HTTP/3','HTTP Methods, Status Codes, Cookies'] },
          { title: 'Network Security & TLS', topics: ['TLS Handshake','Symmetric vs Asymmetric Encryption','Common Attacks — XSS, CSRF, SQL Injection'] }
        ]
      },
      {
        name: 'OOP & C++', color: '#e8c83b',
        phases: [
          { title: 'Classes & Objects', topics: ['Access Specifiers','Constructors — Copy, Move','Destructors — RAII','Static Members & friend'] },
          { title: 'Four Pillars', topics: ['Encapsulation','Abstraction — Pure Virtual','Inheritance — public/private/protected','Polymorphism — Compile vs Runtime'] },
          { title: 'vtable & Runtime Dispatch', topics: ['Virtual Table (vtable)','Pure Virtual & Abstract Classes','Virtual Destructor','C++ Casting'] },
          { title: 'Advanced C++ OOP', topics: ['Multiple Inheritance','Diamond Problem & Virtual Inheritance','Smart Pointers','Templates'] },
          { title: 'Design Principles', topics: ['SOLID Principles','Design Patterns — Singleton, Factory, Observer','Composition Over Inheritance'] }
        ]
      }
    ]
  },
  {
    id: 'js-fullstack',
    title: 'Full-Stack JavaScript',
    accent: '#6c63f5',
    icon: '⚡',
    subjects: [
      {
        name: 'JavaScript', color: '#f5c542',
        phases: [
          { title: 'JS Fundamentals', topics: ['Variables, Data Types, Operators','Loops, Strings, Error Handling','Objects, Arrays, Classes','Arrow Functions','Destructuring, Spread/Rest','Array HOMs — map, filter, reduce','Execution Context & Call Stack','Hoisting','Scope Chain & Lexical Environment','Closures','this Keyword'] },
          { title: 'Browser, DOM & Runtime', topics: ['DOM Access & Manipulation','Styling via JS','Event Loop & Microtask Queue','Event Delegation & Bubbling','Browser Rendering — Reflow & Repaint'] },
          { title: 'Async JavaScript', topics: ['Callbacks & Callback Hell','Promises — Creation & Chaining','Promise APIs — all, allSettled, race, any','async/await & Error Handling','Fetch API'] }
        ]
      },
      {
        name: 'TypeScript', color: '#3178c6',
        phases: [
          { title: 'TypeScript Foundations', topics: ['Basic Types','Type Aliases vs Interfaces','Union & Intersection Types','Generics','Enums, Tuples, Utility Types','Functions — typed params, overloads'] }
        ]
      },
      {
        name: 'React', color: '#61dafb',
        phases: [
          { title: 'React.js', topics: ['JSX, Components, Props','Conditional & List Rendering','Tailwind CSS','React Hook Form','useState','useEffect','useContext','React Router','useRef, useMemo, useCallback','useReducer','Redux Toolkit'] }
        ]
      },
      {
        name: 'Backend', color: '#68a063',
        phases: [
          { title: 'Node.js & Express', topics: ['How the Web Works','HTTP Methods & REST','Express Routing','Error Handling','Node.js Architecture — Libuv','Middlewares','JWT Authentication','File Uploads — Multer'] },
          { title: 'MongoDB & Mongoose', topics: ['MongoDB Setup','Mongoose Schemas & CRUD','Validators & Middleware','populate & Relationships','MVC Architecture','Aggregation Pipeline'] }
        ]
      },
      {
        name: 'Next.js', color: '#fff',
        phases: [
          { title: 'Next.js', topics: ['App Router File Structure','Link, useRouter, usePathname','Image Optimization','API Routes','Environment Variables','Middleware','Server vs Client Components','Data Fetching & Caching','SSG, SSR & ISR','Server Actions','NextAuth.js'] }
        ]
      },
      {
        name: 'Advanced', color: '#f59e0b',
        phases: [
          { title: 'WebSockets', topics: ['WebSocket Protocol','Socket.IO — rooms, namespaces','Scaling with Redis Adapter','Real-time Game Architecture'] },
          { title: 'System Design & Auth', topics: ['CORS','Rate Limiting, Helmet, Zod','Password Hashing — bcrypt','Caching — Redis','OAuth 2.0 Flow','Microservices vs Monolith','Database Indexing & Sharding','CI/CD Pipeline'] }
        ]
      }
    ]
  },
  {
    id: 'python-ml',
    title: 'Python AI/ML',
    accent: '#3db872',
    icon: '🤖',
    subjects: [
      {
        name: 'Python Core', color: '#3db872',
        phases: [
          { title: 'Python Runtime Foundations', topics: ['Comprehensions & Generators','Decorators','Context Managers','OOP & Dunder Methods','Type Hints','Exception Handling','Dataclasses & Named Tuples','GIL — Global Interpreter Lock','threading vs multiprocessing vs asyncio','Memory Management','asyncio — Event Loop, Coroutines'] }
        ]
      },
      {
        name: 'Data & NumPy', color: '#60c4f5',
        phases: [
          { title: 'Data & Numerical Computing', topics: ['NumPy Arrays, Shapes, Broadcasting','NumPy Vectorization','NumPy Linear Algebra','Pandas — DataFrames, GroupBy, Merge','Matplotlib & Seaborn','NumPy Memory Layout — Strides'] }
        ]
      },
      {
        name: 'Web APIs', color: '#009485',
        phases: [
          { title: 'Flask & FastAPI', topics: ['Flask — Routing, Blueprints','FastAPI — Path Operations','Pydantic V2','Background Tasks','SQLAlchemy Async','WSGI vs ASGI','Dependency Injection','FastAPI Lifespan — Model Loading'] }
        ]
      },
      {
        name: 'ML & DL', color: '#f5a623',
        phases: [
          { title: 'Machine Learning — Scikit-learn', topics: ['Estimator API','Supervised Learning Algorithms','Preprocessing','Pipelines','Model Evaluation','Hyperparameter Tuning'] },
          { title: 'Deep Learning — PyTorch', topics: ['PyTorch Tensors','Dataset & DataLoader','Loss Functions & Optimizers','Model Saving & Loading','Autograd — Computational Graphs','Custom nn.Module','GPU Execution & Mixed Precision','Training Loop','Transfer Learning'] },
          { title: 'Deep Learning — TensorFlow', topics: ['Keras Sequential API','Keras Functional API','Callbacks','SavedModel Format','Custom Training with GradientTape','Subclassing tf.keras.Model'] }
        ]
      },
      {
        name: 'NLP & LLMs', color: '#e87c5a',
        phases: [
          { title: 'NLP & Transformers', topics: ['NLP Fundamentals — Tokenization, Embeddings','HF pipeline()','AutoTokenizer & AutoModel','HF datasets Library','HF Trainer API','Transformer Architecture — Attention','BERT vs GPT vs T5','Tokenization — BPE, WordPiece'] },
          { title: 'LangChain, RAG & Agents', topics: ['LangChain LCEL','Prompt Templates','Document Loaders & Text Splitters','Vector Stores — Chroma, FAISS','LangChain Tools','Advanced RAG Pipeline','Embeddings & Cosine Similarity','LangGraph Agents — ReAct','LoRA / QLoRA Fine-tuning'] }
        ]
      },
      {
        name: 'MLOps', color: '#9f99ff',
        phases: [
          { title: 'MLOps & Model Serving', topics: ['Docker for ML','MLflow','Model Quantization — ONNX','Uvicorn + Gunicorn','Celery + Redis Workers','Model Loading Strategy'] }
        ]
      }
    ]
  }
];
