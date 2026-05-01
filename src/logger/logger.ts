import { getContext } from "@/core/context";
import { LogParameter, TinylogsType } from "@/types/types";
import { updateLevel } from "./update-level";

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

  const error = () => {
    if (!store) {
      console.warn("no store context");
      return;
    }
    updateLevel("error");
    const { errors } = store;
    store.logs.push({
      level: "error",
      message: {
        error: JSON.stringify(errors),
      },
    });
  };
  return { set, warn, error };
};
