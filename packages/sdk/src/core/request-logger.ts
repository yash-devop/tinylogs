import { BaseLogger } from "@/core/base-logger";
import { LevelsType, LogParameter, LogType } from "@/types/types";

export class RequestLogger extends BaseLogger {
  private hooks?: {
    onLevelChange: (newLevel: LogType) => void;
  };

  constructor(
    logs: LevelsType = [],
    hooks?: {
      onLevelChange: (newLevel: LogType) => void;
    },
  ) {
    super(logs);
    this.hooks = hooks;
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
