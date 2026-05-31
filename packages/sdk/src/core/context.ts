import { Store } from "@/types/types";
import { Storage } from "./storage";

export const setContext = <T extends Partial<Store>>(ctx: T) => {
  const store = Storage.getStore();

  if (store) {
    Object.assign(store, ctx);
  }
};

export const getContext = () => {
  const store = Storage.getStore();
  if (!store) {
    throw new Error(
      "[TinyLogs] No active request context found. Make sure to register the TinyLogs middleware before using useTinyLogs().",
    );
  }
  return store;
};
