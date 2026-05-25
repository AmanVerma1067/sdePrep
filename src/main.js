import { roadmaps } from './data.js';
import * as store from './store.js';
import './style.css';

let currentView = 'dashboard';
let currentRoadmap = null;
let searchQuery = '';

function topicId(rmId, subj, phase, topic) {
  return `${rmId}::${subj}::${phase}::${topic}`;
}

function getTotalTopics() {
  let n = 0;
  roadmaps.forEach(r => r.subjects.forEach(s => s.phases.forEach(p => n += p.topics.length)));
  return n;
}

function getRoadmapStats(rm) {
  let total = 0, done = 0;
  rm.subjects.forEach(s => s.phases.forEach(p => p.topics.forEach(t => {
    total++;
    if (store.isCompleted(topicId(rm.id, s.name, p.title, t))) done++;
  })));
  return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
}

function getSubjectStats(rm, subj) {
  let total = 0, done = 0;
  subj.phases.forEach(p => p.topics.forEach(t => {
    total++;
    if (store.isCompleted(topicId(rm.id, subj.name, p.title, t))) done++;
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
      ${currentView === 'progress' ? renderProgressView() : ''}
    </main>
  `;
  attachEvents();
}

function renderSidebar() {
  return `
  <nav class="sidebar" id="sidebar">
    <div class="sidebar-brand">
      <div class="brand-icon">⚔️</div>
      <div class="brand-text">SDE Prep</div>
      <div class="brand-sub">Summer '26</div>
    </div>
    <div class="sidebar-nav">
      <button class="nav-btn ${currentView === 'dashboard' ? 'active' : ''}" data-view="dashboard">
        <span class="nav-icon">📊</span> Dashboard
      </button>
      <button class="nav-btn ${currentView === 'progress' ? 'active' : ''}" data-view="progress">
        <span class="nav-icon">🏆</span> Progress
      </button>
      <button class="nav-btn ${currentView === 'todos' ? 'active' : ''}" data-view="todos">
        <span class="nav-icon">✅</span> To-Do List
      </button>
      <div class="nav-divider"></div>
      <div class="nav-label">ROADMAPS</div>
      ${roadmaps.map(r => `
        <button class="nav-btn ${currentView === 'roadmap' && currentRoadmap === r.id ? 'active' : ''}" 
                data-view="roadmap" data-roadmap="${r.id}" style="--rm-accent:${r.accent}">
          <span class="nav-icon">${r.icon}</span> ${r.title}
          <span class="nav-pct">${getRoadmapStats(r).pct}%</span>
        </button>
      `).join('')}
    </div>
    <div class="sidebar-footer">
      <div class="streak-badge">🔥 ${store.getStreak()} day streak</div>
    </div>
  </nav>
  <button class="mobile-toggle" id="mobileToggle">☰</button>`;
}

function renderDashboard() {
  const total = getTotalTopics();
  const done = store.getCompletedCount();
  const pct = total ? Math.round(done / total * 100) : 0;
  const todayDone = store.getTodayCompleted();
  const dailyGoal = store.getDailyGoal();
  const streak = store.getStreak();
  const todos = store.getTodos();
  const pendingTodos = todos.filter(t => !t.done).length;

  return `
  <div class="page-header">
    <h1>Command Center</h1>
    <p class="page-sub">Your SDE interview prep at a glance</p>
  </div>

  <div class="stats-grid">
    <div class="stat-card glow-purple">
      <div class="stat-ring" style="--pct:${pct}; --clr:#7c6cf5">
        <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2.5"/>
        <circle cx="18" cy="18" r="16" fill="none" stroke="#7c6cf5" stroke-width="2.5" stroke-dasharray="${pct} 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
        <span class="ring-val">${pct}%</span>
      </div>
      <div><div class="stat-label">Overall Progress</div><div class="stat-value">${done}/${total} topics</div></div>
    </div>
    <div class="stat-card glow-orange">
      <div class="stat-big">🔥</div>
      <div><div class="stat-label">Current Streak</div><div class="stat-value">${streak} day${streak !== 1 ? 's' : ''}</div></div>
    </div>
    <div class="stat-card glow-green">
      <div class="stat-ring" style="--pct:${Math.min(100, Math.round(todayDone / dailyGoal * 100))}; --clr:#3db872">
        <svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2.5"/>
        <circle cx="18" cy="18" r="16" fill="none" stroke="#3db872" stroke-width="2.5" stroke-dasharray="${Math.min(100, Math.round(todayDone / dailyGoal * 100))} 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
        <span class="ring-val">${todayDone}</span>
      </div>
      <div><div class="stat-label">Today's Goal</div><div class="stat-value">${todayDone}/${dailyGoal} topics</div></div>
    </div>
    <div class="stat-card glow-blue">
      <div class="stat-big">📋</div>
      <div><div class="stat-label">Pending Tasks</div><div class="stat-value">${pendingTodos} remaining</div></div>
    </div>
  </div>

  <div class="dashboard-grid">
    <div class="dash-section">
      <h2>Roadmap Overview</h2>
      <div class="roadmap-cards">
        ${roadmaps.map(r => {
          const s = getRoadmapStats(r);
          return `
          <div class="rm-card" data-view="roadmap" data-roadmap="${r.id}" style="--rm-accent:${r.accent}">
            <div class="rm-card-head">
              <span class="rm-icon">${r.icon}</span>
              <span class="rm-title">${r.title}</span>
            </div>
            <div class="rm-bar-wrap"><div class="rm-bar" style="width:${s.pct}%;background:${r.accent}"></div></div>
            <div class="rm-meta">${s.done}/${s.total} completed · ${s.pct}%</div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="dash-section">
      <h2>Heatmap — Last 12 Weeks</h2>
      <div class="heatmap" id="heatmap">${renderHeatmap()}</div>
    </div>

    <div class="dash-section">
      <h2>Quick Settings</h2>
      <div class="settings-row">
        <label>Daily topic goal:</label>
        <input type="number" min="1" max="30" value="${dailyGoal}" id="dailyGoalInput" class="input-small">
      </div>
      <div class="settings-row" style="margin-top:12px;">
        <button class="btn-sm" id="exportBtn">💾 Export Progress</button>
        <button class="btn-sm" id="importBtn">📂 Import Progress</button>
        <input type="file" id="importFile" accept=".json" style="display:none">
      </div>
    </div>
  </div>`;
}

function renderHeatmap() {
  const dates = store.getStreakDates();
  const completed = store.getCompletedMap();
  let cells = '';
  const today = new Date();
  for (let i = 83; i >= 0; i--) {
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
  if (!rm) return '<p>Select a roadmap</p>';
  const stats = getRoadmapStats(rm);

  return `
  <div class="page-header" style="--rm-accent:${rm.accent}">
    <h1>${rm.icon} ${rm.title}</h1>
    <p class="page-sub">${stats.done}/${stats.total} topics completed · ${stats.pct}%</p>
    <div class="rm-bar-wrap full"><div class="rm-bar" style="width:${stats.pct}%;background:${rm.accent}"></div></div>
    <div class="search-box">
      <input type="text" placeholder="Search topics..." id="searchInput" value="${searchQuery}" class="search-input">
    </div>
  </div>

  <div class="subjects-list">
    ${rm.subjects.map(subj => {
      const ss = getSubjectStats(rm, subj);
      return `
      <div class="subject-block">
        <div class="subject-header" style="--subj-color:${subj.color}">
          <div class="subj-dot" style="background:${subj.color}"></div>
          <div class="subj-info">
            <span class="subj-name">${subj.name}</span>
            <span class="subj-meta">${ss.done}/${ss.total} · ${ss.pct}%</span>
          </div>
          <div class="subj-bar-wrap"><div class="subj-bar" style="width:${ss.pct}%;background:${subj.color}"></div></div>
        </div>
        ${subj.phases.map(phase => {
          const filtered = searchQuery ? phase.topics.filter(t => t.toLowerCase().includes(searchQuery.toLowerCase())) : phase.topics;
          if (searchQuery && !filtered.length) return '';
          const phaseTopics = filtered;
          const phaseDone = phaseTopics.filter(t => store.isCompleted(topicId(rm.id, subj.name, phase.title, t))).length;
          return `
          <div class="phase-block">
            <div class="phase-title-row">
              <span class="phase-name">${phase.title}</span>
              <span class="phase-count">${phaseDone}/${phaseTopics.length}</span>
            </div>
            <div class="topic-checklist">
              ${phaseTopics.map(t => {
                const tid = topicId(rm.id, subj.name, phase.title, t);
                const checked = store.isCompleted(tid);
                const note = store.getNote(tid);
                return `
                <div class="topic-row ${checked ? 'done' : ''}">
                  <label class="topic-check">
                    <input type="checkbox" ${checked ? 'checked' : ''} data-tid="${tid}" class="topic-cb">
                    <span class="checkmark"></span>
                    <span class="topic-text">${t}</span>
                  </label>
                  <button class="note-btn ${note ? 'has-note' : ''}" data-tid="${tid}" title="Add note">📝</button>
                </div>`;
              }).join('')}
            </div>
          </div>`;
        }).join('')}
      </div>`;
    }).join('')}
  </div>`;
}

function renderTodosView() {
  const todos = store.getTodos();
  const pending = todos.filter(t => !t.done);
  const completed = todos.filter(t => t.done);

  return `
  <div class="page-header">
    <h1>✅ To-Do List</h1>
    <p class="page-sub">Track your daily study tasks</p>
  </div>
  <div class="todo-input-row">
    <input type="text" id="todoInput" placeholder="Add a new task..." class="todo-input">
    <button id="addTodoBtn" class="btn-primary">Add</button>
  </div>
  <div class="todo-section">
    <h3>Pending (${pending.length})</h3>
    ${pending.length ? pending.map(t => `
      <div class="todo-item">
        <label class="todo-check">
          <input type="checkbox" data-todo="${t.id}" class="todo-cb">
          <span class="checkmark"></span>
          <span>${t.text}</span>
        </label>
        <button class="todo-del" data-del="${t.id}">✕</button>
      </div>
    `).join('') : '<p class="empty-state">No pending tasks 🎉</p>'}
  </div>
  <div class="todo-section">
    <h3>Completed (${completed.length})</h3>
    ${completed.map(t => `
      <div class="todo-item done">
        <label class="todo-check">
          <input type="checkbox" checked data-todo="${t.id}" class="todo-cb">
          <span class="checkmark"></span>
          <span>${t.text}</span>
        </label>
        <button class="todo-del" data-del="${t.id}">✕</button>
      </div>
    `).join('')}
  </div>`;
}

function renderProgressView() {
  return `
  <div class="page-header">
    <h1>🏆 Progress Report</h1>
    <p class="page-sub">Detailed breakdown across all roadmaps</p>
  </div>
  <div class="progress-grid">
    ${roadmaps.map(rm => {
      const stats = getRoadmapStats(rm);
      return `
      <div class="progress-card" style="--rm-accent:${rm.accent}">
        <div class="pc-head">
          <span>${rm.icon} ${rm.title}</span>
          <span class="pc-pct">${stats.pct}%</span>
        </div>
        <div class="rm-bar-wrap"><div class="rm-bar" style="width:${stats.pct}%;background:${rm.accent}"></div></div>
        <div class="pc-subjects">
          ${rm.subjects.map(s => {
            const ss = getSubjectStats(rm, s);
            return `
            <div class="pc-subj">
              <div class="pc-subj-head">
                <span class="subj-dot-sm" style="background:${s.color}"></span>
                <span>${s.name}</span>
                <span class="pc-subj-pct">${ss.pct}%</span>
              </div>
              <div class="pc-subj-bar"><div style="width:${ss.pct}%;background:${s.color}"></div></div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
    }).join('')}
  </div>
  <div class="dash-section" style="margin-top:32px">
    <h2>📅 Study Heatmap — Last 12 Weeks</h2>
    <div class="heatmap">${renderHeatmap()}</div>
  </div>`;
}

function attachEvents() {
  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentView = btn.dataset.view;
      if (btn.dataset.roadmap) currentRoadmap = btn.dataset.roadmap;
      searchQuery = '';
      renderApp();
    });
  });

  // Roadmap cards on dashboard
  document.querySelectorAll('.rm-card[data-roadmap]').forEach(c => {
    c.addEventListener('click', () => {
      currentView = 'roadmap';
      currentRoadmap = c.dataset.roadmap;
      renderApp();
    });
  });

  // Topic checkboxes
  document.querySelectorAll('.topic-cb').forEach(cb => {
    cb.addEventListener('change', () => {
      store.toggleComplete(cb.dataset.tid);
      store.recordStudyDay();
      renderApp();
    });
  });

  // Note buttons
  document.querySelectorAll('.note-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tid = btn.dataset.tid;
      const existing = store.getNote(tid);
      const note = prompt('📝 Note for this topic:', existing);
      if (note !== null) { store.setNote(tid, note); renderApp(); }
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderApp();
      document.getElementById('searchInput')?.focus();
    });
  }

  // Todos
  const addBtn = document.getElementById('addTodoBtn');
  const todoInput = document.getElementById('todoInput');
  if (addBtn) {
    const addTodo = () => {
      const text = todoInput.value.trim();
      if (text) { store.addTodo(text); renderApp(); }
    };
    addBtn.addEventListener('click', addTodo);
    todoInput?.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });
  }
  document.querySelectorAll('.todo-cb').forEach(cb => {
    cb.addEventListener('change', () => { store.toggleTodo(Number(cb.dataset.todo)); renderApp(); });
  });
  document.querySelectorAll('.todo-del').forEach(btn => {
    btn.addEventListener('click', () => { store.deleteTodo(Number(btn.dataset.del)); renderApp(); });
  });

  // Daily goal
  const goalInput = document.getElementById('dailyGoalInput');
  if (goalInput) {
    goalInput.addEventListener('change', () => { store.setDailyGoal(Number(goalInput.value) || 5); renderApp(); });
  }

  // Export/Import
  document.getElementById('exportBtn')?.addEventListener('click', () => {
    const blob = new Blob([store.exportData()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'sde-prep-progress.json';
    a.click();
  });
  document.getElementById('importBtn')?.addEventListener('click', () => {
    document.getElementById('importFile')?.click();
  });
  document.getElementById('importFile')?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { if (store.importData(reader.result)) { alert('Progress imported!'); renderApp(); } else alert('Invalid file'); };
    reader.readAsText(file);
  });

  // Mobile toggle
  document.getElementById('mobileToggle')?.addEventListener('click', () => {
    document.getElementById('sidebar')?.classList.toggle('open');
  });
}

renderApp();
