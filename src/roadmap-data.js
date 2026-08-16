export const roadmaps = [
  {
    "id": "tech-fundamentals",
    "title": "Tech Fundamentals",
    "icon": "\ud83d\udcbb",
    "accent": "#38bdf8",
    "url": "/tech_fundamentals_comparisons.html",
    "phases": [
      {
        "title": "Sections",
        "topics": [
          {
            "name": "1 \u00b7 Language Comparisons",
            "hash": "#c1",
            "desc": "Master the 1 \u00b7 Language Comparisons core concepts and interview answers.",
            "links": []
          },
          {
            "name": "2 \u00b7 Frontend Framework Evolution",
            "hash": "#c2",
            "desc": "Master the 2 \u00b7 Frontend Framework Evolution core concepts and interview answers.",
            "links": []
          },
          {
            "name": "3 \u00b7 Backend Framework/Runtime",
            "hash": "#c3",
            "desc": "Master the 3 \u00b7 Backend Framework/Runtime core concepts and interview answers.",
            "links": []
          },
          {
            "name": "4 \u00b7 Database Landscape",
            "hash": "#c4",
            "desc": "Master the 4 \u00b7 Database Landscape core concepts and interview answers.",
            "links": []
          },
          {
            "name": "5 \u00b7 API Paradigms",
            "hash": "#c5",
            "desc": "Master the 5 \u00b7 API Paradigms core concepts and interview answers.",
            "links": []
          },
          {
            "name": "6 \u00b7 Cloud/Infra Fundamentals",
            "hash": "#c6",
            "desc": "Master the 6 \u00b7 Cloud/Infra Fundamentals core concepts and interview answers.",
            "links": []
          },
          {
            "name": "7 \u00b7 \"Why X over Y\" Q&A Bank",
            "hash": "#c7",
            "desc": "Master the 7 \u00b7 \"Why X over Y\" Q&A Bank core concepts and interview answers.",
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
    "url": "/react-nextjs-interview-notes.html",
    "phases": [
      {
        "title": "React Fundamentals",
        "topics": [
          {
            "name": "JSX",
            "hash": "#jsx",
            "desc": "Master the JSX core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Components \u00b7 Props vs State",
            "hash": "#components-props-state",
            "desc": "Master the Components \u00b7 Props vs State core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Hooks (useState/useEffect/useContext/useMemo/useCallback)",
            "hash": "#hooks",
            "desc": "Master the Hooks (useState/useEffect/useContext/useMemo/useCallback) core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Custom Hooks",
            "hash": "#custom-hooks",
            "desc": "Master the Custom Hooks core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Virtual DOM & Reconciliation / Keys",
            "hash": "#vdom",
            "desc": "Master the Virtual DOM & Reconciliation / Keys core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Controlled vs Uncontrolled",
            "hash": "#controlled",
            "desc": "Master the Controlled vs Uncontrolled core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Lifting State Up",
            "hash": "#lifting-state",
            "desc": "Master the Lifting State Up core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Context API vs Redux/Zustand",
            "hash": "#context-vs-redux",
            "desc": "Master the Context API vs Redux/Zustand core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Next.js Fundamentals",
        "topics": [
          {
            "name": "SSR vs SSG vs ISR vs CSR",
            "hash": "#rendering",
            "desc": "Master the SSR vs SSG vs ISR vs CSR core concepts and interview answers.",
            "links": []
          },
          {
            "name": "App Router vs Pages Router",
            "hash": "#app-vs-pages",
            "desc": "Master the App Router vs Pages Router core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Routing",
            "hash": "#routing",
            "desc": "Master the Routing core concepts and interview answers.",
            "links": []
          },
          {
            "name": "API Routes",
            "hash": "#api-routes",
            "desc": "Master the API Routes core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Middleware",
            "hash": "#middleware",
            "desc": "Master the Middleware core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Data Fetching Patterns",
            "hash": "#data-fetching",
            "desc": "Master the Data Fetching Patterns core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Image & Font Optimization",
            "hash": "#optimization",
            "desc": "Master the Image & Font Optimization core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Comparisons",
        "topics": [
          {
            "name": "React vs Next.js",
            "hash": "#react-vs-next",
            "desc": "Master the React vs Next.js core concepts and interview answers.",
            "links": []
          },
          {
            "name": "useEffect vs useLayoutEffect",
            "hash": "#effect-vs-layouteffect",
            "desc": "Master the useEffect vs useLayoutEffect core concepts and interview answers.",
            "links": []
          },
          {
            "name": "memo vs useMemo vs useCallback",
            "hash": "#memo-comparison",
            "desc": "Master the memo vs useMemo vs useCallback core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Repo Deep-Dive: Chessify",
        "topics": [
          {
            "name": "Architecture Overview",
            "hash": "#repo-overview",
            "desc": "Master the Architecture Overview core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Live Board State & Socket Sync",
            "hash": "#repo-state",
            "desc": "Master the Live Board State & Socket Sync core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Socket Event Handling",
            "hash": "#repo-events",
            "desc": "Master the Socket Event Handling core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Board Rendering & Re-renders",
            "hash": "#repo-render",
            "desc": "Master the Board Rendering & Re-renders core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Optimistic vs Authoritative Moves",
            "hash": "#repo-authority",
            "desc": "Master the Optimistic vs Authoritative Moves core concepts and interview answers.",
            "links": []
          },
          {
            "name": "App Router + Pages API Quirk",
            "hash": "#repo-router-quirk",
            "desc": "Master the App Router + Pages API Quirk core concepts and interview answers.",
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
    "url": "/node-express-backend-interview-notes.html",
    "phases": [
      {
        "title": "Node.js Fundamentals",
        "topics": [
          {
            "name": "Event Loop & libuv",
            "hash": "#event-loop",
            "desc": "Master the Event Loop & libuv core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Non-blocking I/O & Single Thread",
            "hash": "#nonblocking",
            "desc": "Master the Non-blocking I/O & Single Thread core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Callbacks vs Promises vs async/await",
            "hash": "#async-patterns",
            "desc": "Master the Callbacks vs Promises vs async/await core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Streams",
            "hash": "#streams",
            "desc": "Master the Streams core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Clustering",
            "hash": "#clustering",
            "desc": "Master the Clustering core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Express.js",
        "topics": [
          {
            "name": "Middleware",
            "hash": "#middleware",
            "desc": "Master the Middleware core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Routing",
            "hash": "#routing",
            "desc": "Master the Routing core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Error Handling",
            "hash": "#error-handling",
            "desc": "Master the Error Handling core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Realtime",
        "topics": [
          {
            "name": "WebSocket vs Polling vs Socket.IO",
            "hash": "#ws-vs-polling",
            "desc": "Master the WebSocket vs Polling vs Socket.IO core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Rooms & Namespaces",
            "hash": "#rooms-namespaces",
            "desc": "Master the Rooms & Namespaces core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Reconnection Handling",
            "hash": "#reconnection",
            "desc": "Master the Reconnection Handling core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "JWT Auth",
        "topics": [
          {
            "name": "Token Structure",
            "hash": "#jwt-structure",
            "desc": "Master the Token Structure core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Access vs Refresh Tokens",
            "hash": "#access-refresh",
            "desc": "Master the Access vs Refresh Tokens core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Storage Security",
            "hash": "#token-storage",
            "desc": "Master the Storage Security core concepts and interview answers.",
            "links": []
          },
          {
            "name": "RBAC",
            "hash": "#rbac",
            "desc": "Master the RBAC core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "REST API Design",
        "topics": [
          {
            "name": "Statelessness",
            "hash": "#statelessness",
            "desc": "Master the Statelessness core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Idempotency",
            "hash": "#idempotency",
            "desc": "Master the Idempotency core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Status Codes",
            "hash": "#status-codes",
            "desc": "Master the Status Codes core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Versioning",
            "hash": "#versioning",
            "desc": "Master the Versioning core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Deep-Dive: Chessify PvP",
        "topics": [
          {
            "name": "Socket Room Architecture",
            "hash": "#chess-overview",
            "desc": "Master the Socket Room Architecture core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Server-Authoritative Moves",
            "hash": "#chess-auth-moves",
            "desc": "Master the Server-Authoritative Moves core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Disconnect & Cleanup",
            "hash": "#chess-disconnect",
            "desc": "Master the Disconnect & Cleanup core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Deep-Dive: StudySync-Server",
        "topics": [
          {
            "name": "Express + MongoDB Setup",
            "hash": "#study-overview",
            "desc": "Master the Express + MongoDB Setup core concepts and interview answers.",
            "links": []
          },
          {
            "name": "JWT Login & Middleware",
            "hash": "#study-jwt",
            "desc": "Master the JWT Login & Middleware core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Public REST Endpoint",
            "hash": "#study-public",
            "desc": "Master the Public REST Endpoint core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Deep-Dive: SahYatri BusApi",
        "topics": [
          {
            "name": "PostgreSQL + Pooling",
            "hash": "#sahyatri-overview",
            "desc": "Master the PostgreSQL + Pooling core concepts and interview answers.",
            "links": []
          },
          {
            "name": "REST Endpoints & Queries",
            "hash": "#sahyatri-endpoints",
            "desc": "Master the REST Endpoints & Queries core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Scaling to 50k Events/Day",
            "hash": "#sahyatri-scale",
            "desc": "Master the Scaling to 50k Events/Day core concepts and interview answers.",
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
    "url": "/flask-fastapi-interview-notes.html",
    "phases": [
      {
        "title": "Sections",
        "topics": [
          {
            "name": "Flask",
            "hash": "#flask",
            "desc": "Master the Flask core concepts and interview answers.",
            "links": []
          },
          {
            "name": "FastAPI",
            "hash": "#fastapi",
            "desc": "Master the FastAPI core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Flask vs FastAPI",
            "hash": "#comparison",
            "desc": "Master the Flask vs FastAPI core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Chessify Backend",
            "hash": "#chessify",
            "desc": "Master the Chessify Backend core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Production Chain",
            "hash": "#prodchain",
            "desc": "Master the Production Chain core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Minimax + \u03b1-\u03b2",
            "hash": "#minimax",
            "desc": "Master the Minimax + \u03b1-\u03b2 core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Testing / GUI Harness",
            "hash": "#testing",
            "desc": "Master the Testing / GUI Harness core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Resume Tie-Ins",
            "hash": "#resume",
            "desc": "Master the Resume Tie-Ins core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Follow-Ups",
            "hash": "#followups",
            "desc": "Master the Follow-Ups core concepts and interview answers.",
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
    "url": "/aiml-stack-interview-notes.html",
    "phases": [
      {
        "title": "Core ML/DL",
        "topics": [
          {
            "name": "Overfitting/Underfitting \u00b7 Bias-Variance",
            "hash": "#overfit",
            "desc": "Master the Overfitting/Underfitting \u00b7 Bias-Variance core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Gradient Descent",
            "hash": "#gd",
            "desc": "Master the Gradient Descent core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Backpropagation",
            "hash": "#backprop",
            "desc": "Master the Backpropagation core concepts and interview answers.",
            "links": []
          },
          {
            "name": "CNN Basics",
            "hash": "#cnn",
            "desc": "Master the CNN Basics core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "NLP / LLMs",
        "topics": [
          {
            "name": "Embeddings",
            "hash": "#embeddings",
            "desc": "Master the Embeddings core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Transformers Overview",
            "hash": "#transformers",
            "desc": "Master the Transformers Overview core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Attention Mechanism",
            "hash": "#attention",
            "desc": "Master the Attention Mechanism core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "RAG",
        "topics": [
          {
            "name": "Retrieval + Generation Pipeline",
            "hash": "#rag-pipeline",
            "desc": "Master the Retrieval + Generation Pipeline core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Vector Databases",
            "hash": "#vector-db",
            "desc": "Master the Vector Databases core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Chunking Strategies",
            "hash": "#chunking",
            "desc": "Master the Chunking Strategies core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Why RAG over Fine-Tuning",
            "hash": "#rag-vs-ft",
            "desc": "Master the Why RAG over Fine-Tuning core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "LangChain / CrewAI",
        "topics": [
          {
            "name": "Chains",
            "hash": "#chains",
            "desc": "Master the Chains core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Agents",
            "hash": "#agents",
            "desc": "Master the Agents core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Multi-Agent Orchestration",
            "hash": "#multiagent",
            "desc": "Master the Multi-Agent Orchestration core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "YOLOv5",
        "topics": [
          {
            "name": "Object Detection Basics",
            "hash": "#od-basics",
            "desc": "Master the Object Detection Basics core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Anchor Boxes",
            "hash": "#anchors",
            "desc": "Master the Anchor Boxes core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Non-Max Suppression",
            "hash": "#nms",
            "desc": "Master the Non-Max Suppression core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Fine-Tuning vs From Scratch",
            "hash": "#finetune",
            "desc": "Master the Fine-Tuning vs From Scratch core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Deep-Dive: SahYatri",
        "topics": [
          {
            "name": "Detection Pipeline \u2014 Actual Code",
            "hash": "#sy-overview",
            "desc": "Master the Detection Pipeline \u2014 Actual Code core concepts and interview answers.",
            "links": []
          },
          {
            "name": "\u26a0\ufe0f Reconcile Before Interview",
            "hash": "#sy-reconcile",
            "desc": "Master the \u26a0\ufe0f Reconcile Before Interview core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Adaptive Thresholding & Accuracy Validation",
            "hash": "#sy-concepts",
            "desc": "Master the Adaptive Thresholding & Accuracy Validation core concepts and interview answers.",
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
    "url": "/databases-cloud-devops-interview-notes.html",
    "phases": [
      {
        "title": "Databases \u2014 Practical",
        "topics": [
          {
            "name": "PostgreSQL vs MySQL vs MongoDB",
            "hash": "#db-choice",
            "desc": "Master the PostgreSQL vs MySQL vs MongoDB core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Resume tie-in: SahYatri \u2192 PostgreSQL",
            "hash": "#sahyatri-choice",
            "desc": "Master the Resume tie-in: SahYatri \u2192 PostgreSQL core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Resume tie-in: StudySync \u2192 MongoDB",
            "hash": "#studysync-choice",
            "desc": "Master the Resume tie-in: StudySync \u2192 MongoDB core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Docker",
        "topics": [
          {
            "name": "Images vs Containers, Dockerfile",
            "hash": "#docker-basics",
            "desc": "Master the Images vs Containers, Dockerfile core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Why Containerize",
            "hash": "#docker-why",
            "desc": "Master the Why Containerize core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "CI/CD",
        "topics": [
          {
            "name": "Pipeline Stages & What It Solves",
            "hash": "#cicd",
            "desc": "Master the Pipeline Stages & What It Solves core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "AWS / Azure",
        "topics": [
          {
            "name": "Core Services for a Backend Dev",
            "hash": "#cloud-basics",
            "desc": "Master the Core Services for a Backend Dev core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Git",
        "topics": [
          {
            "name": "Branching Strategies",
            "hash": "#git-branching",
            "desc": "Master the Branching Strategies core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Rebase vs Merge",
            "hash": "#git-rebase-merge",
            "desc": "Master the Rebase vs Merge core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Resolving Conflicts",
            "hash": "#git-conflicts",
            "desc": "Master the Resolving Conflicts core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Postman",
        "topics": [
          {
            "name": "API Testing Workflow & Environments",
            "hash": "#postman-workflow",
            "desc": "Master the API Testing Workflow & Environments core concepts and interview answers.",
            "links": []
          },
          {
            "name": "What 200+ Test Cases Implies",
            "hash": "#postman-scale",
            "desc": "Master the What 200+ Test Cases Implies core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Linux",
        "topics": [
          {
            "name": "Command-Line Awareness",
            "hash": "#linux-basics",
            "desc": "Master the Command-Line Awareness core concepts and interview answers.",
            "links": []
          }
        ]
      }
    ]
  },
  {
    "id": "resume-defense",
    "title": "Resume Defense Rehearsal",
    "icon": "\ud83d\udee1\ufe0f",
    "accent": "#f43f5e",
    "url": "/resume-defense-rehearsal.html",
    "phases": [
      {
        "title": "Work Experience (Internship)",
        "topics": [
          {
            "name": "30+ endpoints, PHP + Atlas, Agile team of 8",
            "hash": "#exp1",
            "desc": "Master the 30+ endpoints, PHP + Atlas, Agile team of 8 core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Multi-tenant, JWT/RBAC, atomic transactions",
            "hash": "#exp2",
            "desc": "Master the Multi-tenant, JWT/RBAC, atomic transactions core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Snapshot engine, 65% reduction, 200+ tests",
            "hash": "#exp3",
            "desc": "Master the Snapshot engine, 65% reduction, 200+ tests core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Project: Chessify AI",
        "topics": [
          {
            "name": "Real-time multiplayer, 100+ concurrent users",
            "hash": "#ch1",
            "desc": "Master the Real-time multiplayer, 100+ concurrent users core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Stockfish ELO 1800, Minimax depth 3",
            "hash": "#ch2",
            "desc": "Master the Stockfish ELO 1800, Minimax depth 3 core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Project: StudySync",
        "topics": [
          {
            "name": "Offline-first, 1.5s reconnect sync",
            "hash": "#ss1",
            "desc": "Master the Offline-first, 1.5s reconnect sync core concepts and interview answers.",
            "links": []
          },
          {
            "name": "10+ endpoints, admin panel, under 120ms",
            "hash": "#ss2",
            "desc": "Master the 10+ endpoints, admin panel, under 120ms core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Project: SahYatri",
        "topics": [
          {
            "name": "Fine-tuned YOLOv5n, 15 FPS, 90%+ accuracy",
            "hash": "#sy1",
            "desc": "Master the Fine-tuned YOLOv5n, 15 FPS, 90%+ accuracy core concepts and interview answers.",
            "links": []
          },
          {
            "name": "50,000+ events/day, every 3s",
            "hash": "#sy2",
            "desc": "Master the 50,000+ events/day, every 3s core concepts and interview answers.",
            "links": []
          }
        ]
      },
      {
        "title": "Achievements & Competencies",
        "topics": [
          {
            "name": "Hackathon wins",
            "hash": "#ach1",
            "desc": "Master the Hackathon wins core concepts and interview answers.",
            "links": []
          },
          {
            "name": "LeetCode Knight \u2014 1000+, 250-day streak",
            "hash": "#ach2",
            "desc": "Master the LeetCode Knight \u2014 1000+, 250-day streak core concepts and interview answers.",
            "links": []
          },
          {
            "name": "PDF Query Engine (RAG)",
            "hash": "#ach3",
            "desc": "Master the PDF Query Engine (RAG) core concepts and interview answers.",
            "links": []
          },
          {
            "name": "Bootcamps & certifications",
            "hash": "#ach4",
            "desc": "Master the Bootcamps & certifications core concepts and interview answers.",
            "links": []
          }
        ]
      }
    ]
  }
];
