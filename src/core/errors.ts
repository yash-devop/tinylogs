import { setContext } from "@/core/context";
import { TinyLogErrorOptions } from "@/types/types";

export class TinyLogError extends Error {
  status?: number;
  why?: string;
  fix?: string;
  link?: string;
  stack?: Error["stack"];

  constructor(options: TinyLogErrorOptions | string) {
    console.log("options", options);

    if (typeof options === "string") {
      super(options);
    } else {
      super(options.message);
      this.status = options.status ?? 500;
      this.why = options.why;
      this.fix = options.fix;
      this.link = options.link;
      this.stack = options.stack;
      setContext({
        errors: options,
      });
    }
    this.name = "TinyLogError";
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TinyLogError);
    }
  }
}
