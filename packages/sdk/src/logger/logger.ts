import { getContext } from "@/core/context";
import { LogParameter, TinylogsType } from "@/types/types";
import { updateLevel } from "./update-level";
import { TinyLogError } from "@/core/errors";
import { Tinylogs } from "@/core/tinylogs";

export const useTinyLogs = (): TinylogsType => {
  const store = getContext();
  return new Tinylogs(store.logs);
};
