import { updateLevel } from "@/logger/update-level";
import { LevelsType, LogParameter } from "@/types/types";
import { TinyLogError } from "./errors";

export class Tinylogs {
  private logs: LevelsType;
  constructor(logs: LevelsType = []) {
    this.logs = logs;
  }

  set(message: LogParameter) {
    updateLevel("info");
    this.logs.push({ level: "info", message });
  }

  warn(message: string) {
    updateLevel("warn");
    this.logs.push({ level: "warn", message });
  }
  error(err: Error | string) {
    updateLevel("warn");

    const isTinyError = err instanceof TinyLogError;

    this.logs.push({
      level: "error",
      message: {
        error: {
          name: err instanceof Error ? err.name : "Error",
          message: err instanceof Error ? err.message : err,
          stack: err instanceof Error ? err.stack : undefined,
          ...(isTinyError && {
            status: err.status,
            ...(err.why ? { why: err.why } : ""),
            ...(err.fix ? { fix: err.fix } : ""),
          }),
        },
      },
    });
  }
}
