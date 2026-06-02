import { StandaloneLogger } from "@/core/standalone-logger";
import { LevelsType } from "@/types/types";

export const createStandaloneLogger = () => {
  const logs: LevelsType = [];
  return new StandaloneLogger(logs);
};
