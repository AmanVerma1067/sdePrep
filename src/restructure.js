// This maps each CS Core phase title to its subject group
const csSubjectMap = {
  "OS Architecture & Basics": "Operating Systems",
  "Process Management & Threads": "Operating Systems",
  "CPU Scheduling Algorithms": "Operating Systems",
  "Concurrency & Synchronization": "Operating Systems",
  "Memory Management": "Operating Systems",
  "Storage, Disk Scheduling & File Systems": "Operating Systems",
  "ER Modeling & Schema Design": "DBMS",
  "SQL & Relational Algebra": "DBMS",
  "Normalization — 1NF to BCNF": "DBMS",
  "Transactions & ACID Properties": "DBMS",
  "Concurrency Control & Isolation Levels": "DBMS",
  "Indexing & B+ Trees": "DBMS",
  "OSI vs TCP/IP Models & Encapsulation": "Computer Networks",
  "IP Addressing, Subnetting & NAT": "Computer Networks",
  "TCP vs UDP & Transport Layer": "Computer Networks",
  "Routing Algorithms": "Computer Networks",
  "Application Layer Protocols": "Computer Networks",
  "Network Security & TLS/HTTPS": "Computer Networks",
  "Classes, Objects & C++ Specifics": "OOP & C++",
  "The Four Pillars of OOP": "OOP & C++",
  "Virtual Functions, vtable & Runtime Dispatch": "OOP & C++",
  "Advanced C++ OOP — Multiple Inheritance & Diamond Problem": "OOP & C++",
  "Design Principles — SOLID & Common Patterns": "OOP & C++",
  "SE · Introduction to Software Engineering": "Software Engineering",
  "SE · SDLC Models": "Software Engineering",
  "SE · Software Project Management": "Software Engineering",
  "SE · Software Requirements": "Software Engineering",
  "SE · Software Testing & Debugging": "Software Engineering",
};

export function addSubjectsToCSCore(roadmaps) {
  const csCore = roadmaps.find(r => r.id === 'cs-core');
  if (!csCore) return roadmaps;
  
  const subjectOrder = ["Operating Systems", "DBMS", "Computer Networks", "OOP & C++", "Software Engineering"];
  const grouped = {};
  
  csCore.phases.forEach(phase => {
    const subject = csSubjectMap[phase.title] || "Software Engineering";
    if (!grouped[subject]) grouped[subject] = [];
    grouped[subject].push(phase);
  });
  
  csCore.subjects = subjectOrder.map(name => ({
    name,
    phases: grouped[name] || []
  }));
  
  // Other roadmaps get a single default subject if not present
  roadmaps.forEach(r => {
    if (r.id !== 'cs-core' && !r.subjects) {
      r.subjects = [{ name: r.title, phases: r.phases }];
    }
  });
  
  return roadmaps;
}
