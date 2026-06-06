import { printRequestLogs } from "@/output";
import { Store } from "@/types/types";

export const runRequestPipeline = (store: Store): Store => {
  let currentStore = store;

  for (const plugin of store.plugins) {
    if (!plugin.transformLogs) continue;

    currentStore = plugin.transformLogs(currentStore);
  }

  return currentStore;
};
export const finalizeRequest = (store: Store) => {
  // console.log("FINAL STORE", store);
  const finalStore = runRequestPipeline(store);

  console.log("finalStore", finalStore);

  const formatter = store.formatter;
  const output = formatter(finalStore);

  console.log(output);
  // printRequestLogs(output);
};
