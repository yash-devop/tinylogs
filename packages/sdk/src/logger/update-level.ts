import { getContext } from "@/core/context";
import { Type } from "@/types/types";

const LEVEL_PRIORITY = {
  info: 1,
  warn: 2,
  error: 3,
};
export const updateLevel = (newLevel: Type) => {
  const store = getContext();
  if (!store) return;

  if (LEVEL_PRIORITY[newLevel] > LEVEL_PRIORITY[store.level]) {
    store.level = newLevel;
  }
};
