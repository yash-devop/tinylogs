import { LOG_COLORS } from "@/constants/log-style";
import { LevelsType } from "@/types/types";
import { normalizeInputMessage } from "@/utils/flatten-log-obj";
import { styleText } from "node:util";

export const printStandaloneLogs = (logs: LevelsType) => {
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
