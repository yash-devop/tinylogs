import {
  Entry,
  LevelsType,
  LogParameter,
  LogType,
  Plugin,
} from "@/types/types";

type CompressedLog = Entry & {
  count: number;
};
export const xNCompression = (): Plugin => {
  return {
    name: "xN-Noise compression",
    transformLogs: (store) => {
      // compression logic.
      const compressedMap = new Map<LogParameter, CompressedLog>();
      let count = 1;
      for (const entry of store.logs) {
        if (typeof entry.message !== "string") {
          compressedMap.set(entry.message, {
            ...entry,
            count: 0,
          });
          continue;
        }
        if (compressedMap.has(entry.message)) {
          compressedMap.set(entry.message, {
            ...entry,
            level: entry.level as LogType,
            count: ++count,
          });
        } else {
          count = 1;
          compressedMap.set(entry.message, {
            ...entry,
            level: entry.level as LogType,
            count,
          });
        }
      }

      store.logs = [...compressedMap.values()];
      return store;
    },
  };
};
