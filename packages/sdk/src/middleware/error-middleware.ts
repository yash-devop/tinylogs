import { TinyLogError } from "@/core/errors";
import { useTinyLogs } from "@/logger/logger";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const logger = useTinyLogs();
  if (err instanceof TinyLogError) {
    logger.error(err);
    return res.status(err.status ?? 500).json({
      name: err.name,
      message: err.message,
      why: err.why,
      fix: err.fix,
      link: err.link,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      name: err.name,
      message: err.message,
    });
  }
};
