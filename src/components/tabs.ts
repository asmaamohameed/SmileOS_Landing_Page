import type { KeyboardEvent } from "react";

export function onTabKey<T extends string>(
  event: KeyboardEvent,
  order: readonly T[],
  current: T,
  setCurrent: (value: T) => void,
  group: string,
) {
  const rtl = document.documentElement.dir === "rtl";
  const nextKey = rtl ? "ArrowLeft" : "ArrowRight";
  const prevKey = rtl ? "ArrowRight" : "ArrowLeft";
  let next: T | undefined;

  if (event.key === "Home") next = order[0];
  if (event.key === "End") next = order[order.length - 1];
  if (event.key === nextKey || event.key === prevKey) {
    const index = order.indexOf(current);
    const delta = event.key === nextKey ? 1 : -1;
    next = order[(index + delta + order.length) % order.length];
  }
  if (!next) return;
  event.preventDefault();
  setCurrent(next);
  document.getElementById(`tab-${group}-${next}`)?.focus();
}
