const STORAGE_KEY = 'sde-prep-v1';

export function getState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createDefault();
  } catch { return createDefault(); }
}

function createDefault() {
  return { completed: {}, notes: {}, todos: [], streakDates: [], dailyGoal: 5 };
}

export function save(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent('store-changed'));
}

export function isCompleted(topicId) {
  return !!getState().completed[topicId];
}

export function toggleComplete(topicId) {
  const s = getState();
  if (s.completed[topicId]) delete s.completed[topicId];
  else s.completed[topicId] = Date.now();
  save(s);
}

export function getCompletedCount() {
  return Object.keys(getState().completed).length;
}

export function getCompletedMap() {
  return { ...getState().completed };
}

export function getNote(topicId) {
  return getState().notes[topicId] || '';
}

export function setNote(topicId, text) {
  const s = getState();
  if (text.trim()) s.notes[topicId] = text;
  else delete s.notes[topicId];
  save(s);
}

export function getTodos() {
  return [...(getState().todos || [])];
}

export function addTodo(text) {
  const s = getState();
  s.todos = s.todos || [];
  s.todos.push({ id: Date.now(), text, done: false, createdAt: Date.now() });
  save(s);
}

export function toggleTodo(id) {
  const s = getState();
  const t = (s.todos || []).find(x => x.id === id);
  if (t) t.done = !t.done;
  save(s);
}

export function deleteTodo(id) {
  const s = getState();
  s.todos = (s.todos || []).filter(x => x.id !== id);
  save(s);
}

export function recordStudyDay() {
  const s = getState();
  const today = new Date().toISOString().slice(0, 10);
  if (!s.streakDates.includes(today)) s.streakDates.push(today);
  save(s);
}

export function getStreak() {
  const s = getState();
  const dates = (s.streakDates || []).sort().reverse();
  if (!dates.length) return 0;
  let streak = 0;
  let check = new Date();
  for (let i = 0; i < 365; i++) {
    const d = check.toISOString().slice(0, 10);
    if (dates.includes(d)) streak++;
    else if (i > 0) break;
    check.setDate(check.getDate() - 1);
  }
  return streak;
}

export function getStreakDates() {
  return [...(getState().streakDates || [])];
}

export function getDailyGoal() {
  return getState().dailyGoal || 5;
}

export function setDailyGoal(n) {
  const s = getState();
  s.dailyGoal = n;
  save(s);
}

export function getTodayCompleted() {
  const s = getState();
  const today = new Date().toISOString().slice(0, 10);
  return Object.values(s.completed).filter(ts => new Date(ts).toISOString().slice(0, 10) === today).length;
}

export function exportData() {
  return JSON.stringify(getState(), null, 2);
}

export function importData(json) {
  try {
    const d = JSON.parse(json);
    save(d);
    return true;
  } catch { return false; }
}
