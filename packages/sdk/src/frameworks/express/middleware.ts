import { setContext } from "@/context/context";
import { Storage } from "@/context/storage";
import { finalizeRequest } from "@/core/finalize-request";
import { useTinyLogs } from "@/frameworks/express";
import { getDefinedConfig } from "@/plugins";
import { mergePlugins } from "@/plugins/merge-plugins";
import { Method, Store, TinylogsType } from "@/types/types";
import { NextFunction, Request, Response } from "express";
import { randomUUID } from "node:crypto";

export const tinylogs = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const store = {
      requestId: randomUUID(),
    } as Store;

    Storage.run(store, () => {
      const startTime = performance.now();
      const { globalConfig: globalPlugins } = getDefinedConfig();
      setContext({
        method: req.method as Method,
        route: req.path,
        statusCode: req.statusCode ?? "404",
        requestId: store.requestId,
        startTime,
        level: "info",
        logs: [],
        plugins: mergePlugins(globalPlugins ?? [], []),
      });

      res.on("finish", () => {
        finalizeRequest(store);
      });

      req.log = useTinyLogs({
        plugins: store.plugins,
      });
      next();
    });
  };
};

declare global {
  namespace Express {
    interface Request {
      log: TinylogsType;
    }
  }
}
