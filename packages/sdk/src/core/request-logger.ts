import { BaseLogger } from "@/core/base-logger";
import {
  LogParameter,
  LogType,
  Plugin,
  RequestLoggerType,
} from "@/types/types";

export class RequestLogger extends BaseLogger {
  private hooks?: {
    onLevelChange: (newLevel: LogType) => void;
  };
  protected plugins?: Plugin[];

  constructor({ logs = [], hooks, plugins }: RequestLoggerType) {
    super({ logs, plugins });
    this.hooks = hooks;
    this.plugins = plugins;
  }

  override set(message: LogParameter): void {
    this.hooks?.onLevelChange("info");

    super.set(message);
  }

  override warn(message: string): void {
    this.hooks?.onLevelChange("warn");
    super.warn(message);
  }

  override error(err: Error | string): void {
    this.hooks?.onLevelChange("error");
    super.error(err);
  }
}
