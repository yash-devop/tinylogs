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
    const transformedMessage = this.runPluginPipeline(message);
    this.logs.push({ level: "info", message: transformedMessage });
  }

  warn(message: string) {
    const transformedMessage = this.runPluginPipeline(message);

    this.logs.push({ level: "warn", message: transformedMessage });
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
    let currentEntry = entry;

    for (const plugin of this.plugins) {
      if (!plugin.transform) continue;

      currentEntry = plugin.transform(currentEntry);
    }

    return currentEntry;
  }

  getLogs() {
    return this.logs;
  }
}
