import { LogType } from "@/types/types";
import { InspectColor } from "node:util";

export const LOG_STYLE: Record<LogType, InspectColor> = {
  info: "blue",
  set: "blue",
  warn: "yellow",
  error: "red",
};
