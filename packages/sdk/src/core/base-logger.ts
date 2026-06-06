import {
  BaseLoggerType,
  LevelsType,
  LogParameter,
  Plugin,
} from "@/types/types";
import { TinyLogError } from "./errors";

export class BaseLogger {
  protected logs: LevelsType;
  protected plugins?: Plugin[];

  constructor({ logs = [], plugins }: BaseLoggerType) {
    this.logs = logs;
    this.plugins = plugins;
  }

  set(message: LogParameter) {
    this.runPluginPipeline(message);
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

  runPluginPipeline(entry: LogParameter) {
    if (!this.plugins) {
      throw new Error("[Pipeline] Plugins is empty");
    }

    for (const plugin of this.plugins) {
      plugin?.transform?.(entry);
    }
  }

  getLogs() {
    return this.logs;
  }
}
