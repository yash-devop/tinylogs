import { LevelsType, LogParameter } from "@/types/types";
import { BaseLogger } from "./base-logger";
import { printStandaloneLogs } from "@/output/print-standalone-logs";

export class StandaloneLogger extends BaseLogger {
  logs: LevelsType = [];
  constructor(logs: LevelsType = []) {
    super(logs);
    this.logs = logs;
  }
  print() {
    printStandaloneLogs(this.logs);
  }
  set(message: LogParameter): void {
    super.set(message);
  }
}
