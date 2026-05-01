import { getContext } from "@/core/context";
import { LogParameter, TinylogsType } from "@/types/types";
import { updateLevel } from "./update-level";
import { TinyLogError } from "@/core/errors";

export const useTinyLogs = (): TinylogsType => {
  const store = getContext();

  const set = (message: LogParameter) => {
    if (!store) {
      console.warn("no store context");
      return;
    }
    updateLevel("info");
    store.logs.push({ level: "info", message });
  };

  const warn = (message: string) => {
    if (!store) {
      console.warn("no store context");
      return;
    }
    updateLevel("warn");
    store.logs.push({ level: "warn", message: message });
  };

  const error = (err: Error | string) => {
    if (!store) {
      console.warn("no store context");
      return;
    }
    updateLevel("error");
    const isTinyError = err instanceof TinyLogError;

    store.logs.push({
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
  };
  return { set, warn, error };
};
