import { LogParameter, LogType } from "@/types/types";
import { normalizeInputMessage } from "@/utils/flatten-log-obj";
import { LOG_STYLE } from "@/utils/log-style";
import { InspectColor, styleText } from "node:util";

export const buildLogString = (
  message: LogParameter,
  type: LogType = "info",
) => {
  const logStr = normalizeInputMessage(message);

  if (typeof message === "string") {
    const prettyMsg =
      styleText(["gray"], "├─") + " " + styleText([LOG_STYLE[type]], message);
    console.log(prettyMsg);
    return;
  }
  logStr.forEach((str) => {
    const prettyMsg =
      styleText(["gray"], "├─") +
      " " +
      styleText(["cyan"], str?.key) +
      ": " +
      styleText(["white"], str?.nestedStr);

    console.log(prettyMsg);
  });
};
