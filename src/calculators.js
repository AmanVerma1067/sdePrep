// ---------------------------------------------------------------------------
// calculators.js — pure functions for the OA / system-design mini-calculators.
// No DOM access here, so these stay trivially testable.
// ---------------------------------------------------------------------------

/**
 * FCFS (non-preemptive) CPU scheduling.
 * @param {number[]} bursts  burst times in the order they arrive
 * @returns {{rows:Array, avgTat:number, avgWt:number}}
 */
export function fcfs(bursts) {
  let clock = 0;
  const rows = bursts.map((bt, i) => {
    const wt = clock;              // arrival assumed 0 for all
    clock += bt;
    const tat = clock;             // completion - arrival(0)
    return { pid: `P${i + 1}`, bt, wt, tat, ct: clock };
  });
  const n = rows.length || 1;
  return {
    rows,
    avgTat: rows.reduce((s, r) => s + r.tat, 0) / n,
    avgWt: rows.reduce((s, r) => s + r.wt, 0) / n,
  };
}

/**
 * SJF (non-preemptive, all arrive at t=0) — sorts by burst time.
 * Included because interviewers almost always ask for the comparison.
 */
export function sjf(bursts) {
  const order = bursts
    .map((bt, i) => ({ bt, orig: i }))
    .sort((a, b) => a.bt - b.bt);
  let clock = 0;
  const rows = order.map(({ bt, orig }) => {
    const wt = clock;
    clock += bt;
    return { pid: `P${orig + 1}`, bt, wt, tat: clock, ct: clock };
  });
  const n = rows.length || 1;
  return {
    rows,
    avgTat: rows.reduce((s, r) => s + r.tat, 0) / n,
    avgWt: rows.reduce((s, r) => s + r.wt, 0) / n,
  };
}

/**
 * IPv4 subnetting from a CIDR prefix.
 * @param {number} prefix 0-32
 */
export function subnet(prefix) {
  const p = Math.max(0, Math.min(32, Math.floor(prefix)));
  const hostBits = 32 - p;
  // >>> 0 keeps it unsigned; the shift is done in two steps to survive p === 0
  const maskInt = p === 0 ? 0 : (0xffffffff << hostBits) >>> 0;
  const mask = [24, 16, 8, 0].map(s => (maskInt >>> s) & 255).join('.');

  const total = Math.pow(2, hostBits);
  // /31 and /32 are special-cased: no network/broadcast pair to subtract
  const usable = hostBits <= 1 ? (hostBits === 0 ? 1 : 2) : total - 2;

  return {
    prefix: p,
    mask,
    wildcard: [24, 16, 8, 0].map(s => 255 - ((maskInt >>> s) & 255)).join('.'),
    hostBits,
    totalHosts: total,
    usableHosts: usable,
    blockSize: hostBits >= 8 ? 256 : total,
    note: hostBits <= 1 ? 'No network/broadcast pair at /31 or /32 (point-to-point).' : '',
  };
}

/**
 * Rough capacity estimate for a write-heavy service.
 * @param {number} dau       daily active users
 * @param {number} writesPerSec  sustained writes/sec
 * @param {number} rowBytes  average row size in bytes
 * @param {number} cores     app server cores (for pool sizing)
 */
export function capacity(dau, writesPerSec, rowBytes = 60, cores = 4) {
  const SEC_PER_DAY = 86400;
  const rowsPerDay = writesPerSec * SEC_PER_DAY;
  const bytesPerDay = rowsPerDay * rowBytes;
  const peakWrites = writesPerSec * 2; // assume 2x peak

  // (cores * 2) + 1 is the classic I/O-bound heuristic; small pools beat big ones
  const poolSize = cores * 2 + 1;

  return {
    dau,
    writesPerSec,
    peakWrites,
    rowsPerDay,
    storagePerDayGB: bytesPerDay / 1e9,
    storagePerMonthGB: (bytesPerDay * 30) / 1e9,
    storagePerYearTB: (bytesPerDay * 365) / 1e12,
    poolSize,
    batchedStatementsPerSec: Math.ceil(peakWrites / 100),
    verdict:
      peakWrites > 5000
        ? 'Batch inserts are mandatory. Consider a queue + partitioning by time.'
        : peakWrites > 500
        ? 'Batch inserts strongly recommended — every commit is an fsync.'
        : 'Direct inserts are fine at this volume. Optimise only when measured.',
  };
}

export function fmtBytes(gb) {
  if (gb >= 1000) return (gb / 1000).toFixed(2) + ' TB';
  if (gb < 0.001) return (gb * 1e6).toFixed(0) + ' KB';
  if (gb < 1) return (gb * 1000).toFixed(1) + ' MB';
  return gb.toFixed(2) + ' GB';
}
