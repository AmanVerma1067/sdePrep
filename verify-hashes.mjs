#!/usr/bin/env node
/**
 * verify-hashes.mjs — validation gate for sde-prep
 *
 * Checks that every roadmap in src/roadmap-data.js points at a real file in
 * public/, and that every topic `hash` resolves to a real element id inside
 * that file. Exits non-zero on any failure so it can gate a build or CI job.
 *
 * Usage:  node verify-hashes.mjs
 * Wire up: "scripts": { "verify": "node verify-hashes.mjs",
 *                       "prebuild": "npm run verify" }
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(fileURLToPath(import.meta.url));
const { roadmaps } = await import(join(ROOT, 'src', 'roadmap-data.js'));
const { DRILLS, REHEARSALS } = await import(join(ROOT, 'src', 'prep-data.js'));

const ID_RE = /\bid\s*=\s*["']([^"']+)["']/g;

let topics = 0;
const missingFiles = [];
const brokenHashes = [];
const hashless = [];

for (const rm of roadmaps) {
  const rel = 'public' + rm.url;
  const abs = join(ROOT, rel);

  if (!existsSync(abs)) {
    missingFiles.push(`${rm.id} -> ${rm.url}`);
    continue;
  }

  const html = readFileSync(abs, 'utf8');
  const ids = new Set();
  let m;
  ID_RE.lastIndex = 0;
  while ((m = ID_RE.exec(html)) !== null) ids.add(m[1]);

  for (const phase of rm.phases) {
    for (const t of phase.topics) {
      topics++;
      if (!t.hash) {
        hashless.push(`${rm.id} | ${t.name}`);
        continue;
      }
      const id = t.hash.replace(/^#/, '');
      if (!ids.has(id)) {
        brokenHashes.push(`${rm.id} | "${t.name}" -> ${t.hash}`);
      }
    }
  }
}

// --- prep-data.js jump links (drills + project rehearsals) ---
const urlOf = (id) => roadmaps.find((r) => r.id === id)?.url;
const idCache = {};
const idsFor = (url) => {
  if (!idCache[url]) {
    const html = readFileSync(join(ROOT, 'public' + url), 'utf8');
    const s = new Set();
    let m; const re = /\bid\s*=\s*["']([^"']+)["']/g;
    while ((m = re.exec(html)) !== null) s.add(m[1]);
    idCache[url] = s;
  }
  return idCache[url];
};
const checkJump = (label, rmId, hash) => {
  const url = urlOf(rmId);
  if (!url) { brokenHashes.push(`${label} -> unknown roadmap "${rmId}"`); return; }
  if (!idsFor(url).has(String(hash).replace(/^#/, ''))) {
    brokenHashes.push(`${label} -> ${rmId}${hash}`);
  }
};
DRILLS.forEach((d, i) => checkJump(`drill[${i}]`, d.roadmap, d.hash));
Object.entries(REHEARSALS).forEach(([k, v]) => checkJump(`rehearsal:${k}`, v.deepDiveRoadmap, v.hash));

const fail = missingFiles.length + brokenHashes.length;

console.log(`\n  roadmaps ${roadmaps.length}   topics ${topics}`);
console.log(`  drills ${DRILLS.length}   rehearsals ${Object.keys(REHEARSALS).length}`);
console.log(`  missing files ${missingFiles.length}   broken hashes ${brokenHashes.length}   hashless ${hashless.length}`);

const dump = (label, arr, cap = 30) => {
  if (!arr.length) return;
  console.log(`\n  ${label}`);
  arr.slice(0, cap).forEach((x) => console.log('    - ' + x));
  if (arr.length > cap) console.log(`    ...and ${arr.length - cap} more`);
};

dump('MISSING FILES', missingFiles);
dump('BROKEN HASHES', brokenHashes);
dump('TOPICS WITH NO HASH (warning only)', hashless, 10);

if (fail) {
  console.error(`\n  ✗ verification failed — ${fail} problem(s)\n`);
  process.exit(1);
}
console.log('\n  ✓ all roadmap links and hashes resolve\n');
