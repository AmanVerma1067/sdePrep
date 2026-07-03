import { roadmaps as rawRoadmaps } from './data.js';
import { dsaRoadmap } from './dsa-data.js';
import { resumeRoadmap } from './resume-data.js';
import { addSubjectsToCSCore } from './restructure.js';
import * as store from './store.js';
import { syncProgress, setFirebaseConfig, hasFirebaseConfig } from './sync.js';
import './style.css';

// Restructure data: add subject groups + DSA + Resume Mastery
const roadmaps = addSubjectsToCSCore([...rawRoadmaps, dsaRoadmap, resumeRoadmap]);

let currentView = 'dashboard';
let currentRoadmap = null;
let previousView = null;
let previousRoadmap = null;
let searchQuery = '';
let expandedTopics = new Set();

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
  searchQuery = '';
  renderApp();
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
  searchQuery = '';
  renderApp();
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderSidebar()}
    <main class="main-content">
      ${currentView === 'dashboard' ? renderDashboard() : ''}
      ${currentView === 'roadmap' ? renderRoadmapView() : ''}
      ${currentView === 'todos' ? renderTodosView() : ''}
      ${currentView === 'tips' ? renderTipsView() : ''}
    </main>
  `;
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
          <span class="nav-icon-emoji">${r.icon}</span> ${r.title}
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
  const total = getTotalTopics();
  const done = store.getCompletedCount();
  const pct = total ? Math.round(done / total * 100) : 0;
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

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-meta"><span class="stat-label">Overall Progress</span><span class="stat-value">${pct}%</span></div>
        <div class="stat-bar-wrap"><div class="stat-bar" style="width:${pct}%;background:var(--accent)"></div></div>
        <div class="stat-sub">${done} of ${total} topics completed</div>
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
      <h2 class="section-title">Learning Paths</h2>
      <div class="roadmap-cards">
        ${roadmaps.map(r => {
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
  const subjects = rm.subjects || [{ name: rm.title, phases: rm.phases }];

  return `
  <div class="fade-in">
    ${renderBackButton()}
    <div class="page-header roadmap-header">
      <div class="header-content">
        <h1>${rm.icon} ${rm.title}</h1>
        <p class="page-sub">${stats.done} / ${stats.total} topics mastered</p>
      </div>
      <div class="header-progress">
        <div class="hp-val" style="color:${rm.accent}">${stats.pct}%</div>
      </div>
    </div>

    <div class="search-box">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" placeholder="Search topics..." id="searchInput" value="${searchQuery}" class="search-input">
    </div>

    ${subjects.map(subject => {
      let subjectTotal = 0, subjectDone = 0;
      subject.phases.forEach(p => p.topics.forEach(t => {
        subjectTotal++;
        if (store.isCompleted(topicId(rm.id, p.title, t.name))) subjectDone++;
      }));
      const subPct = subjectTotal ? Math.round(subjectDone / subjectTotal * 100) : 0;
      
      const phasesHtml = subject.phases.map(phase => {
        const filtered = searchQuery ? phase.topics.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()) || (t.desc && t.desc.toLowerCase().includes(searchQuery.toLowerCase()))) : phase.topics;
        if (searchQuery && !filtered.length) return '';
        const phaseDone = filtered.filter(t => store.isCompleted(topicId(rm.id, phase.title, t.name))).length;
        
        return `
        <div class="phase-block">
          <div class="phase-header">
            <h3 class="phase-title">${phase.title}</h3>
            <span class="phase-meta">${phaseDone}/${filtered.length}</span>
          </div>
          <div class="topic-list">
            ${filtered.map(t => renderTopicCard(rm.id, phase.title, t)).join('')}
          </div>
        </div>`;
      }).join('');
      
      if (searchQuery && !phasesHtml.replace(/\s/g,'')) return '';

      return `
      <div class="subject-group">
        <div class="subject-header">
          <h2 class="subject-name">${subject.name}</h2>
          <div class="subject-progress">
            <span class="subject-pct">${subjectDone}/${subjectTotal}</span>
            <div class="subject-bar-wrap"><div class="subject-bar" style="width:${subPct}%;background:${rm.accent}"></div></div>
          </div>
        </div>
        <div class="phases-list">${phasesHtml}</div>
      </div>`;
    }).join('')}
  </div>`;
}

function renderTopicCard(rmId, phaseTitle, t) {
  const tid = topicId(rmId, phaseTitle, t.name);
  const checked = store.isCompleted(tid);
  const isExpanded = expandedTopics.has(tid);
  
  return `
  <div class="topic-card ${checked ? 'completed' : ''} ${isExpanded ? 'expanded' : ''}">
    <div class="topic-card-head" data-expand="${tid}">
      <label class="custom-checkbox" onclick="event.stopPropagation()">
        <input type="checkbox" class="topic-cb" data-tid="${tid}" ${checked ? 'checked' : ''}>
        <span class="checkmark"></span>
      </label>
      <span class="topic-name">${t.name}</span>
      <div class="topic-chevron">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
    ${isExpanded ? `
    <div class="topic-card-body">
      ${t.desc ? `<p class="topic-desc">${t.desc}</p>` : ''}
      ${t.links && t.links.length ? `
      <div class="topic-links">
        ${t.links.map(l => {
          const isYT = l.url && l.url.includes('youtube.com');
          return `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="resource-link ${isYT ? 'yt' : 'doc'}">${l.text}</a>`;
        }).join('')}
      </div>` : ''}
      <div class="topic-notes">
        <textarea class="note-input" data-tid="${tid}" placeholder="Your notes...">${store.getNote(tid)}</textarea>
      </div>
    </div>` : ''}
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
  <div class="fade-in">
    ${renderBackButton()}
    <div class="page-header"><h1>Strategy & Interview Tips</h1><p class="page-sub">The meta-game for cracking SDE interviews this summer.</p></div>

    <div class="tips-grid">
      <div class="tip-card priority">
        <h3>🎯 Priority Order for Topics</h3>
        <ol class="priority-list">
          <li><strong>Dynamic Programming</strong> — decides most outcomes</li>
          <li><strong>Trees + BST</strong> — THE most asked interview topic</li>
          <li><strong>Graphs</strong> — everywhere in OAs now</li>
          <li><strong>Recursion + Backtracking</strong> — foundation for DP/Graphs</li>
          <li><strong>Stack + Queue</strong> — extremely frequent</li>
          <li><strong>Greedy</strong> — common in OAs</li>
          <li><strong>Heaps</strong> — top-k patterns</li>
          <li><strong>Bit Manipulation</strong> — OA favorite</li>
          <li><strong>Tries</strong> — moderate frequency</li>
        </ol>
      </div>

      <div class="tip-card">
        <h3>⏰ Ideal Daily Routine</h3>
        <div class="routine-block">
          <div class="routine-row"><span class="routine-time">Morning 2-3h</span><span>New topic learning + theory</span></div>
          <div class="routine-row"><span class="routine-time">Afternoon 2-3h</span><span>Problem solving (timed)</span></div>
          <div class="routine-row"><span class="routine-time">Evening 2h</span><span>Revision + retry failed problems</span></div>
        </div>
        <p class="tip-note">Target 6-8 focused hours/day. Not "studying all day".</p>
      </div>

      <div class="tip-card">
        <h3>📊 Problem Targets (2 Months)</h3>
        <div class="target-grid">
          <div class="target-row"><span>Recursion</span><span class="target-num">25</span></div>
          <div class="target-row"><span>Stack/Queue</span><span class="target-num">25</span></div>
          <div class="target-row"><span>Trees</span><span class="target-num">40</span></div>
          <div class="target-row"><span>Graphs</span><span class="target-num">45</span></div>
          <div class="target-row"><span>DP</span><span class="target-num">50</span></div>
          <div class="target-row"><span>Others</span><span class="target-num">40</span></div>
          <div class="target-row total"><span>Total</span><span class="target-num">~225</span></div>
        </div>
      </div>

      <div class="tip-card">
        <h3>🚫 What NOT To Do</h3>
        <ul class="dont-list">
          <li>Chase hard problems — master mediums instead</li>
          <li>Jump randomly between topics</li>
          <li>Compare yourself to CP experts</li>
          <li>Spend 3 days on one DP hard problem</li>
          <li>Watch too many videos in Phase 2 — solve more, think more</li>
        </ul>
      </div>

      <div class="tip-card wide">
        <h3>📓 Three Notebooks You MUST Maintain</h3>
        <div class="notebook-grid">
          <div class="notebook-item"><strong>Mistake Notebook</strong><p>Every wrong approach, why it failed, what the correct intuition was.</p></div>
          <div class="notebook-item"><strong>Pattern Notebook</strong><p>Sliding window, binary search on answer, monotonic stack, take/not-take DP, etc.</p></div>
          <div class="notebook-item"><strong>Template Notebook</strong><p>BFS/DFS template, Dijkstra's, DSU, segment tree, trie — ready-to-paste code.</p></div>
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
        </div>
      </div>

      <div class="tip-card wide skillset">
        <h3>🛠️ Required Skillset for SDE Interviews</h3>
        <div class="skill-cols">
          <div>
            <h4>DSA & Problem Solving</h4>
            <ul><li>Medium-level LeetCode fluency</li><li>Pattern recognition under time pressure</li><li>Clean code with proper edge cases</li><li>Time/space complexity analysis</li></ul>
          </div>
          <div>
            <h4>CS Fundamentals</h4>
            <ul><li>OS: processes, threads, scheduling, memory</li><li>DBMS: SQL, normalization, transactions</li><li>Networks: TCP/IP, HTTP, DNS, TLS</li><li>OOP: SOLID, design patterns, polymorphism</li></ul>
          </div>
          <div>
            <h4>System Design (Basics)</h4>
            <ul><li>Client-server architecture</li><li>Database choice (SQL vs NoSQL)</li><li>Caching, load balancing concepts</li><li>REST API design</li></ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function attachEvents() {
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', () => {
      const view = el.dataset.view;
      const roadmap = el.dataset.roadmap;
      navigateTo(view, roadmap);
      document.getElementById('sidebar')?.classList.remove('open');
    });
  });

  document.getElementById('backBtn')?.addEventListener('click', goBack);

  document.querySelectorAll('.topic-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      store.toggleComplete(cb.dataset.tid);
      store.recordStudyDay();
      if (hasFirebaseConfig()) syncProgress(store.getState());
      renderApp();
    });
  });

  document.querySelectorAll('.topic-card-head').forEach(head => {
    head.addEventListener('click', (e) => {
      if (e.target.tagName.toLowerCase() === 'input' || e.target.classList.contains('checkmark')) return;
      const tid = head.dataset.expand;
      if (expandedTopics.has(tid)) expandedTopics.delete(tid);
      else expandedTopics.add(tid);
      renderApp();
    });
  });

  document.querySelectorAll('.note-input').forEach(input => {
    input.addEventListener('change', () => {
      store.setNote(input.dataset.tid, input.value);
      if (hasFirebaseConfig()) syncProgress(store.getState());
    });
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderApp();
      document.getElementById('searchInput')?.focus();
    });
  }

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
    cb.addEventListener('change', () => { store.toggleTodo(Number(cb.dataset.todo)); if (hasFirebaseConfig()) syncProgress(store.getState()); renderApp(); });
  });
  document.querySelectorAll('.todo-del').forEach(btn => {
    btn.addEventListener('click', () => { store.deleteTodo(Number(btn.dataset.del)); if (hasFirebaseConfig()) syncProgress(store.getState()); renderApp(); });
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
  import('./sync.js').then(({ pullProgress }) => {
    pullProgress().then(data => {
      if (data) { store.save(data); renderApp(); }
    });
  });
}

renderApp();
