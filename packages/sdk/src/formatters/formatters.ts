import { LOG_COLORS } from "@/constants/log-style";
import { getContext } from "@/context/context";
import { generateMetaData } from "@/output";
import { Store } from "@/types/types";
import { normalizeInputMessage } from "@/utils/flatten-log-obj";
import { styleText } from "node:util";

export const group = (store: Store) => {
  generateMetaData(getContext()?.requestId!);
  const logs = store.logs;

  return logs
    .map((log) => {
      if (typeof log.message === "string") {
        const prettyMsg =
          styleText(["gray"], "├─") +
          " " +
          styleText([LOG_COLORS[log.level]], String(log.message)) +
          " " +
          styleText(
            ["yellow"],
            log.count && log.count !== 1 ? `(x${String(log.count)})` : "",
          );

        return prettyMsg;
      }
      const logStr = normalizeInputMessage(log.message);

      if (typeof logs === "string") {
        const prettyMsg =
          styleText(["gray"], "├─") +
          " " +
          styleText([LOG_COLORS[log.level]], String(log.message));
        // console.log(prettyMsg);
        return prettyMsg;
      }
      return logStr
        .map((str) => {
          const prettyMsg =
            styleText(["gray"], "├─") +
            " " +
            styleText([LOG_COLORS[log.level]], str?.key) +
            ": " +
            styleText(["white"], String(str?.nestedStr));

          // console.log(prettyMsg);
          return prettyMsg;
        })
        .join("\n");
    })
    .join("\n");
};

export const normal = (store: Store) => {
  generateMetaData(getContext()?.requestId!);

  return store.logs
    .map((log) => {
      if (typeof log.message !== "string") {
        return JSON.stringify(log.message);
      }
      const prettyMsg =
        styleText([LOG_COLORS[log.level]], `[${log.level.toUpperCase()}]`) +
        " " +
        log.message +
        " " +
        styleText(
          ["yellow"],
          log.count && log.count !== 1 ? `(x${String(log.count)})` : "",
        );

      // return `[${log.level.toUpperCase()}] ${log.message} (x${log.count})`;

      return prettyMsg;
    })
    .join("\n");
};
