import { LogType } from "@/types/types";

export const LEVEL_PRIORITY: Record<LogType, number> = {
  info: 1,
  set: 1,
  warn: 2,
  error: 3,
};
