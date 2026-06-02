import { LogType } from "@/types/types";
import { InspectColor } from "node:util";

export const LOG_COLORS: Record<LogType, InspectColor> = {
  info: "blue",
  set: "blue",
  warn: "yellow",
  error: "red",
};

export const LOG_LEVEL: Record<LogType, string> = {
  info: "INFO",
  warn: "WARN",
  error: "ERROR",
  set: "SET",
};
