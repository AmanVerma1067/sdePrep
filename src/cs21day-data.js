export const cs21DayRoadmap = {
  "id": "cs-21day",
  "title": "CS Core 21-Day Sprint",
  "accent": "#00F7FF",
  "icon": "\u26a1",
  "subjects": [
    {
      "name": "Database Management System",
      "intro": "Second most-asked subject after DSA. Interviewers probe normalization, ACID, keys, joins, and expect you to write SQL on a whiteboard/notepad \u2014 not just define terms.",
      "phases": [
        {
          "title": "D1 \u2014 Basics of DBMS + ER Model",
          "topics": [
            {
              "name": "Introduction to DBMS & file system limitations",
              "desc": "",
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
              "name": "3-Tier Architecture & DBMS Architecture (1/2/3-level)",
              "desc": "",
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
              "name": "ER Model \u2014 entities, attributes, relationships, cardinality",
              "desc": "",
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
              "name": "Types of Keys \u2014 Candidate, Super, Primary, Alternate, Foreign",
              "desc": "",
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
              "name": "Relational Algebra \u2014 basic operators (\u03c3, \u03c0, \u22c8, \u222a, \u2212)",
              "desc": "",
              "tip": "Know that SQL is a practical implementation of relational algebra \u2014 mapping SELECT\u2192\u03c0, WHERE\u2192\u03c3, JOIN\u2192\u22c8 helps you reason about query optimization questions.",
              "isTrap": false,
              "links": [
                {
                  "text": "Relational Algebra",
                  "url": "https://www.geeksforgeeks.org/dbms/introduction-of-relational-algebra-in-dbms/"
                }
              ]
            }
          ]
        },
        {
          "title": "D2 \u2014 Joins & Query Comparisons",
          "topics": [
            {
              "name": "Inner Join vs Outer Join (Left/Right/Full)",
              "desc": "",
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
              "name": "Join operation vs Nested Subquery \u2014 when to prefer which",
              "desc": "",
              "tip": "Joins are generally faster (optimizer-friendly, single pass) vs correlated subqueries that can re-execute per outer row. Good follow-up: \"how would you rewrite this subquery as a join?\"",
              "isTrap": false,
              "links": [
                {
                  "text": "Join vs Nested Query",
                  "url": "https://www.geeksforgeeks.org/interview-experiences/join-operation-vs-nested-query-in-dbms/"
                }
              ]
            }
          ]
        },
        {
          "title": "D3 \u2014 Normalization",
          "topics": [
            {
              "name": "Introduction to Normalization + Functional Dependencies",
              "desc": "",
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
              "name": "Normal Forms \u2014 1NF, 2NF, 3NF, BCNF",
              "desc": "",
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
              "name": "Lossless Join Decomposition",
              "desc": "",
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
              "name": "4th & 5th Normal Form (multivalued / join dependency)",
              "desc": "",
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
              "name": "Denormalization \u2014 when & why to intentionally break normal forms",
              "desc": "",
              "tip": "Great system-design talking point: denormalize for read-heavy analytics/reporting workloads to cut join costs, at the price of update anomalies.",
              "isTrap": false,
              "links": [
                {
                  "text": "Denormalization",
                  "url": "https://www.geeksforgeeks.org/dbms/denormalization-in-databases/"
                }
              ]
            }
          ]
        },
        {
          "title": "D4 \u2014 Transactions & Concurrency Control",
          "topics": [
            {
              "name": "ACID Properties",
              "desc": "",
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
              "name": "Concurrency Control \u2014 why it's needed",
              "desc": "",
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
              "name": "Locking \u2014 shared/exclusive locks, 2PL",
              "desc": "",
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
              "name": "Types of Schedules \u2014 serial, non-serial",
              "desc": "",
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
              "name": "Conflict Serializability vs View Serializability",
              "desc": "",
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
              "name": "Starvation in DBMS",
              "desc": "",
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
              "name": "Deadlock in DBMS \u2014 detection & prevention",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Deadlock in DBMS",
                  "url": "https://www.geeksforgeeks.org/dbms/deadlock-in-dbms/"
                }
              ]
            }
          ]
        },
        {
          "title": "D5 \u2014 SQL Tutorial (hands-on)",
          "topics": [
            {
              "name": "Introduction to SQL \u2014 DDL/DML/DCL/TCL",
              "desc": "",
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
              "name": "SQL Data Types",
              "desc": "",
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
              "name": "SQL Operators",
              "desc": "",
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
              "name": "SQL Clauses \u2014 WHERE, GROUP BY, HAVING, ORDER BY",
              "desc": "",
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
              "name": "SQL Functions (Advanced)",
              "desc": "",
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
              "name": "Aggregate Functions vs Scalar Functions",
              "desc": "",
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
              "name": "SQL Queries \u2014 practice writing joins, subqueries, window functions",
              "desc": "",
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
        }
      ]
    },
    {
      "name": "Operating Systems",
      "intro": "Broadest core subject \u2014 scheduling, synchronization, deadlocks, and memory management show up in almost every core-CS + some SDE interviews. Weak OS answers can eliminate you even with strong DSA.",
      "phases": [
        {
          "title": "D6 \u2014 Introduction to OS & Types",
          "topics": [
            {
              "name": "Types of Operating Systems (Batch, Time-Sharing, Distributed, RTOS...)",
              "desc": "",
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
              "name": "Multiprogramming in OS",
              "desc": "",
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
              "name": "Time-Sharing OS",
              "desc": "",
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
              "name": "Network Operating System",
              "desc": "",
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
              "name": "Real-Time OS (RTOS) \u2014 hard vs soft real-time",
              "desc": "",
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
              "name": "Functions of the Operating System",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Functions of OS",
                  "url": "https://www.geeksforgeeks.org/operating-systems/functions-of-operating-system/"
                }
              ]
            }
          ]
        },
        {
          "title": "D7 \u2014 Process Management",
          "topics": [
            {
              "name": "Introduction to Process Management",
              "desc": "",
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
              "name": "Process Table & PCB (Process Control Block)",
              "desc": "",
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
              "name": "Operations on Processes \u2014 creation, termination, process states",
              "desc": "",
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
              "name": "Context Switching",
              "desc": "",
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
              "name": "Preemptive vs Non-Preemptive Scheduling",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Preemptive vs Non-Preemptive",
                  "url": "https://www.geeksforgeeks.org/operating-systems/preemptive-and-non-preemptive-scheduling/"
                }
              ]
            }
          ]
        },
        {
          "title": "D8 \u2014 CPU Scheduling",
          "topics": [
            {
              "name": "CPU Scheduling Algorithms \u2014 FCFS, SJF, Priority, Round Robin",
              "desc": "",
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
              "name": "CPU Scheduling Criteria (throughput, turnaround, waiting, response time)",
              "desc": "",
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
              "name": "Multiple-Processor Scheduling",
              "desc": "",
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
              "name": "Thread Scheduling",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Thread Scheduling",
                  "url": "https://www.geeksforgeeks.org/operating-systems/thread-scheduling/"
                }
              ]
            }
          ]
        },
        {
          "title": "D9 \u2014 Process Synchronization",
          "topics": [
            {
              "name": "Introduction to Process Synchronization",
              "desc": "",
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
              "name": "Race Condition Vulnerability",
              "desc": "",
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
              "name": "Critical Section \u2014 the 3 conditions (mutual exclusion, progress, bounded wait)",
              "desc": "",
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
              "name": "Mutual Exclusion \u2014 Peterson's solution",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Mutual Exclusion",
                  "url": "https://www.geeksforgeeks.org/operating-systems/mutual-exclusion-in-synchronization/"
                }
              ]
            }
          ]
        },
        {
          "title": "D10 \u2014 Semaphores & Classical Problems",
          "topics": [
            {
              "name": "Semaphores in Process Synchronization",
              "desc": "",
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
              "name": "Types of Semaphores \u2014 binary (mutex) vs counting",
              "desc": "",
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
              "name": "Readers-Writers Problem",
              "desc": "",
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
              "name": "Producer-Consumer Problem using Semaphores",
              "desc": "",
              "tip": "Be able to sketch the semaphore pseudocode (empty, full, mutex) from memory \u2014 this is the single most-drawn diagram in OS interviews.",
              "isTrap": false,
              "links": [
                {
                  "text": "Producer-Consumer Problem",
                  "url": "https://www.geeksforgeeks.org/operating-systems/producer-consumer-problem-using-semaphores-set-1/"
                }
              ]
            }
          ]
        },
        {
          "title": "D11 \u2014 Deadlocks",
          "topics": [
            {
              "name": "Introduction to Deadlock",
              "desc": "",
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
              "name": "4 Necessary Conditions for Deadlock (Coffman conditions)",
              "desc": "",
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
              "name": "Banker's Algorithm \u2014 safe state check",
              "desc": "",
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
              "name": "Handling Deadlocks \u2014 prevention, avoidance, detection & recovery",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Handling Deadlocks",
                  "url": "https://www.geeksforgeeks.org/operating-systems/handling-deadlocks/"
                }
              ]
            }
          ]
        },
        {
          "title": "D12 \u2014 Memory Management & Page Replacement",
          "topics": [
            {
              "name": "Memory Management overview",
              "desc": "",
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
              "name": "Paging",
              "desc": "",
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
              "name": "Segmentation",
              "desc": "",
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
              "name": "Virtual Memory",
              "desc": "",
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
              "name": "Page Replacement Algorithms \u2014 FIFO, LRU, Optimal",
              "desc": "",
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
              "name": "Belady's Anomaly",
              "desc": "",
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
              "name": "Optimal Page Replacement Algorithm (deep dive)",
              "desc": "",
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
        }
      ]
    },
    {
      "name": "Computer Networks",
      "intro": "Less frequent in pure SDE rounds, but a few basic networking MCQs show up in most OAs, and it's core for network/infra-adjacent roles. Focus breadth over depth here.",
      "phases": [
        {
          "title": "D13 \u2014 Basics of Computer Networks",
          "topics": [
            {
              "name": "Basics of Computer Networking",
              "desc": "",
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
              "name": "Network Topologies \u2014 star, bus, ring, mesh, hybrid",
              "desc": "",
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
              "name": "Basic Networking Terminology",
              "desc": "",
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
              "name": "LAN, MAN, WAN",
              "desc": "",
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
              "name": "TCP/IP Model",
              "desc": "",
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
              "name": "OSI Model (7 layers)",
              "desc": "",
              "tip": "Trap:OSI has 7 layers, TCP/IP has 4-5 (models vary). Know \"Please Do Not Throw Sausage Pizza Away\" (Physical\u2013Data Link\u2013Network\u2013Transport\u2013Session\u2013Presentation\u2013Application) cold \u2014 asked as a rapid-fire MCQ constantly.",
              "isTrap": true,
              "links": [
                {
                  "text": "OSI Model",
                  "url": "https://www.geeksforgeeks.org/computer-networks/open-systems-interconnection-model-osi/"
                }
              ]
            }
          ]
        },
        {
          "title": "D14 \u2014 Data Link Layer",
          "topics": [
            {
              "name": "Ethernet (LAN Technologies)",
              "desc": "",
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
              "name": "MAC Address",
              "desc": "",
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
              "name": "CSMA (Carrier Sense Multiple Access)",
              "desc": "",
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
              "name": "Basics of Wi-Fi",
              "desc": "",
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
              "name": "Virtual LAN (VLAN)",
              "desc": "",
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
              "name": "Stop-and-Wait ARQ",
              "desc": "",
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
              "name": "Sliding Window Protocol",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Sliding Window Protocol",
                  "url": "https://www.geeksforgeeks.org/computer-networks/sliding-window-protocol-set-1/"
                }
              ]
            }
          ]
        },
        {
          "title": "D15 \u2014 Network Layer",
          "topics": [
            {
              "name": "IPv4 Datagram Header",
              "desc": "",
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
              "name": "IP Addressing \u2014 classful addressing",
              "desc": "",
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
              "name": "Types of Routing \u2014 static, default, dynamic",
              "desc": "",
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
              "name": "Unicast Routing \u2014 Link State Routing",
              "desc": "",
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
              "name": "Wi-Fi Protected Access (WPA)",
              "desc": "",
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
              "name": "Wi-Fi Protected Setup (WPS)",
              "desc": "",
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
              "name": "LiFi vs WiFi",
              "desc": "",
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
              "name": "IPv4 vs IPv6",
              "desc": "",
              "tip": "Trap:IPv4 = 32-bit (~4.3B addresses), IPv6 = 128-bit. IPv6 removes the need for NAT and has no built-in checksum field (relies on lower/upper layers) \u2014 a detail interviewers use to check real understanding vs rote memorization.",
              "isTrap": true,
              "links": [
                {
                  "text": "IPv4 vs IPv6",
                  "url": "https://www.geeksforgeeks.org/computer-networks/differences-between-ipv4-and-ipv6/"
                }
              ]
            }
          ]
        },
        {
          "title": "D16 \u2014 Transport & Application Layer",
          "topics": [
            {
              "name": "TCP Connection Establishment \u2014 3-way handshake",
              "desc": "",
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
              "name": "Transport Layer Responsibilities",
              "desc": "",
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
              "name": "Multiplexing & Demultiplexing",
              "desc": "",
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
              "name": "UDP \u2014 connectionless transport",
              "desc": "",
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
              "name": "P2P File Sharing",
              "desc": "",
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
              "name": "Congestion Control \u2014 general concept",
              "desc": "",
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
              "name": "TCP Congestion Control \u2014 slow start, congestion avoidance",
              "desc": "",
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
              "name": "Congestion Control Techniques",
              "desc": "",
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
              "name": "Application Layer Protocols overview",
              "desc": "",
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
              "name": "SMTP (Simple Mail Transfer Protocol)",
              "desc": "",
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
              "name": "DNS (Domain Name System)",
              "desc": "",
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
              "name": "HTTP vs HTTPS",
              "desc": "",
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
              "name": "FTP, ATM, DHCP",
              "desc": "",
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
        }
      ]
    },
    {
      "name": "Software Engineering",
      "intro": "SDLC models, Agile, COCOMO, requirements, and testing types. Interviewers expect you to know why Agile fits real product teams \u2014 connect this back to your own project workflow (DigiFlute internship, hackathons) for a stronger answer.",
      "phases": [
        {
          "title": "D17 \u2014 Introduction to Software Engineering",
          "topics": [
            {
              "name": "Introduction to Software Engineering",
              "desc": "",
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
              "name": "Classification of Software",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Classification of Software",
                  "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-classification-software/"
                }
              ]
            }
          ]
        },
        {
          "title": "D18 \u2014 SDLC Models",
          "topics": [
            {
              "name": "Classical Waterfall Model",
              "desc": "",
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
              "name": "Iterative Waterfall Model",
              "desc": "",
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
              "name": "Spiral Model",
              "desc": "",
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
              "name": "Rapid Application Development (RAD) Model",
              "desc": "",
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
              "name": "RAD vs Traditional SDLC",
              "desc": "",
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
              "name": "Agile Development Models \u2014 Scrum, Kanban, XP",
              "desc": "",
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
              "name": "Comparison of Life Cycle Models",
              "desc": "",
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
              "name": "Coupling and Cohesion",
              "desc": "",
              "tip": "Trap:good design = LOW coupling + HIGH cohesion. People sometimes flip this under pressure \u2014 say it out loud twice before the interview.",
              "isTrap": true,
              "links": [
                {
                  "text": "Coupling and Cohesion",
                  "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-coupling-and-cohesion/"
                }
              ]
            }
          ]
        },
        {
          "title": "D19 \u2014 Software Project Management",
          "topics": [
            {
              "name": "Project Management Process phases",
              "desc": "",
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
              "name": "COCOMO Model \u2014 effort/cost estimation",
              "desc": "",
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
              "name": "Risk Management in SDLC",
              "desc": "",
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
              "name": "Role & Responsibilities of a Software Project Manager",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Software Project Manager Role",
                  "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-role-and-responsibilities-of-a-software-project-manager/"
                }
              ]
            }
          ]
        },
        {
          "title": "D20 \u2014 Software Requirements",
          "topics": [
            {
              "name": "Classification of Software Requirements \u2014 functional vs non-functional",
              "desc": "",
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
              "name": "How to Write a Good SRS",
              "desc": "",
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
              "name": "Quality Characteristics of a Good SRS",
              "desc": "",
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
              "name": "Requirements Elicitation",
              "desc": "",
              "tip": "",
              "isTrap": false,
              "links": [
                {
                  "text": "Requirements Elicitation",
                  "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-requirements-elicitation/"
                }
              ]
            }
          ]
        },
        {
          "title": "D21 \u2014 Software Testing & Debugging",
          "topics": [
            {
              "name": "Seven Principles of Software Testing",
              "desc": "",
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
              "name": "Testing Guidelines",
              "desc": "",
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
              "name": "Black Box Testing",
              "desc": "",
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
              "name": "White Box Testing",
              "desc": "",
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
              "name": "Debugging strategies",
              "desc": "",
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
              "name": "Integration Testing \u2014 big bang, top-down, bottom-up",
              "desc": "",
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
        }
      ]
    }
  ]
};
