let lastLog = "";
let count = 0;

function log(message: string) {
  if (message === lastLog) {
    count++;

    process.stdout.write(`\r${message} (x${count})`);
  } else {
    if (lastLog) {
      process.stdout.write("\n");
    }

    lastLog = message;
    count = 1;

    process.stdout.write(message);
  }
}

log("Redis connected");

setTimeout(() => log("Redis connected"), 500);
setTimeout(() => log("Redis connected"), 1000);
setTimeout(() => log("DB ready"), 1500);
setTimeout(() => log("DB ready"), 2000);
setTimeout(() => log("Redis connected"), 3000);
setTimeout(() => log("Redis connected"), 5000);
setTimeout(() => log("Redis connected"), 3000);
