import { setContext } from "@/core/context";
import { TinyLogErrorOptions } from "@/types/types";

export class TinyLogError extends Error {
  status?: number;
  why?: string;
  fix?: string;
  link?: string;

  constructor(options: TinyLogErrorOptions) {
    super(options.message);
    this.name = "TinyLogError";
    this.status = options.status ?? 500;
    this.why = options.why;
    this.fix = options.fix;
    this.link = options.link;

    setContext({
      errors: options,
    });
  }
}

// TODO: PENDING !!
export const createError = () => {
  return;
};
