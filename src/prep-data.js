// ---------------------------------------------------------------------------
// prep-data.js — static data for the interactive prep features.
// Kept separate from roadmap-data.js / resume-data.js so those stay untouched.
// ---------------------------------------------------------------------------

/** Roadmap ids that matter for each interview track. Verified against roadmap-data.js. */
export const TRACKS = {
  all: {
    label: 'All Roadmaps',
    icon: '🌐',
    ids: null, // null = no filtering
  },
  sde: {
    label: 'SDE Focus',
    icon: '⚡',
    ids: [
      'tech-fundamentals', 'first-principles', 'cs-21day', 'backend-lld',
      'node-express', 'react-nextjs', 'flutter', 'packspec',
      'flask-fastapi', 'databases-cloud', 'sde-defense',
    ],
  },
  ml: {
    label: 'ML & Data Eng',
    icon: '🤖',
    ids: [
      'tech-fundamentals', 'first-principles', 'cs-21day', 'aiml-stack',
      'flask-fastapi', 'databases-cloud', 'backend-lld', 'ml-dataeng-defense',
    ],
  },
};

/**
 * Daily drill bank. Every `roadmap`/`hash` pair below resolves to a real
 * element id — run `node verify-hashes.mjs` after editing.
 */
export const DRILLS = [
  {
    track: 'sde',
    q: 'Why Node + Socket.IO for real-time multiplayer instead of a threaded Python or Java server?',
    a: 'Because chess connections are idle almost all the time. A game sends a few small messages per minute and waits in between — a thread-per-connection server pays memory for every idle player, while an event loop costs one thread total and only wakes when a message arrives. Socket.IO added rooms, long-polling fallback and auto-reconnect. Trade-off: one CPU-heavy task would freeze every game, which is exactly why Stockfish lives in a separate Flask service.',
    roadmap: 'tech-fundamentals', hash: '#c8',
  },
  {
    track: 'sde',
    q: 'Two players move in the same millisecond. How does Node resolve the race?',
    a: "It doesn't need resolving — the race can't happen in one process. Node runs one JS thread, so the two handlers queue and run to completion one after the other. The first mutates the board and flips turn(); the second then fails its turn check. Nuance that earns the point: this only holds because the handler is fully synchronous. Add an await between validating and mutating and you create a real interleaving window.",
    roadmap: 'node-express', hash: '#c5',
  },
  {
    track: 'sde',
    q: 'Why REST with HTTP caching instead of GraphQL?',
    a: "Because my payloads are fixed and my reads are cacheable, so GraphQL solves a problem I don't have. Every client wants the whole timetable, the whole spec, the whole load history — there's no over-fetching to eliminate. REST gets HTTP and CDN caching free, and StudySync's offline mode IS a cached response. I'd switch when many clients need many different slices of a deeply nested graph.",
    roadmap: 'tech-fundamentals', hash: '#c5',
  },
  {
    track: 'sde',
    q: 'How do you design refresh-token rotation that detects reuse?',
    a: 'Short access token (~15 min) plus a long refresh token stored server-side, single-use, grouped into a family per login. If an already-used refresh token is presented again, one of the two holders is an attacker — the legitimate client already rotated. You cannot tell which, so you delete the whole family and force re-login. Theft becomes a detectable event instead of a silent one.',
    roadmap: 'node-express', hash: '#c4',
  },
  {
    track: 'sde',
    q: 'Why does a partial index beat a full index on a job-queue table?',
    a: 'A queue table grows forever, but the queue is only the pending rows. `CREATE INDEX ... WHERE status = \'PENDING\'` means the structure kept hot in memory is proportional to work-in-progress, not to history — a table with 50M completed jobs and 200 pending has an index with 200 entries. Rows also leave the index automatically when status changes.',
    roadmap: 'backend-lld', hash: '#c1',
  },
  {
    track: 'sde',
    q: 'SELECT FOR UPDATE vs SKIP LOCKED — when do you use each?',
    a: 'Plain FOR UPDATE when you need a SPECIFIC row and it is correct for others to wait — booking seat 14A, debiting account 7. SKIP LOCKED when you need ANY row from a pool and waiting is pointless — a job queue. Getting it backwards means all 10 workers queue behind the same oldest job, so you built a single-threaded system with 10 processes.',
    roadmap: 'backend-lld', hash: '#c1',
  },
  {
    track: 'ml',
    q: 'Why a hybrid spaCy NER + rule parser instead of an end-to-end LLM?',
    a: 'Because the sentence contains two problems with opposite requirements. Food names are open-vocabulary, so they need a model that generalises. Quantities are a tiny exact grammar, so they need rules that are never approximately right — "150g" becoming 15g is a wrong calorie count shown to a user. Learn the fuzzy part, hard-code the exact part. Every number comes from USDA, never from a model.',
    roadmap: 'ml-dataeng-defense', hash: '#nv1',
  },
  {
    track: 'ml',
    q: 'Sync CPU inference in FastAPI — async def or plain def?',
    a: 'Plain def. async def is a promise to the event loop that you will yield at every await; a PyTorch forward pass contains no awaits, so the loop is stuck for the whole inference and every other request on that worker freezes. Declare it def and FastAPI runs it in the anyio threadpool. For CPU-bound work, def gives MORE concurrency than async def — the "modern" keyword is the wrong one.',
    roadmap: 'flask-fastapi', hash: '#c2',
  },
  {
    track: 'ml',
    q: 'Why YOLOv5n on a Raspberry Pi instead of a cloud GPU?',
    a: 'Because sending passenger video off the bus is a privacy problem I would rather not create. On-device the frame becomes a count and is discarded — privacy by architecture, not policy. It also survives dead zones, and continuous per-vehicle video upload is a bill that grows as the product succeeds. Trade-off: ~1.9M params vs YOLOv5x\'s ~87M, so lower accuracy, and model updates must be pushed to every device.',
    roadmap: 'ml-dataeng-defense', hash: '#sy1',
  },
  {
    track: 'ml',
    q: 'Why PostgreSQL for time-series telemetry over a document store?',
    a: 'Because every question I ask this data is an aggregate over a time range, and that is what SQL is for. The data is perfectly uniform, so schema flexibility buys nothing while enforcement stops malformed readings. Postgres gives partitioning, BRIN indexes (tiny, because time-ordered inserts leave the table physically sorted), ON CONFLICT for idempotent retries, and DROP TABLE retention.',
    roadmap: 'databases-cloud', hash: '#c1',
  },
  {
    track: 'ml',
    q: 'Fine-tune the model so it stops hallucinating — right or wrong?',
    a: 'Wrong, and this is the highest-signal correction you can make. Fine-tuning teaches behaviour and format, not facts. Training on your documents makes the model SOUND like them; it does not make it recall them reliably, and it will still invent confidently. Facts belong in the context window — that is RAG.',
    roadmap: 'aiml-stack', hash: '#m4',
  },
  {
    track: 'ml',
    q: 'Why does 99% accuracy mean nothing on a fraud model?',
    a: 'Because accuracy is dominated by the majority class. If 1 in 100 transactions is fraud, always predicting "not fraud" scores 99% and catches zero fraud — it measures the class distribution, not the model. Precision and recall fix it by ignoring true negatives entirely, so the harmless majority stops inflating the score.',
    roadmap: 'first-principles', hash: '#c4',
  },
  {
    track: 'all',
    q: 'What happens from typing a URL to the page rendering?',
    a: 'Four stages: find the server, connect securely, ask for the page, draw it. DNS resolves the domain (browser cache → OS → resolver → root/TLD/authoritative), TCP does a 3-way handshake, TLS negotiates a session key using asymmetric crypto then switches to symmetric, HTTP GET returns HTML, and the browser builds DOM + CSSOM → render tree → layout → paint → composite.',
    roadmap: 'first-principles', hash: '#c5',
  },
  {
    track: 'all',
    q: 'Explain the Python GIL without jargon.',
    a: 'Python lets only one thread run Python code at a time. Threads still help when you are WAITING — a network call releases the lock. Threads do not help when you are COMPUTING. Python is a great steering wheel and a poor engine: PyTorch is fast because the heavy loops run in C++/CUDA with the GIL released. Rule: threads for waiting, processes for computing.',
    roadmap: 'tech-fundamentals', hash: '#c1',
  },
  {
    track: 'all',
    q: 'Does alpha-beta pruning change the move minimax picks?',
    a: 'No. Alpha-beta is provably identical to plain minimax at the same depth — it only skips work that could not affect the result. What varies enormously is speed: best-first ordering approaches b^(d/2), worst-first prunes essentially nothing. That is why move ordering (captures, then checks) is where the real engineering goes.',
    roadmap: 'aiml-stack', hash: '#m5',
  },
  {
    track: 'all',
    q: 'Is CORS a security feature for your API?',
    a: 'No, and this catches people. CORS is enforced by the BROWSER. The request usually reaches your server and executes; the browser just refuses to hand the response to JavaScript. curl, a mobile app or a script ignores CORS entirely. So CORS protects users from malicious pages — it does not protect your API from attackers. Your API still needs real authentication.',
    roadmap: 'first-principles', hash: '#c2',
  },
];

