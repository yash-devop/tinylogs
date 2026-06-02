import { getContext } from "@/context/context";
import { RequestLogger } from "@/core/request-logger";
import { updateLogLevel } from "@/output";
import { TinylogsType } from "@/types/types";

export const useTinyLogs = (): TinylogsType => {
  const store = getContext();
  return new RequestLogger(store.logs, {
    onLevelChange: (newLevel) => {
      updateLogLevel(store, newLevel);
    },
  });
};
