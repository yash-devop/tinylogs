import { getContext } from "@/core/context";
import { LevelsType, Type } from "@/types/types";
import { LOG_STYLE } from "@/utils/log-style";
import { styleText } from "node:util";

const RequestMap = new Map<string, boolean>();

const LEVELS: LevelsType = {
  info: "INFO",
  warn: "WARN",
  error: "ERROR",
};

export const generateMetaData = (requestId: string, type: Type = "info") => {
  const store = getContext();
  if (!store) {
    console.warn("no store context");
    return;
  }

  const { method, route, startTime } = store;
  if (RequestMap.has(requestId)) {
    return;
  }

  RequestMap.set(requestId, true);
  const date = new Date();
  const intl = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
    month: "long",
    year: "2-digit",
  });

  const formattedDate = intl.format(date);
  const responseTime = performance.now() - startTime;
  console.log(
    styleText(["gray"], formattedDate),
    styleText([LOG_STYLE[type]], `[${LEVELS[type]}]`),
    method,
    route,
    "in",
    `${Math.round(responseTime)} ms`,
  );
  console.log(
    styleText(["gray"], "├─ ") +
      styleText(["yellow"], "requestId ") +
      requestId,
  );
};
