import { LogParameter, TinylogsType } from "@/types/types";
import { flattenLogObj } from "@/utils/flatten-log-obj";
import { prettyString } from "@/utils/pretty-string";
import { randomUUID } from "crypto";
import { generateMetaData } from "./generate-meta";

export const Tinylogs: TinylogsType = () => {
  const requestId = randomUUID();

  const set = (context: LogParameter) => {
    generateMetaData(requestId, "info");

    const logStr = flattenLogObj(context);

    logStr.forEach((str) => {
      const prettyMsg = prettyString({
        message: {
          str,
          style: "cyan",
        },
        symbol: {
          str: "├─",
        },
      });
      console.log(prettyMsg);
    });
  };

  const warn = (context: string) => {
    generateMetaData(requestId, warn.name);
    const prettyMsg = prettyString({
      message: {
        str: context,
        style: "cyan",
      },
      symbol: {
        str: "├─",
      },
    });
    console.log(prettyMsg);
  };
  return { set, warn };
};
