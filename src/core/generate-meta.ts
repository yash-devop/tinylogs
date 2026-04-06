import { LevelsType, Type } from "@/types/types";
import { styleText } from "node:util";

const RequestMap = new Map<string, boolean>();

const LEVELS: LevelsType = {
  info: "INFO",
  warn: "WARN",
  error: "ERROR",
};

export const generateMetaData = (requestId: string, type: Type = "info") => {
  if (RequestMap.has(requestId)) {
    return;
  }

  RequestMap.set(requestId, true);
  const date = new Date();
  const intl = new Intl.DateTimeFormat("en-US");

  const formattedDate = intl.format(date);
  console.log(styleText(["gray"], formattedDate), LEVELS[type], " in", `12 ms`);
  console.log(
    styleText(["gray"], "├─ ") +
      styleText(["yellow"], "requestId ") +
      requestId,
  );
};
// 13:00:08.201 INFO [app] GET / 200 in 5ms
