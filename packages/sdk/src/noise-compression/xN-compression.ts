import { LogParameter } from "@/types/types";

let lastLog: LogParameter = "";

let count = 0;
export function xNCompression(message: LogParameter) {
  if (message === lastLog) {
    count++;

    process.stdout.write(`\r${message} (x${count})\n`);
  } else {
    if (lastLog) {
      process.stdout.write("\n");
    }

    lastLog = message;
    count = 1;

    process.stdout.write(`${message}`);
  }
}
