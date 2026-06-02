import { getContext } from "@/context/context";
import { Store } from "@/types/types";
import { normalizeInputMessage } from "@/utils/flatten-log-obj";
import { LOG_COLORS } from "@/constants/log-style";
import { styleText } from "node:util";
import { generateMetaData } from "./generate-meta";

export const printRequestLogs = (store: Store) => {
  generateMetaData(getContext()?.requestId!);

  const logs = store.logs;
  logs.forEach((log) => {
    if (typeof log.message === "string") {
      const prettyMsg =
        styleText(["gray"], "├─") +
        " " +
        styleText([LOG_COLORS[log.level]], String(log.message));
      console.log(prettyMsg);
      return;
    }
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
  });
};
