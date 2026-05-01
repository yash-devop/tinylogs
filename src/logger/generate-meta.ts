import { getContext } from "@/core/context";
import { LOG_COLORS, LOG_LEVEL } from "@/utils/log-style";
import { styleText } from "node:util";

export const generateMetaData = (requestId: string) => {
  const store = getContext();
  if (!store) {
    console.warn("no store context");
    return;
  }

  const { method, route, startTime, level } = store;

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
    styleText([LOG_COLORS[level]], `[${level.toUpperCase()}]`),
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
