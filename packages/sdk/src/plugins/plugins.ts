import { Entry, Plugin } from "@/types/types";

export const xNCompression = (): Plugin => {
  return {
    name: "xN-Noise compression",
    transformLogs: (store) => {
      // compression logic.
      let compressedMap: Entry[] = [];
      let currentEntry: Entry | null = null;
      for (const entry of store.logs) {
        if (
          typeof entry.message !== "string" &&
          typeof entry.message !== "number"
        ) {
          continue;
        }

        if (!currentEntry) {
          currentEntry = {
            ...entry,
            count: 1,
          };

          continue;
        }

        if (currentEntry.message === entry.message) {
          currentEntry.count!++;
          continue;
        }

        compressedMap.push(currentEntry);

        currentEntry = {
          ...entry,
          count: 1,
        };
      }
      if (currentEntry) {
        compressedMap.push(currentEntry);
      }

      store.logs = compressedMap;
      return store;
    },
  };
};
