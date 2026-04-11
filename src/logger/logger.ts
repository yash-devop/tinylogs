import { getContext } from "@/core/context";
import { generateMetaData } from "@/logger/generate-meta";
import { LogParameter, TinylogsType } from "@/types/types";
import { buildLogString } from "./build-log-string";

export const useTinyLogs = (): TinylogsType => {
  const store = getContext();

  const set = (message: LogParameter) => {
    if (!store) {
      console.warn("no store context");
      return;
    }
    const { requestId } = store;
    generateMetaData(requestId, "info");
    buildLogString(message);
  };

  const warn = (message: string) => {
    if (!store) {
      console.warn("no store context");
      return;
    }
    const { requestId } = store;
    generateMetaData(requestId, "warn");
    buildLogString(message, "warn");
  };
  return { set, warn };
};
