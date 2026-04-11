import { Store } from "@/types/types";
import { Storage } from "./storage";

export const setContext = <T extends Store>(ctx: T) => {
  const store = Storage.getStore();

  console.log("ctx", ctx);
  if (store) {
    Object.assign(store, ctx);
  }
};

export const getContext = () => {
  return Storage.getStore();
};
