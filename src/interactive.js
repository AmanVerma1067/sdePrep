// ---------------------------------------------------------------------------
// interactive.js — renderers + event wiring for the new interactive widgets.
// Keeps main.js from growing another 600 lines.
// ---------------------------------------------------------------------------

import * as store from './store.js';
import { TRACKS, DRILLS, REHEARSALS, MILESTONES, STAR_PROMPTS } from './prep-data.js';
import { fcfs, sjf, subnet, capacity, fmtBytes } from './calculators.js';

const esc = (s) => String(s).replace(/[&<>"]/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ===========================================================================
// TASK A1 — dual-track filter
// ===========================================================================

export function filterRoadmapsByTrack(roadmaps, track) {
  const ids = TRACKS[track]?.ids;
  return ids ? roadmaps.filter(r => ids.includes(r.id)) : roadmaps;
}

export function renderTrackToggle(active) {
  return `
  <div class="track-toggle" role="group" aria-label="Filter roadmaps by track">
    ${Object.entries(TRACKS).map(([key, t]) => `
      <button class="track-pill ${active === key ? 'active' : ''}"
              data-track="${key}" aria-pressed="${active === key}">
        <span class="track-pill-icon">${t.icon}</span><span>${esc(t.label)}</span>
      </button>`).join('')}
  </div>`;
}

// ===========================================================================
// TASK A2 — "Continue Your Prep" next-topic widget
// ===========================================================================

/** First uncompleted topic in the active track, or null if the track is done. */
export function findNextTopic(roadmaps, track, topicId) {
  for (const rm of filterRoadmapsByTrack(roadmaps, track)) {
    const subs = rm.subjects || [{ phases: rm.phases }];
    for (const s of subs) {
      for (const p of s.phases) {
        for (const t of p.topics) {
          if (!store.isCompleted(topicId(rm.id, p.title, t.name))) {
            return { rm, phase: p.title, topic: t };
          }
        }
      }
    }
  }
  return null;
}

export function renderNextTopic(next) {
  if (!next) {
    return `
    <div class="next-topic-card done">
      <div class="next-topic-label">🎯 Continue Your Prep</div>
      <div class="next-topic-name">Track complete — every topic ticked.</div>
      <div class="next-topic-sub">Switch tracks above, or start a drill below.</div>
    </div>`;
  }
  const { rm, topic } = next;
  return `
  <div class="next-topic-card" style="--rm-accent:${rm.accent}">
    <div class="next-topic-main">
      <div class="next-topic-label">🎯 Continue Your Prep</div>
      <div class="next-topic-name">${esc(topic.name)}</div>
      <div class="next-topic-sub">
        <span class="next-topic-badge">${rm.icon} ${esc(rm.title)}</span>
      </div>
    </div>
    <button class="next-topic-btn" data-next-roadmap="${rm.id}" data-next-hash="${topic.hash || ''}">
      Start Learning →
    </button>
  </div>`;
}

// ===========================================================================
// TASK A3 — daily defense drill
// ===========================================================================

export function pickDrill(track, index) {
  const pool = DRILLS.filter(d => track === 'all' || d.track === track || d.track === 'all');
  if (!pool.length) return null;
  return pool[((index % pool.length) + pool.length) % pool.length];
}

export function renderDrill(drill, revealed) {
  if (!drill) return '';
  return `
  <div class="drill-card" id="drillCard">
    <div class="drill-head">
      <span class="drill-label">⚡ Daily Defense Question</span>
      <span class="drill-track-tag ${drill.track}">${drill.track === 'ml' ? 'ML/DE' : drill.track === 'sde' ? 'SDE' : 'CORE'}</span>
    </div>
    <div class="drill-q">${esc(drill.q)}</div>
    <div class="drill-answer ${revealed ? 'shown' : ''}">
      ${revealed ? `<p>${esc(drill.a)}</p>` : `<p class="drill-hint">Answer out loud first — then reveal and compare.</p>`}
    </div>
    <div class="drill-actions">
      <button class="drill-btn primary" id="drillReveal">${revealed ? '🙈 Hide Answer' : '💡 Reveal 30s Opener'}</button>
      <button class="drill-btn" id="drillNext">🔀 Next Drill</button>
      ${revealed ? `<button class="drill-btn ghost" data-next-roadmap="${drill.roadmap}" data-next-hash="${drill.hash}">📖 Deep Dive</button>` : ''}
    </div>
  </div>`;
}

// ===========================================================================
// TASK B1 — project rehearsal panel
// ===========================================================================

export function renderRehearsalPanel(projId, openTab) {
  const r = REHEARSALS[projId];
  if (!r) return '';
  const tab = openTab || 'opener';
  const on = (t) => (tab === t ? 'active' : '');

  return `
  <div class="rehearse-panel" data-rehearse-panel="${projId}">
    <div class="rehearse-tabs">
      <button class="rehearse-tab ${on('opener')}" data-rehearse-tab="opener" data-proj="${projId}">🎙️ 30s Opener</button>
      <button class="rehearse-tab ${on('reality')}" data-rehearse-tab="reality" data-proj="${projId}">🔍 Code Reality</button>
      <button class="rehearse-tab ${on('traps')}" data-rehearse-tab="traps" data-proj="${projId}">🚨 Traps</button>
    </div>

    <div class="rehearse-body">
      ${tab === 'opener' ? `
        <p class="rehearse-opener">${esc(r.spokenOpener30s)}</p>
        <div class="rehearse-foot">
          <button class="rehearse-time-btn" data-star-seconds="30" data-star-text="${esc(projId)} opener">⏱️ Time me · 30s</button>
          <button class="rehearse-copy-btn" data-copy-text="${esc(r.spokenOpener30s)}">📋 Copy</button>
        </div>` : ''}

      ${tab === 'reality' ? `
        <ul class="rehearse-list reality">
          ${r.codeRealityCheck.map(x => `<li>${esc(x)}</li>`).join('')}
        </ul>` : ''}

      ${tab === 'traps' ? `
        <ul class="rehearse-list traps">
          ${r.interviewerTraps.map(x => `<li>${esc(x)}</li>`).join('')}
        </ul>` : ''}
    </div>

    <button class="rehearse-jump" data-jump-roadmap="${r.deepDiveRoadmap}" data-jump-hash="${r.hash}">
      📖 Full written defense →
    </button>
  </div>`;
}

// ===========================================================================
// TASK B2 — tech tag filter
// ===========================================================================

export const TECH_TAGS = ['PyTorch', 'FastAPI', 'Socket.IO', 'MongoDB', 'Flutter', 'YOLOv5', 'LangChain', 'PostgreSQL', 'Next.js', 'Node.js'];

export function renderTechFilter(activeTag) {
  return `
  <div class="tech-filter">
    <button class="tech-tag ${!activeTag ? 'active' : ''}" data-tech="">All</button>
    ${TECH_TAGS.map(t => `
      <button class="tech-tag ${activeTag === t ? 'active' : ''}" data-tech="${esc(t)}">${esc(t)}</button>
    `).join('')}
  </div>`;
}

export function filterProjectsByTech(projects, tag) {
  if (!tag) return projects;
  const needle = tag.toLowerCase();
  return projects.filter(p =>
    (p.tech || '').toLowerCase().includes(needle) ||
    (p.points || []).join(' ').toLowerCase().includes(needle)
  );
}

// ===========================================================================
// TASK B3 — ATS bullet copy
// ===========================================================================

export function buildAtsBullets(role, resumeData) {
  const ids = role === 'sde'
    ? ['chessify', 'studysync', 'sahyatri-sde']
    : ['nutrivision', 'recrutai', 'sahyatri-ml'];

  const lines = [];
  const exp = resumeData.experience?.[0];
  if (exp) {
    lines.push(`${exp.company || 'DigiFlute Media Lab'} — ${exp.role || 'Backend Developer Intern'}`);
    (exp.points || []).forEach(p => lines.push('• ' + stripTags(p)));
    lines.push('');
  }
  resumeData.projects
    .filter(p => ids.includes(p.id))
    .forEach(p => {
      lines.push(`${p.title} — ${p.subtitle} (${p.tech})`);
      p.points.forEach(pt => lines.push('• ' + stripTags(pt)));
      lines.push('');
    });
  return lines.join('\n').trim();
}

function stripTags(s) {
  return String(s).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export function toast(msg) {
  document.querySelector('.app-toast')?.remove();
  const el = document.createElement('div');
  el.className = 'app-toast';
  el.textContent = msg;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
  }, 2200);
}

// ===========================================================================
// TASK C1 — STAR timer
// ===========================================================================

export function renderStarTimer() {
  return `
  <div class="star-timer" id="starTimer">
    <div class="star-head">
      <span class="star-label">🎙️ Spoken Answer Timer</span>
      <span class="star-sub">Answer out loud. Stop when it hits zero.</span>
    </div>

    <select class="star-select" id="starPrompt">
      ${STAR_PROMPTS.map((p, i) =>
        `<option value="${i}">${esc(p.text)} · ${p.seconds}s</option>`).join('')}
    </select>

    <div class="star-clock" id="starClock">0:45</div>
    <div class="star-bar-wrap"><div class="star-bar" id="starBar" style="width:100%"></div></div>

    <div class="star-actions">
      <button class="star-btn primary" id="starStart">▶ Start</button>
      <button class="star-btn" id="starPause">⏸ Pause</button>
      <button class="star-btn ghost" id="starReset">↺ Reset</button>
    </div>
    <div class="star-status" id="starStatus">Pick a prompt and hit start.</div>
  </div>`;
}

let starInterval = null;
let starRemaining = 45;
let starTotal = 45;

function paintStar() {
  const clock = document.getElementById('starClock');
  const bar = document.getElementById('starBar');
  if (!clock || !bar) return;
  const m = Math.floor(starRemaining / 60);
  const s = String(Math.max(0, starRemaining % 60)).padStart(2, '0');
  clock.textContent = `${m}:${s}`;
  const pct = starTotal ? (starRemaining / starTotal) * 100 : 0;
  bar.style.width = Math.max(0, pct) + '%';
  bar.style.background = pct > 50 ? 'var(--green, #34d399)' : pct > 20 ? '#fbbf24' : '#fb7185';
  clock.classList.toggle('urgent', starRemaining <= 10 && starRemaining > 0);
  clock.classList.toggle('done', starRemaining <= 0);
}

export function stopStarTimer() {
  clearInterval(starInterval);
  starInterval = null;
}

export function attachStarTimer() {
  const sel = document.getElementById('starPrompt');
  const status = document.getElementById('starStatus');
  if (!sel) return;

  const load = () => {
    stopStarTimer();
    starTotal = STAR_PROMPTS[sel.value]?.seconds || 45;
    starRemaining = starTotal;
    paintStar();
    if (status) status.textContent = 'Ready. Say it out loud.';
  };

  sel.addEventListener('change', load);
  load();

  document.getElementById('starStart')?.addEventListener('click', () => {
    if (starInterval) return;
    if (starRemaining <= 0) { starRemaining = starTotal; }
    if (status) status.textContent = '🔴 Recording — keep talking.';
    starInterval = setInterval(() => {
      starRemaining--;
      paintStar();
      if (starRemaining <= 0) {
        stopStarTimer();
        if (status) status.textContent = "⏰ Time. Did you land the trade-off before the buzzer?";
        try { navigator.vibrate?.(200); } catch { /* not supported */ }
      }
    }, 1000);
  });

  document.getElementById('starPause')?.addEventListener('click', () => {
    if (!starInterval) return;
    stopStarTimer();
    if (status) status.textContent = '⏸ Paused.';
  });

  document.getElementById('starReset')?.addEventListener('click', load);
}

// ===========================================================================
// TASK C2 — calculators
// ===========================================================================

export function renderCalculators() {
  return `
  <div class="calc-grid">

    <div class="calc-card">
      <div class="calc-title">🖥️ CPU Scheduling</div>
      <label class="calc-label">Burst times (comma separated)</label>
      <input class="calc-input" id="calcBursts" value="6, 8, 7, 3" />
      <button class="calc-run" id="calcSchedRun">Compute FCFS vs SJF</button>
      <div class="calc-out" id="calcSchedOut"></div>
    </div>

    <div class="calc-card">
      <div class="calc-title">🌐 IP Subnetting</div>
      <label class="calc-label">CIDR prefix (0–32)</label>
      <input class="calc-input" id="calcPrefix" type="number" min="0" max="32" value="26" />
      <button class="calc-run" id="calcSubnetRun">Compute mask &amp; hosts</button>
      <div class="calc-out" id="calcSubnetOut"></div>
    </div>

    <div class="calc-card">
      <div class="calc-title">📊 DB Capacity / QPS</div>
      <label class="calc-label">Daily active users</label>
      <input class="calc-input" id="calcDau" type="number" value="10000" />
      <label class="calc-label">Writes / sec (sustained)</label>
      <input class="calc-input" id="calcWps" type="number" value="3333" />
      <label class="calc-label">Row size (bytes) · App cores</label>
      <div class="calc-row">
        <input class="calc-input" id="calcRow" type="number" value="60" />
        <input class="calc-input" id="calcCores" type="number" value="4" />
      </div>
      <button class="calc-run" id="calcCapRun">Estimate</button>
      <div class="calc-out" id="calcCapOut"></div>
    </div>

  </div>`;
}

export function attachCalculators() {
  document.getElementById('calcSchedRun')?.addEventListener('click', () => {
    const raw = document.getElementById('calcBursts').value;
    const bursts = raw.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x) && x > 0);
    const out = document.getElementById('calcSchedOut');
    if (!bursts.length) { out.innerHTML = `<span class="calc-err">Enter at least one positive number.</span>`; return; }

    const f = fcfs(bursts), s = sjf(bursts);
    out.innerHTML = `
      <table class="calc-table">
        <tr><th></th><th>Avg TAT</th><th>Avg WT</th></tr>
        <tr><td>FCFS</td><td>${f.avgTat.toFixed(2)}</td><td>${f.avgWt.toFixed(2)}</td></tr>
        <tr><td>SJF</td><td>${s.avgTat.toFixed(2)}</td><td>${s.avgWt.toFixed(2)}</td></tr>
      </table>
      <div class="calc-note">Order under SJF: ${s.rows.map(r => r.pid).join(' → ')}</div>
      <div class="calc-note">SJF is provably optimal for average waiting time when all jobs arrive together — but it can starve long jobs.</div>`;
  });

  document.getElementById('calcSubnetRun')?.addEventListener('click', () => {
    const p = parseInt(document.getElementById('calcPrefix').value, 10);
    const out = document.getElementById('calcSubnetOut');
    if (isNaN(p) || p < 0 || p > 32) { out.innerHTML = `<span class="calc-err">Prefix must be 0–32.</span>`; return; }
    const r = subnet(p);
    out.innerHTML = `
      <table class="calc-table">
        <tr><td>Subnet mask</td><td><code>${r.mask}</code></td></tr>
        <tr><td>Wildcard</td><td><code>${r.wildcard}</code></td></tr>
        <tr><td>Host bits</td><td>${r.hostBits}</td></tr>
        <tr><td>Total addresses</td><td>${r.totalHosts.toLocaleString()}</td></tr>
        <tr><td>Usable hosts</td><td><strong>${r.usableHosts.toLocaleString()}</strong></td></tr>
      </table>
      ${r.note ? `<div class="calc-note">${r.note}</div>` : `<div class="calc-note">Usable = 2^${r.hostBits} − 2 (network + broadcast).</div>`}`;
  });

  document.getElementById('calcCapRun')?.addEventListener('click', () => {
    const dau = parseFloat(document.getElementById('calcDau').value) || 0;
    const wps = parseFloat(document.getElementById('calcWps').value) || 0;
    const rowB = parseFloat(document.getElementById('calcRow').value) || 60;
    const cores = parseFloat(document.getElementById('calcCores').value) || 4;
    const c = capacity(dau, wps, rowB, cores);
    document.getElementById('calcCapOut').innerHTML = `
      <table class="calc-table">
        <tr><td>Peak writes/s (2×)</td><td>${Math.round(c.peakWrites).toLocaleString()}</td></tr>
        <tr><td>Rows / day</td><td>${Math.round(c.rowsPerDay).toLocaleString()}</td></tr>
        <tr><td>Storage / day</td><td>${fmtBytes(c.storagePerDayGB)}</td></tr>
        <tr><td>Storage / month</td><td><strong>${fmtBytes(c.storagePerMonthGB)}</strong></td></tr>
        <tr><td>Storage / year</td><td>${c.storagePerYearTB.toFixed(2)} TB</td></tr>
        <tr><td>Suggested pool size</td><td><strong>${c.poolSize}</strong> <span class="calc-dim">(cores×2 + 1)</span></td></tr>
        <tr><td>Batched statements/s</td><td>${c.batchedStatementsPerSec} <span class="calc-dim">(100 rows/batch)</span></td></tr>
      </table>
      <div class="calc-note">${c.verdict}</div>`;
  });
}

// ===========================================================================
// TASK C3 — strategy milestones
// ===========================================================================

export function renderMilestones() {
  const doneMap = store.getStrategyMilestones();
  const all = MILESTONES.flatMap(p => p.items);
  const doneCount = all.filter(i => doneMap[i.id]).length;
  const pct = all.length ? Math.round((doneCount / all.length) * 100) : 0;

  return `
  <div class="milestone-wrap">
    <div class="milestone-head">
      <span class="milestone-title">🗓️ 8-Week Prep Timeline</span>
      <span class="milestone-count">${doneCount}/${all.length} · ${pct}%</span>
    </div>
    <div class="stat-bar-wrap"><div class="stat-bar" style="width:${pct}%;background:var(--green,#34d399)"></div></div>

    ${MILESTONES.map(p => `
      <div class="milestone-phase">
        <div class="milestone-phase-title">${esc(p.phase)}</div>
        ${p.items.map(i => `
          <label class="milestone-item ${doneMap[i.id] ? 'done' : ''}">
            <input type="checkbox" class="milestone-cb" data-mid="${i.id}" ${doneMap[i.id] ? 'checked' : ''} />
            <span>${esc(i.text)}</span>
          </label>`).join('')}
      </div>`).join('')}
  </div>`;
}
