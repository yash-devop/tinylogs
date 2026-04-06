import { LogParameter, TinylogsType } from "@/types/types";
import { flattenLogObj } from "@/utils/flatten-log-obj";
import { randomUUID } from "crypto";
import { styleText } from "util";
import { generateMetaData } from "./generate-meta";

export const Tinylogs: TinylogsType = () => {
  const requestId = randomUUID();

  const set = (context: LogParameter) => {
    generateMetaData(requestId, "info");

    const logStr = flattenLogObj(context);

    logStr.forEach((str) => {
      const prettyMsg =
        styleText(["gray"], "├─") + " " + styleText(["cyan"], str);

      console.log(prettyMsg);
    });
  };

  const warn = (context: string) => {
    generateMetaData(requestId, warn.name);
    const prettyMsg =
      styleText(["gray"], "├─") + " " + styleText(["cyan"], context);
    console.log(prettyMsg);
  };
  return { set, warn };
};
