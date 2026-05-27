import { roadmaps } from './data.js';
import * as store from './store.js';
import { syncProgress, setFirebaseConfig, hasFirebaseConfig } from './sync.js';
import './style.css';

let currentView = 'dashboard';
let currentRoadmap = null;
let searchQuery = '';
let expandedTopics = new Set();

function topicId(rmId, phase, topicName) {
  return `${rmId}::${phase}::${topicName}`;
}

function getTotalTopics() {
  let n = 0;
  roadmaps.forEach(r => r.phases.forEach(p => n += p.topics.length));
  return n;
}

function getRoadmapStats(rm) {
  let total = 0, done = 0;
  rm.phases.forEach(p => p.topics.forEach(t => {
    total++;
    if (store.isCompleted(topicId(rm.id, p.title, t.name))) done++;
  }));
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderSidebar()}
    <main class="main-content">
      ${currentView === 'dashboard' ? renderDashboard() : ''}
      ${currentView === 'roadmap' ? renderRoadmapView() : ''}
      ${currentView === 'todos' ? renderTodosView() : ''}
    </main>
  `;
  attachEvents();
}

function renderSidebar() {
  return `
  <nav class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <div class="brand-text">SDE Prep.</div>
      <div class="brand-sub">minimalist tracker</div>
    </div>
    <div class="sidebar-nav">
      <button class="nav-btn ${currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
        Overview
      </button>
      <button class="nav-btn ${currentView === 'todos' ? 'active' : ''}" data-view="todos">
        <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        Tasks
      </button>
      <div class="nav-divider"></div>
      <div class="nav-label">PATHS</div>
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
        Cloud Sync
      </button>
    </div>
  </nav>
  <button class="mobile-toggle" id="mobileToggle">
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
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
      <h1>Hello, let's learn.</h1>
      <p class="page-sub">Your progress at a glance.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-meta"><span class="stat-label">Progress</span><span class="stat-value">${pct}%</span></div>
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
        <div class="stat-sub">days learning continuously</div>
      </div>
      <div class="stat-card minimal">
        <div class="stat-meta"><span class="stat-label">Pending Tasks</span><span class="stat-value">${pendingTodos}</span></div>
        <div class="stat-sub">items in your to-do list</div>
      </div>
    </div>

    <div class="dash-section">
      <h2 class="section-title">Your Paths</h2>
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
      <h2 class="section-title">Consistency Heatmap</h2>
      <div class="heatmap" id="heatmap">${renderHeatmap()}</div>
    </div>
  </div>`;
}

function renderHeatmap() {
  const completed = store.getCompletedMap();
  let cells = '';
  const today = new Date();
  for (let i = 119; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
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

  return `
  <div class="fade-in">
    <div class="page-header roadmap-header">
      <div class="header-content">
        <h1>${rm.title}</h1>
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

    <div class="phases-list">
      ${rm.phases.map(phase => {
        const filtered = searchQuery ? phase.topics.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase())) : phase.topics;
        if (searchQuery && !filtered.length) return '';
        const phaseDone = filtered.filter(t => store.isCompleted(topicId(rm.id, phase.title, t.name))).length;
        
        return `
        <div class="phase-block">
          <div class="phase-header">
            <h3 class="phase-title">${phase.title}</h3>
            <span class="phase-meta">${phaseDone}/${filtered.length}</span>
          </div>
          <div class="topic-list">
            ${filtered.map(t => {
              const tid = topicId(rm.id, phase.title, t.name);
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
                    ${t.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="resource-link">${l.text}</a>`).join('')}
                  </div>
                  ` : ''}
                  <div class="topic-notes">
                    <textarea class="note-input" data-tid="${tid}" placeholder="Add private notes here...">${store.getNote(tid)}</textarea>
                  </div>
                </div>
                ` : ''}
              </div>`;
            }).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderTodosView() {
  const todos = store.getTodos();
  const pending = todos.filter(t => !t.done);
  const completed = todos.filter(t => t.done);

  return `
  <div class="fade-in">
    <div class="page-header">
      <h1>Tasks</h1>
      <p class="page-sub">What needs your focus today?</p>
    </div>
    
    <div class="todo-input-wrap">
      <input type="text" id="todoInput" placeholder="Press Enter to add task..." class="todo-input">
    </div>

    <div class="todo-lists">
      <div class="todo-group">
        <h3 class="todo-group-title">Pending (${pending.length})</h3>
        ${pending.length === 0 ? '<p class="empty-msg">You are all caught up.</p>' : 
          pending.map(t => renderTodoItem(t)).join('')}
      </div>
      
      ${completed.length > 0 ? `
      <div class="todo-group">
        <h3 class="todo-group-title">Completed</h3>
        ${completed.map(t => renderTodoItem(t)).join('')}
      </div>
      ` : ''}
    </div>
  </div>`;
}

function renderTodoItem(t) {
  return `
  <div class="todo-item ${t.done ? 'done' : ''}">
    <label class="custom-checkbox">
      <input type="checkbox" class="todo-cb" data-todo="${t.id}" ${t.done ? 'checked' : ''}>
      <span class="checkmark"></span>
    </label>
    <span class="todo-text">${t.text}</span>
    <button class="todo-del" data-del="${t.id}">
      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>`;
}

function attachEvents() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentView = btn.dataset.view;
      if (btn.dataset.roadmap) currentRoadmap = btn.dataset.roadmap;
      searchQuery = '';
      renderApp();
    });
  });

  document.querySelectorAll('.rm-card[data-roadmap]').forEach(c => {
    c.addEventListener('click', () => {
      currentView = 'roadmap';
      currentRoadmap = c.dataset.roadmap;
      renderApp();
    });
  });

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
      const configStr = prompt('To enable Cloud Sync, paste your Firebase config JSON object here:\n(Get this from Firebase Console > Project Settings)');
      if (configStr) {
        try {
          const cfg = JSON.parse(configStr);
          setFirebaseConfig(cfg);
          alert('Firebase Configured! Progress will now sync automatically.');
          syncProgress(store.getState());
        } catch(e) {
          alert('Invalid JSON. Please try again.');
        }
      }
    } else {
      syncProgress(store.getState());
      alert('Progress Synced securely to your Firebase database.');
    }
  });
}

// Initial pull if configured
if (hasFirebaseConfig()) {
  import('./sync.js').then(({ pullProgress }) => {
    pullProgress().then(data => {
      if (data) {
        store.save(data);
        renderApp();
      }
    });
  });
}

renderApp();
