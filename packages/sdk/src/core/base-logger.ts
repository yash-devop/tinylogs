import { LevelsType, LogParameter } from "@/types/types";
import { TinyLogError } from "./errors";

export class BaseLogger {
  constructor(protected logs: LevelsType = []) {
    this.logs = logs;
  }

  set(message: LogParameter) {
    this.logs.push({ level: "info", message });
  }

  warn(message: string) {
    this.logs.push({ level: "warn", message });
  }
  error(err: Error | string) {
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

  getLogs() {
    return this.logs;
  }
}
