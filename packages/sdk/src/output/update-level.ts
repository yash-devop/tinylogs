import { LEVEL_PRIORITY } from "@/constants";
import { LogType, Store } from "@/types/types";

export const updateLogLevel = (store: Store, newLevel: LogType) => {
  // if(!store || !store.level){

  //   return;
  // }
  if (LEVEL_PRIORITY[newLevel] > LEVEL_PRIORITY[store.level]) {
    store.level = newLevel;
  }
};
