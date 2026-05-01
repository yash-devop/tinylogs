import { getContext } from "@/core/context";
import { LevelsType, Store } from "@/types/types";
import { normalizeInputMessage } from "@/utils/flatten-log-obj";
import { LOG_COLORS } from "@/utils/log-style";
import { styleText } from "node:util";
import { generateMetaData } from "./generate-meta";

export const buildLogString = (store: Store) => {
  generateMetaData(getContext()?.requestId!);

  const logs = store.logs;
  for (let log of logs) {
    const logStr = normalizeInputMessage(log.message);

    if (typeof logs === "string") {
      const prettyMsg =
        styleText(["gray"], "├─") +
        " " +
        styleText([LOG_COLORS[log.level]], String(log.message));
      console.log(prettyMsg);
      return;
    }
    logStr.forEach((str) => {
      const prettyMsg =
        styleText(["gray"], "├─") +
        " " +
        styleText([LOG_COLORS[log.level]], str?.key) +
        ": " +
        styleText(["white"], String(str?.nestedStr));

      console.log(prettyMsg);
    });
  }
};
