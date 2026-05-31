import { LEVEL_PRIORITY } from "@/constants";
import { getContext } from "@/core/context";
import { LogType } from "@/types/types";

export const updateLevel = (newLevel: LogType) => {
  const store = getContext();
  if (!store) return;

  if (LEVEL_PRIORITY[newLevel] > LEVEL_PRIORITY[store.level]) {
    store.level = newLevel;
  }
};
