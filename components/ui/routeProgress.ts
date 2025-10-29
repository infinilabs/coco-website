"use client";

type ProgressState = { active: boolean; progress: number };

let state: ProgressState = { active: false, progress: 0 };
const listeners = new Set<(s: ProgressState) => void>();
let timer: ReturnType<typeof setInterval> | null = null;

function notify() {
  for (const l of listeners) l({ ...state });
}

export function subscribeRouteProgress(listener: (s: ProgressState) => void) {
  listeners.add(listener);
  listener({ ...state });
  return () => {
    listeners.delete(listener);
  };
}

export function startRouteProgress() {
  if (state.active) return;
  state.active = true;
  state.progress = 0;
  notify();

  let target = 85;
  let step = 6;
  timer && clearInterval(timer);
  timer = setInterval(() => {
    if (state.progress < target) {
      state.progress = Math.min(target, state.progress + step);
      notify();
    } else {
      timer && clearInterval(timer);
      timer = null;
    }
  }, 120);
}

export function doneRouteProgress() {
  if (!state.active) return;

  timer && clearInterval(timer);
  timer = null;
  state.progress = 100;
  notify();
  setTimeout(() => {
    state.active = false;
    state.progress = 0;
    notify();
  }, 300);
}
