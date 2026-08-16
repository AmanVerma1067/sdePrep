export const roadmaps = [
  {
    "id": "cs-core",
    "title": "CS Core Subjects",
    "accent": "#7c6cf5",
    "icon": "\ud83e\udde0",
    "phases": [
      {
        "title": "OS Architecture & Basics",
        "topics": [
          {
            "name": "Monolithic vs Microkernel Architecture",
            "desc": "Monolithic kernels run all OS services in kernel space (faster, single address space \u2014 Linux is monolithic). Microkernels run drivers/services in user space (more fault-isolated \u2014 Mach, Minix). Reading a one-page comparison is enough. Interviewers ask this as a warm-up.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Monolithic vs Microkernel",
                "url": "https://www.geeksforgeeks.org/monolithic-kernel-and-key-differences-from-microkernel/"
              }
            ]
          },
          {
            "name": "System Calls \u2014fork(),exec(),wait(),open(),read(),write()",
            "desc": "System calls are the defined API between user space and kernel space. Know what each syscall does and what it returns.fork()duplicates the process,exec()replaces the process image,wait()blocks until a child exits. Directly asked in interviews \u2014 \"what happens when you call fork() twice?\"",
            "links": [
              {
                "text": "\u2197 Linux man pages \u2014 fork(2)",
                "url": "https://man7.org/linux/man-pages/man2/fork.2.html"
              },
              {
                "text": "\u2197 Linux man pages \u2014 exec(3)",
                "url": "https://man7.org/linux/man-pages/man3/exec.3.html"
              }
            ]
          },
          {
            "name": "User Mode vs Kernel Mode \u2014 Privilege Levels, Mode Switch Cost",
            "desc": "The CPU has two privilege rings \u2014 kernel mode (unrestricted hardware access) and user mode (restricted). Every system call causes a mode switch, which is expensive. This explains why excessive syscalls hurt performance and why the kernel tries to batch I/O operations.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 User Mode vs Kernel Mode",
                "url": "https://www.geeksforgeeks.org/difference-between-user-mode-and-kernel-mode/"
              }
            ]
          },
          {
            "name": "Basic Linux Commands \u2014chmod,chown,grep,awk,top,ps,kill,lsof",
            "desc": "File permissions (octal notation \u2014chmod 755), process monitoring, and text processing are practical tools asked during system debugging interview questions. Read a Linux commands cheat sheet and practice in a terminal.",
            "links": [
              {
                "text": "\u2197 tldr.sh \u2014 Quick Command Reference",
                "url": "https://tldr.sh"
              }
            ]
          }
        ]
      },
      {
        "title": "Process Management & Threads",
        "topics": [
          {
            "name": "Process Control Block (PCB) \u2014 What the OS Stores Per Process",
            "desc": "The PCB is the OS's data structure for each process \u2014 it stores PID, process state, register values, memory limits, open file descriptors, and scheduling info. Seeing a PCB diagram during context switch (CPU registers saved to PCB, new process's PCB loaded) makes the abstract data structure concrete. Every scheduling interview question involves the PCB implicitly.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Process Control Block",
                "url": "https://www.youtube.com/watch?v=OrM7nZcxXZU"
              }
            ]
          },
          {
            "name": "Process vs Thread \u2014 Memory Layout, Heap/Stack Sharing Model",
            "desc": "The most frequently asked OS question.Processes have separate virtual address spaces (Code, Data, Heap, Stack \u2014 all isolated). Threads within a process share the Heap and Data segments but each thread has its own Stack and Register set. You must see this as a memory diagram \u2014 the shared heap is why threads can communicate but also why they race on shared variables.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Threads vs Processes",
                "url": "https://www.youtube.com/watch?v=4rLW7zg21gI"
              }
            ]
          },
          {
            "name": "Process States & State Transition Diagram \u2014 New, Ready, Running, Waiting, Terminated",
            "desc": "A process moves between states based on scheduling decisions and I/O events. Seeing the directed state graph (Running \u2192 Waiting on I/O block, I/O completes \u2192 Ready, scheduler picks \u2192 Running) anchors all scheduling algorithm discussions.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Process States",
                "url": "https://www.youtube.com/watch?v=jZ_6PXoaoxo"
              }
            ]
          },
          {
            "name": "Context Switching \u2014 Mechanism, Cost, What Gets Saved/Restored",
            "desc": "During a context switch: the OS saves the CPU registers + program counter + stack pointer of the running process into its PCB, selects the next process, and restores its PCB into the CPU registers. The switch itself is pure overhead \u2014 no useful work is done. Understanding this cost is why reducing context switch frequency matters for high-performance servers.",
            "links": []
          },
          {
            "name": "Inter-Process Communication (IPC) \u2014 Pipes, Message Queues, Shared Memory, Sockets",
            "desc": "Since processes have isolated memory, they need explicit IPC mechanisms. Seeing the comparison \u2014 shared memory (fastest, no syscall per message) vs. message passing (safer, kernel-mediated) \u2014 is a systems design question answered with OS knowledge.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 IPC Mechanisms",
                "url": "https://www.geeksforgeeks.org/inter-process-communication-ipc/"
              }
            ]
          }
        ]
      },
      {
        "title": "CPU Scheduling Algorithms",
        "topics": [
          {
            "name": "Scheduling Metrics \u2014 Arrival Time, Burst Time, Turnaround Time, Waiting Time, Response Time",
            "desc": "Before tracing any algorithm, know the five metrics and their formulas cold. Interviewers give you a table of processes and ask you to compute these \u2014 getting the definitions wrong makes the rest of the answer incorrect.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 CPU Scheduling Criteria",
                "url": "https://www.youtube.com/watch?v=EWkQl0n0w5M"
              }
            ]
          },
          {
            "name": "FCFS, SJF (Preemptive = SRTF), Priority Scheduling \u2014 Gantt Chart Trace",
            "desc": "Tracing these algorithms on a Gantt chart \u2014 which process runs at which millisecond, when it waits, when it finishes \u2014 is the standard interview question format. Watch step-by-step traces for each algorithm. Know why SJF is optimal for average waiting time but requires predicting burst time (impossible in practice).",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 SJF Scheduling",
                "url": "https://www.youtube.com/watch?v=7DoP1L9nAAs"
              }
            ]
          },
          {
            "name": "Round Robin \u2014 Time Quantum Effect, Convoy Effect, Starvation",
            "desc": "Round Robin is the most used real-world algorithm. Watching how a small time quantum increases context switch overhead while a large quantum degrades response time \u2014 and seeing the Gantt chart where a CPU-heavy process causes other processes to wait indefinitely (convoy effect) \u2014 makes the trade-offs stick.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Round Robin Scheduling",
                "url": "https://www.youtube.com/watch?v=TxjIlNYRZ5M"
              }
            ]
          },
          {
            "name": "Multilevel Feedback Queue (MLFQ) \u2014 Priority Aging, How Linux Uses It",
            "desc": "MLFQ is the scheduling algorithm Linux actually uses (Completely Fair Scheduler is a variant). Watching a diagram of multiple queues with different time quanta \u2014 and how a process gets demoted to a lower-priority queue after using its full quantum \u2014 explains how real systems balance interactive and batch workloads.",
            "links": []
          }
        ]
      },
      {
        "title": "Concurrency & Synchronization",
        "topics": [
          {
            "name": "Race Conditions & the Critical Section Problem",
            "desc": "A race condition occurs when two threads read-modify-write a shared variable without synchronization, producing non-deterministic output based on thread scheduling. Seeing an interleaved execution trace where Thread A's increment is lost because Thread B read the stale value is the core mental model for all of concurrency.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Critical Section Problem",
                "url": "https://www.youtube.com/watch?v=FY9livorrJI"
              }
            ]
          },
          {
            "name": "Mutex Locks vs Binary Semaphores vs Counting Semaphores",
            "desc": "Mutex: ownership-based lock, only the thread that locked it can unlock it. Binary semaphore: signal-based, any thread can signal. Counting semaphore: controls access to N instances of a resource. Seeing the difference through the Producer-Consumer problem \u2014 where a counting semaphore tracks available buffer slots and a mutex protects buffer access \u2014 is essential. This is the most asked synchronization interview question.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Semaphores",
                "url": "https://www.youtube.com/watch?v=ukM_zzrIeXs"
              }
            ]
          },
          {
            "name": "Classic Synchronization Problems \u2014 Producer-Consumer, Dining Philosophers, Readers-Writers",
            "desc": "These three problems are canonical interview questions because they represent real system patterns: Producer-Consumer = bounded message queues; Dining Philosophers = deadlock demonstration; Readers-Writers = database read/write concurrency. Watch a visual trace of each problem reaching deadlock and then the semaphore solution that prevents it.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Dining Philosophers Problem",
                "url": "https://www.youtube.com/watch?v=Qx3P2wazwI0"
              }
            ]
          },
          {
            "name": "Deadlock \u2014 4 Necessary Conditions, Resource Allocation Graph, Banker's Algorithm",
            "desc": "Deadlock requires all four conditions simultaneously: Mutual Exclusion + Hold & Wait + No Preemption + Circular Wait. Seeing a Resource Allocation Graph (RAG) where a cycle means deadlock vs. not is a graph visualization concept. The Banker's Algorithm for deadlock avoidance requires tracing available resources and safe sequence \u2014 best learned from a worked video example.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Banker's Algorithm",
                "url": "https://www.youtube.com/watch?v=m7frxPnFe6Q"
              }
            ]
          }
        ]
      },
      {
        "title": "Memory Management",
        "topics": [
          {
            "name": "Logical vs Physical Address Space \u2014 Memory Management Unit (MMU)",
            "desc": "Every process sees a private logical (virtual) address space. The MMU translates logical addresses to physical RAM addresses at runtime. Seeing a diagram of the CPU issuing a logical address \u2192 MMU looks up page table \u2192 physical frame address is returned \u2014 and how two processes can have the same logical address but different physical mappings \u2014 is the foundation of virtual memory.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Logical vs Physical Address",
                "url": "https://www.youtube.com/watch?v=dz9Tk6KCMlQ"
              }
            ]
          },
          {
            "name": "Paging \u2014 Page Table, Frame, Page Number + Offset Calculation",
            "desc": "Paging divides logical memory into fixed-size pages and physical memory into frames. Address translation: split logical address into page number + offset \u2192 look up page table for frame number \u2192 physical address = frame number + offset. Tracing this calculation on a worked example is the standard exam and interview format.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Paging",
                "url": "https://www.youtube.com/watch?v=pJ6qrCB8pDw"
              }
            ]
          },
          {
            "name": "Translation Lookaside Buffer (TLB) \u2014 TLB Hit/Miss, Effective Access Time",
            "desc": "Every paging lookup requires a memory access to the page table + another memory access to the data = 2 memory accesses. The TLB is a hardware cache of recent page table entries that reduces this to ~1 access on a hit. Computing Effective Access Time (EAT) with TLB hit ratio is a standard numerical interview question.",
            "links": []
          },
          {
            "name": "Page Replacement \u2014 FIFO, LRU, Optimal Algorithm \u2014 Belady's Anomaly",
            "desc": "When physical RAM is full and a new page must be loaded, a victim page must be evicted. Tracing FIFO (evict oldest loaded page), LRU (evict least recently used), and Optimal (evict page needed furthest in the future) on a reference string is a classic exam question. Know why FIFO suffers Belady's Anomaly (more frames = more page faults with FIFO) but LRU does not.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Page Replacement Algorithms",
                "url": "https://www.youtube.com/watch?v=ql2KlDGDiok"
              }
            ]
          },
          {
            "name": "Segmentation vs Paging \u2014 Fragmentation Types (Internal vs External)",
            "desc": "Paging eliminates external fragmentation but causes internal fragmentation (last page may be partially used). Segmentation maps variable-length segments but causes external fragmentation. Most modern OSes use both (segmented paging). Know the definitions and trade-offs cold.",
            "links": []
          }
        ]
      },
      {
        "title": "Storage, Disk Scheduling & File Systems",
        "topics": [
          {
            "name": "Disk Structure \u2014 Seek Time, Rotational Latency, Transfer Time, Access Time",
            "desc": "Know the three components of disk access time: seek time (moving the read head to the right track) + rotational latency (waiting for the sector to spin under the head) + transfer time (actual data read). Seek time dominates and is what scheduling algorithms minimize.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Disk Scheduling Algorithms",
                "url": "https://www.geeksforgeeks.org/disk-scheduling-algorithms/"
              }
            ]
          },
          {
            "name": "Disk Scheduling \u2014 FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK",
            "desc": "Trace each algorithm on a given sequence of disk requests and a starting head position \u2014 compute total head movement. SSTF minimizes seek time but causes starvation. SCAN (elevator) is fair. C-SCAN resets to 0 after reaching the end, giving uniform wait time. Read an article with traced examples \u2014 this is a numerical question in exams.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 SCAN & C-SCAN",
                "url": "https://www.geeksforgeeks.org/scan-c-scan-scheduling-algorithms/"
              }
            ]
          },
          {
            "name": "File System Concepts \u2014 Inode, File Allocation (Contiguous, Linked, Indexed)",
            "desc": "The inode structure (metadata: size, owner, timestamps, data block pointers) and the three file block allocation strategies are definitional. Contiguous allocation is fast but fragmented; linked allocation has no fragmentation but no random access; indexed allocation (inode's block pointers) balances both \u2014 Linux ext4 uses this.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 File System Implementation",
                "url": "https://www.geeksforgeeks.org/file-system-implementation-in-operating-system/"
              }
            ]
          }
        ]
      },
      {
        "title": "ER Modeling & Schema Design",
        "topics": [
          {
            "name": "Entities, Attributes, Relationships \u2014 Strong vs Weak Entities",
            "desc": "Strong entities exist independently (Employee). Weak entities depend on a strong entity for identity (Dependent relies on Employee). Know the ER diagram notation for each. Draw an ER diagram for a real-world system (hospital, e-commerce) to solidify the concept.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 ER Model",
                "url": "https://www.geeksforgeeks.org/introduction-of-er-model/"
              }
            ]
          },
          {
            "name": "Cardinality Constraints \u2014 1:1, 1:N, M:N Relationships",
            "desc": "Cardinality directly determines foreign key placement and whether a junction table is needed (M:N always requires one). Know how to map each cardinality to a relational schema.",
            "links": []
          },
          {
            "name": "Keys \u2014 Primary, Foreign, Super, Candidate, Alternate, Composite",
            "desc": "Definitional hierarchy: Super key \u2287 Candidate key \u2287 Primary key. Know the definitions and be able to identify each in a given relation schema \u2014 this is a direct interview question.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Types of Keys",
                "url": "https://www.geeksforgeeks.org/types-of-keys-in-relational-model-candidate-super-primary-alternate-and-foreign/"
              }
            ]
          }
        ]
      },
      {
        "title": "SQL & Relational Algebra",
        "topics": [
          {
            "name": "DDL, DML, DCL, TCL \u2014 Full Command Taxonomy",
            "desc": "DDL (CREATE, ALTER, DROP, TRUNCATE), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK, SAVEPOINT). Know which category each belongs to \u2014 interviewers ask \"is DELETE DDL or DML?\" (it's DML; TRUNCATE is DDL).",
            "links": [
              {
                "text": "\u2197 GFG \u2014 SQL Command Categories",
                "url": "https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/"
              }
            ]
          },
          {
            "name": "All JOIN Types \u2014 INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF",
            "desc": "Write and trace each join type on a small two-table example. Know that LEFT JOIN returns all left table rows regardless of match, and how NULL fills unmatched right table columns. CROSS JOIN produces a Cartesian product \u2014 N \u00d7 M rows.",
            "links": [
              {
                "text": "\u2197 PostgreSQL Tutorial \u2014 Joins",
                "url": "https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-joins/"
              }
            ]
          },
          {
            "name": "Aggregate Functions, GROUP BY, HAVING vs WHERE",
            "desc": "WHERE filters rows before grouping; HAVING filters groups after aggregation. This distinction is asked directly in interviews. KnowCOUNT,SUM,AVG,MIN,MAXwith GROUP BY.",
            "links": []
          },
          {
            "name": "Window Functions \u2014ROW_NUMBER(),RANK(),DENSE_RANK(),LAG(),LEAD(),PARTITION BY",
            "desc": "Window functions compute aggregates over a sliding window without collapsing rows (unlike GROUP BY). Essential for ranking queries \u2014 \"find the second highest salary per department\" is solved withDENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC). This is a top-3 SQL interview question.",
            "links": [
              {
                "text": "\u2197 PostgreSQL \u2014 Window Functions",
                "url": "https://www.postgresqltutorial.com/postgresql-window-function/"
              }
            ]
          },
          {
            "name": "Subqueries \u2014 Correlated vs Non-correlated, EXISTS vs IN",
            "desc": "Correlated subqueries reference the outer query (re-executed for each row \u2014 slow). Non-correlated subqueries execute once.EXISTSshort-circuits on first match (faster for large tables);INmaterializes the full subquery result. Know when to use each.",
            "links": []
          },
          {
            "name": "Relational Algebra \u2014 \u03c3 (Select), \u03c0 (Project), \u22c8 (Join), \u222a, \u2229, \u2212 (Difference)",
            "desc": "Relational algebra is the mathematical foundation of SQL. GATE and university exams ask you to write RA expressions for given SQL queries and vice versa. Read the GFG article and practice converting SQL queries to RA notation.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Relational Algebra",
                "url": "https://www.geeksforgeeks.org/introduction-of-relational-algebra-in-dbms/"
              }
            ]
          }
        ]
      },
      {
        "title": "Normalization \u2014 1NF to BCNF",
        "topics": [
          {
            "name": "Functional Dependencies \u2014 Closure, Canonical Cover, Armstrong's Axioms",
            "desc": "Functional dependencies (A \u2192 B means A determines B) are the mathematical basis of normalization. Closure of a set of FDs \u2014 what attributes can be derived from a given set \u2014 is a computation asked in exams. Watch a worked example of computing attribute closure.",
            "links": [
              {
                "text": "\u25b6 Gate Smashers \u2014 Functional Dependencies",
                "url": "https://www.youtube.com/watch?v=dR-jJimWWHA"
              }
            ]
          },
          {
            "name": "1NF \u2192 2NF \u2192 3NF \u2192 BCNF \u2014 Step-by-step Decomposition",
            "desc": "1NF: atomicity (no repeating groups). 2NF: no partial dependency (non-key attribute depends on full primary key, not a part of it). 3NF: no transitive dependency (non-key attribute depends on non-key attribute). BCNF: for every FD A \u2192 B, A is a super key. Watching a large flat table with anomalies be decomposed step-by-step into 3NF/BCNF makes the abstract definitions concrete \u2014 this is a guaranteed exam and interview question.",
            "links": [
              {
                "text": "\u25b6 Gate Smashers \u2014 Normalization (1NF to BCNF)",
                "url": "https://www.youtube.com/watch?v=SK4H5tTT6-U"
              }
            ]
          },
          {
            "name": "Insertion / Deletion / Update Anomalies \u2014 Why Normalization Solves Them",
            "desc": "Seeing a concrete example: a non-normalized table where deleting one row accidentally loses unrelated data (deletion anomaly), or where updating a single fact requires updating multiple rows (update anomaly) \u2014 makes the motivation for normalization immediately clear rather than abstract.",
            "links": []
          }
        ]
      },
      {
        "title": "Transactions & ACID Properties",
        "topics": [
          {
            "name": "ACID \u2014 Atomicity, Consistency, Isolation, Durability",
            "desc": "Each property has a specific mechanism: Atomicity (rollback log ensures all-or-nothing), Durability (write-ahead log ensures committed data survives crashes), Consistency (constraints/triggers enforced), Isolation (concurrency control prevents interference). Seeing a power-failure scenario and how WAL ensures durability is the clearest way to understand why each property matters in production.",
            "links": [
              {
                "text": "\u25b6 Hussain Nasser \u2014 ACID Transactions",
                "url": "https://www.youtube.com/watch?v=yaQ5YMWkxq4"
              }
            ]
          },
          {
            "name": "Transaction States \u2014 Active, Partially Committed, Committed, Failed, Aborted",
            "desc": "The transaction state machine (like the process state diagram) is a directed graph \u2014 watch the state transitions to understand when a ROLLBACK occurs vs. when a COMMIT is finalized.",
            "links": []
          }
        ]
      },
      {
        "title": "Concurrency Control & Isolation Levels",
        "topics": [
          {
            "name": "Concurrency Problems \u2014 Dirty Read, Non-Repeatable Read, Phantom Read, Lost Update",
            "desc": "Each anomaly requires a two-transaction interleaved execution trace to understand: Dirty Read (T2 reads T1's uncommitted value before T1 rolls back), Non-Repeatable Read (T2 reads a value twice but T1 modifies it between reads), Phantom Read (T2 re-queries a range but T1 inserts a new row in between). Watching these traces is the only way to internalize the differences \u2014 they're asked in every DBMS interview.",
            "links": [
              {
                "text": "\u25b6 Hussain Nasser \u2014 Isolation Levels Deep Dive",
                "url": "https://www.youtube.com/watch?v=4EajrPgJAk0"
              }
            ]
          },
          {
            "name": "Isolation Levels \u2014 Read Uncommitted \u2192 Read Committed \u2192 Repeatable Read \u2192 Serializable",
            "desc": "Each level blocks a progressively stronger set of anomalies: Read Uncommitted blocks nothing, Read Committed prevents dirty reads, Repeatable Read prevents non-repeatable reads, Serializable prevents all anomalies. Know which PostgreSQL's default is (Read Committed) and what it does and doesn't prevent.",
            "links": []
          },
          {
            "name": "Locking \u2014 Shared (S) Lock, Exclusive (X) Lock, Two-Phase Locking (2PL)",
            "desc": "2PL: transactions acquire locks in the growing phase, release in the shrinking phase \u2014 no new locks can be acquired after the first release. This guarantees serializability but can lead to deadlock. Seeing a lock compatibility matrix and a 2PL schedule trace is the clearest path to understanding.",
            "links": [
              {
                "text": "\u25b6 Gate Smashers \u2014 Two-Phase Locking",
                "url": "https://www.youtube.com/watch?v=aWX6pOCqEbk"
              }
            ]
          }
        ]
      },
      {
        "title": "Indexing & B+ Trees",
        "topics": [
          {
            "name": "Why Indexes Exist \u2014 Full Table Scan O(N) vs Index Lookup O(log N)",
            "desc": "Without an index, every SELECT with a WHERE clause scans every row. With a B+ tree index, the same query traverses a tree of height ~3\u20134 regardless of whether there are 1,000 or 1,000,000,000 rows. Seeing this cost comparison framed as a database table with millions of rows makes the performance motivation concrete.",
            "links": []
          },
          {
            "name": "B-Tree vs B+ Tree \u2014 Why DBMS Prefer B+ Trees",
            "desc": "B+ trees store all data in leaf nodes with sibling pointers forming a linked list \u2014 enabling fast range queries (scan from leaf to leaf). B-trees store data in internal nodes too (better for key lookups but worse for range scans). Watching the structural difference and a range scan demo explains why every major DBMS (PostgreSQL, MySQL, SQLite) uses B+ trees for default indexes.",
            "links": [
              {
                "text": "\u25b6 CS Dojo \u2014 B-Trees & B+ Trees",
                "url": "https://www.youtube.com/watch?v=aZjYr87r1b8"
              }
            ]
          },
          {
            "name": "B+ Tree Insertion & Deletion \u2014 Node Splitting and Merging",
            "desc": "Insertion may require splitting a full node; deletion may require merging underflowing siblings. Tracing a B+ tree insert/delete on a tree of order 3 is a standard GATE exam question. Watch a step-by-step node-splitting video \u2014 drawing these operations by hand is the fastest way to get fluent.",
            "links": [
              {
                "text": "\u25b6 Gate Smashers \u2014 B+ Tree Operations",
                "url": "https://www.youtube.com/watch?v=h6Mw7_S4ai0"
              }
            ]
          },
          {
            "name": "Clustered vs Non-Clustered Indexes \u2014 Index on Multiple Columns, Selectivity",
            "desc": "Clustered index: table rows physically sorted by the index key (one per table, usually primary key). Non-clustered index: a separate B+ tree with pointers back to heap rows. High selectivity columns (many distinct values) benefit most from indexing. Know why indexing low-selectivity columns (e.g., a boolean column) is useless or harmful.",
            "links": []
          }
        ]
      },
      {
        "title": "OSI vs TCP/IP Models & Encapsulation",
        "topics": [
          {
            "name": "OSI 7-Layer Model \u2014 Each Layer's Responsibility, PDU Name at Each Layer",
            "desc": "Application (data) \u2192 Presentation (data) \u2192 Session (data) \u2192 Transport (segment) \u2192 Network (packet) \u2192 Data Link (frame) \u2192 Physical (bits). Watching a packet being wrapped in headers from top-down (encapsulation) and unwrapped bottom-up (decapsulation) at the receiver is the most effective way to understand why the layers exist and what each one adds.",
            "links": [
              {
                "text": "\u25b6 TechTerms \u2014 OSI Model Explained",
                "url": "https://www.youtube.com/watch?v=vv4y_uOneC0"
              }
            ]
          },
          {
            "name": "TCP/IP Model (4 Layers) vs OSI (7 Layers) \u2014 Mapping and Differences",
            "desc": "TCP/IP collapses OSI's top 3 layers into Application and bottom 2 into Network Access. Know the mapping and why TCP/IP is what the internet actually uses (OSI is a reference model, not implemented directly). Interviewers ask \"at which OSI layer does a Router operate?\" (Layer 3) and \"Switch?\" (Layer 2).",
            "links": []
          },
          {
            "name": "Network Devices \u2014 Hub (L1), Switch (L2, MAC table), Router (L3, routing table)",
            "desc": "Each device operates at a specific OSI layer. Hub broadcasts to all ports (no intelligence). Switch learns MAC addresses and forwards frames to the correct port only. Router reads IP headers and forwards packets across networks. Read a comparison article \u2014 these are definitional questions.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Hub vs Switch vs Router",
                "url": "https://www.geeksforgeeks.org/difference-between-hub-switch-and-router/"
              }
            ]
          }
        ]
      },
      {
        "title": "IP Addressing, Subnetting & NAT",
        "topics": [
          {
            "name": "IPv4 \u2014 Binary Representation, Classes (A/B/C), Private IP Ranges",
            "desc": "IPv4 is a 32-bit address. Know the private IP ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) and why they're non-routable on the public internet. Binary-to-decimal conversion and CIDR notation (/24 = 255.255.255.0) must be fluent.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Classful IP Addressing",
                "url": "https://www.geeksforgeeks.org/introduction-of-classful-ip-addressing/"
              }
            ]
          },
          {
            "name": "Subnetting \u2014 CIDR, Borrowing Bits, Computing Network Address, Broadcast, Host Range",
            "desc": "Given an IP like 192.168.10.0/26, you need to compute: number of subnets (2 borrowed bits = 4 subnets), hosts per subnet (2^6 - 2 = 62), network address (set host bits to 0), broadcast (set host bits to 1), and valid host range. Watching a bit-borrowing diagram where the subnet mask boundary shifts right makes the computation mechanical and fast.",
            "links": [
              {
                "text": "\u25b6 Practical Networking \u2014 Subnetting Mastery",
                "url": "https://www.youtube.com/watch?v=BWZ-MHIhqjM"
              }
            ]
          },
          {
            "name": "NAT (Network Address Translation) \u2014 How Private IPs Access the Public Internet",
            "desc": "Your home router's NAT table maps (private IP + port) \u2192 (public IP + translated port) for every outgoing connection \u2014 allowing multiple devices to share one public IP. Seeing the NAT translation table and how a response packet finds its way back to the correct private device is a diagram concept.",
            "links": []
          },
          {
            "name": "IPv6 \u2014 128-bit Address, Notation, Why IPv4 Ran Out, Dual-Stack",
            "desc": "IPv4 has 4.3 billion addresses (exhausted). IPv6 has 3.4 \u00d7 10^38. Know the shortened colon-hex notation and that most systems today run dual-stack (both IPv4 and IPv6 simultaneously). Read a comparison article \u2014 definitional for any SDE network question.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 IPv4 vs IPv6",
                "url": "https://www.geeksforgeeks.org/differences-between-ipv4-and-ipv6/"
              }
            ]
          }
        ]
      },
      {
        "title": "TCP vs UDP & Transport Layer",
        "topics": [
          {
            "name": "TCP 3-Way Handshake \u2014 SYN \u2192 SYN-ACK \u2192 ACK, Connection Teardown (FIN/ACK)",
            "desc": "Watching the SYN/SYN-ACK/ACK exchange as a sequence diagram between Client and Server \u2014 and the 4-step FIN/FIN-ACK teardown \u2014 is necessary for understanding connection overhead. Why does WebSocket (used in your chess app) start with HTTP and upgrade? Because it's built on top of this TCP handshake. Directly relevant to your resume.",
            "links": [
              {
                "text": "\u25b6 Computerphile \u2014 TCP/IP Explained",
                "url": "https://www.youtube.com/watch?v=xMtP5ZB3wSk"
              }
            ]
          },
          {
            "name": "TCP Flow Control \u2014 Sliding Window, Receive Window, Congestion Control (CWND)",
            "desc": "Flow control prevents the sender from overwhelming the receiver's buffer (receive window). Congestion control prevents the sender from overwhelming the network (slow start, congestion avoidance, fast retransmit). Seeing the sliding window move as ACKs arrive, and the slow-start exponential growth followed by additive-increase/multiplicative-decrease (AIMD), is a timeline animation concept.",
            "links": []
          },
          {
            "name": "TCP vs UDP \u2014 When to Use Each, Real-World Protocol Examples",
            "desc": "TCP: reliable, ordered, connection-oriented \u2014 HTTP, HTTPS, SMTP, SSH. UDP: unreliable, unordered, connectionless \u2014 DNS, DHCP, video streaming, online gaming (your chess app uses WebSocket over TCP, but real-time game state in many games uses UDP). Know why DNS uses UDP (small payloads, speed over reliability, falls back to TCP for large responses).",
            "links": [
              {
                "text": "\u2197 GFG \u2014 TCP vs UDP",
                "url": "https://www.geeksforgeeks.org/differences-between-tcp-and-udp/"
              }
            ]
          },
          {
            "name": "Ports \u2014 Well-Known Ports (HTTP:80, HTTPS:443, SSH:22, DNS:53, FTP:21)",
            "desc": "Memorize the standard port numbers \u2014 interviewers ask these as rapid-fire questions. Know the difference between a port (logical communication endpoint) and a socket (IP + port + protocol).",
            "links": []
          }
        ]
      },
      {
        "title": "Routing Algorithms",
        "topics": [
          {
            "name": "Distance Vector Routing \u2014 Bellman-Ford, Count-to-Infinity Problem, Split Horizon",
            "desc": "Each router knows only the distances to its neighbors and the shortest paths learned from them (Bellman-Ford). Watching how a distance vector table propagates through the network over multiple rounds \u2014 and how a link failure can cause routers to count to infinity before converging \u2014 makes the count-to-infinity problem clear. RIP uses this algorithm.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Distance Vector Routing",
                "url": "https://www.youtube.com/watch?v=00AAnwgl2DI"
              }
            ]
          },
          {
            "name": "Link State Routing \u2014 Dijkstra's Algorithm, OSPF, Flooding LSPs",
            "desc": "Each router floods the entire network with its link-state packet (LSP), building a complete topology map. Then it runs Dijkstra's algorithm locally to compute shortest paths. Watching Dijkstra run on a network graph \u2014 relaxing edges and updating the shortest path table \u2014 is both a graph algorithm and a networking concept. OSPF and IS-IS use this.",
            "links": [
              {
                "text": "\u25b6 Neso Academy \u2014 Link State Routing",
                "url": "https://www.youtube.com/watch?v=pVfj6mxhdMw"
              }
            ]
          }
        ]
      },
      {
        "title": "Application Layer Protocols",
        "topics": [
          {
            "name": "DNS \u2014 Resolution Process, Record Types (A, AAAA, CNAME, MX, NS, TXT)",
            "desc": "DNS resolution (browser checks cache \u2192 OS cache \u2192 resolver \u2192 root nameserver \u2192 TLD \u2192 authoritative nameserver) is a sequence you should be able to explain end-to-end. Know each record type's purpose. \"What happens when you type a URL in a browser?\" starts with DNS \u2014 asked in literally every SDE interview.",
            "links": [
              {
                "text": "\u2197 Cloudflare \u2014 What is DNS?",
                "url": "https://www.cloudflare.com/learning/dns/what-is-dns/"
              }
            ]
          },
          {
            "name": "HTTP/1.1 vs HTTP/2 vs HTTP/3 \u2014 Multiplexing, Head-of-Line Blocking, QUIC",
            "desc": "HTTP/1.1: one request per connection (workaround: multiple parallel connections). HTTP/2: multiplexing \u2014 multiple requests over one TCP connection, but TCP head-of-line blocking remains. HTTP/3: uses QUIC (UDP-based) to eliminate TCP head-of-line blocking entirely. These differences are asked in performance-focused SDE interviews.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 Evolution of HTTP",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP"
              }
            ]
          },
          {
            "name": "HTTP Methods, Status Codes, Headers, Cookies vs Sessions",
            "desc": "GET/POST/PUT/PATCH/DELETE semantics, idempotency (GET, PUT, DELETE are idempotent; POST is not), status code families (2xx success, 3xx redirect, 4xx client error, 5xx server error). Know specific codes: 200, 201, 301, 302, 400, 401, 403, 404, 429, 500, 503.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 HTTP Status Codes",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
              }
            ]
          }
        ]
      },
      {
        "title": "Network Security & TLS/HTTPS",
        "topics": [
          {
            "name": "TLS Handshake \u2014 Certificate Verification, Key Exchange, Session Key Derivation",
            "desc": "HTTPS = HTTP + TLS. The TLS handshake (ClientHello \u2192 ServerHello + Certificate \u2192 Key Exchange \u2192 Finished) establishes an encrypted session. Understanding asymmetric encryption for key exchange (RSA/ECDH) and symmetric encryption for data transfer (AES) \u2014 and why TLS adds latency (1\u20132 extra round trips) \u2014 is directly relevant to your backend and WebSocket work.",
            "links": [
              {
                "text": "\u25b6 Computerphile \u2014 TLS Handshake",
                "url": "https://www.youtube.com/watch?v=86cQJ0MMses"
              }
            ]
          },
          {
            "name": "Symmetric vs Asymmetric Encryption \u2014 AES, RSA, ECDH, Digital Certificates",
            "desc": "Asymmetric (public/private key pairs) is slow but solves key distribution. Symmetric (same key for both parties) is fast but requires a secure key exchange first. TLS uses asymmetric to exchange a symmetric key, then switches to symmetric for the session data. Read Cloudflare's explanation.",
            "links": [
              {
                "text": "\u2197 Cloudflare \u2014 What is SSL/TLS?",
                "url": "https://www.cloudflare.com/learning/ssl/what-is-ssl/"
              }
            ]
          },
          {
            "name": "Common Attacks \u2014 SQL Injection, XSS, CSRF, MITM, DDoS, Phishing",
            "desc": "Know the attack mechanism and prevention for each \u2014 interviewers ask \"what is XSS and how do you prevent it?\" (sanitize output, CSP headers) and \"what is CSRF and how does the double-submit cookie pattern prevent it?\". These are part of every web SDE technical round.",
            "links": [
              {
                "text": "\u2197 OWASP \u2014 Top 10 Web Vulnerabilities",
                "url": "https://owasp.org/www-project-top-ten/"
              }
            ]
          }
        ]
      },
      {
        "title": "Classes, Objects & C++ Specifics",
        "topics": [
          {
            "name": "Access Specifiers \u2014public,private,protectedin C++",
            "desc": "Public members are accessible anywhere. Private members only within the class. Protected members within the class and derived classes. Know how these change when combined with public/private/protected inheritance \u2014 the access specifier matrix is a direct exam question.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Access Modifiers in C++",
                "url": "https://www.geeksforgeeks.org/access-modifiers-in-c/"
              }
            ]
          },
          {
            "name": "Constructors \u2014 Default, Parameterized, Copy Constructor, Move Constructor (C++11)",
            "desc": "The copy constructor creates a new object as a copy of an existing one. When the compiler synthesizes a shallow copy, pointer members are copied by address \u2014 two objects now share the same heap allocation, causing a double-free on destruction. This is why the Rule of Three (if you define destructor/copy constructor/copy assignment, define all three) and Rule of Five (add move constructor and move assignment) exist.",
            "links": [
              {
                "text": "\u2197 cppreference \u2014 Rule of Three/Five",
                "url": "https://en.cppreference.com/w/cpp/language/rule_of_three"
              }
            ]
          },
          {
            "name": "Destructors \u2014 RAII Pattern, When Destructor is Called, Virtual Destructors",
            "desc": "Resource Acquisition Is Initialization (RAII): bind resource lifetime to object lifetime \u2014 acquire in constructor, release in destructor. This is the C++ pattern underlying smart pointers and the foundation of exception-safe code. Know why base class destructors must bevirtualwhen using polymorphism.",
            "links": []
          },
          {
            "name": "Static Members &friendKeyword",
            "desc": "Static data members belong to the class (shared across all instances, one copy in memory). Static member functions can be called without an instance and can only access static members.friendgrants a non-member function or another class access to private/protected members \u2014 used for operator overloading.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 Static Data Members",
                "url": "https://www.geeksforgeeks.org/static-data-members-c/"
              }
            ]
          }
        ]
      },
      {
        "title": "The Four Pillars of OOP",
        "topics": [
          {
            "name": "Encapsulation \u2014 Data Hiding, Getter/Setter Pattern, Why It Matters",
            "desc": "Encapsulation bundles data and methods that operate on it, hiding internal state from external code. The real value: you can change the internal representation without breaking callers. Watch a before/after example where a class exposes a raw array publicly vs. an encapsulated version with a push() method \u2014 changing the internal implementation from array to linked list breaks nothing.",
            "links": []
          },
          {
            "name": "Abstraction \u2014 Abstract Classes, Pure Virtual Functions (= 0), Interfaces",
            "desc": "Abstraction exposes a minimal interface and hides implementation complexity. A pure virtual function (virtual void draw() = 0) declares a contract that all derived classes must implement. Seeing a UML diagram of a Shape abstract class with Circle and Rectangle implementingdraw()differently is the clearest illustration.",
            "links": []
          },
          {
            "name": "Inheritance \u2014 Public/Private/Protected Inheritance,is-avshas-a",
            "desc": "Public inheritance models \"is-a\" (Dog is-a Animal). Private inheritance models \"implemented-in-terms-of\" (not recommended \u2014 use composition). Watching a class hierarchy diagram with method and member access marked at each level for all three inheritance types is the fastest path to internalizing the access specifier rules.",
            "links": []
          },
          {
            "name": "Polymorphism \u2014 Compile-time (Overloading) vs Run-time (Overriding)",
            "desc": "Most critical OOP concept for SDE interviews.Compile-time polymorphism (function/operator overloading) is resolved at compile time \u2014 the compiler picks the right overload by signature. Run-time polymorphism (virtual function override) is resolved at runtime \u2014 the correct derived class method is called through a base class pointer. Watch a comparison showing the difference when calling through a base pointer \u2014 this is the entire vtable motivation.",
            "links": [
              {
                "text": "\u25b6 The Cherno \u2014 Polymorphism in C++",
                "url": "https://www.youtube.com/watch?v=wK93q8YDNHE"
              }
            ]
          }
        ]
      },
      {
        "title": "Virtual Functions, vtable & Runtime Dispatch",
        "topics": [
          {
            "name": "The Virtual Table (vtable) \u2014 How C++ Implements Runtime Polymorphism",
            "desc": "When a class has virtual functions, the compiler creates a hidden vtable \u2014 an array of function pointers for all virtual functions. Each object gets a hidden vptr (virtual pointer) pointing to its class's vtable. When a virtual function is called through a base pointer, the CPU dereferences the vptr \u2192 looks up the function pointer in the vtable \u2192 calls it. Watching this memory diagram explains: why virtual dispatch is slightly slower (two pointer indirections), why virtual destructors must exist when deleting through base pointer, and howdynamic_castuses the vptr.",
            "links": [
              {
                "text": "\u25b6 The Cherno \u2014 Virtual Functions & vtable in C++",
                "url": "https://www.youtube.com/watch?v=oIV2KchSyGQ"
              }
            ]
          },
          {
            "name": "Pure Virtual Functions & Abstract Classes \u2014 Cannot Be Instantiated",
            "desc": "A class with at least one pure virtual function (= 0) is abstract \u2014 it cannot be instantiated directly. Attempting to do so is a compile error. Derived classes must implement all pure virtual functions or they too become abstract. Know this rule cold \u2014 interviewers ask it as a yes/no question to filter candidates.",
            "links": []
          },
          {
            "name": "Virtual Destructor \u2014 Why You Must Declare It Virtual in Base Classes",
            "desc": "Without a virtual destructor:Base* ptr = new Derived(); delete ptr;calls only~Base(), not~Derived()\u2014 leaking the derived object's resources. Withvirtual ~Base(): the vtable dispatch calls~Derived()then~Base()in order. This is a guaranteed interview question \u2014 \"when should you make a destructor virtual?\"",
            "links": []
          },
          {
            "name": "C++ Casting \u2014static_cast,dynamic_cast,reinterpret_cast,const_cast",
            "desc": "dynamic_castperforms a safe runtime downcast using the vptr \u2014 if the cast is invalid, it returns nullptr (for pointers) or throws (for references).static_castis a compile-time cast with no runtime safety check. Know when each is appropriate \u2014dynamic_castrequires the class to be polymorphic (has at least one virtual function).",
            "links": [
              {
                "text": "\u2197 cppreference \u2014 dynamic_cast",
                "url": "https://en.cppreference.com/w/cpp/language/dynamic_cast"
              }
            ]
          }
        ]
      },
      {
        "title": "Advanced C++ OOP \u2014 Multiple Inheritance & Diamond Problem",
        "topics": [
          {
            "name": "Multiple Inheritance \u2014 Class Hierarchy, Ambiguity Resolution with Scope Operator",
            "desc": "C++ allows a class to inherit from multiple base classes. When two base classes have a method with the same name, calling it on the derived class is ambiguous \u2014 the compiler errors. The fix: use the scope operator (derived.Base1::method()). Watching a diamond inheritance diagram makes the ambiguity immediately obvious.",
            "links": []
          },
          {
            "name": "The Diamond Problem & Virtual Inheritance",
            "desc": "Class D inherits from B and C, both of which inherit from A. Without virtual inheritance, D has two copies of A's members. Withvirtualinheritance on B and C's inheritance of A, only one shared A exists in D. Seeing the memory layout of the diamond hierarchy \u2014 two A subobjects vs one A subobject \u2014 is the critical insight. This is a direct SDE C++ interview question.",
            "links": [
              {
                "text": "\u25b6 The Cherno \u2014 Multiple Inheritance in C++",
                "url": "https://www.youtube.com/watch?v=7APovvvftQs"
              }
            ]
          },
          {
            "name": "Smart Pointers \u2014unique_ptr,shared_ptr,weak_ptr",
            "desc": "RAII-based automatic memory management.unique_ptr: single owner, zero overhead vs raw pointer.shared_ptr: reference-counted shared ownership.weak_ptr: non-owning reference that breaks circular dependencies. Know when to use each \u2014 usingshared_ptreverywhere causes cycles;unique_ptris the default choice.",
            "links": [
              {
                "text": "\u2197 cppreference \u2014 unique_ptr",
                "url": "https://en.cppreference.com/w/cpp/memory/unique_ptr"
              },
              {
                "text": "\u2197 cppreference \u2014 shared_ptr",
                "url": "https://en.cppreference.com/w/cpp/memory/shared_ptr"
              }
            ]
          },
          {
            "name": "Templates \u2014 Function Templates, Class Templates, Template Specialization",
            "desc": "Templates provide compile-time generics \u2014 the compiler generates type-specific code at compile time, producing zero runtime overhead. The Standard Library (vector, map, sort) is entirely template-based. Read the cppreference templates page and know that template errors occur at instantiation time, not definition time.",
            "links": [
              {
                "text": "\u2197 cppreference \u2014 Templates",
                "url": "https://en.cppreference.com/w/cpp/language/templates"
              }
            ]
          }
        ]
      },
      {
        "title": "Design Principles \u2014 SOLID & Common Patterns",
        "topics": [
          {
            "name": "SOLID Principles \u2014 S, O, L, I, D with Code Examples",
            "desc": "Single Responsibility (one class, one reason to change), Open/Closed (open for extension, closed for modification \u2014 use virtual functions), Liskov Substitution (derived class must be substitutable for base class without breaking behavior), Interface Segregation (many small interfaces > one large interface), Dependency Inversion (depend on abstractions, not concretions). Read each principle with a C++ before/after code example \u2014 interviewers ask you to name and explain all five.",
            "links": [
              {
                "text": "\u2197 GFG \u2014 SOLID Principles",
                "url": "https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/"
              }
            ]
          },
          {
            "name": "Design Patterns \u2014 Singleton, Factory, Observer, Strategy, Decorator",
            "desc": "Know at least these five patterns: Singleton (one instance globally \u2014 thread-safe implementation), Factory (creates objects without specifying concrete class), Observer (event subscription \u2014 your WebSocket server IS an observer pattern), Strategy (swap algorithms at runtime), Decorator (add behavior without modifying class). These bridge OOP and system design rounds.",
            "links": [
              {
                "text": "\u2197 Refactoring Guru \u2014 Design Patterns",
                "url": "https://refactoring.guru/design-patterns"
              }
            ]
          },
          {
            "name": "Composition Over Inheritance \u2014 When to Preferhas-aOveris-a",
            "desc": "Deep inheritance hierarchies are brittle \u2014 a change in a base class ripples to all derived classes. Composition (a Carhas-aEngine) is more flexible and easier to test. Read the \"favour composition over inheritance\" section of Effective C++ and know when inheritance is the right tool (true is-a relationship with LSP satisfied).",
            "links": []
          }
        ]
      },
      {
        "title": "SE \u00b7 Introduction to Software Engineering",
        "topics": [
          {
            "name": "Introduction to Software Engineering",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Intro to SE",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-introduction-to-software-engineering/"
              }
            ]
          },
          {
            "name": "Classification of Software",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
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
        "title": "SE \u00b7 SDLC Models",
        "topics": [
          {
            "name": "Classical Waterfall Model",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Waterfall Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/waterfall-model/"
              }
            ]
          },
          {
            "name": "Iterative Waterfall Model",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Iterative Waterfall",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-iterative-waterfall-model/"
              }
            ]
          },
          {
            "name": "Spiral Model",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Spiral Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-spiral-model/"
              }
            ]
          },
          {
            "name": "Rapid Application Development (RAD) Model",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "RAD Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-rapid-application-development-model-rad/"
              }
            ]
          },
          {
            "name": "RAD vs Traditional SDLC",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "RAD vs Traditional SDLC",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-rad-model-vs-traditional-sdlc/"
              }
            ]
          },
          {
            "name": "Agile Development Models \u2014 Scrum, Kanban, XP",
            "desc": "Most-asked SE topic:know the 4 Agile Manifesto values, what a sprint/standup/retro is, and be ready to contrast Scrum (fixed sprints, roles) vs Kanban (continuous flow, WIP limits).",
            "links": [
              {
                "text": "Agile Development Models",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-agile-development-models/"
              }
            ]
          },
          {
            "name": "Comparison of Life Cycle Models",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Comparison of Life Cycle Models",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-comparison-of-different-life-cycle-models/"
              }
            ]
          },
          {
            "name": "Coupling and Cohesion",
            "desc": "Trap:good design = LOW coupling + HIGH cohesion. People sometimes flip this under pressure \u2014 say it out loud twice before the interview.",
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
        "title": "SE \u00b7 Software Project Management",
        "topics": [
          {
            "name": "Project Management Process phases",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Project Management Process",
                "url": "https://www.geeksforgeeks.org/software-engineering/phases-project-management-processes/"
              }
            ]
          },
          {
            "name": "COCOMO Model \u2014 effort/cost estimation",
            "desc": "Know the 3 modes: Organic (small, simple), Semi-detached (medium), Embedded (complex, tight constraints) \u2014 asked as a straight definitional MCQ.",
            "links": [
              {
                "text": "COCOMO Model",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-cocomo-model/"
              }
            ]
          },
          {
            "name": "Risk Management in SDLC",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Risk Management in SDLC",
                "url": "https://www.geeksforgeeks.org/software-engineering/integrating-risk-management-in-sdlc-set-1/"
              }
            ]
          },
          {
            "name": "Role & Responsibilities of a Software Project Manager",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
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
        "title": "SE \u00b7 Software Requirements",
        "topics": [
          {
            "name": "Classification of Software Requirements \u2014 functional vs non-functional",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Classification of Requirements",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-classification-of-software-requirements/"
              }
            ]
          },
          {
            "name": "How to Write a Good SRS",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Writing a Good SRS",
                "url": "https://www.geeksforgeeks.org/software-engineering/how-to-write-a-good-srs-for-your-project/"
              }
            ]
          },
          {
            "name": "Quality Characteristics of a Good SRS",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Quality Characteristics of SRS",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-quality-characteristics-of-a-good-srs/"
              }
            ]
          },
          {
            "name": "Requirements Elicitation",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
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
        "title": "SE \u00b7 Software Testing & Debugging",
        "topics": [
          {
            "name": "Seven Principles of Software Testing",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "7 Principles of Testing",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-seven-principles-of-software-testing/"
              }
            ]
          },
          {
            "name": "Testing Guidelines",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Testing Guidelines",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-testing-guidelines/"
              }
            ]
          },
          {
            "name": "Black Box Testing",
            "desc": "Trap:Black box = tests functionality without knowing internal code (you did this for PackSage's 90 endpoints). White box = tests internal logic/paths with code visibility. Don't mix them up under pressure.",
            "links": [
              {
                "text": "Black Box Testing",
                "url": "https://www.geeksforgeeks.org/software-testing/software-engineering-black-box-testing/"
              }
            ]
          },
          {
            "name": "White Box Testing",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "White Box Testing",
                "url": "https://www.geeksforgeeks.org/software-testing/software-engineering-white-box-testing/"
              }
            ]
          },
          {
            "name": "Debugging strategies",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
            "links": [
              {
                "text": "Debugging",
                "url": "https://www.geeksforgeeks.org/software-engineering/software-engineering-debugging/"
              }
            ]
          },
          {
            "name": "Integration Testing \u2014 big bang, top-down, bottom-up",
            "desc": "Core Software Engineering concept for SDE interview preparation.",
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
  },
  {
    "id": "js-fullstack",
    "title": "Full-Stack JavaScript",
    "accent": "#6c63f5",
    "icon": "\u26a1",
    "phases": [
      {
        "title": "JavaScript Fundamentals",
        "topics": [
          {
            "name": "Variables, Data Types, Operators & Conditionals",
            "desc": "Pure grammar rules. Reading MDN or javascript.info covers this in one sitting.",
            "links": [
              {
                "text": "\u2197 MDN Grammar & Types",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types"
              },
              {
                "text": "\u2197 javascript.info \u2014 Data Types",
                "url": "https://javascript.info/data-types"
              }
            ]
          },
          {
            "name": "Loops, Strings, Built-in Objects & Error Handling",
            "desc": "Straightforward iteration and object API. Read and try examples inline.",
            "links": [
              {
                "text": "\u2197 javascript.info \u2014 Loops",
                "url": "https://javascript.info/while-for"
              },
              {
                "text": "\u2197 MDN String",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
              },
              {
                "text": "\u2197 MDN Error Handling",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
              }
            ]
          },
          {
            "name": "Objects, Arrays, Classes & Default Parameters",
            "desc": "Reference type rules are declarative \u2014 documentation covers all edge cases clearly.",
            "links": [
              {
                "text": "\u2197 javascript.info \u2014 Objects",
                "url": "https://javascript.info/object"
              },
              {
                "text": "\u2197 javascript.info \u2014 Arrays",
                "url": "https://javascript.info/array"
              },
              {
                "text": "\u2197 MDN Classes",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
              }
            ]
          },
          {
            "name": "Plain Functions vs Arrow Functions",
            "desc": "Key difference: arrow functions do not have their ownthiscontext. Read once, internalize, done.",
            "links": [
              {
                "text": "\u2197 javascript.info \u2014 Arrow Functions",
                "url": "https://javascript.info/arrow-functions-basics"
              }
            ]
          },
          {
            "name": "Destructuring, Spread/Rest, Optional Chaining",
            "desc": "ES6+ syntax rules. Extremely pattern-based \u2014 read the MDN examples and you're set.",
            "links": [
              {
                "text": "\u2197 MDN Destructuring",
                "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
              },
              {
                "text": "\u2197 Optional Chaining",
                "url": "https://javascript.info/optional-chaining"
              }
            ]
          },
          {
            "name": "Array Higher-Order Methods \u2014 map, filter, reduce, find, forEach",
            "desc": "Functional patterns used constantly in React. Learn the signatures from docs, practice on arrays.",
            "links": [
              {
                "text": "\u2197 javascript.info \u2014 Array Methods",
                "url": "https://javascript.info/array-methods"
              }
            ]
          },
          {
            "name": "How JavaScript Works \u2014 Execution Context & Call Stack",
            "desc": "You need to see how the JS engine creates Global Execution Context, how variables/functions are hoisted into memory in Phase 1, and how the Call Stack tracks them. Critical foundation for everything that follows.",
            "links": [
              {
                "text": "\u25b6 Namaste JS Ep.1 \u2014 How JS Works & Execution Context",
                "url": "https://www.youtube.com/watch?v=iLWTnMzWtj4"
              }
            ]
          },
          {
            "name": "Hoisting in JavaScript \u2014 Variable & Function Hoisting",
            "desc": "Understanding whyvargivesundefinedand functions are available before declaration requires seeing memory allocation happen before execution starts.",
            "links": [
              {
                "text": "\u25b6 Namaste JS Ep.3 \u2014 Hoisting",
                "url": "https://www.youtube.com/watch?v=Fnlnw8uY6jo"
              }
            ]
          },
          {
            "name": "Scope Chain, Lexical Environment & Temporal Dead Zone",
            "desc": "How nested functions look up variables through lexical environments. TDZ forlet/constrequires visualizing the memory block before initialization.",
            "links": [
              {
                "text": "\u25b6 Namaste JS Ep.7 \u2014 Scope & Lexical Environment",
                "url": "https://www.youtube.com/watch?v=uH-tVP8MUs8"
              },
              {
                "text": "\u25b6 Namaste JS Ep.8 \u2014 let & const, TDZ",
                "url": "https://www.youtube.com/watch?v=BNC6slYCj50"
              }
            ]
          },
          {
            "name": "Closures \u2014 Deep Dive",
            "desc": "One of the most important interview topics. A closure \"closes over\" its outer lexical environment \u2014 you need to see the memory snapshot visually to understand why the reference persists even after the outer function returns.",
            "links": [
              {
                "text": "\u25b6 Namaste JS Ep.10 \u2014 Closures",
                "url": "https://www.youtube.com/watch?v=qikxEIxsXco"
              },
              {
                "text": "\u25b6 Namaste JS Ep.11 \u2014 setTimeout + Closures Interview Qs",
                "url": "https://www.youtube.com/watch?v=t1nFAMws5FI"
              }
            ]
          },
          {
            "name": "Object Cloning (Shallow vs Deep) & Garbage Collection",
            "desc": "Seeing stack vs heap reference diagrams during shallow/deep clone is critical. Understanding when reference counts drop to zero for GC is a runtime concept.",
            "links": [
              {
                "text": "\u2197 javascript.info \u2014 Garbage Collection (read for reference)",
                "url": "https://javascript.info/garbage-collection"
              }
            ]
          },
          {
            "name": "thisKeyword \u2014 All Behaviors",
            "desc": "The most confusing JS concept becausethischanges based on how a function is called, not where it's defined. Seeing call-site diagrams makes the rules stick. Common SDE interview question.",
            "links": [
              {
                "text": "\u25b6 Namaste JS Season 2 \u2014 this keyword",
                "url": "https://www.youtube.com/watch?v=rv7Q11KZm8I"
              }
            ]
          }
        ]
      },
      {
        "title": "Browser, DOM & Runtime",
        "topics": [
          {
            "name": "DOM Access, Traversal & Manipulation \u2014 createElement, querySelector, innerHTML",
            "desc": "These are API method lookups. Read MDN, try each method in browser console. Build a small to-do list to cement them.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 DOM Introduction",
                "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
              },
              {
                "text": "\u2197 javascript.info \u2014 Document",
                "url": "https://javascript.info/document"
              }
            ]
          },
          {
            "name": "Styling Elements via JS \u2014 classList, style, getComputedStyle",
            "desc": "Straightforward API \u2014 read the MDN reference and use the console to experiment.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 classList",
                "url": "https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"
              }
            ]
          },
          {
            "name": "Event Loop, Web APIs, Microtask Queue & Callback Queue",
            "desc": "Most asked JS interview topic.You need to watch a step-by-step tracer showing how setTimeout, Promises, and fetch interact with the Call Stack, Web APIs, Microtask Queue, and Callback Queue. No diagram in a book matches seeing it animate live.",
            "links": [
              {
                "text": "\u25b6 Namaste JS Ep.15 \u2014 Event Loop",
                "url": "https://www.youtube.com/watch?v=8zKuNo4ay8E"
              }
            ]
          },
          {
            "name": "Events, addEventListener, Event Delegation & Bubbling/Capturing",
            "desc": "How an event travels down (capture) and up (bubble) the DOM tree is a spatial concept \u2014 watching a tree diagram with the event highlighted at each node is far more effective than reading prose.",
            "links": [
              {
                "text": "\u25b6 Namaste JS \u2014 Event Propagation",
                "url": "https://www.youtube.com/watch?v=4vuG_3_1Vv4"
              }
            ]
          },
          {
            "name": "Browser Rendering \u2014 Reflow & Repaint (Performance)",
            "desc": "Modifying layout-affecting CSS properties triggers reflow \u2014 the browser recalculates geometry for all affected elements. Seeing which CSS properties trigger reflow vs repaint vs compositor-only is a visual performance concept asked in SDE interviews.",
            "links": [
              {
                "text": "\u2197 web.dev \u2014 Rendering Performance",
                "url": "https://web.dev/articles/rendering-performance"
              }
            ]
          }
        ]
      },
      {
        "title": "Asynchronous JavaScript",
        "topics": [
          {
            "name": "Callbacks & Callback Hell",
            "desc": "Understanding why deeply nested callbacks became a problem sets up the motivation for Promises. Namaste JS shows this progressively.",
            "links": [
              {
                "text": "\u25b6 Namaste JS S2 \u2014 Callback Hell",
                "url": "https://www.youtube.com/watch?v=yEKtJkB0oCo"
              }
            ]
          },
          {
            "name": "Promises \u2014 Creation, Chaining, Error Handling",
            "desc": "You need to see a Promise's state machine (pending \u2192 fulfilled / rejected) and how.then()chains pass resolved values forward. The mental model is critical before writing async code.",
            "links": [
              {
                "text": "\u25b6 Namaste JS S2 \u2014 Promises",
                "url": "https://www.youtube.com/watch?v=ap-6PPAuK1Y"
              },
              {
                "text": "\u25b6 Namaste JS S2 \u2014 Promise Chaining",
                "url": "https://www.youtube.com/watch?v=U74BJcr8NeQ"
              }
            ]
          },
          {
            "name": "Promise APIs \u2014 Promise.all, Promise.allSettled, Promise.race, Promise.any",
            "desc": "Interview favorites. Each API resolves/rejects at a different point \u2014 seeing timeline diagrams of 3 concurrent promises is the clearest way to distinguish them.",
            "links": [
              {
                "text": "\u25b6 Namaste JS S2 \u2014 Promise APIs",
                "url": "https://www.youtube.com/watch?v=DlTVt1ZJ67Q"
              }
            ]
          },
          {
            "name": "async / await & Error Handling with try/catch",
            "desc": "Understanding howawaitpauses execution inside the async function without blocking the main thread requires grounding in the Event Loop from Phase 2.",
            "links": [
              {
                "text": "\u25b6 Namaste JS S2 \u2014 async/await",
                "url": "https://www.youtube.com/watch?v=6nv3qy3oNkc"
              }
            ]
          },
          {
            "name": "Fetch API & Making Network Requests",
            "desc": "Combinefetchwith async/await and see how a real HTTP response is consumed. Build a small API-calling script while watching.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 Using Fetch",
                "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
              }
            ]
          }
        ]
      },
      {
        "title": "TypeScript Foundations",
        "topics": [
          {
            "name": "Basic Types \u2014 string, number, boolean, any, unknown, never, void",
            "desc": "Pure type annotations \u2014 exactly the kind of declarative rule you can absorb from docs in an hour.",
            "links": [
              {
                "text": "\u2197 TS Handbook \u2014 Everyday Types",
                "url": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"
              }
            ]
          },
          {
            "name": "Type Aliases vs Interfaces \u2014 when to use each",
            "desc": "The distinction (interfaces are open/extendable; type aliases are closed/composable) is a single reference decision. Read the handbook section, bookmark the table.",
            "links": [
              {
                "text": "\u2197 TS Handbook \u2014 Type Aliases vs Interfaces",
                "url": "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html"
              }
            ]
          },
          {
            "name": "Union & Intersection Types, Literal Types, Type Narrowing",
            "desc": "Logical type composition with operators (|and&) \u2014 directly readable from docs.",
            "links": [
              {
                "text": "\u2197 TS Handbook \u2014 Narrowing",
                "url": "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"
              }
            ]
          },
          {
            "name": "Generics",
            "desc": "Essential for typed utility functions and React hooks. The handbook examples are excellent \u2014 read them and write a typed identity function, a typed array wrapper, and a typed API fetch wrapper.",
            "links": [
              {
                "text": "\u2197 TS Handbook \u2014 Generics",
                "url": "https://www.typescriptlang.org/docs/handbook/2/generics.html"
              }
            ]
          },
          {
            "name": "Enums, Tuples, Readonly, Partial, Required, Pick, Omit",
            "desc": "Utility types used heavily in React and API layers. Each is a one-liner rule \u2014 the docs cover all of them on a single page.",
            "links": [
              {
                "text": "\u2197 TS Handbook \u2014 Utility Types",
                "url": "https://www.typescriptlang.org/docs/handbook/utility-types.html"
              }
            ]
          },
          {
            "name": "TypeScript with Functions \u2014 typed params, return types, overloads",
            "desc": "Straightforward extension of function syntax from JS. Read and apply immediately to the functions you already write.",
            "links": [
              {
                "text": "\u2197 TS Handbook \u2014 Functions",
                "url": "https://www.typescriptlang.org/docs/handbook/2/functions.html"
              }
            ]
          }
        ]
      },
      {
        "title": "React.js",
        "topics": [
          {
            "name": "JSX, Components, Props & Event Handling",
            "desc": "JSX is syntactic sugar overReact.createElement\u2014 pure transformation rules you can read. The new React docs Quick Start is one of the best introductions written.",
            "links": [
              {
                "text": "\u2197 react.dev \u2014 Quick Start",
                "url": "https://react.dev/learn"
              }
            ]
          },
          {
            "name": "Conditional Rendering & List Rendering",
            "desc": "Ternary, short-circuit, and array map patterns \u2014 declarative rules readable in 20 minutes.",
            "links": [
              {
                "text": "\u2197 react.dev \u2014 Conditional Rendering",
                "url": "https://react.dev/learn/conditional-rendering"
              },
              {
                "text": "\u2197 react.dev \u2014 Rendering Lists",
                "url": "https://react.dev/learn/rendering-lists"
              }
            ]
          },
          {
            "name": "Tailwind CSS",
            "desc": "Pure utility-class lookup. Open Tailwind docs alongside your editor \u2014 search for the property you want and apply. No video needed.",
            "links": [
              {
                "text": "\u2197 Tailwind CSS Docs",
                "url": "https://tailwindcss.com/docs"
              }
            ]
          },
          {
            "name": "React Hook Form",
            "desc": "Excellent getting-started guide \u2014 the library is designed around a readable API. Build one form with validation while reading.",
            "links": [
              {
                "text": "\u2197 React Hook Form \u2014 Get Started",
                "url": "https://react-hook-form.com/get-started"
              }
            ]
          },
          {
            "name": "useState \u2014 State Updates, Batching & State Lifting",
            "desc": "State updates are asynchronous and batched. You need to see re-render triggers, why stale closures happen, and how lifting state propagates changes down a component tree. Watching Mohit Garg's React series covers this architecturally.",
            "links": [
              {
                "text": "\u2197 react.dev \u2014 useState Reference",
                "url": "https://react.dev/reference/react/useState"
              }
            ]
          },
          {
            "name": "useEffect \u2014 Side Effects, Dependency Array & Cleanup",
            "desc": "The dependency array rules and cleanup function pattern require seeing examples of memory leaks (missing cleanup on timers/subscriptions) and infinite loops (wrong deps) to understand why the rules exist.",
            "links": [
              {
                "text": "\u2197 react.dev \u2014 useEffect Reference",
                "url": "https://react.dev/reference/react/useEffect"
              },
              {
                "text": "\u2197 react.dev \u2014 Synchronizing with Effects",
                "url": "https://react.dev/learn/synchronizing-with-effects"
              }
            ]
          },
          {
            "name": "useContext \u2014 Context API & Provider Pattern",
            "desc": "Understanding the Provider tree and why components re-render when context value changes is a structural concept \u2014 watching a provider wrap diagram is clearer than reading prose.",
            "links": [
              {
                "text": "\u2197 react.dev \u2014 useContext Reference",
                "url": "https://react.dev/reference/react/useContext"
              }
            ]
          },
          {
            "name": "React Router \u2014 Routes, Dynamic Segments, Nested Routes, useNavigate",
            "desc": "Routing in SPAs requires understanding how the URL maps to component trees without page reloads. Watching a build is faster than assembling this from docs alone.",
            "links": [
              {
                "text": "\u2197 React Router v6 Docs",
                "url": "https://reactrouter.com/start/library/routing"
              }
            ]
          },
          {
            "name": "useRef, useMemo & useCallback \u2014 Performance Hooks",
            "desc": "Top interview hooks.useMemocaches computed values,useCallbackcaches function definitions \u2014 both prevent unnecessary child re-renders. Seeing a before/after render-count comparison makes the purpose clear immediately.",
            "links": [
              {
                "text": "\u2197 react.dev \u2014 useMemo",
                "url": "https://react.dev/reference/react/useMemo"
              },
              {
                "text": "\u2197 react.dev \u2014 useCallback",
                "url": "https://react.dev/reference/react/useCallback"
              }
            ]
          },
          {
            "name": "useReducer \u2014 Complex State Management",
            "desc": "Bridges the gap betweenuseStateand Redux \u2014 seeing action \u2192 reducer \u2192 state flow visually makes Redux much easier to learn afterward.",
            "links": [
              {
                "text": "\u2197 react.dev \u2014 useReducer Reference",
                "url": "https://react.dev/reference/react/useReducer"
              }
            ]
          },
          {
            "name": "Redux Toolkit \u2014 Store, Slices, Actions, Selectors",
            "desc": "Uni-directional data flow (Action \u2192 Reducer \u2192 Store \u2192 UI) is an architectural concept. Watching a diagram showing how dispatched actions flow through the store and trigger re-renders is significantly clearer than reading docs alone.",
            "links": [
              {
                "text": "\u2197 Redux Toolkit \u2014 Quick Start",
                "url": "https://redux-toolkit.js.org/tutorials/quick-start"
              }
            ]
          }
        ]
      },
      {
        "title": "Node.js & Express",
        "topics": [
          {
            "name": "How the Web Works \u2014 HTTP, DNS, Client-Server Model",
            "desc": "Foundational concepts with clear explanations available in MDN articles. Read once, know forever.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 How the Web Works",
                "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
              }
            ]
          },
          {
            "name": "HTTP Methods, Status Codes & REST Principles",
            "desc": "All reference material \u2014 use a cheat sheet while building your first API.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 HTTP Methods",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods"
              },
              {
                "text": "\u2197 MDN \u2014 Status Codes",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
              }
            ]
          },
          {
            "name": "Express \u2014 Routing, Route Params, Query Strings, Request/Response",
            "desc": "Express routing is extremely declarative. Read the getting-started guide and build a simple CRUD API while reading.",
            "links": [
              {
                "text": "\u2197 Express \u2014 Getting Started",
                "url": "https://expressjs.com/en/starter/installing.html"
              },
              {
                "text": "\u2197 Express \u2014 Routing Guide",
                "url": "https://expressjs.com/en/guide/routing.html"
              }
            ]
          },
          {
            "name": "Error Handling in Express \u2014 Custom Error Classes, Error Middleware",
            "desc": "The 4-argument error middleware pattern is a specific Express convention. Read it, implement a global error handler, done.",
            "links": [
              {
                "text": "\u2197 Express \u2014 Error Handling",
                "url": "https://expressjs.com/en/guide/error-handling.html"
              }
            ]
          },
          {
            "name": "Environment Variables \u2014 dotenv, config management",
            "desc": "Simple pattern \u2014 read the dotenv README, configure once, use everywhere.",
            "links": [
              {
                "text": "\u2197 dotenv npm README",
                "url": "https://www.npmjs.com/package/dotenv"
              }
            ]
          },
          {
            "name": "Node.js Architecture \u2014 Libuv, Event Loop, Thread Pool, Non-blocking I/O",
            "desc": "Understanding why Node can handle thousands of concurrent requests with a single thread requires visualizing the Libuv thread pool, the event loop phases (timers, I/O, close callbacks), and how async file/network I/O offloads to the OS. Critical for backend SDE questions. Follow Mohit Garg's Node playlist.",
            "links": [
              {
                "text": "\u2197 Node.js Docs \u2014 Event Loop Explained",
                "url": "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick"
              }
            ]
          },
          {
            "name": "Middlewares in Express \u2014 Chain, Order, next(), Custom Middleware",
            "desc": "The request-response pipeline is a linear chain of functions \u2014 watching how a request moves through authentication \u2192 validation \u2192 rate-limiter \u2192 handler middleware is a visual pipeline concept.",
            "links": []
          },
          {
            "name": "Authentication \u2014 JWT (Access + Refresh Tokens), Cookie-based Auth",
            "desc": "The token lifecycle (sign \u2192 send \u2192 store \u2192 attach to requests \u2192 verify \u2192 refresh) is a sequence diagram that is much easier to understand visually. This is asked in every full-stack SDE round.",
            "links": [
              {
                "text": "\u2197 jwt.io \u2014 JWT Introduction",
                "url": "https://jwt.io/introduction"
              }
            ]
          },
          {
            "name": "File Uploads \u2014 Multer, Cloudinary Integration",
            "desc": "Multipart form data, how Multer intercepts it, and then streaming the buffer to Cloudinary involves understanding request lifecycle at a deeper level. Follow Mohit Garg's Node playlist for this.",
            "links": []
          }
        ]
      },
      {
        "title": "Databases \u2014 MongoDB & Mongoose",
        "topics": [
          {
            "name": "MongoDB Setup \u2014 Atlas Cloud, Local, Compass GUI",
            "desc": "Follow the Atlas getting-started guide \u2014 it's a wizard-based setup. No video needed for account creation and cluster configuration.",
            "links": [
              {
                "text": "\u2197 MongoDB Atlas \u2014 Getting Started",
                "url": "https://www.mongodb.com/docs/atlas/getting-started/"
              }
            ]
          },
          {
            "name": "Mongoose Schemas, Models, CRUD Operations",
            "desc": "Schema definition with Mongoose is declarative \u2014 read the docs and define a few models. The CRUD methods are standard API calls.",
            "links": [
              {
                "text": "\u2197 Mongoose \u2014 Guide",
                "url": "https://mongoosejs.com/docs/guide.html"
              }
            ]
          },
          {
            "name": "Mongoose Validators, Middleware (pre/post hooks), Virtual Fields",
            "desc": "Pre/post hooks are lifecycle callbacks defined on the schema \u2014 the pattern is clear from the docs.",
            "links": [
              {
                "text": "\u2197 Mongoose \u2014 Middleware",
                "url": "https://mongoosejs.com/docs/middleware.html"
              }
            ]
          },
          {
            "name": "Mongoose populate, References & Document Relationships",
            "desc": "Understanding howpopulate()joins documents across collections and when to embed vs reference is an architectural decision best seen in a real schema design walkthrough. Watch within Mohit Garg's Node playlist.",
            "links": []
          },
          {
            "name": "MVC Architecture \u2014 Model, Controller, Router folder structure",
            "desc": "Seeing how a codebase gets organized under MVC (routes \u2192 controllers \u2192 services \u2192 models) is a structural decision that watching a project refactor makes much clearer than reading about it.",
            "links": []
          },
          {
            "name": "Aggregation Pipeline \u2014 $match, $group, $lookup, $project",
            "desc": "MongoDB aggregation is a data transformation pipeline \u2014 each stage modifies the document stream. Seeing a pipeline diagram with data flowing through stages is significantly clearer than the docs alone.",
            "links": [
              {
                "text": "\u2197 MongoDB Docs \u2014 Aggregation Pipeline",
                "url": "https://www.mongodb.com/docs/manual/core/aggregation-pipeline/"
              }
            ]
          }
        ]
      },
      {
        "title": "Next.js",
        "topics": [
          {
            "name": "App Router File Structure \u2014 page.tsx, layout.tsx, loading.tsx, error.tsx",
            "desc": "Folder-based routing conventions are pure rules \u2014 read the Next.js docs routing section once and the pattern becomes clear. Each file name has a fixed role.",
            "links": [
              {
                "text": "\u2197 Next.js Docs \u2014 Getting Started",
                "url": "https://nextjs.org/docs/app/getting-started/installation"
              },
              {
                "text": "\u2197 Next.js Docs \u2014 Routing",
                "url": "https://nextjs.org/docs/app/building-your-application/routing"
              }
            ]
          },
          {
            "name": "Link Component, useRouter, usePathname, useSearchParams",
            "desc": "Client-side navigation API \u2014 declarative usage documented clearly. Read and apply.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Link Component",
                "url": "https://nextjs.org/docs/app/api-reference/components/link"
              }
            ]
          },
          {
            "name": "Image Optimization Component \u2014 next/image",
            "desc": "Declarative props-based API \u2014 straightforward docs, takes 15 minutes to learn.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Image Component",
                "url": "https://nextjs.org/docs/app/api-reference/components/image"
              }
            ]
          },
          {
            "name": "API Routes \u2014 Route Handlers (GET, POST, PATCH, DELETE)",
            "desc": "Next.js Route Handlers replace Express for simple APIs. The pattern is a named export function \u2014 read the docs and build a sample CRUD handler.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Route Handlers",
                "url": "https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
              }
            ]
          },
          {
            "name": "Environment Variables in Next.js \u2014 NEXT_PUBLIC prefix rules",
            "desc": "Simple naming convention. Read the docs page once.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Environment Variables",
                "url": "https://nextjs.org/docs/app/guides/environment-variables"
              }
            ]
          },
          {
            "name": "Middleware \u2014 matcher config, redirect/rewrite logic",
            "desc": "Request-time middleware with a matcher config \u2014 readable from the docs reference.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Middleware",
                "url": "https://nextjs.org/docs/app/building-your-application/routing/middleware"
              }
            ]
          },
          {
            "name": "Server Components vs Client Components \u2014 When to use each",
            "desc": "Core Next.js concept.Understanding which components render on the server (no JS sent to client, can access DB directly) vs client (interactive, hooks work) requires seeing a component tree diagram with the rendering boundary marked. The wrong mental model leads to bugs that are hard to debug without this foundation.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Server Components",
                "url": "https://nextjs.org/docs/app/building-your-application/rendering/server-components"
              }
            ]
          },
          {
            "name": "Data Fetching \u2014 Server Components fetch, caching, revalidation",
            "desc": "Next.js extends nativefetchwith cache and revalidation options. Understanding howforce-cache,no-store, andrevalidate: Naffect what's rendered and when requires seeing a request timeline. Follow Mohit Garg's playlist.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Data Fetching",
                "url": "https://nextjs.org/docs/app/building-your-application/data-fetching/fetching"
              }
            ]
          },
          {
            "name": "Static Generation (SSG), Server-Side Rendering (SSR) & ISR",
            "desc": "The three rendering modes (build-time static, request-time server, incremental background regeneration) are best understood through a timeline diagram showing when each page is rendered. Critical for senior SDE architecture discussions.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Rendering Docs",
                "url": "https://nextjs.org/docs/app/building-your-application/rendering"
              }
            ]
          },
          {
            "name": "Server Actions \u2014 Form mutations without API routes",
            "desc": "Server Actions run on the server but are called from client components \u2014 the invocation model blurs the client-server boundary in a way that benefits from watching a demo of the request lifecycle.",
            "links": [
              {
                "text": "\u2197 Next.js \u2014 Server Actions",
                "url": "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
              }
            ]
          },
          {
            "name": "NextAuth.js (Auth.js) \u2014 OAuth, Credentials Provider, Session Management",
            "desc": "Authentication setup with multiple providers, session strategy (JWT vs database), and route protection in middleware \u2014 an end-to-end flow that is much easier to follow in a video than assembling from the docs.",
            "links": [
              {
                "text": "\u2197 Auth.js \u2014 Getting Started",
                "url": "https://authjs.dev/getting-started"
              }
            ]
          }
        ]
      },
      {
        "title": "Real-Time with WebSockets",
        "topics": [
          {
            "name": "WebSocket Protocol Basics \u2014 ws:// handshake, frames, full-duplex",
            "desc": "The HTTP Upgrade handshake and why WebSocket is different from polling \u2014 read MDN's WebSocket guide. One clear page explains the protocol.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 WebSockets API",
                "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
              }
            ]
          },
          {
            "name": "Socket.IO \u2014 emit, on, rooms, namespaces, broadcast",
            "desc": "Socket.IO's event API is declarative \u2014 read the Getting Started and Rooms docs. Building a simple chat while reading is enough to understand emit/on semantics.",
            "links": [
              {
                "text": "\u2197 Socket.IO \u2014 Tutorial",
                "url": "https://socket.io/docs/v4/tutorial/introduction"
              },
              {
                "text": "\u2197 Socket.IO \u2014 Rooms",
                "url": "https://socket.io/docs/v4/rooms"
              }
            ]
          },
          {
            "name": "WebSocket Connection Lifecycle & Scaling with Redis Adapter",
            "desc": "When multiple Node instances run behind a load balancer, a user's WebSocket connection is on one server while another user is on a different server. Seeing how the Redis pub/sub adapter broadcasts events across all instances is a system design concept that requires an architecture diagram \u2014 directly relevant to your chess platform.",
            "links": [
              {
                "text": "\u2197 Socket.IO \u2014 Redis Adapter Docs",
                "url": "https://socket.io/docs/v4/redis-adapter/"
              }
            ]
          },
          {
            "name": "Real-time Chess Platform Architecture \u2014 Game State Sync",
            "desc": "Your resume lists a chess platform. Design and implement: room-per-game with 2 socket connections, server-authoritative game state validation (never trust the client for moves), broadcasting state to both players, reconnection handling, and spectator mode. Follow a real-time game tutorial for the pattern.",
            "links": [
              {
                "text": "\u2197 Socket.IO \u2014 Private Messaging Tutorial",
                "url": "https://socket.io/docs/v4/tutorial/step-4"
              }
            ]
          }
        ]
      },
      {
        "title": "System Design, Auth & SDE Prep",
        "topics": [
          {
            "name": "CORS \u2014 How it works, preflight, allowed origins in Express",
            "desc": "CORS is a browser security mechanism with clear header-based rules. Read MDN's CORS guide once \u2014 configure thecorsnpm package while reading.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 CORS",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS"
              }
            ]
          },
          {
            "name": "Rate Limiting, Helmet, Input Validation (Zod / Joi)",
            "desc": "These are Express middleware packages with clear npm README setups \u2014 read and configure. Zod is especially important if you're using TypeScript.",
            "links": [
              {
                "text": "\u2197 Zod \u2014 Documentation",
                "url": "https://zod.dev"
              },
              {
                "text": "\u2197 Helmet.js",
                "url": "https://helmetjs.github.io"
              }
            ]
          },
          {
            "name": "Password Hashing \u2014 bcrypt, salt rounds",
            "desc": "Simple one-way hashing API \u2014 read the bcrypt npm README. Understand why plaintext passwords in DB = immediate disqualification in any code review.",
            "links": [
              {
                "text": "\u2197 bcrypt npm README",
                "url": "https://www.npmjs.com/package/bcrypt"
              }
            ]
          },
          {
            "name": "Caching Concepts \u2014 Cache-Control headers, Redis basics",
            "desc": "HTTP caching headers are declarative rules. Redis commands for get/set/expire are a clean CLI reference. Read both docs.",
            "links": [
              {
                "text": "\u2197 MDN \u2014 HTTP Caching",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
              },
              {
                "text": "\u2197 Redis \u2014 Quick Start",
                "url": "https://redis.io/learn/howtos/quick-start"
              }
            ]
          },
          {
            "name": "OAuth 2.0 Flow \u2014 Authorization Code Grant, Access Token, Refresh Token",
            "desc": "The three-party handshake (client \u2192 auth server \u2192 resource server) with redirect URIs, authorization codes, and token exchange is a sequence diagram that is nearly impossible to understand without seeing it flow visually. Asked in almost every SDE interview for full-stack roles.",
            "links": [
              {
                "text": "\u2197 oauth.net \u2014 OAuth 2.0 Reference",
                "url": "https://oauth.net/2/"
              }
            ]
          },
          {
            "name": "Microservices vs Monolith \u2014 Trade-offs, Service Communication",
            "desc": "Architectural trade-offs and how services communicate (REST, gRPC, message queues) benefit from watching system design videos. This is a standard SDE interview topic at mid-to-senior level.",
            "links": []
          },
          {
            "name": "Database Design \u2014 Indexing, Query Optimization, Sharding",
            "desc": "Index anatomy (B-tree), how compound indexes are traversed, and sharding key selection are data structure concepts best explained with visual tree diagrams. You will be asked to optimize a slow query in technical rounds.",
            "links": [
              {
                "text": "\u2197 MongoDB Docs \u2014 Indexes",
                "url": "https://www.mongodb.com/docs/manual/indexes/"
              }
            ]
          },
          {
            "name": "CI/CD Pipeline \u2014 GitHub Actions, Build \u2192 Test \u2192 Deploy",
            "desc": "Setting up automated pipelines is a visual workflow \u2014 seeing how a push triggers a workflow file that runs jobs in sequence/parallel makes the YAML structure make much more sense than reading it cold.",
            "links": [
              {
                "text": "\u2197 GitHub Actions \u2014 Quickstart",
                "url": "https://docs.github.com/en/actions/writing-workflows/quickstart"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "python-ml",
    "title": "Python AI/ML",
    "accent": "#3db872",
    "icon": "\ud83e\udd16",
    "phases": [
      {
        "title": "Python Advanced Runtime Foundations",
        "topics": [
          {
            "name": "Advanced Comprehensions & Generator Expressions",
            "desc": "List, dict, set comprehensions are pure syntax rules. Generator expressions (yield, lazy evaluation) are equally declarative \u2014 reading Real Python's guide while writing examples is faster than any video.",
            "links": [
              {
                "text": "\u2197 Real Python \u2014 Generators",
                "url": "https://realpython.com/introduction-to-python-generators/"
              },
              {
                "text": "\u2197 Python Docs \u2014 Comprehensions",
                "url": "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions"
              }
            ]
          },
          {
            "name": "Decorators \u2014 Writing Custom Wrappers withfunctools.wraps",
            "desc": "Decorators are a function-wrapping pattern (@time_it,@authenticated,@cached) directly readable from the docs. Understand how*args/**kwargsforwarding preserves the original signature. Used constantly in Flask and FastAPI route definitions.",
            "links": [
              {
                "text": "\u2197 Real Python \u2014 Decorators",
                "url": "https://realpython.com/primer-on-python-decorators/"
              },
              {
                "text": "\u2197 Python Docs \u2014 functools.wraps",
                "url": "https://docs.python.org/3/library/functools.html#functools.wraps"
              }
            ]
          },
          {
            "name": "Context Managers \u2014with,__enter__/__exit__,contextlib",
            "desc": "The protocol is a two-method contract \u2014 read it, implement a custom file/DB connection manager. Used for managing GPU memory context and database session scopes in production ML APIs.",
            "links": [
              {
                "text": "\u2197 Python Docs \u2014 Context Managers",
                "url": "https://docs.python.org/3/reference/datamodel.html#context-managers"
              },
              {
                "text": "\u2197 Python Docs \u2014 contextlib",
                "url": "https://docs.python.org/3/library/contextlib.html"
              }
            ]
          },
          {
            "name": "OOP & Dunder Methods \u2014__init__,__call__,__repr__,__len__,__iter__",
            "desc": "__call__is critical for PyTorch \u2014 everynn.Modulesubclass runs inference by calling the object like a function.__iter__/__next__are needed for writing custom DataLoaders. Read Real Python's operator overloading guide.",
            "links": [
              {
                "text": "\u2197 Real Python \u2014 Operator Overloading",
                "url": "https://realpython.com/operator-function-overloading/"
              },
              {
                "text": "\u2197 Python Docs \u2014 Special Method Names",
                "url": "https://docs.python.org/3/reference/datamodel.html#special-method-names"
              }
            ]
          },
          {
            "name": "Type Hints \u2014typingmodule,Optional,Union,List,Dict, Generics",
            "desc": "Type hints are pure syntax annotations. Required for FastAPI \u2014 Pydantic reads them at runtime to validate request payloads. Read the mypy docs and the FastAPI typing introduction back-to-back.",
            "links": [
              {
                "text": "\u2197 Python Docs \u2014 typing module",
                "url": "https://docs.python.org/3/library/typing.html"
              },
              {
                "text": "\u2197 FastAPI \u2014 Python Types Intro",
                "url": "https://fastapi.tiangolo.com/python-types/"
              }
            ]
          },
          {
            "name": "Exception Handling \u2014 Custom Exception Classes, Exception Chaining",
            "desc": "Building a hierarchy of domain-specific exceptions (ModelLoadError,InferenceTimeoutError) is a production pattern. Read the docs, implement a custom exception class tree for a mock ML API.",
            "links": [
              {
                "text": "\u2197 Python Docs \u2014 Errors and Exceptions",
                "url": "https://docs.python.org/3/tutorial/errors.html"
              }
            ]
          },
          {
            "name": "Dataclasses & Named Tuples \u2014 Lightweight Structured Data",
            "desc": "Declarative data containers used for passing structured results between ML pipeline stages. The@dataclassdecorator rules are entirely readable from the docs.",
            "links": [
              {
                "text": "\u2197 Python Docs \u2014 dataclasses",
                "url": "https://docs.python.org/3/library/dataclasses.html"
              }
            ]
          },
          {
            "name": "The Global Interpreter Lock (GIL) \u2014 Why Python Cannot Truly Multithread",
            "desc": "The GIL is a CPython-level mutex that prevents multiple threads from executing Python bytecode simultaneously. You must see a diagram of thread contention at the GIL boundary to understand why CPU-bound ML workloads (model inference, matrix multiplication) must usemultiprocessing, notthreading. This is asked directly in production SDE interviews.",
            "links": [
              {
                "text": "\u2197 Real Python \u2014 The Python GIL (read alongside video)",
                "url": "https://realpython.com/python-gil/"
              }
            ]
          },
          {
            "name": "Python Concurrency \u2014 threading vs multiprocessing vs asyncio \u2014 When to Use Each",
            "desc": "Three different concurrency models for three different bottlenecks:threadingfor I/O-bound (DB reads, API calls),multiprocessingfor CPU-bound (model inference, image decoding),asynciofor async I/O in FastAPI. Seeing a decision tree diagram of which to use and why is essential \u2014 getting this wrong in production causes either dead locks or the event loop blocking.",
            "links": [
              {
                "text": "\u2197 Python Docs \u2014 Concurrent Execution",
                "url": "https://docs.python.org/3/library/concurrency.html"
              }
            ]
          },
          {
            "name": "Python Memory Management \u2014 Reference Counting, Cyclic GC, Memory Profiling",
            "desc": "When loading 2GB model weights into RAM, understanding how Python tracks object lifetimes (reference counts), handles circular references (generational GC), and whendel+gc.collect()actually frees memory is critical. You need to see the object lifecycle diagram \u2014 a memory leak in a long-running FastAPI server serving ML models is a production-critical bug.",
            "links": [
              {
                "text": "\u2197 Real Python \u2014 Python Memory Management (read alongside)",
                "url": "https://realpython.com/python-memory-management/"
              }
            ]
          },
          {
            "name": "asyncio \u2014 Event Loop, Coroutines,async def,await, Tasks, Gather",
            "desc": "FastAPI is built on asyncio. Watching a visual tracer of how coroutines suspend atawaitand yield control back to the event loop \u2014 while the I/O completes in the background \u2014 is the exact same mental model as the JS Event Loop from your Node roadmap. Once you see the diagram, FastAPI's async patterns become immediately clear.",
            "links": [
              {
                "text": "\u2197 Python Docs \u2014 asyncio",
                "url": "https://docs.python.org/3/library/asyncio.html"
              }
            ]
          }
        ]
      },
      {
        "title": "Data & Numerical Computing",
        "topics": [
          {
            "name": "NumPy \u2014 Arrays, Shapes, Dtype, Broadcasting Rules",
            "desc": "The broadcasting rules (how arrays of different shapes align for operations) are a set of fixed rules \u2014 read the NumPy quickstart, trace through the shape diagrams. This is the foundation of every ML framework's tensor API.",
            "links": [
              {
                "text": "\u2197 NumPy \u2014 Quickstart",
                "url": "https://numpy.org/doc/stable/user/quickstart.html"
              },
              {
                "text": "\u2197 NumPy \u2014 Broadcasting",
                "url": "https://numpy.org/doc/stable/user/basics.broadcasting.html"
              }
            ]
          },
          {
            "name": "NumPy Vectorization \u2014 Avoid Python Loops, Use Array Operations",
            "desc": "Replacing Pythonforloops with NumPy array operations is the single biggest performance lever in ML data pipelines. The principle is simple \u2014 read the docs and benchmark a loop vs vectorized version yourself.",
            "links": [
              {
                "text": "\u2197 NumPy \u2014 Absolute Beginners",
                "url": "https://numpy.org/doc/stable/user/absolute_beginners.html"
              }
            ]
          },
          {
            "name": "NumPy Linear Algebra \u2014dot,matmul,transpose,reshape,einsum",
            "desc": "These are API lookups \u2014 reference the docs when you need them. The key operations (matrix multiply, transpose, reshape) are used constantly in model implementations. Knoweinsumfor attention mechanism implementations.",
            "links": [
              {
                "text": "\u2197 NumPy \u2014 Linear Algebra",
                "url": "https://numpy.org/doc/stable/reference/routines.linalg.html"
              }
            ]
          },
          {
            "name": "Pandas \u2014 DataFrames, Series, Read CSV/JSON, GroupBy, Merge, Apply",
            "desc": "Pandas is a declarative data manipulation API. Read the 10-minutes-to-pandas guide while cleaning a real dataset. Column selection, filtering, and groupby are all straightforward method lookups.",
            "links": [
              {
                "text": "\u2197 Pandas \u2014 10 Minutes to Pandas",
                "url": "https://pandas.pydata.org/docs/user_guide/10min.html"
              },
              {
                "text": "\u2197 Pandas \u2014 User Guide",
                "url": "https://pandas.pydata.org/docs/user_guide/index.html"
              }
            ]
          },
          {
            "name": "Matplotlib & Seaborn \u2014 Plotting Loss Curves, Confusion Matrices, Feature Distributions",
            "desc": "Visualization APIs \u2014 read the gallery examples and adapt them. You'll use these for every ML experiment to plot training/validation loss curves and model evaluation metrics.",
            "links": [
              {
                "text": "\u2197 Matplotlib \u2014 Tutorials",
                "url": "https://matplotlib.org/stable/tutorials/index.html"
              },
              {
                "text": "\u2197 Seaborn \u2014 Tutorial",
                "url": "https://seaborn.pydata.org/tutorial.html"
              }
            ]
          },
          {
            "name": "NumPy Memory Layout \u2014 C-contiguous vs F-contiguous, Strides",
            "desc": "Understanding how NumPy arrays are laid out in memory (strides \u2014 how many bytes to skip to get the next element in each dimension) explains why certain reshape and transpose operations are free (view) while others require a data copy. This affects ML pipeline performance significantly when moving data between CPU and GPU.",
            "links": [
              {
                "text": "\u2197 NumPy \u2014 ndarray internals (read alongside)",
                "url": "https://numpy.org/doc/stable/reference/arrays.ndarray.html"
              }
            ]
          }
        ]
      },
      {
        "title": "Production AI/ML APIs \u2014 Flask & FastAPI",
        "topics": [
          {
            "name": "Flask \u2014 Routing, Blueprints, Request Context,jsonify, Error Handlers",
            "desc": "Flask is a micro-framework with a small, readable API surface. Build a model-serving endpoint while reading the official docs. Focus on the Application Factory pattern (create_app()) for production structuring.",
            "links": [
              {
                "text": "\u2197 Flask \u2014 Quickstart",
                "url": "https://flask.palletsprojects.com/en/stable/quickstart/"
              },
              {
                "text": "\u2197 Flask \u2014 Blueprints",
                "url": "https://flask.palletsprojects.com/en/stable/blueprints/"
              }
            ]
          },
          {
            "name": "FastAPI \u2014 Path Operations, Path/Query Parameters, Response Models",
            "desc": "FastAPI's route declaration syntax is clean and declarative \u2014 type annotations do the heavy lifting. Read the tutorial start-to-finish while building a simple prediction endpoint.",
            "links": [
              {
                "text": "\u2197 FastAPI \u2014 Official Tutorial",
                "url": "https://fastapi.tiangolo.com/tutorial/"
              }
            ]
          },
          {
            "name": "Pydantic V2 \u2014 BaseModel, Field validators, nested schemas,model_validator",
            "desc": "Pydantic validates incoming request payloads against your type-annotated schemas before they touch your ML pipeline. This catches malformed inputs (wrong shape, wrong dtype cues) at the API boundary \u2014 exactly where you want to fail fast. The docs are excellent.",
            "links": [
              {
                "text": "\u2197 Pydantic V2 \u2014 Models",
                "url": "https://docs.pydantic.dev/latest/concepts/models/"
              },
              {
                "text": "\u2197 Pydantic V2 \u2014 Validators",
                "url": "https://docs.pydantic.dev/latest/concepts/validators/"
              }
            ]
          },
          {
            "name": "FastAPI Background Tasks &HTTPException",
            "desc": "Background tasks (fire-and-forget logging, cleanup jobs) and structured HTTP exceptions are simple FastAPI patterns fully covered in the docs.",
            "links": [
              {
                "text": "\u2197 FastAPI \u2014 Background Tasks",
                "url": "https://fastapi.tiangolo.com/tutorial/background-tasks/"
              }
            ]
          },
          {
            "name": "SQLAlchemy (Async) with FastAPI \u2014 Session management, async engine",
            "desc": "Database access in async FastAPI requires async SQLAlchemy sessions. The pattern is documented clearly \u2014 configure an async engine, useAsyncSessionwith dependency injection.",
            "links": [
              {
                "text": "\u2197 SQLAlchemy \u2014 Async I/O",
                "url": "https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html"
              }
            ]
          },
          {
            "name": "WSGI vs ASGI \u2014 Flask's Sequential Model vs FastAPI's Async Event Loop",
            "desc": "Premier SDE interview topic.Flask (WSGI) handles requests sequentially \u2014 each request blocks a thread until it completes. FastAPI (ASGI) uses an async event loop \u2014 a request awaiting a DB response suspends and yields the thread to handle another request. Seeing a concurrency diagram of 100 simultaneous requests under each model shows immediately why ASGI crushes WSGI for ML API throughput.",
            "links": []
          },
          {
            "name": "FastAPI Dependency Injection \u2014Depends(), Lifespan, Model Loading",
            "desc": "Dependency injection in FastAPI controls how expensive resources (ML model instances, DB sessions, auth state) are instantiated and shared across route handlers. The injection tree \u2014 which dependencies depend on which \u2014 is an architectural diagram. A wrong DI setup causes a 2GB model to reload on every request instead of once on startup.",
            "links": [
              {
                "text": "\u2197 FastAPI \u2014 Dependencies Docs",
                "url": "https://fastapi.tiangolo.com/tutorial/dependencies/"
              }
            ]
          },
          {
            "name": "FastAPI Lifespan \u2014 Loading ML Models Once on Startup",
            "desc": "The@asynccontextmanagerlifespan pattern replaces deprecated@app.on_event(\"startup\"). This is where you load your PyTorch model weights once into shared application state \u2014 not inside each request handler. Watch a video showing the memory difference between per-request vs startup loading.",
            "links": [
              {
                "text": "\u2197 FastAPI \u2014 Lifespan Events",
                "url": "https://fastapi.tiangolo.com/advanced/events/"
              }
            ]
          }
        ]
      },
      {
        "title": "Machine Learning \u2014 Scikit-learn",
        "topics": [
          {
            "name": "Estimator API \u2014fit(),predict(),transform(),fit_transform()",
            "desc": "The consistent estimator interface is one of scikit-learn's strengths. Learn it once \u2014 every algorithm in the library follows the same contract. Read the API reference, use a linear regression and a random forest to cement the pattern.",
            "links": [
              {
                "text": "\u2197 Scikit-learn \u2014 Getting Started",
                "url": "https://scikit-learn.org/stable/getting_started.html"
              }
            ]
          },
          {
            "name": "Supervised Learning \u2014 Linear/Logistic Regression, Decision Trees, Random Forest, SVM, KNN",
            "desc": "For each algorithm, read the scikit-learn user guide section. Focus on hyperparameters and when each algorithm performs well vs poorly \u2014 this is what SDE interviews ask about.",
            "links": [
              {
                "text": "\u2197 Scikit-learn \u2014 Supervised Learning",
                "url": "https://scikit-learn.org/stable/supervised_learning.html"
              }
            ]
          },
          {
            "name": "Preprocessing \u2014 StandardScaler, MinMaxScaler, LabelEncoder, OneHotEncoder, Imputer",
            "desc": "Feature scaling and encoding rules are fully documented with examples. Read and apply to a real dataset. A common interview mistake is scaling test data with test statistics instead of train statistics \u2014 the docs explain why Pipeline prevents this.",
            "links": [
              {
                "text": "\u2197 Scikit-learn \u2014 Preprocessing",
                "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
              }
            ]
          },
          {
            "name": "Pipelines \u2014 Chaining Preprocessing + Model, Preventing Data Leakage",
            "desc": "Scikit-learn Pipelines ensure transformers are fit only on training data and applied consistently to test data. This is a production best practice \u2014 read the Pipeline docs and build one that scales \u2192 encodes \u2192 trains in one object.",
            "links": [
              {
                "text": "\u2197 Scikit-learn \u2014 Pipeline",
                "url": "https://scikit-learn.org/stable/modules/pipeline.html"
              }
            ]
          },
          {
            "name": "Model Evaluation \u2014 Cross-validation, Confusion Matrix, ROC-AUC, Precision/Recall",
            "desc": "All metric computation is documented with examples in the model evaluation guide. Know why accuracy is misleading for imbalanced classes \u2014 use F1, ROC-AUC instead. Interviewers ask this.",
            "links": [
              {
                "text": "\u2197 Scikit-learn \u2014 Model Evaluation",
                "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
              }
            ]
          },
          {
            "name": "Hyperparameter Tuning \u2014 GridSearchCV, RandomizedSearchCV",
            "desc": "Grid and random search are declarative parameter grid definitions combined with cross-validation \u2014 entirely readable from the docs.",
            "links": [
              {
                "text": "\u2197 Scikit-learn \u2014 Grid Search",
                "url": "https://scikit-learn.org/stable/modules/grid_search.html"
              }
            ]
          }
        ]
      },
      {
        "title": "Deep Learning \u2014 PyTorch",
        "topics": [
          {
            "name": "PyTorch Tensors \u2014 Creation, Indexing, Slicing, Shape Operations",
            "desc": "Tensor API mirrors NumPy \u2014 if you know NumPy well, read the PyTorch quickstart to map equivalent operations. Focus on.view()vs.reshape()and why.contiguous()is sometimes required.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Tensor Tutorial",
                "url": "https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html"
              }
            ]
          },
          {
            "name": "Dataset & DataLoader \u2014 Custom__getitem__, batching, shuffling,num_workers",
            "desc": "TheDataset/DataLoaderAPI is declarative \u2014 inheritDataset, implement__len__and__getitem__, wrap inDataLoader. This is where your__dunder__knowledge from Phase 1 becomes directly applicable.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Dataset & DataLoader",
                "url": "https://pytorch.org/tutorials/beginner/basics/data_tutorial.html"
              }
            ]
          },
          {
            "name": "Loss Functions & Optimizers \u2014CrossEntropyLoss,MSELoss,Adam,SGD,lr_scheduler",
            "desc": "These are configuration choices with documented parameters. Read each one, understand what it minimizes, and know the Adam vs SGD trade-off (Adam converges faster, SGD generalizes slightly better).",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Loss Functions",
                "url": "https://pytorch.org/docs/stable/nn.html#loss-functions"
              },
              {
                "text": "\u2197 PyTorch \u2014 Optimizers",
                "url": "https://pytorch.org/docs/stable/optim.html"
              }
            ]
          },
          {
            "name": "Model Saving & Loading \u2014state_dict,torch.save,torch.load,map_location",
            "desc": "The state_dict pattern is a standard documented convention. Know the difference between saving the full model vs state_dict only (always prefer state_dict in production).",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Saving & Loading Models",
                "url": "https://pytorch.org/tutorials/beginner/saving_loading_models.html"
              }
            ]
          },
          {
            "name": "PyTorch Autograd \u2014 Computational Graphs, Forward Pass, Backpropagation",
            "desc": "Autograd dynamically builds a computation graph during the forward pass and traverses it in reverse during.backward()to compute gradients. You must see this graph being built and traversed visually \u2014 how gradient tensors flow backwards through matrix multiplication nodes is a diagram concept, not a prose concept. Every ML SDE interview probes this.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Autograd Tutorial",
                "url": "https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html"
              }
            ]
          },
          {
            "name": "Customnn.Module\u2014__init__,forward(), Subclassing Layers",
            "desc": "Every custom model architecture subclassesnn.Moduleand overridesforward(). Watching walkthroughs of a custom CNN, MLP, and attention block \u2014 tracking input/output tensor shapes through each layer \u2014 cements the architecture patterns you'll use to build every model on your resume.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Build Model",
                "url": "https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html"
              }
            ]
          },
          {
            "name": "GPU Execution \u2014.to('cuda'),torch.cuda.empty_cache(), Mixed Precision (torch.amp)",
            "desc": "Moving tensors and models to CUDA, managing GPU memory (VRAM OOM errors are the #1 production issue in DL), and using automatic mixed precision (FP16 for speed, FP32 for stability) are GPU memory management concepts that require visual diagrams of device memory allocation.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 CUDA Semantics",
                "url": "https://pytorch.org/docs/stable/cuda.html"
              }
            ]
          },
          {
            "name": "Training Loop \u2014 Train/Eval Mode, Gradient Zeroing, Gradient Clipping",
            "desc": "The canonical PyTorch training loop (zero_grad \u2192 forward \u2192 loss \u2192 backward \u2192 step) must be internalized. Watch a loop implementation that explains why each step is in that order \u2014 forgettingzero_grad()accumulates gradients incorrectly, and forgettingmodel.eval()leaves BatchNorm/Dropout active during inference.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Optimization Loop",
                "url": "https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html"
              }
            ]
          },
          {
            "name": "Transfer Learning \u2014 Loading Pretrained Weights, Freezing Layers, Fine-tuning",
            "desc": "Loading ResNet or ViT pretrained weights, freezing backbone layers, and training only the classification head is an architectural pattern relevant to your CV/YOLO work. Seeing which layer groups get frozen in a diagram vs which remain trainable is essential.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Transfer Learning Tutorial",
                "url": "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html"
              }
            ]
          }
        ]
      },
      {
        "title": "Deep Learning \u2014 TensorFlow & Keras",
        "topics": [
          {
            "name": "Keras Sequential API \u2014 Stacking Layers,compile(),fit(),evaluate()",
            "desc": "The Sequential API is intentionally high-level and readable. Go through the TensorFlow beginner tutorial while building a model. The declarative layer-stacking syntax maps naturally from reading docs.",
            "links": [
              {
                "text": "\u2197 TensorFlow \u2014 Beginner Quickstart",
                "url": "https://www.tensorflow.org/tutorials/quickstart/beginner"
              }
            ]
          },
          {
            "name": "Keras Functional API \u2014 Multi-input/output Models, Shared Layers",
            "desc": "The Functional API uses explicit tensor chaining syntax \u2014 clearly documented with examples. Use it for any architecture that isn't a simple linear stack.",
            "links": [
              {
                "text": "\u2197 TF \u2014 Keras Functional API Guide",
                "url": "https://www.tensorflow.org/guide/keras/functional_api"
              }
            ]
          },
          {
            "name": "Callbacks \u2014 EarlyStopping, ModelCheckpoint, TensorBoard, ReduceLROnPlateau",
            "desc": "Training callbacks are configuration objects \u2014 documented with all parameters. These are essential for responsible training (saving best weights, stopping early to prevent overfitting).",
            "links": [
              {
                "text": "\u2197 TF \u2014 Keras Callbacks API",
                "url": "https://www.tensorflow.org/api_docs/python/tf/keras/callbacks"
              }
            ]
          },
          {
            "name": "SavedModel Format,model.save(),tf.saved_modelfor Deployment",
            "desc": "SavedModel is TF's production serialization format \u2014 used by TF Serving and TFLite. Read the docs to understand the difference between SavedModel and the older HDF5.h5format.",
            "links": [
              {
                "text": "\u2197 TF \u2014 SavedModel Guide",
                "url": "https://www.tensorflow.org/guide/saved_model"
              }
            ]
          },
          {
            "name": "Custom Training Loop withtf.GradientTape",
            "desc": "When you need finer control thanmodel.fit()(e.g., GANs, custom loss functions, gradient surgery), you usetf.GradientTapeto manually record operations and compute gradients. This is TF's equivalent to PyTorch's autograd \u2014 watching it trace a forward pass visually reveals how the tape records the computation graph.",
            "links": [
              {
                "text": "\u2197 TF \u2014 Advanced Automatic Differentiation",
                "url": "https://www.tensorflow.org/guide/advanced_autodiff"
              }
            ]
          },
          {
            "name": "Subclassingtf.keras.Modelfor Custom Architectures",
            "desc": "The PyTorch-style OOP model subclassing pattern is available in TF viatf.keras.Model. Watching a walkthrough of building a Transformer encoder block by subclassing shows the shape transformation tracking that makes custom architectures debuggable.",
            "links": []
          }
        ]
      },
      {
        "title": "NLP & Transformers \u2014 Hugging Face",
        "topics": [
          {
            "name": "NLP Fundamentals \u2014 Tokenization, Embeddings, Vocabulary, Padding, Attention Masks",
            "desc": "These are definitional concepts with clear explanations in the Hugging Face NLP course. Read Chapter 1-3 of the HF NLP course \u2014 the best free NLP fundamentals resource available.",
            "links": [
              {
                "text": "\u2197 HF NLP Course \u2014 Chapter 1",
                "url": "https://huggingface.co/learn/nlp-course/chapter1/1"
              },
              {
                "text": "\u2197 HF NLP Course \u2014 Chapter 2 (Using Models)",
                "url": "https://huggingface.co/learn/nlp-course/chapter2/1"
              }
            ]
          },
          {
            "name": "Hugging Facepipeline()\u2014 Text Classification, NER, QA, Summarization, Translation",
            "desc": "Thepipeline()abstraction is a clean high-level API. Read the docs while running each task type on example inputs. Understandtask=,model=,tokenizer=parameters \u2014 this is where your resume's NLP work lives at the surface level.",
            "links": [
              {
                "text": "\u2197 HF \u2014 Pipeline Documentation",
                "url": "https://huggingface.co/docs/transformers/main_classes/pipelines"
              }
            ]
          },
          {
            "name": "AutoTokenizer & AutoModel \u2014 Loading from Hub, Tokenizer Output,input_ids,attention_mask",
            "desc": "TheAutoClasspattern is declarative \u2014 load by model name string. Understanding tokenizer output keys (input_ids,attention_mask,token_type_ids) is reference material from the docs.",
            "links": [
              {
                "text": "\u2197 HF \u2014 AutoClass Tutorial",
                "url": "https://huggingface.co/docs/transformers/autoclass_tutorial"
              }
            ]
          },
          {
            "name": "Hugging FacedatasetsLibrary \u2014 Loading, Mapping, Filtering, Batching",
            "desc": "The datasets library has a cleanmap()-based transformation API. Read the guide \u2014 it processes data in Apache Arrow format, which is faster than pandas for large NLP datasets.",
            "links": [
              {
                "text": "\u2197 HF Datasets \u2014 Use a Dataset Guide",
                "url": "https://huggingface.co/docs/datasets/use_dataset"
              }
            ]
          },
          {
            "name": "Hugging FaceTrainerAPI \u2014TrainingArguments, Compute Metrics, Fine-tuning Flow",
            "desc": "TheTrainerabstracts the training loop. Read the fine-tuning guide while fine-tuning a BERT model on a classification task \u2014 this maps directly to your NLP project resume items.",
            "links": [
              {
                "text": "\u2197 HF \u2014 Fine-tuning Guide",
                "url": "https://huggingface.co/docs/transformers/training"
              }
            ]
          },
          {
            "name": "Transformer Architecture \u2014 Self-Attention, Multi-Head Attention, Positional Encoding",
            "desc": "Essential for any NLP SDE role.The query/key/value dot-product attention mechanism, how multiple attention heads focus on different semantic relationships simultaneously, and how positional encodings inject sequence order into a permutation-invariant architecture \u2014 all require visual animated diagrams. \"Attention Is All You Need\" is much easier to understand after watching a visual walkthrough.",
            "links": [
              {
                "text": "\u25b6 Andrej Karpathy \u2014 Let's build GPT from scratch",
                "url": "https://www.youtube.com/watch?v=4Bdc55j80l8"
              }
            ]
          },
          {
            "name": "BERT vs GPT vs T5 \u2014 Encoder-only, Decoder-only, Encoder-Decoder Architectures",
            "desc": "Understanding which architecture to choose for which task (BERT for understanding/classification, GPT for generation, T5 for seq2seq) requires seeing the masked attention patterns and token flow diagrams for each. Interviewers ask why you'd use BERT over GPT for text classification.",
            "links": []
          },
          {
            "name": "Tokenization Deep Dive \u2014 BPE, WordPiece, SentencePiece",
            "desc": "Understanding how subword tokenization algorithms build vocabularies (and why \"unhappiness\" \u2192 [\"un\", \"##happin\", \"##ess\"]) requires seeing the merge step visualizations. This explains vocabulary size vs OOV trade-offs asked in NLP interviews.",
            "links": [
              {
                "text": "\u2197 HF NLP Course \u2014 Chapter 6: Tokenizers",
                "url": "https://huggingface.co/learn/nlp-course/chapter6/1"
              }
            ]
          }
        ]
      },
      {
        "title": "LangChain, RAG & Multi-Agent Systems",
        "topics": [
          {
            "name": "LangChain LCEL \u2014 Chain Primitives,RunnableSequence,RunnableParallel",
            "desc": "LangChain Expression Language is a declarative pipe-based composition syntax (prompt | llm | output_parser). Read the LCEL docs \u2014 the syntax is clean enough to learn directly from the reference.",
            "links": [
              {
                "text": "\u2197 LangChain \u2014 LCEL Docs",
                "url": "https://python.langchain.com/docs/concepts/lcel/"
              }
            ]
          },
          {
            "name": "Prompt Templates \u2014ChatPromptTemplate, System/Human/AI message roles",
            "desc": "Template construction is declarative \u2014 read the docs and build a few prompt templates with variable injection. Know the role system (system, human, ai) used by all major LLM APIs.",
            "links": [
              {
                "text": "\u2197 LangChain \u2014 Prompt Templates",
                "url": "https://python.langchain.com/docs/concepts/prompt_templates/"
              }
            ]
          },
          {
            "name": "Document Loaders & Text Splitters \u2014RecursiveCharacterTextSplitter, chunk size, overlap",
            "desc": "Document loading and chunking strategies are configuration choices with documented parameters. Understand why chunk overlap exists (preserving context across boundaries) \u2014 this is a RAG design question interviewers ask.",
            "links": [
              {
                "text": "\u2197 LangChain \u2014 Text Splitters",
                "url": "https://python.langchain.com/docs/concepts/text_splitters/"
              }
            ]
          },
          {
            "name": "Vector Stores \u2014 Chroma, FAISS, pgvector \u2014 Indexing and Similarity Search",
            "desc": "Vector store operations (add_documents,similarity_search) are clean API calls. Read the LangChain vector store integration docs and the FAISS getting-started guide \u2014 understand cosine similarity vs dot product as retrieval metrics.",
            "links": [
              {
                "text": "\u2197 LangChain \u2014 Chroma Integration",
                "url": "https://python.langchain.com/docs/integrations/vectorstores/chroma/"
              },
              {
                "text": "\u2197 FAISS \u2014 Documentation",
                "url": "https://faiss.ai/index.html"
              }
            ]
          },
          {
            "name": "LangChain Tools \u2014 Defining Custom Tools,@tooldecorator, Tool Schema",
            "desc": "Tool definitions are function + docstring + schema \u2014 declarative and documented. Understand how an LLM reads the tool schema to decide which tool to call.",
            "links": [
              {
                "text": "\u2197 LangChain \u2014 Tools",
                "url": "https://python.langchain.com/docs/concepts/tools/"
              }
            ]
          },
          {
            "name": "Advanced RAG Pipeline \u2014 Chunking Strategies, Embedding, Retrieval, Reranking, Prompt Synthesis",
            "desc": "A production RAG system involves: document chunking (fixed-size, semantic, hierarchical) \u2192 embedding generation (sentence-transformers, OpenAI embeddings) \u2192 vector index storage \u2192 similarity search (top-k retrieval) \u2192 optional cross-encoder reranking \u2192 context injection into prompt \u2192 LLM generation. This is an end-to-end system diagram that requires a video walkthrough \u2014 directly tied to your PDF Query Engine project.",
            "links": []
          },
          {
            "name": "Embeddings \u2014 What They Are, Why Cosine Similarity Works, Embedding Models",
            "desc": "Understanding why semantically similar text lands close in 768-dimensional vector space \u2014 and why cosine similarity measures the angle (not distance) \u2014 requires seeing visualized 2D projections of high-dimensional embedding clusters. This is asked in every GenAI SDE interview.",
            "links": [
              {
                "text": "\u2197 HF \u2014 MTEB Embedding Benchmark",
                "url": "https://huggingface.co/blog/mteb"
              }
            ]
          },
          {
            "name": "LangGraph / LangChain Agents \u2014 ReAct Pattern, Tool Calling Loop, State Management",
            "desc": "Multi-agent systems using the ReAct (Reason + Act) pattern \u2014 where the LLM decides which tool to call, gets the result, reasons about it, and decides the next action \u2014 is a loop architecture that benefits enormously from watching a step-by-step trace of thought \u2192 action \u2192 observation \u2192 thought. Critical for your PDF Query Engine architecture explanation in interviews.",
            "links": [
              {
                "text": "\u2197 LangGraph \u2014 Introduction Tutorial",
                "url": "https://langchain-ai.github.io/langgraph/tutorials/introduction/"
              }
            ]
          },
          {
            "name": "LLM Fine-tuning \u2014 LoRA / QLoRA, PEFT, Parameter-Efficient Methods",
            "desc": "Full fine-tuning of a 7B model requires 100+ GB VRAM. LoRA injects low-rank adapter matrices into attention layers and trains only those \u2014 reducing trainable parameters by 99%. Seeing which weight matrices get the low-rank injection and why it works is a visual linear algebra concept asked in advanced ML SDE rounds.",
            "links": [
              {
                "text": "\u2197 HF \u2014 PEFT Documentation",
                "url": "https://huggingface.co/docs/peft/main/en/index"
              }
            ]
          }
        ]
      },
      {
        "title": "MLOps & Model Serving at Scale",
        "topics": [
          {
            "name": "Docker for ML \u2014 Dockerfile for Python/PyTorch, GPU passthrough, Multi-stage Builds",
            "desc": "Container definitions are declarative Dockerfile instructions. Read the Docker Python guide and the NVIDIA container toolkit docs \u2014 getting--gpus allworking is a known setup pattern.",
            "links": [
              {
                "text": "\u2197 Docker \u2014 Python Guide",
                "url": "https://docs.docker.com/guides/python/"
              },
              {
                "text": "\u2197 NVIDIA Container Toolkit",
                "url": "https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html"
              }
            ]
          },
          {
            "name": "MLflow \u2014 Experiment Tracking,log_metric,log_param, Model Registry",
            "desc": "MLflow's logging API is a few function calls \u2014 declarative and well-documented. Integrate it into any training loop in 10 lines.",
            "links": [
              {
                "text": "\u2197 MLflow \u2014 Quickstart",
                "url": "https://mlflow.org/docs/latest/getting-started/intro-quickstart/index.html"
              }
            ]
          },
          {
            "name": "Model Quantization \u2014 INT8, FP16, ONNX Export for Faster Inference",
            "desc": "Converting a FP32 model to INT8 reduces size by 4x and inference latency by 2-3x. Read the PyTorch quantization docs and the Optimum library for HF model quantization.",
            "links": [
              {
                "text": "\u2197 PyTorch \u2014 Quantization",
                "url": "https://pytorch.org/docs/stable/quantization.html"
              },
              {
                "text": "\u2197 HF Optimum \u2014 Quantization",
                "url": "https://huggingface.co/docs/optimum/main/en/index"
              }
            ]
          },
          {
            "name": "Uvicorn + Gunicorn \u2014 Production ASGI Deployment, Worker Configuration",
            "desc": "The production FastAPI deployment pattern (Gunicorn as process manager, Uvicorn as ASGI worker) is documented clearly. Know the worker count formula (2 \u00d7 CPU cores + 1) for optimal throughput.",
            "links": [
              {
                "text": "\u2197 Uvicorn \u2014 Deployment Guide",
                "url": "https://www.uvicorn.org/deployment/"
              },
              {
                "text": "\u2197 FastAPI \u2014 Server Workers Guide",
                "url": "https://fastapi.tiangolo.com/deployment/server-workers/"
              }
            ]
          },
          {
            "name": "Celery + Redis \u2014 Offloading CPU-bound ML Inference to Background Workers",
            "desc": "The answer to the 500-concurrent-users scenario below.The architecture \u2014 FastAPI receives request \u2192 enqueues task in Redis broker \u2192 Celery worker process picks it up \u2192 runs GPU inference in separate process \u2192 result stored in Redis result backend \u2192 client polls or gets callback \u2014 is a multi-component system that requires seeing the full dataflow diagram. Getting this wrong blocks FastAPI's event loop and causes all requests to time out.",
            "links": [
              {
                "text": "\u2197 Celery \u2014 Introduction",
                "url": "https://docs.celeryq.dev/en/stable/getting-started/introduction.html"
              }
            ]
          },
          {
            "name": "Model Loading Strategy \u2014 Shared Memory, Forked Workers, Torch.share_memory_()",
            "desc": "When a Gunicorn master process forks N worker processes, the naive approach loads the model weights N times. The correct approach loads the model in the master before forking \u2014 child processes inherit the weights via OS copy-on-write page sharing. Seeing a memory diagram of forked processes sharing the same physical memory pages is the insight that answers the memory overhead interview scenario.",
            "links": []
          }
        ]
      },
      {
        "title": "SDE Interview Scenarios \u2014 Production Architecture",
        "topics": []
      }
    ]
  }
];
