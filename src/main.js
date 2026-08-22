import { roadmaps } from './roadmap-data.js';
import { resumeData } from './resume-data.js';
import * as store from './store.js';
import { syncProgress, setFirebaseConfig, hasFirebaseConfig, pullProgress } from './sync.js';
import * as ix from './interactive.js';
import './style.css';

let currentView = 'dashboard';
let currentRoadmap = null;
let previousView = null;
let previousRoadmap = null;
let targetHashOnLoad = null;
let isFullscreenReading = false;
let activeResumeRole = 'all'; // 'all' | 'sde' | 'mldataeng'
let drillRevealed = false;
let activeTechTag = '';
let openRehearsal = null;   // { projId, tab }

function topicId(rmId, phase, topicName) {
  return `${rmId}::${phase}::${topicName}`;
}

function getTotalTopics() {
  let n = 0;
  roadmaps.forEach(r => {
    const subs = r.subjects || [{ phases: r.phases }];
    subs.forEach(s => s.phases.forEach(p => n += p.topics.length));
  });
  return n;
}

function getRoadmapStats(rm) {
  let total = 0, done = 0;
  const subs = rm.subjects || [{ phases: rm.phases }];
  subs.forEach(s => s.phases.forEach(p => p.topics.forEach(t => {
    total++;
    if (store.isCompleted(topicId(rm.id, p.title, t.name))) done++;
  })));
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

function navigateTo(view, roadmap) {
  previousView = currentView;
  previousRoadmap = currentRoadmap;
  currentView = view;
  currentRoadmap = roadmap || null;
  isFullscreenReading = false;
  renderApp();
}

function navigateToWithHash(view, roadmap, hash) {
  targetHashOnLoad = hash;
  navigateTo(view, roadmap);
}

function goBack() {
  if (previousView) {
    currentView = previousView;
    currentRoadmap = previousRoadmap;
    previousView = null;
    previousRoadmap = null;
  } else {
    currentView = 'dashboard';
    currentRoadmap = null;
  }
  isFullscreenReading = false;
  renderApp();
}

function toggleFullscreenReading() {
  isFullscreenReading = !isFullscreenReading;
  document.body.classList.toggle('fullscreen-reading', isFullscreenReading);
}

function renderApp() {
  ix.stopStarTimer();   // the DOM is about to be replaced — don't orphan the interval
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderSidebar()}
    <main class="main-content">
      ${currentView === 'dashboard' ? renderDashboard() : ''}
      ${currentView === 'roadmap' ? renderRoadmapView() : ''}
      ${currentView === 'todos' ? renderTodosView() : ''}
      ${currentView === 'tips' ? renderTipsView() : ''}
      ${currentView === 'resume' ? renderResumeView() : ''}
    </main>
  `;

  // Dynamic layout adjustment for roadmap view (wide screen split pane)
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    if (currentView === 'roadmap') {
      mainContent.style.maxWidth = '100%';
      mainContent.style.padding = '20px 30px 40px';
    } else {
      mainContent.style.maxWidth = '';
      mainContent.style.padding = '';
    }
  }

  attachEvents();
}

function renderSidebar() {
  return `
  <nav class="sidebar" id="sidebar">
    <div class="sidebar-brand" data-view="dashboard" style="cursor:pointer">
      <div class="brand-text">SDE Prep.</div>
      <div class="brand-sub">interview tracker</div>
    </div>
    <div class="sidebar-nav">
      <button class="nav-btn ${currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
        Overview
      </button>
      <button class="nav-btn ${currentView === 'resume' ? 'active' : ''}" data-view="resume">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        My Resume
      </button>
      <button class="nav-btn ${currentView === 'tips' ? 'active' : ''}" data-view="tips">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        Strategy & Tips
      </button>
      <button class="nav-btn ${currentView === 'todos' ? 'active' : ''}" data-view="todos">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Tasks
      </button>
      <div class="nav-divider"></div>
      <div class="nav-label">LEARNING PATHS</div>
      ${roadmaps.map(r => `
        <button class="nav-btn ${currentView === 'roadmap' && currentRoadmap === r.id ? 'active' : ''}" 
                data-view="roadmap" data-roadmap="${r.id}" style="--rm-accent:${r.accent}">
          <span class="nav-icon-emoji">${r.icon}</span>
          <span style="flex: 1; text-align: left; line-height: 1.2;">${r.title}</span>
          <span class="nav-pct">${getRoadmapStats(r).pct}%</span>
        </button>
      `).join('')}
    </div>
    <div class="sidebar-footer">
      <div class="streak-badge">🔥 ${store.getStreak()} Day Streak</div>
      <button class="sync-btn" id="cloudSyncBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        ${hasFirebaseConfig() ? '✓ Synced' : 'Cloud Sync'}
      </button>
    </div>
  </nav>
  <button class="mobile-toggle" id="mobileToggle">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  </button>`;
}

function renderBackButton() {
  return `<button class="back-btn" id="backBtn">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
    Back
  </button>`;
}

function renderDashboard() {
  const track = store.getActiveTrack();
  const visibleRoadmaps = ix.filterRoadmapsByTrack(roadmaps, track);

  // Track-aware totals: count only the roadmaps visible in this track.
  let total = 0, done = 0;
  visibleRoadmaps.forEach(r => {
    const st = getRoadmapStats(r);
    total += st.total; done += st.done;
  });

  const pct = total ? Math.round(done / total * 100) : 0;
  const nextTopic = ix.findNextTopic(roadmaps, track, topicId);
  const drill = ix.pickDrill(track, store.getDrillIndex());
  const todayDone = store.getTodayCompleted();
  const dailyGoal = store.getDailyGoal();
  const streak = store.getStreak();
  const pendingTodos = store.getTodos().filter(t => !t.done).length;

  return `
  <div class="fade-in">
    <div class="page-header">
      <h1>Hello, let's crack it.</h1>
      <p class="page-sub">Summer SDE Interview Prep — your command center.</p>
    </div>

    ${ix.renderTrackToggle(track)}
    ${ix.renderNextTopic(nextTopic)}
    ${ix.renderDrill(drill, drillRevealed)}

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-meta"><span class="stat-label">Overall Progress</span><span class="stat-value">${pct}%</span></div>
        <div class="stat-bar-wrap"><div class="stat-bar" style="width:${pct}%;background:var(--accent)"></div></div>
        <div class="stat-sub">${done} of ${total} topics · ${track === 'all' ? 'all roadmaps' : track === 'sde' ? 'SDE track' : 'ML &amp; DE track'}</div>
      </div>
      <div class="stat-card">
        <div class="stat-meta"><span class="stat-label">Today's Goal</span><span class="stat-value">${todayDone}/${dailyGoal}</span></div>
        <div class="stat-bar-wrap"><div class="stat-bar" style="width:${Math.min(100, (todayDone/dailyGoal)*100)}%;background:var(--green)"></div></div>
        <div class="stat-sub">topics mastered today</div>
      </div>
      <div class="stat-card minimal">
        <div class="stat-meta"><span class="stat-label">Active Streak</span><span class="stat-value">${streak}</span></div>
        <div class="stat-sub">consecutive study days</div>
      </div>
      <div class="stat-card minimal">
        <div class="stat-meta"><span class="stat-label">Pending Tasks</span><span class="stat-value">${pendingTodos}</span></div>
        <div class="stat-sub">items in your to-do list</div>
      </div>
    </div>

    <div class="dash-section">
      <h2 class="section-title">Learning Paths <span class="section-count">${visibleRoadmaps.length}</span></h2>
      <div class="roadmap-cards">
        ${visibleRoadmaps.map(r => {
          const s = getRoadmapStats(r);
          return `
          <div class="rm-card" data-view="roadmap" data-roadmap="${r.id}" style="--rm-accent:${r.accent}">
            <div class="rm-card-head">
              <span class="rm-icon">${r.icon}</span>
              <span class="rm-title">${r.title}</span>
            </div>
            <div class="rm-meta">${s.done}/${s.total} topics · ${s.pct}%</div>
            <div class="rm-bar-wrap full"><div class="rm-bar" style="width:${s.pct}%;background:${r.accent}"></div></div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="dash-section heatmap-section">
      <h2 class="section-title">Consistency</h2>
      <div class="heatmap" id="heatmap">${renderHeatmap()}</div>
    </div>
  </div>`;
}

function renderHeatmap() {
  const completed = store.getCompletedMap();
  let cells = '';
  const today = new Date();
  for (let i = 83; i >= 0; i--) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const ds = d.toISOString().slice(0, 10);
    const count = Object.values(completed).filter(ts => new Date(ts).toISOString().slice(0, 10) === ds).length;
    const level = count === 0 ? 0 : count <= 2 ? 1 : count <= 4 ? 2 : count <= 7 ? 3 : 4;
    cells += `<div class="hm-cell hm-${level}" title="${ds}: ${count} topics"></div>`;
  }
  return cells;
}

function renderRoadmapView() {
  const rm = roadmaps.find(r => r.id === currentRoadmap);
  if (!rm) return '';
  const stats = getRoadmapStats(rm);

  const phasesHtml = rm.phases.map(phase => {
    return `
      <div class="checklist-phase-group">
        <div class="checklist-phase-header">${phase.title}</div>
        ${phase.topics.map(t => {
          const tid = topicId(rm.id, phase.title, t.name);
          const checked = store.isCompleted(tid);
          return `
            <div class="checklist-topic-row ${checked ? 'completed' : ''}" data-tid="${tid}">
              <div class="checklist-topic-main">
                <label class="custom-checkbox" onclick="event.stopPropagation()">
                  <input type="checkbox" class="topic-cb" data-tid="${tid}" ${checked ? 'checked' : ''}>
                  <span class="checkmark"></span>
                </label>
                <span class="checklist-topic-name">${t.name}</span>
                <div class="checklist-topic-arrow">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
              <div class="checklist-topic-details" onclick="event.stopPropagation()">
                <button class="checklist-jump-btn" data-hash="${t.hash}">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Scroll Notes to Section
                </button>
                ${t.desc ? `<p class="topic-desc-text">${t.desc}</p>` : ''}
                ${t.tip ? `
                  <div class="topic-callout ${t.isTrap ? 'trap' : 'tip'}">
                    <strong>${t.isTrap ? '⚠️ Interview Trap' : '💡 Interview Tip'}:</strong> ${t.tip}
                  </div>
                ` : ''}
                ${t.links && t.links.length ? `
                  <div class="topic-links-list">
                    ${t.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="resource-link">${l.text}</a>`).join('')}
                  </div>
                ` : ''}
                <textarea class="checklist-note-input" data-tid="${tid}" placeholder="Add your notes...">${store.getNote(tid)}</textarea>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }).join('');

  return `
  <div class="fade-in" style="height: 100%; display: flex; flex-direction: column;">
    <div class="roadmap-header-bar">
      <div style="display: flex; align-items: center; gap: 12px;">
        ${renderBackButton()}
        <span style="font-size: 22px;">${rm.icon}</span>
        <h1 style="margin: 0; font-size: 22px; font-family: var(--font-head);">${rm.title}</h1>
        <span class="roadmap-mastery-badge">
          ${stats.done}/${stats.total} Mastered (${stats.pct}%)
        </span>
      </div>
      <button class="fullscreen-toggle-btn" id="fullscreenReadBtn" title="Toggle fullscreen reading mode">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
        <span class="fullscreen-label">Focus Mode</span>
      </button>
    </div>

    <!-- Responsive Mobile Tabs Selector -->
    <div class="roadmap-mobile-tabs">
      <button class="mobile-tab-btn active" data-target="notes">📖 Notes</button>
      <button class="mobile-tab-btn" data-target="checklist">✅ Checklist</button>
      <button class="mobile-tab-btn" data-target="fullscreen" id="mobileFullscreenBtn">🔍 Focus</button>
    </div>

    <div class="roadmap-split-pane show-notes">
      <div class="notes-pane">
        <iframe src="${rm.url}" id="notesFrame" title="${rm.title} Notes"></iframe>
      </div>
      <div class="checklist-pane">
        <div class="checklist-scroll">
          ${phasesHtml || '<div class="empty-msg" style="text-align:center; padding: 20px;">No sections found.</div>'}
        </div>
      </div>
    </div>

    <!-- Fullscreen exit floating button (visible only in fullscreen mode) -->
    <button class="fullscreen-exit-fab" id="fullscreenExitFab" title="Exit fullscreen (Esc)">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="4 14 10 14 10 20"></polyline>
        <polyline points="20 10 14 10 14 4"></polyline>
        <line x1="14" y1="10" x2="21" y2="3"></line>
        <line x1="3" y1="21" x2="10" y2="14"></line>
      </svg>
    </button>
  </div>`;
}

function renderTodosView() {
  const todos = store.getTodos();
  const pending = todos.filter(t => !t.done);
  const completed = todos.filter(t => t.done);
  return `
  <div class="fade-in">
    ${renderBackButton()}
    <div class="page-header"><h1>Tasks</h1><p class="page-sub">What needs your focus today?</p></div>
    <div class="todo-input-wrap">
      <input type="text" id="todoInput" placeholder="Press Enter to add task..." class="todo-input">
    </div>
    <div class="todo-lists">
      <div class="todo-group">
        <h3 class="todo-group-title">Pending (${pending.length})</h3>
        ${pending.length === 0 ? '<p class="empty-msg">You are all caught up.</p>' : pending.map(t => renderTodoItem(t)).join('')}
      </div>
      ${completed.length > 0 ? `<div class="todo-group"><h3 class="todo-group-title">Completed</h3>${completed.map(t => renderTodoItem(t)).join('')}</div>` : ''}
    </div>
  </div>`;
}

function renderTodoItem(t) {
  return `
  <div class="todo-item ${t.done ? 'done' : ''}">
    <label class="custom-checkbox"><input type="checkbox" class="todo-cb" data-todo="${t.id}" ${t.done ? 'checked' : ''}><span class="checkmark"></span></label>
    <span class="todo-text">${t.text}</span>
    <button class="todo-del" data-del="${t.id}"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>`;
}

function renderTipsView() {
  return `
    <div class="tips-interactive">
      ${ix.renderStarTimer()}
    </div>

    <div class="tips-interactive">
      <h2 class="section-title">🧮 OA &amp; System Design Calculators</h2>
      ${ix.renderCalculators()}
    </div>

    <div class="tips-interactive">
      ${ix.renderMilestones()}
    </div>

  <div class="fade-in">
    ${renderBackButton()}
    <div class="page-header"><h1>Strategy & Interview Tips</h1><p class="page-sub">The meta-game for cracking SDE interviews — and how to use this prep tool effectively.</p></div>

    <div class="tips-grid">

      <!-- How to Use This Website -->
      <div class="tip-card wide guide-card">
        <h3>🖥️ How to Use This Website</h3>
        <div class="guide-grid">
          <div class="guide-item">
            <strong>📖 Learning Paths</strong>
            <p>Open any learning path from the sidebar. The left pane loads the full interview notes document, the right pane shows a checklist of every section. Click the ▾ arrow on any topic to expand it — you'll see a "Scroll Notes to Section" button and a personal notes textarea.</p>
          </div>
          <div class="guide-item">
            <strong>✅ Track Progress</strong>
            <p>Check off topics as you master them. Your progress syncs to the consistency heatmap on the dashboard. Set a daily goal and maintain your study streak — it's shown on the sidebar.</p>
          </div>
          <div class="guide-item">
            <strong>🔍 Focus Reading Mode</strong>
            <p>Click "Focus Mode" (or the 🔍 tab on mobile) to enter distraction-free fullscreen reading. The sidebar and checklist disappear, leaving only the notes. Press <kbd>Esc</kbd> or tap the exit button to return.</p>
          </div>
          <div class="guide-item">
            <strong>📝 Section Notes</strong>
            <p>Each checklist topic has a collapsible textarea. Jot down key points, gotcha reminders, or interview phrases. Notes are saved to localStorage and optionally synced via Firebase.</p>
          </div>
          <div class="guide-item">
            <strong>📄 Resume → Deep Dives</strong>
            <p>The "My Resume" tab shows your full profile. Under each experience and project, action buttons jump you directly to the relevant interview notes section. Use these before an interview to rehearse your talking points.</p>
          </div>
          <div class="guide-item">
            <strong>☁️ Cloud Sync</strong>
            <p>Click "Cloud Sync" in the sidebar footer to connect your Firebase config. Once connected, your checklist progress, notes, tasks, and streaks sync across all your devices.</p>
          </div>
        </div>
      </div>

      <!-- Preparation Strategy -->
      <div class="tip-card priority">
        <h3>🎯 Recommended Study Order</h3>
        <ol class="priority-list">
          <li><strong>Tech Fundamentals</strong> — build the vocabulary first (language comparisons, API paradigms, cloud basics)</li>
          <li><strong>CS Core 21-Day Sprint</strong> — DBMS, OS, Computer Networks & Software Engineering OAs/Interviews</li>
          <li><strong>React & Next.js + Flutter</strong> — cover frontend/mobile to defend your full-stack projects</li>
          <li><strong>Node & Express</strong> — backend deep-dive: event loop, middleware, JWT, Socket.IO</li>
          <li><strong>Packspec Architecture Defense</strong> — prepare to walk through your internship endpoints, MongoDB schemas & ACID transactions</li>
          <li><strong>Flask & FastAPI</strong> — Python backends + Chessify minimax engine & Nutri-Vision inference defense</li>
          <li><strong>AI/ML Stack & Deep Dives</strong> — ML fundamentals, RAG, LangChain, CrewAI, YOLOv5 for SahYatri & RecrutAI</li>
          <li><strong>Databases & Cloud</strong> — SQL vs NoSQL, Docker, CI/CD, Git, Postman workflow</li>
          <li><strong>SDE Resume Defense Rehearsal</strong> — Bullet-by-bullet code-tested defense for SDE & Systems roles</li>
          <li><strong>ML & Data Eng Resume Defense</strong> — Bullet-by-bullet defense for ML, NLP, Vision, LLM & Data Engineering roles</li>
        </ol>
        <p class="tip-note">This matches the sidebar ordering. Work top-to-bottom, checking off topics as you go.</p>
      </div>

      <div class="tip-card">
        <h3>⏰ Ideal Daily Routine</h3>
        <div class="routine-block">
          <div class="routine-row"><span class="routine-time">Morning 2-3h</span><span>New topic learning + read notes in Focus Mode</span></div>
          <div class="routine-row"><span class="routine-time">Afternoon 2-3h</span><span>Timed problem solving (LeetCode mediums)</span></div>
          <div class="routine-row"><span class="routine-time">Evening 1-2h</span><span>Revision — re-read checked topics, retry failed problems</span></div>
          <div class="routine-row"><span class="routine-time">Night 30min</span><span>Mock interview or defense rehearsal</span></div>
        </div>
        <p class="tip-note">Target 6-8 focused hours/day. Quality beats quantity — take real breaks.</p>
      </div>

      <div class="tip-card">
        <h3>📊 Problem Targets (2 Months)</h3>
        <div class="target-grid">
          <div class="target-row"><span>Recursion + Backtracking</span><span class="target-num">25</span></div>
          <div class="target-row"><span>Stack / Queue</span><span class="target-num">25</span></div>
          <div class="target-row"><span>Trees + BST</span><span class="target-num">40</span></div>
          <div class="target-row"><span>Graphs (BFS/DFS/Dijkstra)</span><span class="target-num">45</span></div>
          <div class="target-row"><span>Dynamic Programming</span><span class="target-num">50</span></div>
          <div class="target-row"><span>Greedy + Heaps + Tries</span><span class="target-num">30</span></div>
          <div class="target-row"><span>Bit Manipulation + Math</span><span class="target-num">15</span></div>
          <div class="target-row total"><span>Total</span><span class="target-num">~230</span></div>
        </div>
        <p class="tip-note">Aim for 70% medium, 20% easy, 10% hard. Time yourself — 25min per medium max.</p>
      </div>

      <div class="tip-card">
        <h3>🚫 What NOT To Do</h3>
        <ul class="dont-list">
          <li>Chase hard problems before mastering mediums</li>
          <li>Jump randomly between topics without finishing one</li>
          <li>Compare yourself to competitive programmers</li>
          <li>Spend 3 days on one DP hard — look at the solution after 45min</li>
          <li>Watch too many video explanations instead of solving</li>
          <li>Memorize solutions instead of understanding patterns</li>
          <li>Neglect system design and CS fundamentals for DSA-only prep</li>
          <li>Skip mock interviews — you need to practice communicating under pressure</li>
        </ul>
      </div>

      <div class="tip-card wide">
        <h3>📓 Three Notebooks You MUST Maintain</h3>
        <div class="notebook-grid">
          <div class="notebook-item"><strong>Mistake Notebook</strong><p>Every wrong approach, why it failed, what the correct intuition was. Review weekly.</p></div>
          <div class="notebook-item"><strong>Pattern Notebook</strong><p>Sliding window, binary search on answer, monotonic stack, take/not-take DP, topological sort, etc.</p></div>
          <div class="notebook-item"><strong>Template Notebook</strong><p>BFS/DFS template, Dijkstra's, DSU, segment tree, trie, KMP — ready-to-paste code in your language.</p></div>
        </div>
      </div>

      <div class="tip-card wide">
        <h3>🔥 Most Important OA Patterns</h3>
        <div class="pattern-chips">
          <span class="pattern-chip high">Sliding Window</span>
          <span class="pattern-chip high">Binary Search on Answer</span>
          <span class="pattern-chip high">Prefix Sum</span>
          <span class="pattern-chip high">Hashing</span>
          <span class="pattern-chip high">Monotonic Stack</span>
          <span class="pattern-chip high">BFS/DFS</span>
          <span class="pattern-chip high">Subsequence DP</span>
          <span class="pattern-chip high">Heap Top-K</span>
          <span class="pattern-chip med">Greedy Intervals</span>
          <span class="pattern-chip med">Backtracking</span>
          <span class="pattern-chip med">Union-Find</span>
          <span class="pattern-chip med">Topological Sort</span>
        </div>
      </div>

      <div class="tip-card wide">
        <h3>⚡ 21-Day CS Core Sprint & OA Specific Strategy</h3>
        <div class="guide-grid">
          <div class="guide-item">
            <strong>DBMS (Days 1–5)</strong>
            <p>Normalization (1NF-BCNF), ACID properties, keys, joins, and hand-written SQL. SQL writing is almost always live-tested in interviews.</p>
          </div>
          <div class="guide-item">
            <strong>Operating Systems (Days 6–12)</strong>
            <p>CPU scheduling Gantt charts, process sync & semaphores, deadlock 4 conditions & Banker's algorithm, virtual memory & page replacement (LRU/FIFO/Belady's).</p>
          </div>
          <div class="guide-item">
            <strong>Computer Networks (Days 13–16)</strong>
            <p>OSI/TCP-IP 7-layer mapping, IP subnetting calculations, TCP 3-way handshake vs UDP, HTTP/1.1 vs HTTP/2/3, DNS & TLS security handshake.</p>
          </div>
          <div class="guide-item">
            <strong>Software Engineering (Days 17–21)</strong>
            <p>SDLC models (Waterfall, Spiral, RAD, Agile/Scrum), COCOMO estimation, SRS requirements, Coupling & Cohesion (Low coupling + High cohesion), and Software Testing (Unit, Black-box, White-box, Integration).</p>
          </div>
        </div>
      </div>

      <div class="tip-card wide">
        <h3>📝 OA (Online Assessment) Core CS MCQ Strategy</h3>
        <p class="tip-note" style="margin-bottom: 12px;">Core-CS sections in OAs (Amazon, Flipkart GRiD, Juspay, Campus OAs) are almost always 10–20 MCQs. Aim for &lt;45 sec per question.</p>
        <div class="guide-grid">
          <div class="guide-item">
            <strong>High-Yield Numericals</strong>
            <p>CPU Scheduling avg waiting/turnaround time, Page Replacement FIFO/LRU/Optimal trace, Deadlock safe sequence, Subnetting host counts.</p>
          </div>
          <div class="guide-item">
            <strong>Output Prediction & Syntax</strong>
            <p>Predict output of SQL JOIN / GROUP BY queries, C++ polymorphism vtable calls, and process fork() loop counts.</p>
          </div>
          <div class="guide-item">
            <strong>Conceptual Traps</strong>
            <p>Multiprogramming ≠ Multitasking, 2-tier vs 3-tier, Candidate key vs Super key, MAC (L2) vs IP (L3), Low coupling + High cohesion.</p>
          </div>
        </div>
      </div>

      <div class="tip-card wide">
        <h3>🗣️ Interview Day Checklist</h3>
        <div class="guide-grid">
          <div class="guide-item">
            <strong>Before the Call</strong>
            <p>Review your resume deep-dives using the "My Resume" tab. Re-read the SDE or ML/Data Eng defense sheets. Have your template notebook open. Test your mic, camera, and screen share.</p>
          </div>
          <div class="guide-item">
            <strong>During DSA Round</strong>
            <p>Clarify constraints FIRST. Think out loud. Start with brute force, then optimize. Trace through an example before coding. Handle edge cases. Analyze time/space complexity.</p>
          </div>
          <div class="guide-item">
            <strong>During Tech/System Design & ML Rounds</strong>
            <p>Use the STAR method for experience questions. For SDE: requirements → API → architecture → scaling. For ML: problem formulation → data & baseline → model architecture → metrics & evaluation trade-offs.</p>
          </div>
          <div class="guide-item">
            <strong>Behavioral Tips</strong>
            <p>"Tell me about yourself" — 90-second pitch max. Lead with your strongest project matching the applied role (SDE or ML/Data Eng). Every answer should have: situation, action, metric/result.</p>
          </div>
        </div>
      </div>

      <div class="tip-card wide skillset">
        <h3>🛠️ Dual-Track Skillsets for Aman Verma</h3>
        <div class="skill-cols">
          <div>
            <h4>⚡ SDE & Systems Track</h4>
            <ul>
              <li>High-concurrency Node.js & Socket.IO</li>
              <li>PHP & MongoDB Atlas multi-tenant SaaS</li>
              <li>Offline-first Flutter mobile apps</li>
              <li>PostgreSQL time-series & relational schema</li>
              <li>Minimax with alpha-beta game tree search</li>
            </ul>
          </div>
          <div>
            <h4>🤖 ML & Data Engineering Track</h4>
            <ul>
              <li>PyTorch transfer learning (ResNet-50) & Git LFS</li>
              <li>Custom spaCy NER & hybrid quantity parsing</li>
              <li>Gemini 2.5 Flash prompt-chaining state machine</li>
              <li>RAG Multi-Agent retrieval (LangChain & CrewAI)</li>
              <li>Edge CV detection (YOLOv5) & telemetry ETL</li>
            </ul>
          </div>
          <div>
            <h4>🎯 Problem Solving & Core CS</h4>
            <ul>
              <li>LeetCode Knight (Peak Rating: 2094)</li>
              <li>1000+ DSA problems solved across platforms</li>
              <li>250-day continuous algorithmic coding streak</li>
              <li>OS, DBMS, Networks, OOP & System Design</li>
            </ul>
          </div>
          <div>
            <h4>🏆 Hackathon Honors & Impact</h4>
            <ul>
              <li>1st Place BitBox 5.0 (Google Developer Groups)</li>
              <li>Finalist Innovate 3.0 Hackathon (Drive-Sure)</li>
              <li>Letter of Appreciation (JIIT, 8.6 CGPA)</li>
              <li>Udemy Bootcamps in ML, Deep Learning & GenAI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderResumeView() {
  const currentRoleData = activeResumeRole === 'sde' 
    ? resumeData.roles.sde 
    : activeResumeRole === 'mldataeng' 
    ? resumeData.roles.mldataeng 
    : null;

  // Filter projects based on active role
  const displayedProjects = activeResumeRole === 'sde'
    ? resumeData.projects.filter(p => p.id === 'chessify' || p.id === 'studysync' || p.id === 'sahyatri-sde')
    : activeResumeRole === 'mldataeng'
    ? resumeData.projects.filter(p => p.id === 'nutrivision' || p.id === 'recrutai' || p.id === 'sahyatri-ml')
    : resumeData.projects;

  const shownProjects = ix.filterProjectsByTech(displayedProjects, activeTechTag);

  return `
  <div class="fade-in resume-container">
    ${renderBackButton()}
    
    <div class="resume-header">
      <div class="resume-profile-top">
        <h1 class="resume-title">${resumeData.name}</h1>
        <div class="resume-meta-chips">
          <span class="meta-chip">📍 ${resumeData.location}</span>
          <span class="meta-chip">🎓 JIIT B.Tech ECE (${resumeData.education.cgpa}) · 2023–2027</span>
          <a href="${resumeData.linkedin}" target="_blank" rel="noopener noreferrer" class="meta-chip link">🔗 LinkedIn</a>
          <a href="${resumeData.github}" target="_blank" rel="noopener noreferrer" class="meta-chip link">💻 GitHub</a>
          <a href="${resumeData.website}" target="_blank" rel="noopener noreferrer" class="meta-chip link">🌐 Portfolio</a>
        </div>
      </div>
      <p class="resume-subtitle">
        ${currentRoleData ? currentRoleData.subtitle : 'Dual-Specialization: Software Development Engineer & Machine Learning / Data Engineering'}
      </p>

      <!-- Role Switcher Tabs -->
      <div class="resume-role-selector-wrap">
        <div class="resume-role-selector">
          <button class="resume-role-tab ${activeResumeRole === 'all' ? 'active' : ''}" data-role="all">
            <span class="role-icon">🌐</span>
            <span>All / Unified Portfolio</span>
          </button>
          <button class="resume-role-tab ${activeResumeRole === 'sde' ? 'active' : ''}" data-role="sde">
            <span class="role-icon">⚡</span>
            <span>Software Development Engineer (SDE)</span>
          </button>
          <button class="resume-role-tab ${activeResumeRole === 'mldataeng' ? 'active' : ''}" data-role="mldataeng">
            <span class="role-icon">🤖</span>
            <span>ML & Data Engineering</span>
          </button>
        </div>
      </div>

      <div class="ats-copy-row">
        <button class="ats-copy-btn" data-ats="sde">📋 Copy SDE bullets for job app</button>
        <button class="ats-copy-btn" data-ats="mldataeng">📋 Copy ML/DE bullets for job app</button>
      </div>

      <!-- Quick Launch Defense Action Banners -->
      <div class="defense-banner-grid">
        <div class="defense-banner sde-banner">
          <div class="db-left">
            <span class="db-icon">🛡️</span>
            <div>
              <div class="db-title">SDE Resume Interview Defense</div>
              <div class="db-desc">Spoken 20-40s answers, real code checks, concurrency & system design defenses.</div>
            </div>
          </div>
          <div class="db-actions">
            <button class="resume-action-btn primary" data-jump-roadmap="sde-defense" data-jump-hash="#alert">
              Open SDE Defense Guide
            </button>
            <a href="/AmanVerma-SDE-Interview-Defense.html" target="_blank" rel="noopener noreferrer" class="defense-ext-link" title="Open full HTML document in new tab">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              View Doc
            </a>
          </div>
        </div>

        <div class="defense-banner ml-banner">
          <div class="db-left">
            <span class="db-icon">🤖</span>
            <div>
              <div class="db-title">ML & Data Eng Interview Defense</div>
              <div class="db-desc">Model baselines, spaCy NER, ResNet-50, Gemini state machine & SQL rounds.</div>
            </div>
          </div>
          <div class="db-actions">
            <button class="resume-action-btn primary ml" data-jump-roadmap="ml-dataeng-defense" data-jump-hash="#alert">
              Open ML/DE Defense Guide
            </button>
            <a href="/AmanVerma-ML-DataEng-Interview-Defense.html" target="_blank" rel="noopener noreferrer" class="defense-ext-link ml" title="Open full HTML document in new tab">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              View Doc
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Technical Skills Section -->
    <div class="resume-section-card">
      <div class="resume-section-head-wrap">
        <h2 class="resume-section-title">
          ${activeResumeRole === 'sde' ? 'SDE Technical Skills' : activeResumeRole === 'mldataeng' ? 'ML & Data Engineering Skills' : 'Technical Skills & Core Stack'}
        </h2>
        <span class="section-badge">${activeResumeRole === 'sde' ? 'SDE Focused' : activeResumeRole === 'mldataeng' ? 'ML/DE Focused' : 'Master Overview'}</span>
      </div>

      ${activeResumeRole === 'sde' ? `
        <div class="resume-skills-grid">
          <div class="resume-skill-cat">
            <h4>Languages</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.sde.skills.languages.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Backend & APIs</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.sde.skills.backend.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Frontend & Mobile</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.sde.skills.frontendMobile.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Databases & Cloud</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.sde.skills.databasesCloud.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Core Computer Science</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.sde.skills.coreCS.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>AI/ML Stack</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.sde.skills.aiml.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      ` : activeResumeRole === 'mldataeng' ? `
        <div class="resume-skills-grid">
          <div class="resume-skill-cat">
            <h4>Languages & Querying</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.mldataeng.skills.languages.map(s => `<span class="resume-skill-pill ml">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>ML & Deep Learning</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.mldataeng.skills.mlDeepLearning.map(s => `<span class="resume-skill-pill ml">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>NLP, Vision & LLM Systems</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.mldataeng.skills.nlpVisionLLM.map(s => `<span class="resume-skill-pill ml">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Data Engineering & Backend</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.mldataeng.skills.dataEngBackend.map(s => `<span class="resume-skill-pill ml">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Tools & Core CS</h4>
            <div class="resume-skills-list">
              ${resumeData.roles.mldataeng.skills.toolsCoreCS.map(s => `<span class="resume-skill-pill ml">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      ` : `
        <div class="resume-skills-grid">
          <div class="resume-skill-cat">
            <h4>Languages & Querying</h4>
            <div class="resume-skills-list">
              ${resumeData.skills.languages.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Core Computer Science</h4>
            <div class="resume-skills-list">
              ${resumeData.skills.coreCS.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>ML & Deep Learning</h4>
            <div class="resume-skills-list">
              ${resumeData.skills.mlDeepLearning.map(s => `<span class="resume-skill-pill ml">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>NLP, Vision & LLM Systems</h4>
            <div class="resume-skills-list">
              ${resumeData.skills.nlpVisionLLM.map(s => `<span class="resume-skill-pill ml">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Backend & Data Engineering</h4>
            <div class="resume-skills-list">
              ${resumeData.skills.backendDataEng.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Frontend & Mobile</h4>
            <div class="resume-skills-list">
              ${resumeData.skills.frontendMobile.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
          <div class="resume-skill-cat">
            <h4>Databases, Cloud & DevOps</h4>
            <div class="resume-skills-list">
              ${resumeData.skills.cloudDevOpsTools.map(s => `<span class="resume-skill-pill">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `}
    </div>

    <!-- Work Experience Section -->
    <div class="resume-section-card">
      <h2 class="resume-section-title">Work Experience</h2>
      ${resumeData.experience.map(exp => `
        <div class="resume-experience-item">
          <div class="resume-exp-dot"></div>
          <div class="resume-exp-header">
            <div>
              <div class="resume-exp-company">${exp.company}</div>
              <div class="resume-exp-role">${exp.role} · ${exp.location}</div>
            </div>
            <div class="resume-exp-period">${exp.period}</div>
          </div>
          <ul class="resume-points">
            ${exp.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
          <div class="resume-btn-group">
            ${exp.defenseJumps.map(j => `
              <button class="resume-action-btn" data-jump-roadmap="${j.roadmap}" data-jump-hash="${j.hash}">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                ${j.label}
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Projects Section -->
    <div class="resume-section-card">
      <div class="resume-section-head-wrap">
        <h2 class="resume-section-title">Academic & Technical Projects</h2>
        <span class="section-badge">${displayedProjects.length} Projects Displayed</span>
      </div>
      <div class="resume-projects-grid">
        ${displayedProjects.map(proj => `
          <div class="resume-project-card">
            <div class="resume-proj-header">
              <div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="resume-proj-title">${proj.title}</span>
                  <span class="proj-role-badge ${proj.roleTag.includes('ML') || proj.roleTag.includes('LLM') ? 'ml' : 'sde'}">${proj.roleTag}</span>
                </div>
                <div class="resume-proj-subtitle">${proj.subtitle}</div>
              </div>
            </div>
            <div class="resume-proj-tech">${proj.tech}</div>
            <ul class="resume-points">
              ${proj.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
            <div class="resume-btn-group">
              ${proj.defenseJumps.map(j => `
                <button class="resume-action-btn" data-jump-roadmap="${j.roadmap}" data-jump-hash="${j.hash}">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  ${j.label}
                </button>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Achievements Section -->
    <div class="resume-section-card">
      <h2 class="resume-section-title">Achievements, Honors & Certifications</h2>
      <ul class="resume-achievements-list">
        ${resumeData.achievements.map(ach => `
          <li class="${ach.type}">
            <div class="ach-row">
              <div>
                <strong>${ach.title}:</strong> ${ach.desc}
              </div>
              <button class="ach-jump-btn" data-jump-roadmap="${ach.jump.roadmap}" data-jump-hash="${ach.jump.hash}">
                ${ach.badge} →
              </button>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  </div>`;
}

function attachEvents() {
  // ---------------------------------------------------------------- Task A1
  document.querySelectorAll('.track-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      store.setActiveTrack(btn.dataset.track);
      drillRevealed = false;
      renderApp();
    });
  });

  // ------------------------------------------------------- Task A2 / A3 jump
  document.querySelectorAll('[data-next-roadmap]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateToWithHash('roadmap', btn.dataset.nextRoadmap, btn.dataset.nextHash || '');
    });
  });

  // ---------------------------------------------------------------- Task A3
  document.getElementById('drillReveal')?.addEventListener('click', () => {
    drillRevealed = !drillRevealed;
    renderApp();
  });
  document.getElementById('drillNext')?.addEventListener('click', () => {
    store.setDrillIndex(store.getDrillIndex() + 1);
    drillRevealed = false;
    renderApp();
  });

  // ---------------------------------------------------------------- Task B1
  document.querySelectorAll('[data-rehearse]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.rehearse;
      openRehearsal = openRehearsal?.projId === id ? null : { projId: id, tab: 'opener' };
      renderApp();
    });
  });
  document.querySelectorAll('[data-rehearse-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      openRehearsal = { projId: btn.dataset.proj, tab: btn.dataset.rehearseTab };
      renderApp();
    });
  });
  document.querySelectorAll('[data-copy-text]').forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copyText);
        ix.toast('Opener copied to clipboard');
      } catch { ix.toast('Copy failed — select and copy manually'); }
    });
  });

  // ---------------------------------------------------------------- Task B2
  document.querySelectorAll('[data-tech]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTechTag = btn.dataset.tech || '';
      renderApp();
    });
  });

  // ---------------------------------------------------------------- Task B3
  document.querySelectorAll('[data-ats]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = ix.buildAtsBullets(btn.dataset.ats === 'sde' ? 'sde' : 'ml', resumeData);
      try {
        await navigator.clipboard.writeText(text);
        ix.toast('ATS bullets copied — paste straight into the application');
      } catch { ix.toast('Copy failed — clipboard blocked by the browser'); }
    });
  });

  // ------------------------------------------------------------ Task C1 / C2
  ix.attachStarTimer();
  ix.attachCalculators();

  // ---------------------------------------------------------------- Task C3
  document.querySelectorAll('.milestone-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      store.toggleStrategyMilestone(cb.dataset.mid);
      if (hasFirebaseConfig()) syncProgress(store.getState());
      renderApp();
    });
  });

  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', () => {
      const view = el.dataset.view;
      const roadmap = el.dataset.roadmap;
      navigateTo(view, roadmap);
      document.getElementById('sidebar')?.classList.remove('open');
    });
  });

  document.getElementById('backBtn')?.addEventListener('click', goBack);

  // Resume role switcher tabs event handler
  document.querySelectorAll('.resume-role-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeResumeRole = tab.dataset.role;
      renderApp();
    });
  });

  // Jump from resume directly to deep dive notes or defense guides and auto-scroll
  document.querySelectorAll('[data-jump-roadmap]').forEach(btn => {
    btn.addEventListener('click', () => {
      const rmId = btn.dataset.jumpRoadmap;
      const hash = btn.dataset.jumpHash;
      navigateToWithHash('roadmap', rmId, hash);
    });
  });

  // Checklist topic checkbox toggle
  document.querySelectorAll('.topic-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      store.toggleComplete(cb.dataset.tid);
      store.recordStudyDay();
      if (hasFirebaseConfig()) syncProgress(store.getState());
      renderApp();
    });
  });

  // Fullscreen reading mode toggle
  document.getElementById('fullscreenReadBtn')?.addEventListener('click', toggleFullscreenReading);
  document.getElementById('fullscreenExitFab')?.addEventListener('click', toggleFullscreenReading);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFullscreenReading) {
      toggleFullscreenReading();
    }
  });

  // Mobile tabs switching event handlers
  document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.target === 'fullscreen') {
        toggleFullscreenReading();
        return;
      }
      document.querySelectorAll('.mobile-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const pane = document.querySelector('.roadmap-split-pane');
      if (pane) {
        if (btn.dataset.target === 'notes') {
          pane.classList.remove('show-checklist');
          pane.classList.add('show-notes');
        } else {
          pane.classList.remove('show-notes');
          pane.classList.add('show-checklist');
        }
      }
    });
  });

  // Accordion toggle expand/collapse for checklist topic rows
  document.querySelectorAll('.checklist-topic-row').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.custom-checkbox') || e.target.closest('.checklist-jump-btn') || e.target.closest('.checklist-note-input')) {
        return;
      }
      row.classList.toggle('expanded');
    });
  });

  // Scroll iframe to target section (and switch tabs to notes on mobile)
  document.querySelectorAll('.checklist-jump-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const hash = btn.dataset.hash;
      const frame = document.getElementById('notesFrame');
      if (frame && frame.contentWindow) {
        try {
          frame.contentWindow.location.hash = hash;
        } catch (err) {
          frame.src = frame.src.split('#')[0] + hash;
        }
      }
      
      const notesTab = document.querySelector('.mobile-tab-btn[data-target="notes"]');
      if (notesTab && !notesTab.classList.contains('active')) {
        notesTab.click();
      }
    });
  });

  // Save notes to localStorage & sync when content is altered
  document.querySelectorAll('.checklist-note-input').forEach(textarea => {
    textarea.addEventListener('change', () => {
      store.setNote(textarea.dataset.tid, textarea.value);
      if (hasFirebaseConfig()) syncProgress(store.getState());
    });
  });

  // Setup iframe load listener for auto-scrolling on deep dive transition
  const frame = document.getElementById('notesFrame');
  if (frame) {
    frame.addEventListener('load', () => {
      if (targetHashOnLoad) {
        setTimeout(() => {
          try {
            frame.contentWindow.location.hash = targetHashOnLoad;
          } catch (e) {
            frame.src = frame.src.split('#')[0] + targetHashOnLoad;
          }
          targetHashOnLoad = null;
        }, 150);
      }
    });
  }

  // Dashboard roadmap cards click
  document.querySelectorAll('.rm-card').forEach(card => {
    card.addEventListener('click', () => {
      navigateTo('roadmap', card.dataset.roadmap);
    });
  });

  // Tasks (Todos) functionality
  const todoInput = document.getElementById('todoInput');
  if (todoInput) {
    todoInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && todoInput.value.trim()) {
        store.addTodo(todoInput.value.trim());
        if (hasFirebaseConfig()) syncProgress(store.getState());
        renderApp();
      }
    });
  }

  document.querySelectorAll('.todo-cb').forEach(cb => {
    cb.addEventListener('change', () => { 
      store.toggleTodo(Number(cb.dataset.todo)); 
      if (hasFirebaseConfig()) syncProgress(store.getState()); 
      renderApp(); 
    });
  });

  document.querySelectorAll('.todo-del').forEach(btn => {
    btn.addEventListener('click', () => { 
      store.deleteTodo(Number(btn.dataset.del)); 
      if (hasFirebaseConfig()) syncProgress(store.getState()); 
      renderApp(); 
    });
  });

  document.getElementById('mobileToggle')?.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.toggle('open');
  });

  document.getElementById('cloudSyncBtn')?.addEventListener('click', () => {
    if (!hasFirebaseConfig()) {
      const configStr = prompt('Paste your Firebase config JSON:\n(Firebase Console > Project Settings > Your Apps > Config)');
      if (configStr) {
        try {
          const cfg = JSON.parse(configStr);
          setFirebaseConfig(cfg);
          alert('✅ Firebase Connected! Progress syncs automatically across devices now.');
          syncProgress(store.getState());
          renderApp();
        } catch(e) { alert('Invalid JSON. Please try again.'); }
      }
    } else {
      syncProgress(store.getState());
      alert('✅ Progress synced to Firebase.');
    }
  });
}

if (hasFirebaseConfig()) {
  pullProgress().then(data => {
    if (data) { store.save(data); renderApp(); }
  });
}

renderApp();

