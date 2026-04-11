import { useTinyLogs } from "./logger/logger";

export const getUser = async () => {
  const logger = useTinyLogs();

  setTimeout(() => {
    logger.set("Async Simulation 3 sec");
  }, 3000);
};
