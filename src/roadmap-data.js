export const roadmaps = [
  {
    "id": "tech-fundamentals",
    "title": "Tech Fundamentals",
    "icon": "\ud83d\udcbb",
    "accent": "#38bdf8",
    "url": "/tech-fundamentals-comparisons.html",
    "phases": [
      {
        "title": "00 Repo reality check",
        "topics": [
          {
            "name": "00 Repo reality check",
            "hash": "#verify",
            "desc": "I opened all five repos. Most of your resume holds up. These four points don't quite match \u2014 fix your story before an interviewer finds them.",
            "links": []
          }
        ]
      },
      {
        "title": "01 Languages & runtimes",
        "topics": [
          {
            "name": "The Python GIL, explained without jargon",
            "hash": "#c1",
            "desc": "Python allows only one thread to run Python code at a time. Threads still help when you're waiting \u2014 on a network call, a disk read \u2014 because a waiting thread releases the lock. Threads do not help when you're computing , because only one gets the lock anyway.",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap \"You used Python for a chess engine \u2014 isn't that slow?\" Don't defend Python. Say: the engine isn't Python. Stockfish is a compiled C++ binary; Flask only shells out to it and returns the move. The pure-Python minimax at depth 3 exists as a fallback for when the binary won't start, and depth 3 is exactly the depth Python can search ",
            "isTrap": true
          },
          {
            "name": "TypeScript vs plain JavaScript",
            "hash": "#c1",
            "desc": "TypeScript is JavaScript plus a type checker that runs before you ship. It compiles away \u2014 at runtime there is zero TypeScript left. You get: mistakes caught at build time, autocomplete that knows your data shapes, and safer refactors.",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap \"Does TypeScript make your API safe?\" No. Types are erased at build. A malformed JSON body from a client is still any at runtime. That's exactly why RecrutAI uses Zod \u2014 Zod validates the actual payload at runtime and hands back a properly typed object. TypeScript guards your code; Zod guards your boundary.",
            "isTrap": true
          },
          {
            "name": "Bash \u2014 and when to stop using it",
            "hash": "#c1",
            "desc": "Bash wins where the job is the OS: chain existing tools, move files, schedule things. Chessify's build command is literally chmod +x on the Stockfish binary.",
            "links": []
          }
        ]
      },
      {
        "title": "02 Backend frameworks & server concurrency",
        "topics": [
          {
            "name": "Why Chessify is split into two backends",
            "hash": "#c2",
            "desc": "Two servers because the two jobs are opposites:",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap \"Isn't two backends over-engineering for a student project?\" Have the counterfactual ready: \"Single Node process, one user requests a bot move, Stockfish takes 800 ms of CPU \u2014 every other game's moves queue behind it. The split isn't about scale, it's about not letting a CPU task sit on an I/O event loop.\" That's a real reason, not",
            "isTrap": true
          },
          {
            "name": "Monolith vs microservices vs serverless",
            "hash": "#c2",
            "desc": "Master Monolith vs microservices vs serverless core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udca1 Senior insight Ask \"why not serverless for the ML inference?\" and answer it yourself: a ResNet-50 checkpoint plus PyTorch blows past typical Lambda package limits, and a cold start reloading weights costs seconds. Model serving wants a warm container. Serverless suits short, spiky, small-dependency work.",
            "isTrap": false
          }
        ]
      },
      {
        "title": "03 Databases & data engineering",
        "topics": [
          {
            "name": "Normalization, in one pass",
            "hash": "#c3",
            "desc": "Denormalize on purpose when reads dominate and the copied value rarely changes \u2014 a cached bus_route_name on a telemetry row saves a join on every dashboard query. The cost you accept: you must update it in two places.",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap The 16 MB document limit . Any unbounded embedded array \u2014 an append-only audit log, an infinite comment thread \u2014 will hit it eventually, and the failure arrives in production at the worst moment. Correct instinct: unbounded growth means a separate collection, or the bucket pattern (group N entries per document).",
            "isTrap": true
          },
          {
            "name": "OLTP vs OLAP / time-series",
            "hash": "#c3",
            "desc": "Master OLTP vs OLAP / time-series core concepts and defense.",
            "links": []
          },
          {
            "name": "Indexes \u2014 pick the right one",
            "hash": "#c3",
            "desc": "Master Indexes \u2014 pick the right one core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap \"Index everything?\" No. Every index has to be updated on every write. On an ingest-heavy table that's a direct throughput tax. Also, a composite index on (bus_id, recorded_at) can serve queries on bus_id alone, but not on recorded_at alone \u2014 leftmost prefix rule.",
            "isTrap": true
          },
          {
            "name": "ETL vs ELT",
            "hash": "#c3",
            "desc": "ETL = clean it, then store it. ELT = store the raw thing, clean it later inside the warehouse.",
            "links": []
          }
        ]
      },
      {
        "title": "04 AI, ML, computer vision & LLM systems",
        "topics": [
          {
            "name": "Minimax + alpha-beta pruning",
            "hash": "#c4",
            "desc": "Minimax assumes both sides play their best move: you maximise, the opponent minimises, down to a fixed depth. Alpha-beta skips branches that can't change the answer \u2014 once one reply already refutes a move, you don't need the other replies.",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap \"Does pruning change the move it picks?\" No. Alpha-beta is provably identical to plain minimax at the same depth \u2014 it only skips work that couldn't affect the result. The one thing that does vary is speed, which depends heavily on move ordering: best-first ordering prunes hard, worst-first prunes nothing. Follow-up: \"why depth 3?\" ",
            "isTrap": true
          },
          {
            "name": "The Nutri-Vision hybrid extractor",
            "hash": "#c4",
            "desc": "Free text like \"2 medium apples, 150g grilled chicken breast\" has two very different problems in one sentence:",
            "links": []
          },
          {
            "name": "Edge inference vs cloud GPU",
            "hash": "#c4",
            "desc": "Master Edge inference vs cloud GPU core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udca1 Senior insight Know why the \"n\" in YOLOv5n matters: it's the nano variant, ~1.9M parameters against YOLOv5x's ~87M. On an ARM CPU with no GPU that's the difference between 15 FPS and a slideshow. You bought speed with accuracy \u2014 and for counting people , \"roughly how full is the bus\" tolerates that trade completely. A model choice is a product de",
            "isTrap": false
          },
          {
            "name": "LLM strategies",
            "hash": "#c4",
            "desc": "Master LLM strategies core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap \"Fine-tune it to stop hallucinating.\" Fine-tuning teaches behaviour and format , not facts . Training on your documents makes the model sound like them \u2014 it does not make it recall them reliably, and it will still invent confidently. Facts belong in the context window: that's RAG. Say this and you're ahead of most candidates.",
            "isTrap": true
          }
        ]
      },
      {
        "title": "05 API protocols",
        "topics": [
          {
            "name": "05 API protocols",
            "hash": "#c5",
            "desc": "\u2190 swipe the table sideways",
            "links": []
          }
        ]
      },
      {
        "title": "06 Frontend & rendering",
        "topics": [
          {
            "name": "Flutter vs React Native vs web",
            "hash": "#c6",
            "desc": "Master Flutter vs React Native vs web core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE track defense Flutter for StudySync, with a reason specific to the product: a timetable is a dense custom grid . Flutter paints it directly, so it's pixel-identical on Android, iOS and web from one codebase \u2014 and StudySync genuinely ships to all three from one repo ( android/ ios/ web/ lib/ ), across three tagged releases. React Native would",
            "isTrap": false
          }
        ]
      },
      {
        "title": "07 DevOps, cloud & Linux",
        "topics": [
          {
            "name": "VM vs container",
            "hash": "#c7",
            "desc": "A VM virtualises hardware and boots a whole guest OS \u2014 heavy, slow to start, strongly isolated. A container is just a normal Linux process that's been given a restricted view of the system \u2014 starts in milliseconds, shares the host kernel, weaker isolation.",
            "links": [],
            "tip": "\ud83d\udea8 Interview trap \"Is a container a security boundary?\" Weaker than a VM \u2014 containers share the host kernel, so a kernel exploit escapes. For untrusted code (say, running a candidate's submitted solution) you want a VM, gVisor, or Firecracker. Worth flagging for RecrutAI's Monaco editor: it's an editor, not a sandboxed executor, and knowing that dis",
            "isTrap": true
          },
          {
            "name": "Git LFS",
            "hash": "#c7",
            "desc": "Git stores a full copy of every version of every file forever. A 100 MB .pth checkpoint committed ten times is a gigabyte of history that every clone downloads. LFS replaces the file with a small text pointer and stores the real bytes separately \u2014 Model_Image uses this, and .gitattributes is where t",
            "links": []
          },
          {
            "name": "AWS vs Azure \u2014 the mapping",
            "hash": "#c7",
            "desc": "Don't oversell cloud depth. Your deployments are Render (Flask + Node) and Vercel (Next.js, Flutter web) \u2014 say that plainly; PaaS is a legitimate choice and pretending otherwise is a fast way to get caught.",
            "links": []
          },
          {
            "name": "Testing & CI",
            "hash": "#c7",
            "desc": "Master Testing & CI core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE track defense Packspec's multi-tenant isolation is exactly the thing unit tests miss and integration tests catch. The question \"can tenant A read tenant B's spec?\" can only be answered by a real request with A's real token hitting B's real ID and getting a 403. That's a Postman test, and it's the one that matters most \u2014 data leakage between ",
            "isTrap": false
          },
          {
            "name": "Linux you'll be asked to type",
            "hash": "#c7",
            "desc": "0 > stdin, 1 > stdout, 2 > stderr. So 2>&1 means \"send errors wherever output is going,\" and > file 2>&1 captures both. Pipes connect one program's stdout to the next one's stdin.",
            "links": []
          }
        ]
      },
      {
        "title": "08 \"Why X over Y\" \u2014 Q&A bank",
        "topics": [
          {
            "name": "SDE Track A",
            "hash": "#c8",
            "desc": "Master SDE Track A core concepts and defense.",
            "links": []
          },
          {
            "name": "ML/DE Track B",
            "hash": "#c8",
            "desc": "Master ML/DE Track B core concepts and defense.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "cs-21day",
    "title": "CS Core 21-Day Sprint",
    "icon": "\u26a1",
    "accent": "#00F7FF",
    "url": "/cs-core-21-day.html",
    "phases": [
      {
        "title": "Database Management System",
        "topics": [
          {
            "name": "[D1] Introduction to DBMS & file system limitations",
            "hash": "#day-1",
            "desc": "Say this:data redundancy, integrity constraints, concurrent access, and crash recovery are the 4 things a file system can't give you but DBMS can.",
            "tip": "Say this:data redundancy, integrity constraints, concurrent access, and crash recovery are the 4 things a file system can't give you but DBMS can.",
            "isTrap": false,
            "links": [
              {
                "text": "Intro to DBMS",
                "url": "https://www.geeksforgeeks.org/dbms/introduction-of-dbms-database-management-system-set-1/"
              },
              {
                "text": "DBMS vs File System",
                "url": "https://www.geeksforgeeks.org/dbms/advantages-of-dbms-over-file-system/"
              }
            ]
          },
          {
            "name": "[D1] 3-Tier Architecture & DBMS Architecture (1/2/3-level)",
            "hash": "#day-1",
            "desc": "Trap:\"2-tier\" = client talks directly to DB (no app server). \"3-tier\" adds an application layer in between \u2014 used in almost every real SaaS backend (like your own PackSage stack).",
            "tip": "Trap:\"2-tier\" = client talks directly to DB (no app server). \"3-tier\" adds an application layer in between \u2014 used in almost every real SaaS backend (like your own PackSage stack).",
            "isTrap": true,
            "links": [
              {
                "text": "3-Tier Architecture",
                "url": "https://www.geeksforgeeks.org/dbms/introduction-of-3-tier-architecture-in-dbms-set-2/"
              },
              {
                "text": "DBMS Architecture Levels",
                "url": "https://www.geeksforgeeks.org/dbms/dbms-architecture-2-level-3-level/"
              }
            ]
          },
          {
            "name": "[D1] ER Model \u2014 entities, attributes, relationships, cardinality",
            "hash": "#day-1",
            "desc": "Be ready to draw a quick ER diagram on paper/whiteboard for a simple domain (e.g. \"e-commerce orders\") \u2014 very common OA/interview ask.",
            "tip": "Be ready to draw a quick ER diagram on paper/whiteboard for a simple domain (e.g. \"e-commerce orders\") \u2014 very common OA/interview ask.",
            "isTrap": false,
            "links": [
              {
                "text": "Introduction of ER Model",
                "url": "https://www.geeksforgeeks.org/dbms/introduction-of-er-model/"
              }
            ]
          },
          {
            "name": "[D1] Types of Keys \u2014 Candidate, Super, Primary, Alternate, Foreign",
            "hash": "#day-1",
            "desc": "Trap:every candidate key is a super key, but not every super key is a candidate key (super key can have extra redundant attributes). Primary key = the chosen candidate key.",
            "tip": "Trap:every candidate key is a super key, but not every super key is a candidate key (super key can have extra redundant attributes). Primary key = the chosen candidate key.",
            "isTrap": true,
            "links": [
              {
                "text": "Types of Keys",
                "url": "https://www.geeksforgeeks.org/dbms/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/"
              }
            ]
          },
          {
            "name": "[D1] Relational Algebra \u2014 basic operators (\u03c3, \u03c0, \u22c8, \u222a, \u2212)",
            "hash": "#day-1",
            "desc": "Know that SQL is a practical implementation of relational algebra \u2014 mapping SELECT\u2192\u03c0, WHERE\u2192\u03c3, JOIN\u2192\u22c8 helps you reason about query optimization questions.",
            "tip": "Know that SQL is a practical implementation of relational algebra \u2014 mapping SELECT\u2192\u03c0, WHERE\u2192\u03c3, JOIN\u2192\u22c8 helps you reason about query optimization questions.",
            "isTrap": false,
            "links": [
              {
                "text": "Relational Algebra",
                "url": "https://www.geeksforgeeks.org/dbms/introduction-of-relational-algebra-in-dbms/"
              }
            ]
          },
          {
            "name": "[D2] Inner Join vs Outer Join (Left/Right/Full)",
            "hash": "#day-2",
            "desc": "Trap:LEFT JOIN keeps all rows of the left table even with no match (NULLs on right) \u2014 interviewers love asking you to predict output row-count for a given join type + sample data.",
            "tip": "Trap:LEFT JOIN keeps all rows of the left table even with no match (NULLs on right) \u2014 interviewers love asking you to predict output row-count for a given join type + sample data.",
            "isTrap": true,
            "links": [
              {
                "text": "Inner vs Outer Join",
                "url": "https://www.geeksforgeeks.org/dbms/inner-join-vs-outer-join/"
              }
            ]
          },
          {
            "name": "[D2] Join operation vs Nested Subquery \u2014 when to prefer which",
            "hash": "#day-2",
            "desc": "Joins are generally faster (optimizer-friendly, single pass) vs correlated subqueries that can re-execute per outer row. Good follow-up: \"how would you rewrite this subquery as a join?\"",
            "tip": "Joins are generally faster (optimizer-friendly, single pass) vs correlated subqueries that can re-execute per outer row. Good follow-up: \"how would you rewrite this subquery as a join?\"",
            "isTrap": false,
            "links": [
              {
                "text": "Join vs Nested Query",
                "url": "https://www.geeksforgeeks.org/interview-experiences/join-operation-vs-nested-query-in-dbms/"
              }
            ]
          },
          {
            "name": "[D3] Introduction to Normalization + Functional Dependencies",
            "hash": "#day-3",
            "desc": "Key concept for D3: Normalization",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Intro to Normalization",
                "url": "https://www.geeksforgeeks.org/dbms/introduction-of-database-normalization/"
              }
            ]
          },
          {
            "name": "[D3] Normal Forms \u2014 1NF, 2NF, 3NF, BCNF",
            "hash": "#day-3",
            "desc": "Trap #1 asked topic:memorize the exact difference between 3NF and BCNF \u2014 BCNF is stricter (every determinant must be a candidate key, not just handles transitive dependency like 3NF). Be ready to normalize a sample table live.",
            "tip": "Trap #1 asked topic:memorize the exact difference between 3NF and BCNF \u2014 BCNF is stricter (every determinant must be a candidate key, not just handles transitive dependency like 3NF). Be ready to normalize a sample table live.",
            "isTrap": true,
            "links": [
              {
                "text": "Normal Forms",
                "url": "https://www.geeksforgeeks.org/dbms/normal-forms-in-dbms/"
              }
            ]
          },
          {
            "name": "[D3] Lossless Join Decomposition",
            "hash": "#day-3",
            "desc": "Key concept for D3: Normalization",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Lossless Decomposition",
                "url": "https://www.geeksforgeeks.org/dbms/lossless-decomposition-in-dbms/"
              }
            ]
          },
          {
            "name": "[D3] 4th & 5th Normal Form (multivalued / join dependency)",
            "hash": "#day-3",
            "desc": "Key concept for D3: Normalization",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "4NF & 5NF",
                "url": "https://www.geeksforgeeks.org/dbms/introduction-of-4th-and-5th-normal-form-in-dbms/"
              }
            ]
          },
          {
            "name": "[D3] Denormalization \u2014 when & why to intentionally break normal forms",
            "hash": "#day-3",
            "desc": "Great system-design talking point: denormalize for read-heavy analytics/reporting workloads to cut join costs, at the price of update anomalies.",
            "tip": "Great system-design talking point: denormalize for read-heavy analytics/reporting workloads to cut join costs, at the price of update anomalies.",
            "isTrap": false,
            "links": [
              {
                "text": "Denormalization",
                "url": "https://www.geeksforgeeks.org/dbms/denormalization-in-databases/"
              }
            ]
          },
          {
            "name": "[D4] ACID Properties",
            "hash": "#day-4",
            "desc": "Trap:Most-asked one-liner. Have a crisp real example ready for each: Atomicity (bank transfer rollback), Consistency (constraints hold), Isolation (concurrent txns don't see partial state), Durability (commit survives crash).",
            "tip": "Trap:Most-asked one-liner. Have a crisp real example ready for each: Atomicity (bank transfer rollback), Consistency (constraints hold), Isolation (concurrent txns don't see partial state), Durability (commit survives crash).",
            "isTrap": true,
            "links": [
              {
                "text": "ACID Properties",
                "url": "https://www.geeksforgeeks.org/dbms/acid-properties-in-dbms/"
              }
            ]
          },
          {
            "name": "[D4] Concurrency Control \u2014 why it's needed",
            "hash": "#day-4",
            "desc": "Key concept for D4: Transactions & Concurrency Control",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Concurrency Control",
                "url": "https://www.geeksforgeeks.org/dbms/concurrency-control-in-dbms/"
              }
            ]
          },
          {
            "name": "[D4] Locking \u2014 shared/exclusive locks, 2PL",
            "hash": "#day-4",
            "desc": "Key concept for D4: Transactions & Concurrency Control",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Implementation of Locking",
                "url": "https://www.geeksforgeeks.org/dbms/implementation-of-locking-in-dbms/"
              }
            ]
          },
          {
            "name": "[D4] Types of Schedules \u2014 serial, non-serial",
            "hash": "#day-4",
            "desc": "Key concept for D4: Transactions & Concurrency Control",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Types of Schedules",
                "url": "https://www.geeksforgeeks.org/dbms/types-of-schedules-in-dbms/"
              }
            ]
          },
          {
            "name": "[D4] Conflict Serializability vs View Serializability",
            "hash": "#day-4",
            "desc": "Trap:every conflict-serializable schedule is view-serializable, but not vice versa. Practice drawing the precedence graph \u2014 if it has a cycle, the schedule is NOT conflict-serializable.",
            "tip": "Trap:every conflict-serializable schedule is view-serializable, but not vice versa. Practice drawing the precedence graph \u2014 if it has a cycle, the schedule is NOT conflict-serializable.",
            "isTrap": true,
            "links": [
              {
                "text": "Conflict Serializability",
                "url": "https://www.geeksforgeeks.org/dbms/conflict-serializability-in-dbms/"
              },
              {
                "text": "View Serializability",
                "url": "https://www.geeksforgeeks.org/dbms/condition-of-schedules-to-be-view-equivalent/"
              }
            ]
          },
          {
            "name": "[D4] Starvation in DBMS",
            "hash": "#day-4",
            "desc": "Key concept for D4: Transactions & Concurrency Control",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Starvation in DBMS",
                "url": "https://www.geeksforgeeks.org/dbms/starvation-in-dbms/"
              }
            ]
          },
          {
            "name": "[D4] Deadlock in DBMS \u2014 detection & prevention",
            "hash": "#day-4",
            "desc": "Key concept for D4: Transactions & Concurrency Control",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Deadlock in DBMS",
                "url": "https://www.geeksforgeeks.org/dbms/deadlock-in-dbms/"
              }
            ]
          },
          {
            "name": "[D5] Introduction to SQL \u2014 DDL/DML/DCL/TCL",
            "hash": "#day-5",
            "desc": "Key concept for D5: SQL Tutorial (hands-on)",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Intro to SQL",
                "url": "https://www.geeksforgeeks.org/dbms/structured-query-language/"
              }
            ]
          },
          {
            "name": "[D5] SQL Data Types",
            "hash": "#day-5",
            "desc": "Key concept for D5: SQL Tutorial (hands-on)",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "SQL Data Types",
                "url": "https://www.geeksforgeeks.org/sql/sql-data-types/"
              }
            ]
          },
          {
            "name": "[D5] SQL Operators",
            "hash": "#day-5",
            "desc": "Key concept for D5: SQL Tutorial (hands-on)",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "SQL Operators",
                "url": "https://www.geeksforgeeks.org/sql/sql-operators/"
              }
            ]
          },
          {
            "name": "[D5] SQL Clauses \u2014 WHERE, GROUP BY, HAVING, ORDER BY",
            "hash": "#day-5",
            "desc": "Trap:WHERE filters rows before grouping; HAVING filters groups after aggregation. Asking you to spot the bug in a query that uses WHERE with an aggregate function is a classic OA MCQ.",
            "tip": "Trap:WHERE filters rows before grouping; HAVING filters groups after aggregation. Asking you to spot the bug in a query that uses WHERE with an aggregate function is a classic OA MCQ.",
            "isTrap": true,
            "links": [
              {
                "text": "SQL Tutorial (clauses covered here)",
                "url": "https://www.geeksforgeeks.org/sql/sql-tutorial/"
              }
            ]
          },
          {
            "name": "[D5] SQL Functions (Advanced)",
            "hash": "#day-5",
            "desc": "Key concept for D5: SQL Tutorial (hands-on)",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "SQL Advanced Functions",
                "url": "https://www.geeksforgeeks.org/sql/sql-advanced-functions/"
              }
            ]
          },
          {
            "name": "[D5] Aggregate Functions vs Scalar Functions",
            "hash": "#day-5",
            "desc": "Key concept for D5: SQL Tutorial (hands-on)",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Aggregate vs Scalar Functions",
                "url": "https://www.geeksforgeeks.org/sql/sql-functions-aggregate-scalar-functions/"
              }
            ]
          },
          {
            "name": "[D5] SQL Queries \u2014 practice writing joins, subqueries, window functions",
            "hash": "#day-5",
            "desc": "If time is short, prioritize this: write 2nd-highest-salary, department-wise top-N, and self-join queries from memory. These 3 patterns cover ~70% of SQL rounds.",
            "tip": "If time is short, prioritize this: write 2nd-highest-salary, department-wise top-N, and self-join queries from memory. These 3 patterns cover ~70% of SQL rounds.",
            "isTrap": false,
            "links": [
              {
                "text": "SQL Concepts & Queries",
                "url": "https://www.geeksforgeeks.org/sql/sql-concepts-and-queries/"
              },
              {
                "text": "Quiz on SQL",
                "url": "https://www.geeksforgeeks.org/quizzes/sql-gq/"
              }
            ]
          }
        ]
      },
      {
        "title": "Operating Systems",
        "topics": [
          {
            "name": "[D6] Types of Operating Systems (Batch, Time-Sharing, Distributed, RTOS...)",
            "hash": "#day-6",
            "desc": "Key concept for D6: Introduction to OS & Types",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Types of OS",
                "url": "https://www.geeksforgeeks.org/types-of-operating-systems/"
              }
            ]
          },
          {
            "name": "[D6] Multiprogramming in OS",
            "hash": "#day-6",
            "desc": "Trap:Multiprogramming (keep CPU busy, no time bound) \u2260 Multitasking (time-shared, user sees concurrency) \u2260 Multiprocessing (multiple CPUs). These 3 get mixed up in MCQs constantly.",
            "tip": "Trap:Multiprogramming (keep CPU busy, no time bound) \u2260 Multitasking (time-shared, user sees concurrency) \u2260 Multiprocessing (multiple CPUs). These 3 get mixed up in MCQs constantly.",
            "isTrap": true,
            "links": [
              {
                "text": "Multiprogramming",
                "url": "https://www.geeksforgeeks.org/operating-systems/multiprogramming-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D6] Time-Sharing OS",
            "hash": "#day-6",
            "desc": "Key concept for D6: Introduction to OS & Types",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Time-Sharing OS",
                "url": "https://www.geeksforgeeks.org/operating-systems/time-sharing-operating-system/"
              }
            ]
          },
          {
            "name": "[D6] Network Operating System",
            "hash": "#day-6",
            "desc": "Key concept for D6: Introduction to OS & Types",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Network OS",
                "url": "https://www.geeksforgeeks.org/operating-systems/what-is-a-network-operating-system/"
              }
            ]
          },
          {
            "name": "[D6] Real-Time OS (RTOS) \u2014 hard vs soft real-time",
            "hash": "#day-6",
            "desc": "Key concept for D6: Introduction to OS & Types",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "RTOS",
                "url": "https://www.geeksforgeeks.org/operating-systems/real-time-operating-system-rtos/"
              }
            ]
          },
          {
            "name": "[D6] Functions of the Operating System",
            "hash": "#day-6",
            "desc": "Key concept for D6: Introduction to OS & Types",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Functions of OS",
                "url": "https://www.geeksforgeeks.org/operating-systems/functions-of-operating-system/"
              }
            ]
          },
          {
            "name": "[D7] Introduction to Process Management",
            "hash": "#day-7",
            "desc": "Key concept for D7: Process Management",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Process Management",
                "url": "https://www.geeksforgeeks.org/operating-systems/introduction-of-process-management/"
              }
            ]
          },
          {
            "name": "[D7] Process Table & PCB (Process Control Block)",
            "hash": "#day-7",
            "desc": "Memorize what fields live in the PCB (process state, PC, registers, memory limits, I/O status) \u2014 very commonly asked to \"list.\"",
            "tip": "Memorize what fields live in the PCB (process state, PC, registers, memory limits, I/O status) \u2014 very commonly asked to \"list.\"",
            "isTrap": false,
            "links": [
              {
                "text": "Process Table & PCB",
                "url": "https://www.geeksforgeeks.org/operating-systems/process-table-and-process-control-block-pcb/"
              }
            ]
          },
          {
            "name": "[D7] Operations on Processes \u2014 creation, termination, process states",
            "hash": "#day-7",
            "desc": "Key concept for D7: Process Management",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Operations on Processes",
                "url": "https://www.geeksforgeeks.org/operating-systems/operations-on-processes/"
              }
            ]
          },
          {
            "name": "[D7] Context Switching",
            "hash": "#day-7",
            "desc": "Be ready to explain context switch overhead and why it's \"pure overhead\" (no useful work done during the switch itself).",
            "tip": "Be ready to explain context switch overhead and why it's \"pure overhead\" (no useful work done during the switch itself).",
            "isTrap": false,
            "links": [
              {
                "text": "Context Switch",
                "url": "https://www.geeksforgeeks.org/operating-systems/context-switch-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D7] Preemptive vs Non-Preemptive Scheduling",
            "hash": "#day-7",
            "desc": "Key concept for D7: Process Management",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Preemptive vs Non-Preemptive",
                "url": "https://www.geeksforgeeks.org/operating-systems/preemptive-and-non-preemptive-scheduling/"
              }
            ]
          },
          {
            "name": "[D8] CPU Scheduling Algorithms \u2014 FCFS, SJF, Priority, Round Robin",
            "hash": "#day-8",
            "desc": "OA staple:practice hand-computing average waiting time / turnaround time for a given process table under each algorithm \u2014 this shows up as a direct numeric MCQ constantly.",
            "tip": "OA staple:practice hand-computing average waiting time / turnaround time for a given process table under each algorithm \u2014 this shows up as a direct numeric MCQ constantly.",
            "isTrap": true,
            "links": [
              {
                "text": "CPU Scheduling",
                "url": "https://www.geeksforgeeks.org/operating-systems/cpu-scheduling-in-operating-systems/"
              }
            ]
          },
          {
            "name": "[D8] CPU Scheduling Criteria (throughput, turnaround, waiting, response time)",
            "hash": "#day-8",
            "desc": "Key concept for D8: CPU Scheduling",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Scheduling Criteria",
                "url": "https://www.geeksforgeeks.org/operating-systems/cpu-scheduling-criteria/"
              }
            ]
          },
          {
            "name": "[D8] Multiple-Processor Scheduling",
            "hash": "#day-8",
            "desc": "Key concept for D8: CPU Scheduling",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Multi-Processor Scheduling",
                "url": "https://www.geeksforgeeks.org/operating-systems/multiple-processor-scheduling-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D8] Thread Scheduling",
            "hash": "#day-8",
            "desc": "Key concept for D8: CPU Scheduling",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Thread Scheduling",
                "url": "https://www.geeksforgeeks.org/operating-systems/thread-scheduling/"
              }
            ]
          },
          {
            "name": "[D9] Introduction to Process Synchronization",
            "hash": "#day-9",
            "desc": "Key concept for D9: Process Synchronization",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Process Synchronization",
                "url": "https://www.geeksforgeeks.org/operating-systems/introduction-of-process-synchronization/"
              }
            ]
          },
          {
            "name": "[D9] Race Condition Vulnerability",
            "hash": "#day-9",
            "desc": "Have one concrete real-world example ready (e.g. two threads incrementing a shared counter) and explain why it isn't atomic at the instruction level.",
            "tip": "Have one concrete real-world example ready (e.g. two threads incrementing a shared counter) and explain why it isn't atomic at the instruction level.",
            "isTrap": false,
            "links": [
              {
                "text": "Race Condition",
                "url": "https://www.geeksforgeeks.org/operating-systems/race-condition-vulnerability/"
              }
            ]
          },
          {
            "name": "[D9] Critical Section \u2014 the 3 conditions (mutual exclusion, progress, bounded wait)",
            "hash": "#day-9",
            "desc": "Key concept for D9: Process Synchronization",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Critical Section",
                "url": "https://www.geeksforgeeks.org/operating-systems/critical-section-in-synchronization/"
              }
            ]
          },
          {
            "name": "[D9] Mutual Exclusion \u2014 Peterson's solution",
            "hash": "#day-9",
            "desc": "Key concept for D9: Process Synchronization",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Mutual Exclusion",
                "url": "https://www.geeksforgeeks.org/operating-systems/mutual-exclusion-in-synchronization/"
              }
            ]
          },
          {
            "name": "[D10] Semaphores in Process Synchronization",
            "hash": "#day-10",
            "desc": "Key concept for D10: Semaphores & Classical Problems",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Semaphores",
                "url": "https://www.geeksforgeeks.org/operating-systems/semaphores-in-process-synchronization/"
              }
            ]
          },
          {
            "name": "[D10] Types of Semaphores \u2014 binary (mutex) vs counting",
            "hash": "#day-10",
            "desc": "Trap:a mutex is locked/unlocked by the same thread; a binary semaphore can be signaled by a different thread than the one that waited \u2014 this distinction is a favorite \"gotcha\" question.",
            "tip": "Trap:a mutex is locked/unlocked by the same thread; a binary semaphore can be signaled by a different thread than the one that waited \u2014 this distinction is a favorite \"gotcha\" question.",
            "isTrap": true,
            "links": [
              {
                "text": "Semaphore Types",
                "url": "https://www.geeksforgeeks.org/operating-systems/semaphores-and-its-types/"
              }
            ]
          },
          {
            "name": "[D10] Readers-Writers Problem",
            "hash": "#day-10",
            "desc": "Key concept for D10: Semaphores & Classical Problems",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Readers-Writers Problem",
                "url": "https://www.geeksforgeeks.org/operating-systems/readers-writers-problem-set-1-introduction-and-readers-preference-solution/"
              }
            ]
          },
          {
            "name": "[D10] Producer-Consumer Problem using Semaphores",
            "hash": "#day-10",
            "desc": "Be able to sketch the semaphore pseudocode (empty, full, mutex) from memory \u2014 this is the single most-drawn diagram in OS interviews.",
            "tip": "Be able to sketch the semaphore pseudocode (empty, full, mutex) from memory \u2014 this is the single most-drawn diagram in OS interviews.",
            "isTrap": false,
            "links": [
              {
                "text": "Producer-Consumer Problem",
                "url": "https://www.geeksforgeeks.org/operating-systems/producer-consumer-problem-using-semaphores-set-1/"
              }
            ]
          },
          {
            "name": "[D11] Introduction to Deadlock",
            "hash": "#day-11",
            "desc": "Key concept for D11: Deadlocks",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Introduction to Deadlock",
                "url": "https://www.geeksforgeeks.org/operating-systems/introduction-of-deadlock-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D11] 4 Necessary Conditions for Deadlock (Coffman conditions)",
            "hash": "#day-11",
            "desc": "Must memorize verbatim:Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait \u2014 breaking ANY one prevents deadlock. Interviewers ask \"how would you prevent it\" expecting you to map to one of these 4.",
            "tip": "Must memorize verbatim:Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait \u2014 breaking ANY one prevents deadlock. Interviewers ask \"how would you prevent it\" expecting you to map to one of these 4.",
            "isTrap": true,
            "links": [
              {
                "text": "Conditions for Deadlock",
                "url": "https://www.geeksforgeeks.org/operating-systems/conditions-for-deadlock-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D11] Banker's Algorithm \u2014 safe state check",
            "hash": "#day-11",
            "desc": "Practice one full worked example (Allocation/Max/Available matrices \u2192 find a safe sequence) by hand \u2014 this is a very common written/OA question.",
            "tip": "Practice one full worked example (Allocation/Max/Available matrices \u2192 find a safe sequence) by hand \u2014 this is a very common written/OA question.",
            "isTrap": false,
            "links": [
              {
                "text": "Banker's Algorithm",
                "url": "https://www.geeksforgeeks.org/operating-systems/bankers-algorithm-in-operating-system-2/"
              }
            ]
          },
          {
            "name": "[D11] Handling Deadlocks \u2014 prevention, avoidance, detection & recovery",
            "hash": "#day-11",
            "desc": "Key concept for D11: Deadlocks",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Handling Deadlocks",
                "url": "https://www.geeksforgeeks.org/operating-systems/handling-deadlocks/"
              }
            ]
          },
          {
            "name": "[D12] Memory Management overview",
            "hash": "#day-12",
            "desc": "Key concept for D12: Memory Management & Page Replacement",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Memory Management",
                "url": "https://www.geeksforgeeks.org/operating-systems/memory-management-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D12] Paging",
            "hash": "#day-12",
            "desc": "Trap:paging removes external fragmentation but can still cause internal fragmentation (last page partially filled). Segmentation is the reverse \u2014 know both directions.",
            "tip": "Trap:paging removes external fragmentation but can still cause internal fragmentation (last page partially filled). Segmentation is the reverse \u2014 know both directions.",
            "isTrap": true,
            "links": [
              {
                "text": "Paging",
                "url": "https://www.geeksforgeeks.org/operating-systems/paging-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D12] Segmentation",
            "hash": "#day-12",
            "desc": "Key concept for D12: Memory Management & Page Replacement",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Segmentation",
                "url": "https://www.geeksforgeeks.org/operating-systems/segmentation-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D12] Virtual Memory",
            "hash": "#day-12",
            "desc": "Key concept for D12: Memory Management & Page Replacement",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Virtual Memory",
                "url": "https://www.geeksforgeeks.org/operating-systems/virtual-memory-in-operating-system/"
              }
            ]
          },
          {
            "name": "[D12] Page Replacement Algorithms \u2014 FIFO, LRU, Optimal",
            "hash": "#day-12",
            "desc": "Practice tracing FIFO vs LRU vs Optimal on the same reference string by hand \u2014 near-guaranteed OA numeric question.",
            "tip": "Practice tracing FIFO vs LRU vs Optimal on the same reference string by hand \u2014 near-guaranteed OA numeric question.",
            "isTrap": false,
            "links": [
              {
                "text": "Page Replacement Algorithms",
                "url": "https://www.geeksforgeeks.org/operating-systems/page-replacement-algorithms-in-operating-systems/"
              }
            ]
          },
          {
            "name": "[D12] Belady's Anomaly",
            "hash": "#day-12",
            "desc": "Trap:Belady's Anomaly (more frames \u2192 more page faults) happens with FIFO, but never with LRU or Optimal. This exact fact is a recurring MCQ.",
            "tip": "Trap:Belady's Anomaly (more frames \u2192 more page faults) happens with FIFO, but never with LRU or Optimal. This exact fact is a recurring MCQ.",
            "isTrap": true,
            "links": [
              {
                "text": "Belady's Anomaly",
                "url": "https://www.geeksforgeeks.org/operating-systems/beladys-anomaly-in-page-replacement-algorithms/"
              }
            ]
          },
          {
            "name": "[D12] Optimal Page Replacement Algorithm (deep dive)",
            "hash": "#day-12",
            "desc": "Key concept for D12: Memory Management & Page Replacement",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Optimal Page Replacement",
                "url": "https://www.geeksforgeeks.org/dsa/optimal-page-replacement-algorithm/"
              }
            ]
          }
        ]
      },
      {
        "title": "Computer Networks",
        "topics": [
          {
            "name": "[D13] Basics of Computer Networking",
            "hash": "#day-13",
            "desc": "Key concept for D13: Basics of Computer Networks",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Basics of Networking",
                "url": "https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/"
              }
            ]
          },
          {
            "name": "[D13] Network Topologies \u2014 star, bus, ring, mesh, hybrid",
            "hash": "#day-13",
            "desc": "Key concept for D13: Basics of Computer Networks",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Network Topologies",
                "url": "https://www.geeksforgeeks.org/computer-networks/types-of-network-topology/"
              }
            ]
          },
          {
            "name": "[D13] Basic Networking Terminology",
            "hash": "#day-13",
            "desc": "Key concept for D13: Basics of Computer Networks",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Networking Terminology",
                "url": "https://www.geeksforgeeks.org/computer-networks/introduction-to-basic-networking-terminology/"
              }
            ]
          },
          {
            "name": "[D13] LAN, MAN, WAN",
            "hash": "#day-13",
            "desc": "Key concept for D13: Basics of Computer Networks",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "LAN vs MAN vs WAN",
                "url": "https://www.geeksforgeeks.org/types-of-area-networks-lan-man-and-wan/"
              }
            ]
          },
          {
            "name": "[D13] TCP/IP Model",
            "hash": "#day-13",
            "desc": "Key concept for D13: Basics of Computer Networks",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "TCP/IP Model",
                "url": "https://www.geeksforgeeks.org/computer-networks/tcp-ip-model/"
              }
            ]
          },
          {
            "name": "[D13] OSI Model (7 layers)",
            "hash": "#day-13",
            "desc": "Trap:OSI has 7 layers, TCP/IP has 4-5 (models vary). Know \"Please Do Not Throw Sausage Pizza Away\" (Physical\u2013Data Link\u2013Network\u2013Transport\u2013Session\u2013Presentation\u2013Application) cold \u2014 asked as a rapid-fire MCQ constantly.",
            "tip": "Trap:OSI has 7 layers, TCP/IP has 4-5 (models vary). Know \"Please Do Not Throw Sausage Pizza Away\" (Physical\u2013Data Link\u2013Network\u2013Transport\u2013Session\u2013Presentation\u2013Application) cold \u2014 asked as a rapid-fire MCQ constantly.",
            "isTrap": true,
            "links": [
              {
                "text": "OSI Model",
                "url": "https://www.geeksforgeeks.org/computer-networks/open-systems-interconnection-model-osi/"
              }
            ]
          },
          {
            "name": "[D14] Ethernet (LAN Technologies)",
            "hash": "#day-14",
            "desc": "Key concept for D14: Data Link Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Ethernet",
                "url": "https://www.geeksforgeeks.org/computer-networks/what-is-ethernet/"
              }
            ]
          },
          {
            "name": "[D14] MAC Address",
            "hash": "#day-14",
            "desc": "Trap:MAC address = physical/hardware, fixed to NIC, works at Data Link layer. IP address = logical, changes, works at Network layer. Classic MCQ pair.",
            "tip": "Trap:MAC address = physical/hardware, fixed to NIC, works at Data Link layer. IP address = logical, changes, works at Network layer. Classic MCQ pair.",
            "isTrap": true,
            "links": [
              {
                "text": "MAC Address",
                "url": "https://www.geeksforgeeks.org/computer-networks/mac-address-in-computer-network/"
              }
            ]
          },
          {
            "name": "[D14] CSMA (Carrier Sense Multiple Access)",
            "hash": "#day-14",
            "desc": "Key concept for D14: Data Link Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "CSMA",
                "url": "https://www.geeksforgeeks.org/computer-networks/carrier-sense-multiple-access-csma/"
              }
            ]
          },
          {
            "name": "[D14] Basics of Wi-Fi",
            "hash": "#day-14",
            "desc": "Key concept for D14: Data Link Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Basics of Wi-Fi",
                "url": "https://www.geeksforgeeks.org/computer-networks/basics-of-wi-fi/"
              }
            ]
          },
          {
            "name": "[D14] Virtual LAN (VLAN)",
            "hash": "#day-14",
            "desc": "Key concept for D14: Data Link Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "VLAN",
                "url": "https://www.geeksforgeeks.org/computer-networks/virtual-lan-vlan/"
              }
            ]
          },
          {
            "name": "[D14] Stop-and-Wait ARQ",
            "hash": "#day-14",
            "desc": "Key concept for D14: Data Link Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Stop-and-Wait ARQ",
                "url": "https://www.geeksforgeeks.org/computer-networks/stop-and-wait-arq/"
              }
            ]
          },
          {
            "name": "[D14] Sliding Window Protocol",
            "hash": "#day-14",
            "desc": "Key concept for D14: Data Link Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Sliding Window Protocol",
                "url": "https://www.geeksforgeeks.org/computer-networks/sliding-window-protocol-set-1/"
              }
            ]
          },
          {
            "name": "[D15] IPv4 Datagram Header",
            "hash": "#day-15",
            "desc": "Key concept for D15: Network Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "IPv4 Datagram Header",
                "url": "https://www.geeksforgeeks.org/computer-networks/introduction-and-ipv4-datagram-header/"
              }
            ]
          },
          {
            "name": "[D15] IP Addressing \u2014 classful addressing",
            "hash": "#day-15",
            "desc": "Know how to compute network/host bits and subnet count from a given subnet mask \u2014 common OA calculation question.",
            "tip": "Know how to compute network/host bits and subnet count from a given subnet mask \u2014 common OA calculation question.",
            "isTrap": false,
            "links": [
              {
                "text": "Classful IP Addressing",
                "url": "https://www.geeksforgeeks.org/computer-networks/introduction-of-classful-ip-addressing/"
              }
            ]
          },
          {
            "name": "[D15] Types of Routing \u2014 static, default, dynamic",
            "hash": "#day-15",
            "desc": "Key concept for D15: Network Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Types of Routing",
                "url": "https://www.geeksforgeeks.org/computer-networks/types-of-routing/"
              }
            ]
          },
          {
            "name": "[D15] Unicast Routing \u2014 Link State Routing",
            "hash": "#day-15",
            "desc": "Key concept for D15: Network Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Link State Routing",
                "url": "https://www.geeksforgeeks.org/computer-networks/unicast-routing-link-state-routing/"
              }
            ]
          },
          {
            "name": "[D15] Wi-Fi Protected Access (WPA)",
            "hash": "#day-15",
            "desc": "Key concept for D15: Network Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "WPA",
                "url": "https://www.geeksforgeeks.org/computer-networks/wifi-protected-access-wpa/"
              }
            ]
          },
          {
            "name": "[D15] Wi-Fi Protected Setup (WPS)",
            "hash": "#day-15",
            "desc": "Key concept for D15: Network Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "WPS",
                "url": "https://www.geeksforgeeks.org/computer-networks/wifi-protected-setup-wps/"
              }
            ]
          },
          {
            "name": "[D15] LiFi vs WiFi",
            "hash": "#day-15",
            "desc": "Key concept for D15: Network Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "LiFi vs WiFi",
                "url": "https://www.geeksforgeeks.org/computer-networks/difference-between-lifi-and-wifi/"
              }
            ]
          },
          {
            "name": "[D15] IPv4 vs IPv6",
            "hash": "#day-15",
            "desc": "Trap:IPv4 = 32-bit (~4.3B addresses), IPv6 = 128-bit. IPv6 removes the need for NAT and has no built-in checksum field (relies on lower/upper layers) \u2014 a detail interviewers use to check real understanding vs rote memorization.",
            "tip": "Trap:IPv4 = 32-bit (~4.3B addresses), IPv6 = 128-bit. IPv6 removes the need for NAT and has no built-in checksum field (relies on lower/upper layers) \u2014 a detail interviewers use to check real understanding vs rote memorization.",
            "isTrap": true,
            "links": [
              {
                "text": "IPv4 vs IPv6",
                "url": "https://www.geeksforgeeks.org/computer-networks/differences-between-ipv4-and-ipv6/"
              }
            ]
          },
          {
            "name": "[D16] TCP Connection Establishment \u2014 3-way handshake",
            "hash": "#day-16",
            "desc": "Highest-frequency CN question:SYN \u2192 SYN-ACK \u2192 ACK. Also know 4-way termination (FIN, ACK, FIN, ACK) and why TIME_WAIT state exists.",
            "tip": "Highest-frequency CN question:SYN \u2192 SYN-ACK \u2192 ACK. Also know 4-way termination (FIN, ACK, FIN, ACK) and why TIME_WAIT state exists.",
            "isTrap": true,
            "links": [
              {
                "text": "TCP 3-Way Handshake",
                "url": "https://www.geeksforgeeks.org/computer-networks/tcp-connection-establishment/"
              }
            ]
          },
          {
            "name": "[D16] Transport Layer Responsibilities",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Transport Layer Responsibilities",
                "url": "https://www.geeksforgeeks.org/computer-networks/transport-layer-responsibilities/"
              }
            ]
          },
          {
            "name": "[D16] Multiplexing & Demultiplexing",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Multiplexing / Demultiplexing",
                "url": "https://www.geeksforgeeks.org/computer-networks/multiplexing-and-demultiplexing-in-transport-layer/"
              }
            ]
          },
          {
            "name": "[D16] UDP \u2014 connectionless transport",
            "hash": "#day-16",
            "desc": "Trap:TCP is reliable/ordered/connection-oriented (handshake, ACKs); UDP is unreliable/unordered/connectionless but lower latency (used for DNS, video streaming, gaming). Always asked as \"why would you use UDP over TCP?\"",
            "tip": "Trap:TCP is reliable/ordered/connection-oriented (handshake, ACKs); UDP is unreliable/unordered/connectionless but lower latency (used for DNS, video streaming, gaming). Always asked as \"why would you use UDP over TCP?\"",
            "isTrap": true,
            "links": [
              {
                "text": "UDP",
                "url": "https://www.geeksforgeeks.org/computer-networks/user-datagram-protocol-udp/"
              }
            ]
          },
          {
            "name": "[D16] P2P File Sharing",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "P2P File Sharing",
                "url": "https://www.geeksforgeeks.org/computer-networks/p2p-peer-to-peer-file-sharing/"
              }
            ]
          },
          {
            "name": "[D16] Congestion Control \u2014 general concept",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Congestion Control",
                "url": "https://www.geeksforgeeks.org/computer-networks/congestion-control-in-computer-networks/"
              }
            ]
          },
          {
            "name": "[D16] TCP Congestion Control \u2014 slow start, congestion avoidance",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "TCP Congestion Control",
                "url": "https://www.geeksforgeeks.org/computer-networks/tcp-congestion-control/"
              }
            ]
          },
          {
            "name": "[D16] Congestion Control Techniques",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Congestion Control Techniques",
                "url": "https://www.geeksforgeeks.org/computer-networks/congestion-control-techniques-in-computer-networks/"
              }
            ]
          },
          {
            "name": "[D16] Application Layer Protocols overview",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Application Layer Protocols",
                "url": "https://www.geeksforgeeks.org/computer-networks/protocols-application-layer/"
              }
            ]
          },
          {
            "name": "[D16] SMTP (Simple Mail Transfer Protocol)",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "SMTP",
                "url": "https://www.geeksforgeeks.org/computer-networks/simple-mail-transfer-protocol-smtp/"
              }
            ]
          },
          {
            "name": "[D16] DNS (Domain Name System)",
            "hash": "#day-16",
            "desc": "Be ready to explain the DNS resolution chain: browser cache \u2192 OS cache \u2192 resolver \u2192 root \u2192 TLD \u2192 authoritative server.",
            "tip": "Be ready to explain the DNS resolution chain: browser cache \u2192 OS cache \u2192 resolver \u2192 root \u2192 TLD \u2192 authoritative server.",
            "isTrap": false,
            "links": [
              {
                "text": "DNS",
                "url": "https://www.geeksforgeeks.org/computer-networks/domain-name-system-dns-in-application-layer/"
              }
            ]
          },
          {
            "name": "[D16] HTTP vs HTTPS",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "HTTP vs HTTPS",
                "url": "https://www.geeksforgeeks.org/computer-networks/difference-between-http-and-https/"
              }
            ]
          },
          {
            "name": "[D16] FTP, ATM, DHCP",
            "hash": "#day-16",
            "desc": "Key concept for D16: Transport & Application Layer",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "FTP",
                "url": "https://www.geeksforgeeks.org/computer-networks/file-transfer-protocol-ftp-in-application-layer/"
              },
              {
                "text": "ATM",
                "url": "https://www.geeksforgeeks.org/computer-networks/asynchronous-transfer-mode-atm-in-computer-network/"
              },
              {
                "text": "DHCP",
                "url": "https://www.geeksforgeeks.org/computer-networks/dynamic-host-configuration-protocol-dhcp/"
              }
            ]
          }
        ]
      },
      {
        "title": "Software Engineering",
        "topics": [
          {
            "name": "[D17] Introduction to Software Engineering",
            "hash": "#day-17",
            "desc": "Key concept for D17: Introduction to Software Engineering",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Intro to SE",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-introduction-to-software-engineering/"
              }
            ]
          },
          {
            "name": "[D17] Classification of Software",
            "hash": "#day-17",
            "desc": "Key concept for D17: Introduction to Software Engineering",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Classification of Software",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-classification-software/"
              }
            ]
          },
          {
            "name": "[D18] Classical Waterfall Model",
            "hash": "#day-18",
            "desc": "Key concept for D18: SDLC Models",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Waterfall Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/waterfall-model/"
              }
            ]
          },
          {
            "name": "[D18] Iterative Waterfall Model",
            "hash": "#day-18",
            "desc": "Key concept for D18: SDLC Models",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Iterative Waterfall",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-iterative-waterfall-model/"
              }
            ]
          },
          {
            "name": "[D18] Spiral Model",
            "hash": "#day-18",
            "desc": "Key concept for D18: SDLC Models",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Spiral Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-spiral-model/"
              }
            ]
          },
          {
            "name": "[D18] Rapid Application Development (RAD) Model",
            "hash": "#day-18",
            "desc": "Key concept for D18: SDLC Models",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "RAD Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-rapid-application-development-model-rad/"
              }
            ]
          },
          {
            "name": "[D18] RAD vs Traditional SDLC",
            "hash": "#day-18",
            "desc": "Key concept for D18: SDLC Models",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "RAD vs Traditional SDLC",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-rad-model-vs-traditional-sdlc/"
              }
            ]
          },
          {
            "name": "[D18] Agile Development Models \u2014 Scrum, Kanban, XP",
            "hash": "#day-18",
            "desc": "Most-asked SE topic:know the 4 Agile Manifesto values, what a sprint/standup/retro is, and be ready to contrast Scrum (fixed sprints, roles) vs Kanban (continuous flow, WIP limits).",
            "tip": "Most-asked SE topic:know the 4 Agile Manifesto values, what a sprint/standup/retro is, and be ready to contrast Scrum (fixed sprints, roles) vs Kanban (continuous flow, WIP limits).",
            "isTrap": true,
            "links": [
              {
                "text": "Agile Development Models",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-agile-development-models/"
              }
            ]
          },
          {
            "name": "[D18] Comparison of Life Cycle Models",
            "hash": "#day-18",
            "desc": "Key concept for D18: SDLC Models",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Comparison of Life Cycle Models",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-comparison-of-different-life-cycle-models/"
              }
            ]
          },
          {
            "name": "[D18] Coupling and Cohesion",
            "hash": "#day-18",
            "desc": "Trap:good design = LOW coupling + HIGH cohesion. People sometimes flip this under pressure \u2014 say it out loud twice before the interview.",
            "tip": "Trap:good design = LOW coupling + HIGH cohesion. People sometimes flip this under pressure \u2014 say it out loud twice before the interview.",
            "isTrap": true,
            "links": [
              {
                "text": "Coupling and Cohesion",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-coupling-and-cohesion/"
              }
            ]
          },
          {
            "name": "[D19] Project Management Process phases",
            "hash": "#day-19",
            "desc": "Key concept for D19: Software Project Management",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Project Management Process",
                "url": "https://www.geeksforgeeks.org/software-engineering/phases-project-management-processes/"
              }
            ]
          },
          {
            "name": "[D19] COCOMO Model \u2014 effort/cost estimation",
            "hash": "#day-19",
            "desc": "Know the 3 modes: Organic (small, simple), Semi-detached (medium), Embedded (complex, tight constraints) \u2014 asked as a straight definitional MCQ.",
            "tip": "Know the 3 modes: Organic (small, simple), Semi-detached (medium), Embedded (complex, tight constraints) \u2014 asked as a straight definitional MCQ.",
            "isTrap": false,
            "links": [
              {
                "text": "COCOMO Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-cocomo-model/"
              }
            ]
          },
          {
            "name": "[D19] Risk Management in SDLC",
            "hash": "#day-19",
            "desc": "Key concept for D19: Software Project Management",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Risk Management in SDLC",
                "url": "https://www.geeksforgeeks.org/software-engineering/integrating-risk-management-in-sdlc-set-1/"
              }
            ]
          },
          {
            "name": "[D19] Role & Responsibilities of a Software Project Manager",
            "hash": "#day-19",
            "desc": "Key concept for D19: Software Project Management",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Software Project Manager Role",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-role-and-responsibilities-of-a-software-project-manager/"
              }
            ]
          },
          {
            "name": "[D20] Classification of Software Requirements \u2014 functional vs non-functional",
            "hash": "#day-20",
            "desc": "Key concept for D20: Software Requirements",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Classification of Requirements",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-classification-of-software-requirements/"
              }
            ]
          },
          {
            "name": "[D20] How to Write a Good SRS",
            "hash": "#day-20",
            "desc": "Key concept for D20: Software Requirements",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Writing a Good SRS",
                "url": "https://www.geeksforgeeks.org/software-engineering/how-to-write-a-good-srs-for-your-project/"
              }
            ]
          },
          {
            "name": "[D20] Quality Characteristics of a Good SRS",
            "hash": "#day-20",
            "desc": "Key concept for D20: Software Requirements",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Quality Characteristics of SRS",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-quality-characteristics-of-a-good-srs/"
              }
            ]
          },
          {
            "name": "[D20] Requirements Elicitation",
            "hash": "#day-20",
            "desc": "Key concept for D20: Software Requirements",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Requirements Elicitation",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-requirements-elicitation/"
              }
            ]
          },
          {
            "name": "[D21] Seven Principles of Software Testing",
            "hash": "#day-21",
            "desc": "Key concept for D21: Software Testing & Debugging",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "7 Principles of Testing",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-seven-principles-of-software-testing/"
              }
            ]
          },
          {
            "name": "[D21] Testing Guidelines",
            "hash": "#day-21",
            "desc": "Key concept for D21: Software Testing & Debugging",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Testing Guidelines",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-testing-guidelines/"
              }
            ]
          },
          {
            "name": "[D21] Black Box Testing",
            "hash": "#day-21",
            "desc": "Trap:Black box = tests functionality without knowing internal code (you did this for PackSage's 90 endpoints). White box = tests internal logic/paths with code visibility. Don't mix them up under pressure.",
            "tip": "Trap:Black box = tests functionality without knowing internal code (you did this for PackSage's 90 endpoints). White box = tests internal logic/paths with code visibility. Don't mix them up under pressure.",
            "isTrap": true,
            "links": [
              {
                "text": "Black Box Testing",
                "url": "https://www.geeksforgeeks.org/software-testing/software-engineering-black-box-testing/"
              }
            ]
          },
          {
            "name": "[D21] White Box Testing",
            "hash": "#day-21",
            "desc": "Key concept for D21: Software Testing & Debugging",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "White Box Testing",
                "url": "https://www.geeksforgeeks.org/software-testing/software-engineering-white-box-testing/"
              }
            ]
          },
          {
            "name": "[D21] Debugging strategies",
            "hash": "#day-21",
            "desc": "Key concept for D21: Software Testing & Debugging",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Debugging",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-debugging/"
              }
            ]
          },
          {
            "name": "[D21] Integration Testing \u2014 big bang, top-down, bottom-up",
            "hash": "#day-21",
            "desc": "Key concept for D21: Software Testing & Debugging",
            "tip": "",
            "isTrap": false,
            "links": [
              {
                "text": "Integration Testing",
                "url": "https://www.geeksforgeeks.org/software-testing/software-engineering-integration-testing/"
              }
            ]
          }
        ]
      },
      {
        "title": "OA Tips & Revision Strategy",
        "topics": [
          {
            "name": "OA (Online Assessment) Specific Tips & High-Yield MCQs",
            "hash": "#oa",
            "desc": "High-yield MCQ topics (CPU scheduling, page replacement, deadlock, normalization, SQL, OSI layer mapping) and time-management tips for OAs.",
            "links": []
          },
          {
            "name": "Compressed 7-Day CS Core Revision Strategy",
            "hash": "#strategy",
            "desc": "Pacing guide for 7-day rapid revision across DBMS, OS, CN, and SE before placement tests.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "react-nextjs",
    "title": "React & Next.js",
    "icon": "\u269b\ufe0f",
    "accent": "#61dafb",
    "url": "/react-nextjs-frontend.html",
    "phases": [
      {
        "title": "01 React internals, Fiber & reconciliation",
        "topics": [
          {
            "name": "The Virtual DOM and its two assumptions",
            "hash": "#c1",
            "desc": "React builds a tree of plain objects describing the UI, diffs the new tree against the old, and applies the minimum set of real DOM changes. A general tree diff is O(n\u00b3), which is unusable \u2014 so React makes two assumptions to get to O(n):",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Why key={index} corrupts stateful lists. Keys are React's identity mechanism. With index keys, deleting the first of three items means the item previously at index 1 now claims key 0 \u2014 so React thinks item 0 merely changed its props rather than being removed. DOM state that React doesn't control comes along for the ride: typed inpu",
            "isTrap": true
          },
          {
            "name": "Fiber: render vs commit",
            "hash": "#c1",
            "desc": "Fiber rewrote reconciliation as a linked list of units of work instead of a recursive tree walk \u2014 which is what makes it interruptible .",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight \"Render must be pure\" stops being an abstract rule once you know the render phase can be discarded and re-run . If you mutate a ref, fire an analytics event or push to an external store during render, that side effect happens once for work React threw away and again for the work it kept \u2014 a double-count with no error. This is also ",
            "isTrap": false
          },
          {
            "name": "React 18 concurrent features",
            "hash": "#c1",
            "desc": "Master React 18 concurrent features core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udcca ML / Data Eng Defense These are the right tools for a data-heavy dashboard. On SahYatri, changing a date range triggers re-aggregating and re-charting thousands of telemetry points. Wrapped in startTransition , the filter control updates instantly and stays clickable while the chart recomputes in the background \u2014 React will even abandon that work",
            "isTrap": false
          }
        ]
      },
      {
        "title": "02 Hooks & state architecture",
        "topics": [
          {
            "name": "The stale closure \u2014 the single most-tested bug",
            "hash": "#c2",
            "desc": "Every render creates new functions that capture that render's values . If a function outlives its render \u2014 inside a setInterval , a socket handler, a debounce \u2014 it keeps looking at the old value forever.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Just remove it from the dependency array to stop the re-runs.\" This is the wrong instinct and interviewers listen for it. The lint warning isn't noise \u2014 it's telling you the effect reads something it hasn't subscribed to. Silencing it converts a visible re-render problem into an invisible stale-data problem, which is far harder to",
            "isTrap": true
          },
          {
            "name": "useEffect vs useLayoutEffect",
            "hash": "#c2",
            "desc": "Default to useEffect . Reach for useLayoutEffect only when you measure the DOM and immediately change it based on the measurement \u2014 otherwise the user sees one frame of the wrong position before it corrects.",
            "links": []
          },
          {
            "name": "Memoization: when it's worth it",
            "hash": "#c2",
            "desc": "Master Memoization: when it's worth it core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap useCallback without React.memo on the child usually does nothing. The stable reference only matters if something compares it. An unmemoized child re-renders when the parent does, regardless of prop identity \u2014 so you've paid the memo cost and bought nothing. The inverse trap too: React.memo on a child that receives style={{...}} or ",
            "isTrap": true
          },
          {
            "name": "Context vs an external store",
            "hash": "#c2",
            "desc": "Controlled \u2014 React state is the source of truth, re-renders on every keystroke. Needed for live validation or interdependent fields. Uncontrolled \u2014 the DOM holds the value, read via useRef on submit, zero re-renders. Right for large simple forms where per-keystroke state is pure overhead.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Context has no selector. When the context value changes, every consumer re-renders \u2014 even one reading a field that didn't change. So a single context holding { user, theme, notifications, socketStatus } re-renders the entire consuming subtree whenever a notification arrives. Zustand solves exactly this: useStore(s => s.user.name) s",
            "isTrap": false
          }
        ]
      },
      {
        "title": "03 Next.js & rendering lifecycles",
        "topics": [
          {
            "name": "Server Components and the serialization boundary",
            "hash": "#c3",
            "desc": "A Server Component runs on the server only and ships zero JavaScript to the browser. It can read a database or filesystem directly with no API layer. Anything interactive \u2014 state, effects, event handlers, browser APIs \u2014 needs 'use client' .",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap The serialization boundary. Props crossing from a Server Component into a Client Component must be serializable \u2014 plain objects, arrays, strings, numbers, dates, Promises. You cannot pass a function, a class instance, or a Map. Try it and you get a runtime error many people misread as a bundler problem. The related misconception: '",
            "isTrap": true
          },
          {
            "name": "Hydration mismatches",
            "hash": "#c3",
            "desc": "Hydration is React attaching event listeners to server-rendered HTML while assuming its own render produces identical markup. When it doesn't, you get the mismatch error and React discards the server HTML.",
            "links": []
          },
          {
            "name": "Streaming, Suspense and Server Actions",
            "hash": "#c3",
            "desc": "loading.tsx or a <Suspense> boundary lets the server flush the shell immediately and stream slow sections in as they resolve \u2014 TTFB stops being hostage to the slowest query on the page.",
            "links": []
          }
        ]
      },
      {
        "title": "04 Real-time UI, optimistic updates & charting",
        "topics": [
          {
            "name": "The socket hook",
            "hash": "#c4",
            "desc": "Master The socket hook core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Duplicate listeners in StrictMode. React 18 development mounts, unmounts and remounts every component to surface missing cleanup. Without the socket.off teardown, you now have two handlers for 'state' , and each server event fires your setState twice. In production it's worse and subtler: every navigation back to the board stacks a",
            "isTrap": true
          },
          {
            "name": "Optimistic updates with rollback",
            "hash": "#c4",
            "desc": "Master Optimistic updates with rollback core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense The framing that matters: the client-side chess.js check is a UX optimization, never a security control. It exists so an obviously illegal drag doesn't cost a round trip. The server runs its own independent validation against its own board, and its broadcast is authoritative \u2014 so a modified client that skips the local check gains not",
            "isTrap": false
          },
          {
            "name": "High-frequency dashboards",
            "hash": "#c4",
            "desc": "Telemetry arriving every few seconds will re-render the whole dashboard tree unless you stop it. Four techniques, in order of payoff:",
            "links": [],
            "tip": "\ud83d\udcca ML / Data Eng Defense Canvas vs SVG is the choice that decides whether the dashboard survives. SVG (Recharts, D3-with-DOM) creates a real DOM node per data point \u2014 beautiful, inspectable, and it collapses somewhere around a few thousand points because the browser is laying out thousands of elements every frame. Canvas (Chart.js, uPlot) paints pix",
            "isTrap": false
          }
        ]
      },
      {
        "title": "05 Interview defense bank",
        "topics": [
          {
            "name": "Track A \u2014 SDE",
            "hash": "#c5",
            "desc": "Master Track A \u2014 SDE core concepts and defense.",
            "links": []
          },
          {
            "name": "Track B \u2014 ML / AI / Data Engineering",
            "hash": "#c5",
            "desc": "Master Track B \u2014 ML / AI / Data Engineering core concepts and defense.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "flutter",
    "title": "Flutter & Dart",
    "icon": "\ud83d\udcf1",
    "accent": "#22d3ee",
    "url": "/flutter-interview-notes.html",
    "phases": [
      {
        "title": "Flutter Fundamentals",
        "topics": [
          {
            "name": "Widget Tree",
            "hash": "#widget-tree",
            "desc": "Master the Widget Tree core concepts and interview answers.",
            "links": []
          },
          {
            "name": "StatefulWidget vs StatelessWidget",
            "hash": "#stateful-stateless",
            "desc": "Master the StatefulWidget vs StatelessWidget core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Widget Lifecycle",
            "hash": "#lifecycle",
            "desc": "Master the Widget Lifecycle core concepts and interview answers.",
            "links": []
          },
          {
            "name": "setState vs Provider vs Riverpod/Bloc",
            "hash": "#state-mgmt",
            "desc": "Master the setState vs Provider vs Riverpod/Bloc core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Architecture & Dart",
        "topics": [
          {
            "name": "How Flutter Compiles to Native",
            "hash": "#compile-native",
            "desc": "Master how Flutter compiles to native for interview answers.",
            "links": []
          },
          {
            "name": "Dart Basics for Interviews",
            "hash": "#dart-basics",
            "desc": "Master the Dart basics relevant to interviews.",
            "links": []
          }
        ]
      },
      {
        "title": "Offline-First Architecture",
        "topics": [
          {
            "name": "Local Caching Strategies",
            "hash": "#local-caching",
            "desc": "Master the Local Caching Strategies core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Sync-on-Reconnect Architecture",
            "hash": "#sync-reconnect",
            "desc": "Master the Sync-on-Reconnect Architecture core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Conflict Resolution Basics",
            "hash": "#conflict-resolution",
            "desc": "Master the Conflict Resolution Basics core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Deep-Dive: StudySync",
        "topics": [
          {
            "name": "Actual Cache-Then-Network Flow",
            "hash": "#ss-overview",
            "desc": "Master the actual cache-then-network flow used in StudySync.",
            "links": []
          },
          {
            "name": "\u26a0\ufe0f Dead Code & the 1.5s Claim",
            "hash": "#ss-reconcile",
            "desc": "Reconcile the dead code and the 1.5 second claim before your interview.",
            "links": []
          },
          {
            "name": "Conflicts & Partial-Sync Failure",
            "hash": "#ss-followups",
            "desc": "Master the conflicting writes and partial-sync failure scenarios.",
            "links": []
          }
        ]
      },
      {
        "title": "Deep-Dive: SahYatri Mobile",
        "topics": [
          {
            "name": "Contrast: No Offline Fallback",
            "hash": "#sy-mobile",
            "desc": "Understand the contrast \u2014 no offline fallback despite a caching dependency.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "node-express",
    "title": "Node & Express",
    "icon": "\ud83d\udfe2",
    "accent": "#339933",
    "url": "/nodejs-express-websockets.html",
    "phases": [
      {
        "title": "01 Node internals & the event loop",
        "topics": [
          {
            "name": "The phases, in order",
            "hash": "#c1",
            "desc": "libuv runs a loop with fixed phases. Each tick walks through them:",
            "links": []
          },
          {
            "name": "Microtasks jump the queue",
            "hash": "#c1",
            "desc": "Between every phase (and after each callback), Node drains two queues before continuing:",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Recursive process.nextTick starves the loop. Because the nextTick queue drains completely before the loop advances, a nextTick that schedules another nextTick never lets I/O run. Your server accepts no connections and shows no error \u2014 it just goes silent at 100% CPU. This is why setImmediate is the safe choice for \"run after the cu",
            "isTrap": true
          },
          {
            "name": "V8 vs the libuv threadpool",
            "hash": "#c1",
            "desc": "\"Single-threaded\" describes your JavaScript , not the process. Node has background threads \u2014 they're just not running your code.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight The threadpool defaults to 4 threads ( UV_THREADPOOL_SIZE ). That number matters more than people expect: bcrypt hashing runs there, so five concurrent logins mean the fifth waits for a free thread even though the event loop is idle. Sockets don't touch the pool at all \u2014 the kernel handles them. So the mental split is: network scal",
            "isTrap": false
          },
          {
            "name": "Scaling past one core",
            "hash": "#c1",
            "desc": "Master Scaling past one core core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Just add cluster mode to scale Chessify.\" That breaks it instantly. Room state lives in a plain object in one process's memory. Fork four workers and player A lands on worker 1, player B on worker 3 \u2014 different objects, so they're in different games with the same room code. Clustering a stateless REST API is free; clustering a sta",
            "isTrap": true
          },
          {
            "name": "Streams & backpressure",
            "hash": "#c1",
            "desc": "Four types: Readable (source), Writable (sink), Duplex (both \u2014 a TCP socket), Transform (duplex that modifies \u2014 gzip).",
            "links": [],
            "tip": "\ud83d\udcca ML / Data Eng Defense Backpressure is the concept that makes an ingestion service survive. If SahYatri's Node layer accepted telemetry faster than PostgreSQL could absorb it, the excess would sit in process memory and the container would OOM \u2014 the failure looks like a random crash, not a database problem, which makes it miserable to debug. Stream",
            "isTrap": false
          }
        ]
      },
      {
        "title": "02 Express, middleware & error handling",
        "topics": [
          {
            "name": "The middleware pipeline",
            "hash": "#c2",
            "desc": "Express is a list of functions run in order. Each gets (req, res, next) . Call next() to continue, send a response to stop, or call next(err) to jump to error handling. Registration order is execution order \u2014 that's the source of most Express bugs.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Express identifies error middleware by arity \u2014 it counts the function's parameters . Write (err, req, res) with three params and Express treats it as normal middleware, so your error handler silently never fires. Same class of bug: register the error handler before your routes and it can never catch them, because it's already run.",
            "isTrap": true
          },
          {
            "name": "Async errors \u2014 the one that bites",
            "hash": "#c2",
            "desc": "Express 4 catches thrown errors in synchronous handlers only. An async handler that rejects produces an unhandled rejection: the client hangs until timeout, and nothing reaches your error middleware.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Distinguish operational errors (bad input, missing record, expired token \u2014 expected, handle and continue) from programmer errors (undefined property, blown invariant \u2014 a bug, state is now suspect). On uncaughtException , the correct move is to log and exit , letting PM2 or the container restart you. Continuing after an unknown cras",
            "isTrap": false
          },
          {
            "name": "REST design that survives review",
            "hash": "#c2",
            "desc": "Idempotency: GET, PUT and DELETE produce the same end state when repeated; POST doesn't. This isn't trivia \u2014 it's exactly why a client can safely retry a GET on a flaky mobile connection but must use an idempotency key to retry a POST.",
            "links": [],
            "tip": "\ud83d\udcca ML / Data Eng Defense For SahYatri's telemetry history, cursor pagination isn't a preference \u2014 it's required. Rows arrive continuously, so between page 1 and page 2 the offsets have already shifted and a user paging backwards through history sees the same reading twice while missing another. Keyset on (recorded_at, id) is stable under concurrent ",
            "isTrap": false
          }
        ]
      },
      {
        "title": "03 Real-time communication & Socket.IO",
        "topics": [
          {
            "name": "Pick the lightest thing that works",
            "hash": "#c3",
            "desc": "Master Pick the lightest thing that works core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Ask who initiates. Only the server pushes \u2192 SSE , and it's underrated: it runs over plain HTTP, reconnects automatically, and needs no special proxy config. Both sides push \u2192 WebSocket. Chess qualifies genuinely \u2014 both players send moves, and the server also emits join, disconnect and spectator events unprompted. A dashboard that o",
            "isTrap": false
          },
          {
            "name": "How Socket.IO actually connects",
            "hash": "#c3",
            "desc": "Engine.IO starts with HTTP long-polling , then attempts an upgrade to WebSocket once the connection is proven. That's why it works behind corporate proxies that block ws:// \u2014 it degrades instead of failing.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Socket memory leaks. Two versions worth knowing. Server-side: never removing a room from rooms after both players leave \u2014 the object grows forever, and it looks like a slow memory climb with no obvious cause. Client-side: registering socket.on('state', ...) inside a React component without removing it on unmount, so every remount s",
            "isTrap": true
          },
          {
            "name": "Scaling real-time horizontally",
            "hash": "#c3",
            "desc": "The moment you run two instances, rooms = {} becomes a bug: instance A has no idea a socket on instance B joined the same game. Two things must change.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Be honest that single-instance is the right choice for a project at this scale \u2014 and then show you know the exact upgrade path. \"The adapter solves message routing; it does not solve shared state. If two instances both hold a board in local memory, they diverge. Redis has to become the single source of truth for the FEN, and then t",
            "isTrap": false
          }
        ]
      },
      {
        "title": "04 Auth, JWT & access control",
        "topics": [
          {
            "name": "Anatomy of a token",
            "hash": "#c4",
            "desc": "Three base64url segments joined by dots: header (algorithm), payload (claims \u2014 sub , role , tenantId , exp , iat ), signature .",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap A JWT is signed, not encrypted. Anyone can decode the payload \u2014 paste it into jwt.io and read it. Signing proves it wasn't altered ; it hides nothing. So never put anything sensitive in the claims. Related classic: the alg: none attack, where a client submits an unsigned token hoping the server trusts the header. Always verify agai",
            "isTrap": true
          },
          {
            "name": "Access + refresh token rotation",
            "hash": "#c4",
            "desc": "The problem: a stateless JWT stays valid until it expires, so you can't really log someone out. The standard resolution is two tokens with different jobs.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Reuse detection is elegant because it turns theft into a detectable event rather than a silent one. A refresh token is single-use, so if the server ever sees one presented twice, exactly one of the two holders is an attacker \u2014 and since you can't tell which, you kill the whole family and force a re-login. The user is mildly inconve",
            "isTrap": false
          },
          {
            "name": "RBAC and tenant isolation",
            "hash": "#c4",
            "desc": "Master RBAC and tenant isolation core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense Two rules that make multi-tenancy actually safe. First: the tenant ID comes only from the verified token \u2014 never from a request body, query string or header. If a client can send tenantId , a client can send someone else's. Second: make isolation structural, not disciplined. Relying on every developer to remember a tenantId filter gu",
            "isTrap": false
          }
        ]
      },
      {
        "title": "05 Interview defense bank",
        "topics": [
          {
            "name": "Track A \u2014 SDE",
            "hash": "#c5",
            "desc": "Master Track A \u2014 SDE core concepts and defense.",
            "links": []
          },
          {
            "name": "Track B \u2014 ML / AI / Data Engineering",
            "hash": "#c5",
            "desc": "Master Track B \u2014 ML / AI / Data Engineering core concepts and defense.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "packspec",
    "title": "Packspec Architecture",
    "icon": "\ud83d\udce6",
    "accent": "#10b981",
    "url": "/packspec-architecture-interview-defense.html",
    "phases": [
      {
        "title": "Section 1 \u2014 System & Endpoint Matrix",
        "topics": [
          {
            "name": "System Overview",
            "hash": "#overview",
            "desc": "Master the System Overview core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 1 \u2014 Product Management",
            "hash": "#mod1",
            "desc": "Master the Module 1 \u2014 Product Management core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 2 \u2014 Auth & IAM",
            "hash": "#mod2",
            "desc": "Master the Module 2 \u2014 Auth & IAM core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 3 \u2014 Component Management",
            "hash": "#mod3",
            "desc": "Master the Module 3 \u2014 Component Management core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 4 \u2014 Multi-Tenant Onboarding",
            "hash": "#mod4",
            "desc": "Master the Module 4 \u2014 Multi-Tenant Onboarding core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 5 \u2014 Workflow Governance",
            "hash": "#mod5",
            "desc": "Master the Module 5 \u2014 Workflow Governance core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 6 \u2014 Client Module Mapping",
            "hash": "#mod6",
            "desc": "Master the Module 6 \u2014 Client Module Mapping core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 7 \u2014 Component Workflow Isolation",
            "hash": "#mod7",
            "desc": "Master the Module 7 \u2014 Component Workflow Isolation core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 8 \u2014 Workflow Assignment/Lifecycle",
            "hash": "#mod8",
            "desc": "Master the Module 8 \u2014 Workflow Assignment/Lifecycle core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Module 9 \u2014 Snapshot Versioning Engine",
            "hash": "#mod9",
            "desc": "Master the Module 9 \u2014 Snapshot Versioning Engine core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Section 2 \u2014 Architectural Pillars",
        "topics": [
          {
            "name": "Pillar A \u2014 Multi-Tenant Isolation",
            "hash": "#pillar-a",
            "desc": "Master the Pillar A \u2014 Multi-Tenant Isolation core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Pillar B \u2014 Transactions & Leak Prevention",
            "hash": "#pillar-b",
            "desc": "Master the Pillar B \u2014 Transactions & Leak Prevention core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Pillar C \u2014 Snapshot Versioning Engine",
            "hash": "#pillar-c",
            "desc": "Master the Pillar C \u2014 Snapshot Versioning Engine core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Pillar D \u2014 SQL \u2192 MongoDB Mental Model",
            "hash": "#pillar-d",
            "desc": "Master the Pillar D \u2014 SQL \u2192 MongoDB Mental Model core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Section 3 \u2014 QA Callout Bank",
        "topics": [
          {
            "name": "QA \u2014 Multi-Tenancy",
            "hash": "#qa-a",
            "desc": "Master the QA \u2014 Multi-Tenancy core concepts and interview answers.",
            "links": []
          },
          {
            "name": "QA \u2014 Transactions",
            "hash": "#qa-b",
            "desc": "Master the QA \u2014 Transactions core concepts and interview answers.",
            "links": []
          },
          {
            "name": "QA \u2014 Versioning Engine",
            "hash": "#qa-c",
            "desc": "Master the QA \u2014 Versioning Engine core concepts and interview answers.",
            "links": []
          },
          {
            "name": "QA \u2014 Data Modeling",
            "hash": "#qa-d",
            "desc": "Master the QA \u2014 Data Modeling core concepts and interview answers.",
            "links": []
          },
          {
            "name": "QA \u2014 Named Scenarios",
            "hash": "#qa-scenarios",
            "desc": "Master the QA \u2014 Named Scenarios core concepts and interview answers.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "flask-fastapi",
    "title": "Flask & FastAPI",
    "icon": "\u26a1",
    "accent": "#009688",
    "url": "/python-flask-fastapi.html",
    "phases": [
      {
        "title": "01 WSGI vs ASGI & concurrency models",
        "topics": [
          {
            "name": "The two interfaces",
            "hash": "#c1",
            "desc": "WSGI (Flask) is a synchronous contract: one callable takes a request, returns a response, and owns its worker for the entire duration . Wait 200 ms on a database and that worker does nothing else for 200 ms.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Async does not make anything faster \u2014 it makes waiting cheaper. A route that spends 200 ms in a matrix multiply takes 200 ms either way; async can't parallelize it, because there's still one thread and one GIL. A route that spends 200 ms waiting on the USDA API can overlap with hundreds of others. The correct question is never \"is ",
            "isTrap": false
          },
          {
            "name": "Workers, threads and the GIL",
            "hash": "#c1",
            "desc": "The GIL allows one thread to execute Python bytecode at a time per process . Two consequences that decide your deployment:",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap The 4 GB arithmetic. \"Set --workers 8 for throughput\" is the wrong instinct for ML serving. Gunicorn workers are separate processes with separate memory \u2014 a 500 MB model loaded in 8 workers is 4 GB of RAM for eight identical copies. In a container with a 2 GB limit, the OOM killer takes workers down and the failures look random. Fo",
            "isTrap": true
          }
        ]
      },
      {
        "title": "02 FastAPI, Pydantic & dependency injection",
        "topics": [
          {
            "name": "Pydantic V2 does three jobs",
            "hash": "#c2",
            "desc": "Master Pydantic V2 does three jobs core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight The underrated win isn't validation \u2014 it's that the schema is the contract, the docs and the types simultaneously. One BaseModel generates the OpenAPI spec, so the frontend integrates without you writing a spec by hand and without the spec drifting from reality. Pydantic V2's core is written in Rust, which is why it's fast enough t",
            "isTrap": false
          },
          {
            "name": "File uploads: UploadFile vs bytes",
            "hash": "#c2",
            "desc": "Master File uploads: UploadFile vs bytes core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Declaring image: bytes = File(...) looks harmless and is a memory bomb \u2014 FastAPI reads the entire body into RAM before your function starts, so ten concurrent 20 MB uploads is 200 MB with no upper bound you control. UploadFile spools to disk past a threshold (~1 MB) and keeps memory flat. And neither enforces a size limit \u2014 a clien",
            "isTrap": true
          },
          {
            "name": "Dependency injection with Depends",
            "hash": "#c2",
            "desc": "Master Dependency injection with Depends core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense Across 20+ routes the pattern that scales is router-level dependencies plus dependency factories . Attach require_role(\"admin\") once to the admin router and every route under it inherits the check \u2014 you cannot forget it on a new endpoint, because you'd have to actively register the route somewhere else. That's the same principle as a",
            "isTrap": false
          },
          {
            "name": "The async def vs def rule",
            "hash": "#c2",
            "desc": "Master The async def vs def rule core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap This is the counter-intuitive one, and it's a favourite: the \"modern\" choice is wrong. Writing async def around a synchronous model call blocks the entire event loop \u2014 every other request on that worker stalls for the full inference. Writing plain def lets FastAPI run it in a threadpool and the loop stays free. So for CPU-bound inf",
            "isTrap": true
          }
        ]
      },
      {
        "title": "03 Flask architecture & contexts",
        "topics": [
          {
            "name": "The two contexts",
            "hash": "#c3",
            "desc": "Both are thread-local proxies . request is a global you can import anywhere, yet it resolves to this thread's request \u2014 which is exactly why Flask's synchronous, thread-per-request model is the assumption baked into its design.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Working outside of application context.\" Everyone hits it; few can explain it. It means you touched current_app or g when no context was pushed \u2014 typically in a background thread, a CLI command, or at import time. Fix: with app.app_context(): . The deeper version: g is not global state despite the name. It's per-context, so a valu",
            "isTrap": true
          },
          {
            "name": "Blueprints",
            "hash": "#c3",
            "desc": "Master Blueprints core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense Flask was the right call for Chess-AI precisely because the workload is CPU-bound and stateless. FastAPI's async advantage is worth nothing when the endpoint never waits on I/O \u2014 it computes a move and returns. Meanwhile Flask's synchronous per-worker model gives clean isolation: one slow search occupies one worker, and Gunicorn's --",
            "isTrap": false
          }
        ]
      },
      {
        "title": "04 Serving ML models in production",
        "topics": [
          {
            "name": "Load once, at startup",
            "hash": "#c4",
            "desc": "The single most common ML-serving bug is loading the model inside the request handler. A ResNet-50 checkpoint is seconds of disk read and hundreds of MB \u2014 per request that's catastrophic, and it usually ships because it works fine with one test user.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Two one-line bugs that both produce silently wrong or slowly dying services: Forgetting model.eval() \u2014 dropout stays active at inference, so the same image returns different predictions on each call. Nothing errors. You just have a randomly wrong model. Forgetting torch.no_grad() / inference_mode() \u2014 PyTorch builds an autograd grap",
            "isTrap": true
          },
          {
            "name": "Fallback cascades",
            "hash": "#c4",
            "desc": "Every ML service should degrade rather than fail. The pattern across all your projects is the same three tiers:",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Retries make things worse when the upstream is overloaded rather than flaky \u2014 three clients each retrying twice is triple the load on a service already struggling. That's what a circuit breaker fixes: after N consecutive failures the breaker opens and calls fail instantly for a cooldown, going straight to the fallback without touch",
            "isTrap": false
          }
        ]
      },
      {
        "title": "05 Interview defense bank",
        "topics": [
          {
            "name": "Track A \u2014 SDE",
            "hash": "#c5",
            "desc": "Master Track A \u2014 SDE core concepts and defense.",
            "links": []
          },
          {
            "name": "Track B \u2014 ML / AI / Data Engineering",
            "hash": "#c5",
            "desc": "Master Track B \u2014 ML / AI / Data Engineering core concepts and defense.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "aiml-stack",
    "title": "AI/ML Stack",
    "icon": "\ud83e\udde0",
    "accent": "#a855f7",
    "url": "/ai-ml-cv-llm-stack.html",
    "phases": [
      {
        "title": "01 ML & Deep Learning Foundations",
        "topics": [
          {
            "name": "Loss Functions",
            "hash": "#m1",
            "desc": "A loss function is just the definition of \"wrong.\" Pick the one whose shape matches your output.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Why not MSE for classification?\" Two reasons, and they want both: (1) MSE with a sigmoid gives you a non-convex surface with flat regions, so gradients vanish exactly when the model is confidently wrong. (2) Cross-entropy's gradient through softmax simplifies to (prediction \u2212 target) \u2014 clean, proportional to the error, no saturati",
            "isTrap": true
          },
          {
            "name": "Gradient Descent & Optimizers",
            "hash": "#m1",
            "desc": "Master Gradient Descent & Optimizers core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udca1 CP Intuition Backprop is memoized DP on a DAG. The computational graph is your DAG, each node's gradient is a subproblem, and the chain rule is the transition. Forward pass = fill the table with activations. Backward pass = one reverse topological sweep reusing every stored value. Without memoization you'd recompute shared subpaths exponentially ",
            "isTrap": false
          },
          {
            "name": "Bias\u2013Variance",
            "hash": "#m1",
            "desc": "Master Bias\u2013Variance core concepts and defense.",
            "links": []
          },
          {
            "name": "Regularization",
            "hash": "#m1",
            "desc": "Master Regularization core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Inverted dropout. \"What does dropout do at inference?\" Nothing \u2014 it's off. The follow-up is the real question: why doesn't turning it off change the activation scale? Because PyTorch scales surviving activations up by 1/(1\u2212p) during training , so expected output already matches inference. That's inverted dropout. If you forget mode",
            "isTrap": true
          },
          {
            "name": "CNNs & ResNet",
            "hash": "#m1",
            "desc": "Output size, the formula they ask you to derive on a whiteboard:",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Why skip connections fix vanishing gradients, stated precisely: differentiating F(x) + x gives F'(x) + 1 . That +1 is a gradient highway \u2014 even if F'(x) collapses toward zero, the gradient still reaches earlier layers at full strength instead of being multiplied down through 50 layers. It also makes identity easy to learn: if a blo",
            "isTrap": false
          },
          {
            "name": "Transfer Learning \u2014 the Nutri-Vision lifecycle",
            "hash": "#m1",
            "desc": "Master Transfer Learning \u2014 the Nutri-Vision lifecycle core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Why must you use ImageNet's normalization stats \u2014 mean=[0.485,0.456,0.406] , std=[0.229,0.224,0.225] ?\" Because the frozen filters were trained on inputs in that exact distribution. Feed them differently-scaled pixels and every early activation shifts, so the features you're relying on are subtly wrong. Silent accuracy loss with n",
            "isTrap": true
          }
        ]
      },
      {
        "title": "02 NLP, Custom NER & Entity Resolution",
        "topics": [
          {
            "name": "The classical pipeline",
            "hash": "#m2",
            "desc": "Both are sparse and order-blind \u2014 which is exactly the gap dense embeddings fill.",
            "links": []
          },
          {
            "name": "spaCy NER vs Transformer NER",
            "hash": "#m2",
            "desc": "Master spaCy NER vs Transformer NER core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udca1 CP Intuition spaCy's hash embeddings are a Bloom filter trick you already understand from hashing problems: instead of a vocabulary-sized lookup table, hash each word into a small fixed table with a few hash functions. Memory is constant regardless of vocabulary size, and there's no out-of-vocabulary cliff \u2014 a food word it never saw still gets a ",
            "isTrap": false
          },
          {
            "name": "Training a custom FOOD entity",
            "hash": "#m2",
            "desc": "Annotations are character offsets, not tokens:",
            "links": []
          },
          {
            "name": "Precision, Recall, F1 \u2014 say it in product terms",
            "hash": "#m2",
            "desc": "Master Precision, Recall, F1 \u2014 say it in product terms core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udcca ML Track Defense Which one do you optimize? Have an opinion, and tie it to the product. For a food logger I'd favour recall at the NER stage \u2014 a missed item silently undercounts calories, while a false positive gets filtered downstream when the USDA fuzzy match returns a low confidence score. That's the real defense: my pipeline has a second filt",
            "isTrap": false
          },
          {
            "name": "Hybrid extraction \u2014 the core design decision",
            "hash": "#m2",
            "desc": "One sentence, two problems with opposite requirements:",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Why not one LLM call for the whole sentence?\" Don't say \"it's slower.\" Say: a nutrition app must never invent a number. An LLM will happily return a confident, wrong gram value with no signal that it guessed. My regex returns None when it doesn't recognize a format \u2014 a visible failure the UI can handle \u2014 and every macro number com",
            "isTrap": true
          },
          {
            "name": "Entity resolution: fuzzy string vs embeddings",
            "hash": "#m2",
            "desc": "Master Entity resolution: fuzzy string vs embeddings core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense The honest framing of why string similarity was the right call: the USDA search endpoint already returns a candidate shortlist . So resolution isn't \"search 300k foods\" \u2014 it's \"rank 10 candidates.\" At that size, SequenceMatcher costs microseconds and needs no extra infrastructure in the request path. Embeddings would add a model load",
            "isTrap": false
          }
        ]
      },
      {
        "title": "03 Computer Vision & Edge Inference",
        "topics": [
          {
            "name": "One-stage vs two-stage detectors",
            "hash": "#m3",
            "desc": "Master One-stage vs two-stage detectors core concepts and defense.",
            "links": []
          },
          {
            "name": "YOLO internals",
            "hash": "#m3",
            "desc": "The image is divided into a grid. Each cell predicts boxes as (x, y, w, h, objectness) plus class probabilities. Anchor boxes are prior shapes \u2014 the network predicts an offset from an anchor rather than absolute coordinates, which is a far easier regression target.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap These are two different thresholds and interviewers love watching people conflate them. Confidence threshold decides whether a box exists at all. IoU/NMS threshold decides whether two surviving boxes are duplicates of the same object. Turning down confidence gives you more detections; turning down NMS IoU gives you fewer duplicates",
            "isTrap": true
          },
          {
            "name": "Model size trade-off",
            "hash": "#m3",
            "desc": "Master Model size trade-off core concepts and defense.",
            "links": []
          },
          {
            "name": "Making it work on a Raspberry Pi 4",
            "hash": "#m3",
            "desc": "A Pi 4 has an ARM Cortex-A72 CPU and no discrete GPU . Every millisecond is bought deliberately:",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Why INT8 barely hurts accuracy: trained weights cluster in a narrow range around zero, so 256 well-placed levels represent them nearly as well as 4 billion. The trick is calibration \u2014 run a few hundred representative images through, record the actual min/max activation range per layer, and map that range to INT8 rather than a guess",
            "isTrap": false
          }
        ]
      },
      {
        "title": "04 Generative AI, Prompt Chaining & RAG",
        "topics": [
          {
            "name": "Self-attention, without the math anxiety",
            "hash": "#m4",
            "desc": "Every token emits three vectors: a Query (\"what am I looking for?\"), a Key (\"what do I offer?\"), and a Value (\"here's my content\"). Dot every query against every key to get relevance scores, softmax them into weights, and take a weighted sum of values.",
            "links": [],
            "tip": "\ud83d\udca1 CP Intuition Attention is a soft hash-map lookup . A dictionary returns the value for the one key that matches exactly. Attention returns a blend of all values, weighted by how well each key matches \u2014 differentiable, so it can be learned. And the cost is the thing to remember: every token attends to every token, so it's O(n\u00b2) in sequence length. ",
            "isTrap": false
          },
          {
            "name": "Adaptation strategies",
            "hash": "#m4",
            "desc": "LoRA freezes the base model and trains two thin matrices whose product is added to a weight matrix \u2014 training a fraction of a percent of parameters, and adapters swap in and out without touching the base. QLoRA adds a 4-bit quantized base so it fits on one consumer GPU.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Fine-tune it so it stops hallucinating.\" Fine-tuning teaches behaviour and format , not facts . Training on your documents makes the model sound like them; it does not make it recall them reliably, and it will still invent confidently. Facts belong in the context window \u2014 that's RAG. Say this cleanly and you're ahead of most candi",
            "isTrap": true
          },
          {
            "name": "RecrutAI: the prompt-chaining state machine",
            "hash": "#m4",
            "desc": "The insight to lead with: the hard part was control flow, not the model's writing ability. Each answer is scored, and the score decides the next state:",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense The reliability story, which is the actually impressive part. Gemini is a third-party API subject to rate limits, timeouts and regional blocks \u2014 so it's treated as an unreliable dependency, not a function call: 6-second timeout \u2014 a hard ceiling, because a hung request is worse than a degraded answer. 2 retries, exponential backoff (1",
            "isTrap": false
          },
          {
            "name": "RAG pipeline",
            "hash": "#m4",
            "desc": "Ingest \u2192 chunk \u2192 embed \u2192 index \u2192 retrieve \u2192 generate. Chunking is where most RAG systems are quietly won or lost.",
            "links": [],
            "tip": "\ud83d\udcca ML Track Defense Chunk size and overlap, with the reasoning attached. For multi-page PDFs I used recursive character splitting at roughly [1000] characters with [150\u2013200] overlap. The logic, which matters more than the number: Too small \u2192 a chunk retrieves without the context that makes it meaningful (\"it must be renewed annually\" \u2014 what must?). ",
            "isTrap": false
          },
          {
            "name": "Multi-agent orchestration (LangChain + CrewAI)",
            "hash": "#m4",
            "desc": "Splitting one large task into specialized agents with a shared state:",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"So agents are better?\" No \u2014 agents multiply your failure modes: loops, drift, compounding errors from step one, and cost that's hard to predict. State your default plainly: single-pass RAG unless I can name the specific step single-pass cannot do. Multi-hop questions and cross-document comparison are real cases. \"Summarize this co",
            "isTrap": true
          }
        ]
      },
      {
        "title": "05 Search AI & Deterministic Game Engines",
        "topics": [
          {
            "name": "Minimax",
            "hash": "#m5",
            "desc": "Two-player zero-sum with perfect information. You maximise, the opponent minimises, recursively down to a depth limit, then a heuristic scores the leaf.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap \"Does pruning change the move it picks?\" No. Alpha-beta is provably identical to plain minimax at the same depth \u2014 it only skips work that could not affect the result. What does vary is speed, and it varies enormously: best-move-first ordering approaches the b^(d/2) bound, worst-first prunes essentially nothing. That's why move ord",
            "isTrap": true
          },
          {
            "name": "Evaluation function",
            "hash": "#m5",
            "desc": "A leaf isn't a finished game, so you score it with a heuristic \u2014 two parts:",
            "links": [],
            "tip": "\ud83d\udcca ML Track Defense Why hand-crafted heuristics rather than a learned evaluator? Because chess rules are fully known and enumerable, so search gives you correctness that learning would only approximate \u2014 and a PST is inspectable, so a wrong move is debuggable. Learned evaluation (AlphaZero-style) wins only at scale: enormous self-play compute, and y",
            "isTrap": false
          },
          {
            "name": "Integrating Stockfish",
            "hash": "#m5",
            "desc": "Master Integrating Stockfish core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense The three-tier degradation is the design worth naming: opening book \u2192 Stockfish \u2192 in-process minimax. Each tier is faster-but-dumber than the one before, and every tier is local, so an AI move never depends on a third-party network call. The failure mode of a missing Stockfish binary is a weaker opponent, not a broken game. That's th",
            "isTrap": false
          }
        ]
      },
      {
        "title": "06 Interview Defense Bank",
        "topics": [
          {
            "name": "Track A \u2014 SDE (integration & performance)",
            "hash": "#m6",
            "desc": "Master Track A \u2014 SDE (integration & performance) core concepts and defense.",
            "links": []
          },
          {
            "name": "Track B \u2014 ML / AI / Data Engineering",
            "hash": "#m6",
            "desc": "Master Track B \u2014 ML / AI / Data Engineering core concepts and defense.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "databases-cloud",
    "title": "Databases & Cloud",
    "icon": "\u2601\ufe0f",
    "accent": "#f59e0b",
    "url": "/databases-data-eng-cloud.html",
    "phases": [
      {
        "title": "01 Engines & practical data modeling",
        "topics": [
          {
            "name": "Embed or reference?",
            "hash": "#c1",
            "desc": "Master Embed or reference? core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap The 16 MB BSON ceiling and the unbounded array anti-pattern. Embedding a revision history inside a spec document feels natural \u2014 until a heavily-edited spec accumulates hundreds of revisions and the document approaches 16 MB. The write then fails , in production, on your most active customer, which is the worst possible discovery p",
            "isTrap": true
          },
          {
            "name": "Normalization vs pragmatic denormalization",
            "hash": "#c1",
            "desc": "When to break it deliberately: strict 3NF forces joins on every read. On a dashboard aggregating millions of telemetry rows, joining to routes on each one is measurable cost for a value that changes almost never. Copying route_name onto the row is a real optimization \u2014 you accept updating it in two ",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense If asked \"could Packspec have been Postgres?\" \u2014 say yes, honestly, and show the design: strict columns for tenant_id , role , workflow state and timestamps; a JSONB column for the variable spec body; GIN index for field queries. That would have given stronger relational reporting. Mongo Atlas was the team's existing stack, which is a",
            "isTrap": false
          }
        ]
      },
      {
        "title": "02 Transactions, concurrency & storage internals",
        "topics": [
          {
            "name": "MVCC \u2014 the idea both engines share",
            "hash": "#c2",
            "desc": "Multi-Version Concurrency Control: an update writes a new version rather than overwriting in place. Readers see the version that was current when their transaction started. The payoff is the line worth memorizing: readers never block writers, and writers never block readers.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Long-running transactions are a silent killer in Postgres. An idle-in-transaction session holds a snapshot, which means VACUUM cannot reclaim dead tuples newer than it \u2014 for the whole database . Tables bloat, indexes bloat, queries slow down, and the cause is one forgotten open transaction in a debug console. Related in Mongo: the ",
            "isTrap": true
          },
          {
            "name": "Multi-tenant isolation patterns",
            "hash": "#c2",
            "desc": "Master Multi-tenant isolation patterns core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense writeConcern: majority is the clause to explain rather than recite: it means the write is acknowledged only once a majority of replica-set members have it, so a primary failover cannot roll your commit back. Combined with readConcern: snapshot , the transaction reads one consistent point-in-time view and either every document lands o",
            "isTrap": false
          }
        ]
      },
      {
        "title": "03 Indexing & query optimization",
        "topics": [
          {
            "name": "Compound indexes: ESR and the prefix rule",
            "hash": "#c3",
            "desc": "ESR \u2014 order columns as E quality, then S ort, then R ange. Equality narrows to a contiguous block, sort is then already satisfied, range scans within it.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap The leftmost prefix rule. An index on (bus_id, recorded_at) serves queries on bus_id and on bus_id + recorded_at \u2014 but not on recorded_at alone. You cannot skip a prefix column, because the index is sorted by the first column first. People add a compound index, watch one query stay slow, and can't see why. Two more that cost real i",
            "isTrap": true
          },
          {
            "name": "Reading a query plan",
            "hash": "#c3",
            "desc": "The single most useful signal in either engine: compare rows examined to rows returned. Close together is healthy; orders apart means you're scanning and discarding.",
            "links": []
          },
          {
            "name": "Connection pooling",
            "hash": "#c3",
            "desc": "Postgres forks a process per connection \u2014 roughly 5\u201310 MB each, plus scheduling cost. So connections are a scarce resource, not a free one.",
            "links": []
          }
        ]
      },
      {
        "title": "04 Ingestion, telemetry & pipelines",
        "topics": [
          {
            "name": "Synchronous writes vs a queue",
            "hash": "#c4",
            "desc": "Start simple and honest: at SahYatri's real volume, direct writes were correct. The queue is what you reach for when a database slowdown starts causing data loss rather than just slowness.",
            "links": [],
            "tip": "\ud83d\udcca ML / Data Eng Defense Batching is the highest-leverage change and it costs almost nothing. Every commit is an fsync; 1,000 single-row inserts is 1,000 fsyncs plus 1,000 round trips plus 1,000 index updates. Buffer for a couple of seconds and write one multi-row INSERT \u2014 or COPY for real volume, which skips per-row parsing entirely \u2014 and you routi",
            "isTrap": false
          },
          {
            "name": "Late data, retries and idempotency",
            "hash": "#c4",
            "desc": "A bus loses signal for two hours and uploads a backlog. Three things must hold:",
            "links": [],
            "tip": "\ud83d\udca1 Senior Insight Partitioning pays three separate dividends and it's worth naming all three: query pruning (a last-7-days query skips every other partition without reading it), small hot indexes (writes only touch the current partition, so the index that must stay in cache is one month's worth, not five years'), and instant retention \u2014 dropping old",
            "isTrap": false
          },
          {
            "name": "ETL vs ELT",
            "hash": "#c4",
            "desc": "ETL transforms before loading; ELT lands raw and transforms in the warehouse.",
            "links": []
          }
        ]
      },
      {
        "title": "05 Cloud, Docker & CI/CD",
        "topics": [
          {
            "name": "Service mapping",
            "hash": "#c5",
            "desc": "Object vs block: S3 is HTTP, effectively infinite, no filesystem \u2014 right for model weights, uploads, backups. EBS is a disk attached to one instance \u2014 right for a database's data directory. Model weights go in object storage; a Postgres volume does not.",
            "links": []
          },
          {
            "name": "Multi-stage Dockerfile",
            "hash": "#c5",
            "desc": "Master Multi-stage Dockerfile core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udea8 Interview Trap Docker layers are immutable, so a deleted secret is still in the image. COPY .env . && RUN use-it && RUN rm .env leaves the secret permanently readable in the earlier layer \u2014 anyone who pulls the image can extract it with docker history . Deleting a file in a later layer hides it from the filesystem, not from the image. Real fixes:",
            "isTrap": true
          },
          {
            "name": "Git LFS for model artifacts",
            "hash": "#c5",
            "desc": "Git stores a full copy of every version forever, and binary .pth files don't delta-compress. A 100 MB checkpoint committed ten times is a gigabyte in history that every clone downloads forever \u2014 and rewriting history to remove it is painful. LFS replaces the file with a pointer; .gitattributes holds",
            "links": [],
            "tip": "\ud83d\udcca ML / Data Eng Defense The distinction worth stating: LFS gives versioning tied to code; object storage gives scale. With LFS, checking out the commit that produced a result also checks out the exact weights that produced it \u2014 reproducibility with zero manual bookkeeping, versus an S3 bucket where matching model_v3_final_FINAL.pth to a commit is s",
            "isTrap": false
          },
          {
            "name": "CI/CD and API test automation",
            "hash": "#c5",
            "desc": "Master CI/CD and API test automation core concepts and defense.",
            "links": [],
            "tip": "\ud83d\udee1\ufe0f SDE Defense Multi-tenant isolation is exactly the property unit tests cannot verify. \"Can tenant A read tenant B's spec?\" is only answerable by a real request carrying A's real token against B's real resource ID, expecting 403. That's an integration test, and it's the highest-value one in the suite \u2014 it guards the failure with actual consequence",
            "isTrap": false
          },
          {
            "name": "Linux diagnostics",
            "hash": "#c5",
            "desc": "2>&1 means \"send stderr wherever stdout is going,\" so > out.log 2>&1 captures both.",
            "links": []
          }
        ]
      },
      {
        "title": "06 Interview defense bank",
        "topics": [
          {
            "name": "Track A \u2014 SDE",
            "hash": "#c6",
            "desc": "Master Track A \u2014 SDE core concepts and defense.",
            "links": []
          },
          {
            "name": "Track B \u2014 ML / AI / Data Engineering",
            "hash": "#c6",
            "desc": "Master Track B \u2014 ML / AI / Data Engineering core concepts and defense.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "sde-defense",
    "title": "SDE Resume Defense",
    "icon": "\ud83d\udee1\ufe0f",
    "accent": "#22d3ee",
    "url": "/AmanVerma-SDE-Interview-Defense.html",
    "phases": [
      {
        "title": "Pre-Interview Defense Checks",
        "topics": [
          {
            "name": "The 3 critical claims to handle (SahYatri, Chessify, State)",
            "hash": "#alert",
            "desc": "Master the defense for: SahYatri edge inference vs API, move validation vs clock cheat vectors, and in-memory vs persistent state.",
            "tip": "Say these yourself before the interviewer digs into the repo \u2014 transparency turns a potential red flag into proof of deep understanding.",
            "isTrap": true,
            "links": []
          }
        ]
      },
      {
        "title": "Work Experience (DigiFlute Media Lab)",
        "topics": [
          {
            "name": "20+ REST endpoints, PHP + Atlas, Agile team of 8",
            "hash": "#exp1",
            "desc": "Explain router architecture, controller-service pattern, MongoDB Atlas connection pooling, and multi-tenant schema isolation.",
            "tip": "Explain why PHP was chosen (existing codebase/middleware) and how you structured repository layers to query MongoDB cleanly.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "JWT, RBAC across 5 tiers, multi-tenant security",
            "hash": "#exp2",
            "desc": "Explain company-scoped tenant isolation, 5 role tiers, middleware token verification, and transaction-safe quota enforcement.",
            "tip": "Every query must include company_id in the filter \u2014 explain how middleware injected this context automatically.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "Workflow states, versioning, cascading soft deletes",
            "hash": "#exp3",
            "desc": "Defend document-native snapshotting, draft-to-published state transitions, audit logging, and PHPUnit / Postman test coverage.",
            "tip": "Explain why soft deletes were chosen over hard deletes for regulatory compliance and audit trails.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Project: Chessify AI",
        "topics": [
          {
            "name": "Room-based Socket.IO, server-side move validation",
            "hash": "#ch1",
            "desc": "Defend room lifecycle in Socket.IO, reconnect handling, late-joiner board replay, and chess.js server-authoritative move validation.",
            "tip": "Never trust the client: client sends only {from, to, promotion}; server validates against the authoritative board state.",
            "isTrap": true,
            "links": []
          },
          {
            "name": "Flask AI service, Stockfish 1800, minimax depth 3",
            "hash": "#ch2",
            "desc": "Explain decoupled Flask microservice, Polyglot opening book, Stockfish UCI subprocess communication, and Minimax alpha-beta fallback.",
            "tip": "Depth 3 minimax with alpha-beta pruning evaluates ~5,000-10,000 positions/sec in Python; fallback triggers if Stockfish fails.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "Deep Dive: scaling, concurrency & state recovery",
            "hash": "#ch3",
            "desc": "Answer 3 levels down: Redis pub/sub for multi-node Socket.IO, session persistence, and clock synchronization algorithms.",
            "tip": "Discuss NTP drift, server-stamped timestamps, and client ping round-trip time estimation.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Project: StudySync",
        "topics": [
          {
            "name": "Flutter on Android, iOS, web; v3.0.0 release",
            "hash": "#ss1",
            "desc": "Defend single-codebase Flutter architecture, state management (Provider/Riverpod), responsive UI, and daily active student usage at JIIT.",
            "tip": "Highlight conditional compilation and platform-specific adaptations for web vs mobile storage.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "Offline-first layer, Express + MongoDB admin panel",
            "hash": "#ss2",
            "desc": "Explain local caching strategy (shared_preferences / Hive), zero-network instant rendering, REST API sync, and JWT-authenticated admin updates.",
            "tip": "Explain optimistic UI updates vs server-authoritative reconciliation on reconnect.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Project: SahYatri (SDE Track)",
        "topics": [
          {
            "name": "Pre-defense check: What is actually deployed",
            "hash": "#sy0",
            "desc": "Acknowledge the repo architecture honestly: FastAPI backend running YOLO inference, communicating over HTTP from vehicle clients.",
            "tip": "State clearly how you would migrate from HTTP image POSTing to on-device NPU/TensorRT inference in a production revision.",
            "isTrap": true,
            "links": []
          },
          {
            "name": "YOLOv5n on the Pi at 15 FPS & Edge Considerations",
            "hash": "#sy1",
            "desc": "Discuss frame skipping, region-of-interest cropping, adaptive thresholding, and camera sensor capture bottlenecks.",
            "tip": "Explain why occupancy density count was transmitted instead of raw streaming video (bandwidth & privacy).",
            "isTrap": false,
            "links": []
          },
          {
            "name": "PostgreSQL telemetry, React dashboard & team delivery",
            "hash": "#sy2",
            "desc": "Explain time-series indexing (BRIN / composite indexes), high-frequency ingestion, React dashboard polling/WebSockets, and 4-person team collaboration.",
            "tip": "Why PostgreSQL over MongoDB for SahYatri: structured GPS/occupancy logs with strict time-range query filters.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Achievements & Technical Honors",
        "topics": [
          {
            "name": "LeetCode Knight: 2094 peak rating, 1000+ problems",
            "hash": "#ach1",
            "desc": "Defend problem-solving patterns, 250-day streak, contests strategy, and top algorithmic paradigms (DP, Graphs, Trees, Heaps).",
            "tip": "Speak about contest time management, recognizing problem constraints, and writing clean, bug-free implementations under pressure.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "BitBox 5.0 (1st Place GDG), Innovate 3.0 & Certifications",
            "hash": "#ach2",
            "desc": "Walk through 24-36h hackathon execution: hardware-software integration, rapid MVP scoping, and team coordination.",
            "tip": "Focus on the real-world problem solved and measurable outcomes delivered during the competition.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Cross-Cutting SDE Interview Questions",
        "topics": [
          {
            "name": "\"You're ECE. Why software?\"",
            "hash": "#cross1",
            "desc": "Deliver a crisp, authentic 45-second answer connecting low-level hardware understanding to high-performance software engineering.",
            "tip": "Position ECE as a superpower for systems, memory hierarchy, cache efficiency, and edge/IoT software.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "System design questions tailored to your resume",
            "hash": "#cross2",
            "desc": "Prepare for: Design a real-time multiplayer game (Chessify scale-up), Design a multi-tenant SaaS backend (Packspec scale-up), and Time-series ingestion pipeline.",
            "tip": "Follow a strict framework: Functional/Non-functional Requirements -> API Design -> High-Level Architecture -> Deep-Dive & Bottlenecks.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "Thoughtful reverse-interviewing questions for them",
            "hash": "#cross3",
            "desc": "High-signal questions to ask the interviewer about engineering culture, deployment pipelines, on-call rotations, and tech stack choices.",
            "tip": "Ask about their biggest architecture refactoring in the last 12 months or how they balance velocity vs tech debt.",
            "isTrap": false,
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "ml-dataeng-defense",
    "title": "ML & Data Eng Resume Defense",
    "icon": "\ud83e\udd16",
    "accent": "#a78bfa",
    "url": "/AmanVerma-ML-DataEng-Interview-Defense.html",
    "phases": [
      {
        "title": "Pre-Interview Defense Checks",
        "topics": [
          {
            "name": "Four critical claims that need handling before interview",
            "hash": "#alert",
            "desc": "Master the defense for: SahYatri edge inference, Nutri-Vision custom ResNet-50 vs LogMeal API, RecrutAI 5 rubric dimensions, and validation benchmarks.",
            "tip": "Never claim 100% human-validated benchmarks if not measured \u2014 articulate your automated evaluation metrics and planned test suites.",
            "isTrap": true,
            "links": []
          }
        ]
      },
      {
        "title": "Work Experience (DigiFlute Media Lab)",
        "topics": [
          {
            "name": "20+ REST endpoints, document schema, query patterns",
            "hash": "#exp1",
            "desc": "Explain MongoDB document modeling, indexing strategy, data isolation across workspaces, and query optimization for high-throughput reads.",
            "tip": "Compare embedded documents vs normalized references in MongoDB Atlas for packaging specs.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "JWT, RBAC 5 tiers, atomic transactions",
            "hash": "#exp2",
            "desc": "Defend multi-document ACID transactions with WiredTiger engine, quota limits enforcement, and tenant permission verification.",
            "tip": "Explain transaction isolation levels and error handling / retry loops for transient write conflicts.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "Revision versioning, soft deletes, auditability",
            "hash": "#exp3",
            "desc": "Explain how historical version snapshots are indexed and queried without bloating active working sets, validated via PHPUnit.",
            "tip": "Discuss archiving strategies and TTL indexes for old audit snapshots.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Project: Nutri-Vision AI",
        "topics": [
          {
            "name": "Custom spaCy NER, hybrid extractor, USDA lookup",
            "hash": "#nv1",
            "desc": "Explain custom entity extraction training loop, BIO tagging format, regex quantity parsing, and fuzzy matching against USDA FoodData Central database.",
            "tip": "Highlight confidence scoring: if spaCy NER score < 0.75, fall back to rule-based ngram parser before database querying.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "ResNet-50 transfer learning, Git LFS, FastAPI",
            "hash": "#nv2",
            "desc": "Explain PyTorch transfer learning: freezing convolutional backbone, fine-tuning classification head, Git LFS weight versioning, and FastAPI async inference.",
            "tip": "Discuss data augmentation (random rotations, color jitter, cropping) and learning rate scheduling (AdamW with CosineAnnealing).",
            "isTrap": false,
            "links": []
          },
          {
            "name": "The LogMeal third-party API integration question",
            "hash": "#nv3",
            "desc": "Defend the dual path: your custom ResNet-50 model in Model_Image vs external LogMeal API used as a baseline and cloud provider.",
            "tip": "Explain the trade-offs: latency and offline edge execution of custom model vs broad multi-class coverage of external commercial APIs.",
            "isTrap": true,
            "links": []
          }
        ]
      },
      {
        "title": "Project: RecrutAI (LLM Systems)",
        "topics": [
          {
            "name": "Prompt-chaining state machine on Gemini 2.5 Flash",
            "hash": "#ra1",
            "desc": "Explain adaptive prompt-chaining state machine, dynamic question branching based on candidate responses, and evaluation across 5 rubric dimensions.",
            "tip": "Name the 5 rubric dimensions: Technical Depth, System Design, Problem Solving, Communication, and Code Quality / Edge Cases.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "Timeouts, backoff, deterministic fallbacks & audit",
            "hash": "#ra2",
            "desc": "Hardened LLM inference path: 6s timeouts, exponential backoff, JSON schema enforcement, regex fallbacks, and recruiter audit score matrices.",
            "tip": "Explain why deterministic structured output (Pydantic / Zod JSON schema) is critical for downstream branching logic.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "The hard questions: validity, prompt injection, state persistence",
            "hash": "#ra3",
            "desc": "Prepare for: How do you prevent candidates from jailbreaking/prompt injecting the interviewer? How do you handle context window overflow?",
            "tip": "Separate candidate input from system evaluation prompt with strict delimiters, and summarize earlier conversation turns to bound token count.",
            "isTrap": true,
            "links": []
          }
        ]
      },
      {
        "title": "Project: SahYatri (ML & Edge CV Track)",
        "topics": [
          {
            "name": "Pre-defense check: Honest code architecture",
            "hash": "#sy0",
            "desc": "Explain the actual pipeline: camera frame acquisition, POST to FastAPI YOLOv5 inference microservice, and telemetry ingestion.",
            "tip": "Be honest about the client-server split and explain how edge quantization (INT8 TensorRT/ONNX) would allow pure on-Pi execution.",
            "isTrap": true,
            "links": []
          },
          {
            "name": "Edge CV pipeline, YOLOv5n & adaptive thresholding",
            "hash": "#sy1",
            "desc": "Discuss YOLOv5n architecture, anchor boxes, NMS (Non-Maximum Suppression), lighting invariance, and adaptive confidence thresholding.",
            "tip": "Explain how varying vehicle lighting (tunnels, daylight, night) affects bounding box confidence and how adaptive thresholding mitigates false negatives.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "PostgreSQL time-series, telemetry ingest & team role",
            "hash": "#sy2",
            "desc": "Explain time-series schema design, connection pooling, high-frequency GPS + occupancy event streams, and React dashboard analytics.",
            "tip": "Discuss data aggregation: downsampling 3-second raw telemetry into 5-minute averages for long-term historical analytics.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Achievements & Technical Honors",
        "topics": [
          {
            "name": "LeetCode Knight, Hackathons & ML Bootcamps",
            "hash": "#ach1",
            "desc": "Discuss 2094 peak LeetCode rating (1000+ problems), BitBox 5.0 1st place, Innovate 3.0 Finalist, and Udemy ML/DL/NLP/GenAI certifications.",
            "tip": "Highlight how strong DSA fundamentals translate into efficient data pipeline transformations and tensor manipulation.",
            "isTrap": false,
            "links": []
          }
        ]
      },
      {
        "title": "Cross-Cutting ML & Data Engineering Defense",
        "topics": [
          {
            "name": "ML fundamentals they will ask",
            "hash": "#cross1",
            "desc": "Master core ML concepts: Bias-Variance tradeoff, Overfitting mitigation (L1/L2, Dropout, Augmentation), Precision vs Recall, ROC-AUC, Adam vs SGD.",
            "tip": "Relate every ML concept back to your projects (e.g. class imbalance in meal datasets, confidence scoring in YOLOv5).",
            "isTrap": false,
            "links": []
          },
          {
            "name": "Data engineering and SQL round",
            "hash": "#cross2",
            "desc": "Prepare for: Window functions (ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD), CTEs, indexing strategies (B-Tree vs Hash vs BRIN), ETL pipeline design, and partitioning.",
            "tip": "Be ready to write clean SQL live for time-series aggregation, cumulative sums, and sessionizing event streams.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "LLM, RAG & Vector Search questions",
            "hash": "#cross3",
            "desc": "Explain Chunking strategies, Embedding models, Cosine similarity vs Dot product, Vector DB indexing (HNSW, IVFFlat), RAG hallucination guardrails, and Multi-Agent CrewAI patterns.",
            "tip": "Walk through your PDF Query Engine on Hugging Face Spaces: document parsing -> semantic chunking -> vector retrieval -> agent synthesis.",
            "isTrap": false,
            "links": []
          },
          {
            "name": "\"You're ECE\" & your questions for the ML team",
            "hash": "#cross4",
            "desc": "Deliver your tailored pitch for ML/AI teams (mathematical foundations, signal processing, edge hardware optimization) and ask insightful questions on model deployment / evaluation.",
            "tip": "Ask about their model retraining pipelines, drift detection in production, and how they evaluate unstructured generative outputs.",
            "isTrap": false,
            "links": []
          }
        ]
      }
    ]
  }
];