/** Rehearsal metadata, merged into resume-data.js projects by id at render time. */
export const REHEARSALS = {
  nutrivision: {
    spokenOpener30s:
      'Nutri-Vision turns free-form meal text or a photo into structured nutrition data. The core design decision was hybrid extraction: a custom-trained spaCy NER model handles food names, because that vocabulary is open-ended, while a rule-based parser handles quantities, because "150g" must never become 15g. Both resolve against USDA FoodData Central with confidence scoring, so the calorie number a user sees comes from a government database, never from a model.',
    codeRealityCheck: [
      'The FastAPI service handles TEXT end-to-end. For images it calls LogMeal, a third-party vision API.',
      'My own ResNet-50 lives in a SEPARATE repo behind a small Flask app, with the checkpoint tracked by Git LFS.',
      'Do not say "both models behind one FastAPI API" — it is checkable and currently wrong.',
    ],
    interviewerTraps: [
      'Why not one LLM call for the whole sentence? → A nutrition app must never invent a number. Regex returns None on an unknown format; an LLM returns a confident wrong gram value.',
      'Why Dropout(0.5) on the head specifically? → The head is where overfitting concentrates: it is the only part learning, from a small dataset. Conv layers use far less because weight sharing already regularizes.',
      'Which metric did you optimize? → Recall at the NER stage, because a missed item silently undercounts calories while a false positive gets filtered by the low-confidence USDA match.',
    ],
    deepDiveRoadmap: 'ml-dataeng-defense', hash: '#nv1',
  },
  recrutai: {
    spokenOpener30s:
      'RecrutAI is an adaptive technical screening engine. The insight is that the hard part was control flow, not the model\'s writing ability — it scores each answer across a rubric and the score decides the next state: probe deeper, simplify, pivot topic, or proceed. Fine-tuning does not give you a state machine. I treated Gemini as an unreliable dependency with a 6-second ceiling, two retries with exponential backoff, and deterministic fallbacks, so an outage degrades adaptiveness but never ends a live session.',
    codeRealityCheck: [
      'There is NO database. Sessions, transcripts and proctoring data live in an in-memory Map; users sit in a .data/users.json file hashed with scryptSync.',
      'Say it before they ask: state is in-memory by design, kept behind one store module, so persisting it is a single-file swap to Postgres.',
      'The README names four scoring dimensions plus an integrity penalty — count integrity as the fifth and say so, or change the number.',
      'This is the Next.js 15 / React 19 project (Chessify is the Next.js 13 one).',
    ],
    interviewerTraps: [
      'What stops a hallucination corrupting state? → The branch decision is constrained to four valid tokens and Zod-validated; anything else is rejected and triggers the fallback.',
      'Why not fine-tune a smaller local model? → No labelled transcripts, no GPU budget, and a rubric change would mean a retrain instead of a prompt edit.',
      'What does a Gemini outage actually look like to a candidate? → Scripted questions instead of adaptive ones. Degraded, not broken.',
    ],
    deepDiveRoadmap: 'ml-dataeng-defense', hash: '#ra1',
  },
  chessify: {
    spokenOpener30s:
      'Chessify is real-time multiplayer chess with a bot opponent, and it is deliberately two backends. Multiplayer is hundreds of mostly-idle sockets — pure I/O, ideal for Node\'s event loop. A Stockfish or minimax search pins a core for hundreds of milliseconds — pure CPU. In one Node process a single bot move would freeze every live game, because there is one thread executing JavaScript. Split into a Flask service, an engine slowdown only makes bot moves slower.',
    codeRealityCheck: [
      'Chessify is Next.js 13 App Router, not 15.',
      'The Flask endpoint is POST /get_bot_move in main.py, and it is stateless: FEN in, move out.',
      'Three-tier degradation: Polyglot opening book → Stockfish (ELO limited to 1800) → in-process minimax at depth 3.',
      'GitHub reports the repo as ~79% C++ — that is the vendored Stockfish source.',
    ],
    interviewerTraps: [
      'Two players move in the same millisecond? → One JS thread means handlers run to completion one after the other; the second fails its turn check. Only true while the handler stays synchronous and only on one instance.',
      'What if a client sends an illegal move? → Three server-side gates in order: player-or-spectator, whose turn, then chess.js legality against the SERVER board. Rejected moves are not broadcast.',
      'Why depth 3? → It is a latency budget, not a quality target. Strength comes from Stockfish; the Python search is a fallback.',
      'Is two backends over-engineering? → Give the counterfactual with a number: 800ms of Stockfish blocks 200 live sockets.',
    ],
    deepDiveRoadmap: 'sde-defense', hash: '#ch1',
  },
  studysync: {
    spokenOpener30s:
      'StudySync is a cross-platform timetable app shipped to Android, iOS and web from one Flutter codebase, across three tagged releases, backed by an Express and MongoDB API with an authenticated admin panel. Flutter because a timetable is a dense custom grid — Flutter paints every pixel with its own engine, so it is identical everywhere. React Native maps onto native widgets per platform, which means chasing layout divergence on the exact UI whose value is consistency.',
    codeRealityCheck: [
      'Offline mode is READ-ONLY. Caching uses shared_preferences and the http package — a key-value cache, not Hive/Drift/SQLite.',
      'The claim "renders the full week offline" is true. Do not imply a sync engine, local writes, or conflict resolution.',
      'The backend lives in a separate StudySync-Server repo.',
    ],
    interviewerTraps: [
      'Why not WebSockets for updates? → A timetable changes a few times a semester. The requirement was the opposite of real-time: render instantly with zero network on bad campus wifi.',
      'How would you add student edits? → Version counters per row, tombstones so a client can tell deleted from unchanged, and server-assigned timestamps because device clocks lie.',
      'Flutter binary size? → Larger, and it does not matter for an app installed once by students.',
    ],
    deepDiveRoadmap: 'sde-defense', hash: '#ss1',
  },
  'sahyatri-sde': {
    spokenOpener30s:
      'SahYatri is edge passenger analytics for public transport. A Raspberry Pi 4 runs YOLOv5n at 15 FPS with adaptive thresholding, counts passengers on-device, and streams occupancy plus GPS into a PostgreSQL time-series store behind a Node and Express API, feeding a React dashboard. It won BitBox 5.0. The architectural point is that the frame never leaves the vehicle — only a number does.',
    codeRealityCheck: [
      'Hardware is real: Pi Camera, MPU6050, GPS module, 16x2 I2C LCD. Mention thermal throttling — a Pi under sustained load degrades FPS over a long route.',
      'Delivered in a 4-person team; be clear about which parts were yours.',
      'The 15 FPS came from resolution reduction and frame-skipping. INT8/ONNX/NCNN quantization is the NEXT step, not something shipped.',
    ],
    interviewerTraps: [
      'Why a Node ingestion layer instead of writing to Postgres from the Pi? → Inference and ingestion have opposite performance profiles, and a Pi should not hold a direct DB connection over the public internet.',
      'How would you handle 100x more buses? → Batch inserts first (every commit is an fsync), then connection pooling, then a queue, then time partitioning. Change the database engine LAST.',
      'A bus loses signal for 2 hours then uploads 2,400 readings? → Separate recorded_at from ingested_at, unique (bus_id, recorded_at) with ON CONFLICT DO NOTHING, chunked upload with jittered retries.',
    ],
    deepDiveRoadmap: 'sde-defense', hash: '#sy1',
  },
  'sahyatri-ml': {
    spokenOpener30s:
      'The computer-vision half of SahYatri runs YOLOv5n on a Raspberry Pi 4 ARM CPU at 15 FPS, computing occupancy density on-device so raw video never leaves the bus. The model choice is a product decision: the nano variant is roughly 1.9 million parameters against YOLOv5x\'s 87 million, so accuracy is lower — but for "how full is this bus", approximate is fine, and on a CPU with no GPU it is the difference between real-time and a slideshow.',
    codeRealityCheck: [
      'Adaptive confidence thresholding exists because a bus goes from tunnel-dark to noon glare in seconds; a fixed threshold silently drops passengers in the dark.',
      'ETL by necessity, not preference: the frame becomes a count on-device and is discarded. ELT would require transmitting video, which breaks the privacy guarantee.',
    ],
    interviewerTraps: [
      'IoU vs NMS? → IoU is a measurement, NMS is an algorithm that uses it. Two DIFFERENT thresholds: confidence decides if a box exists, NMS IoU decides if two boxes are the same object. In a crowded bus, NMS is what makes you undercount.',
      'Why mAP and not accuracy? → Detection outputs a variable number of boxes, so you sweep the threshold and take area under the PR curve. But the PRODUCT metric is count error, not mAP.',
      'What did adaptive thresholding trade away? → More false positives in the dark. Overcounting by one beats reporting an empty bus that is full.',
    ],
    deepDiveRoadmap: 'ml-dataeng-defense', hash: '#sy1',
  },
};

