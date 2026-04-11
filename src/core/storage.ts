import { Store } from "@/types/types";
import { AsyncLocalStorage } from "node:async_hooks";

export const Storage = new AsyncLocalStorage<Store>();
