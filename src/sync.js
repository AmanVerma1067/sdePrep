import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const CONFIG_KEY = 'sde-prep-firebase-config';

export function hasFirebaseConfig() {
  return !!localStorage.getItem(CONFIG_KEY);
}

export function setFirebaseConfig(cfg) {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
}

function getDb() {
  if (!hasFirebaseConfig()) return null;
  const cfg = JSON.parse(localStorage.getItem(CONFIG_KEY));
  const app = initializeApp(cfg);
  return getFirestore(app);
}

export async function syncProgress(state) {
  const db = getDb();
  if (!db) return;
  try {
    const docRef = doc(db, "sde-prep", "my-progress");
    await setDoc(docRef, state);
  } catch (error) {
    console.error("Error syncing to Firebase:", error);
  }
}

export async function pullProgress() {
  const db = getDb();
  if (!db) return null;
  try {
    const docRef = doc(db, "sde-prep", "my-progress");
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data();
    }
  } catch (error) {
    console.error("Error pulling from Firebase:", error);
  }
  return null;
}
