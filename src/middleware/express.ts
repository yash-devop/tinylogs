import { setContext } from "@/core/context";
import { Storage } from "@/core/storage";
import { generateMetaData } from "@/logger/generate-meta";
import { useTinyLogs } from "@/logger/logger";
import { Method, Store, TinylogsType } from "@/types/types";
import { NextFunction, Request, Response } from "express";
import { randomUUID } from "node:crypto";

export const tinylogs = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const store = {
      requestId: randomUUID(),
    } as Store;

    Storage.run(store, () => {
      const loggerMethods = useTinyLogs();
      const startTime = performance.now();
      setContext({
        method: req.method as Method,
        route: req.path,
        statusCode: req.statusCode ?? "404",
        requestId: store.requestId,
        startTime,
      });
      generateMetaData(store.requestId, "error");

      req.log = { ...loggerMethods };
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