/** Interactive strategy milestones (Task C3). */
export const MILESTONES = [
  { phase: 'Weeks 1–2 · Foundations', items: [
    { id: 'm-dsa-warm', text: 'Re-warm DSA: 2 problems/day, arrays → hashing → two pointers' },
    { id: 'm-cs-os', text: 'CS Core: OS — processes, threads, scheduling, deadlock' },
    { id: 'm-cs-dbms', text: 'CS Core: DBMS — ACID, isolation levels, indexing' },
    { id: 'm-fp-net', text: 'First principles: TCP/UDP, TLS, HTTP/1.1 vs 2 vs 3' },
    { id: 'm-repo-fix', text: 'Fix the four resume/repo mismatches (Nutri-Vision, RecrutAI, versions, StudySync)' },
  ]},
  { phase: 'Weeks 3–4 · Project Defense', items: [
    { id: 'm-chessify', text: 'Rehearse Chessify: concurrency split + server-authoritative validation' },
    { id: 'm-nutrivision', text: 'Rehearse Nutri-Vision: hybrid extractor + why not an LLM' },
    { id: 'm-recrutai', text: 'Rehearse RecrutAI: state machine + in-memory store disclosure' },
    { id: 'm-sahyatri', text: 'Rehearse SahYatri: edge vs cloud, privacy by architecture' },
    { id: 'm-packspec', text: 'Rehearse Packspec: multi-tenant isolation + atomic transactions' },
  ]},
  { phase: 'Weeks 5–6 · Systems & LLD', items: [
    { id: 'm-lld-lock', text: 'LLD: FOR UPDATE vs SKIP LOCKED, optimistic locking, deadlock ordering' },
    { id: 'm-lld-idem', text: 'LLD: idempotency keys, outbox pattern, retries with jitter' },
    { id: 'm-mc-rate', text: 'Machine coding: rate limiter (token bucket + sliding window)' },
    { id: 'm-mc-lru', text: 'Machine coding: LRU cache with TTL' },
    { id: 'm-mc-book', text: 'Machine coding: seat booking with TTL holds' },
    { id: 'm-capacity', text: 'Practice capacity estimation out loud (name the bottleneck)' },
  ]},
  { phase: 'Weeks 7–8 · Polish & Mock', items: [
    { id: 'm-star', text: 'Time every spoken opener to 30s using the STAR timer' },
    { id: 'm-mock1', text: 'Two full mock interviews (one SDE, one ML/DE)' },
    { id: 'm-oa', text: 'Timed OA practice: CPU scheduling, subnetting, SQL output' },
    { id: 'm-behav', text: 'Behavioural: conflict, failure, and "why this company"' },
    { id: 'm-questions', text: 'Prepare 3 questions to ask the interviewer' },
  ]},
];

/** STAR / spoken-answer practice prompts (Task C1). */
export const STAR_PROMPTS = [
  { text: 'Tell me about yourself', seconds: 90 },
  { text: "Explain Chessify's concurrency split", seconds: 60 },
  { text: 'Why ResNet-50 for food classification?', seconds: 45 },
  { text: 'Explain B-Tree indexing', seconds: 45 },
  { text: 'Walk me through the Nutri-Vision hybrid extractor', seconds: 60 },
  { text: 'How does RecrutAI survive a Gemini outage?', seconds: 45 },
  { text: 'Why edge inference instead of a cloud GPU?', seconds: 45 },
  { text: 'Describe a technical decision you got wrong', seconds: 90 },
];
