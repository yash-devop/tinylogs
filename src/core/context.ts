import { Store } from "@/types/types";
import { Storage } from "./storage";

export const setContext = <T extends Partial<Store>>(ctx: T) => {
  const store = Storage.getStore();

  if (store) {
    Object.assign(store, ctx);
  }
};

export const getContext = () => {
  return Storage.getStore();
};
