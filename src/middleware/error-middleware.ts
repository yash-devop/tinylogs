import { TinyLogError } from "@/logger/create-error";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof TinyLogError) {
    req.log.error(err.message);
    return res.json(err);
  }
  if (err instanceof Error) {
    return res.json({
      name: err.name,
      message: err.message,
    });
  }
};
