import { TinyLogError } from "@/core/errors";
import { TinyLogErrorOptions } from "@/types/types";

export const createError = (err: TinyLogErrorOptions | string) => {
  if (typeof err === "string") {
    throw new TinyLogError({
      message: err,
    });
  } else {
    throw new TinyLogError(err);
  }
};
