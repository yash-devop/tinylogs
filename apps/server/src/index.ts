import {
  createStandaloneLogger,
  group,
  TinyLogError,
  tinylogs,
  useTinyLogs,
  xNCompression,
} from "@yash-devop/tinylog";
import express, { NextFunction, Request, Response } from "express";
const app = express();

app.use(express.json());
app.use(tinylogs());

// defineConfig({
//   plugins: [xNCompression()],
// });

const run = createStandaloneLogger();

app.get("/", async (req: Request, res: Response) => {
  const logger = useTinyLogs({
    formatter: group,
    plugins: [xNCompression()],
  });
  req.log.set({
    message: "Message directly from request object.",
  });

  run.set("runner-1");
  // run.print();

  logger.warn("user fetched");
  logger.set("user fetched");
  logger.set("YASH KAMBLE");
  logger.set("user fetched");
  logger.set("user fetched");
  logger.set("user fetched");
  logger.set("user fetched");
  logger.set("YASH KAMBLE");

  logger.set({
    msg: "Jod",
  });
  logger.set({
    name: "Yash",
    role: "Fullstack Engineer",
    address: {
      state: "maharashtra",
      city: "mumbai",
      pincode: 401020,
      street: {
        direction: "EAST",
        availableOnMaps: true,
        lat: 0,
        long: 0,
      },
    },
  });

  return res.json("working");
});

async function sleep(dur: number) {
  await new Promise((resolve) => setTimeout(resolve, dur));
}

app.get("/checkout", async (req, res) => {
  const logger = useTinyLogs({
    formatter: group,
    plugins: [xNCompression()],
  });

  logger.set("Verifying JWT token");

  await sleep(50);

  logger.set("Checking if customer exists");
  logger.set("Checking if customer exists");
  logger.set("Checking if customer exists");

  await sleep(100);

  logger.set("Subscription found");
  logger.set("Subscription found");

  await sleep(150);

  logger.warn("Inventory not found in cache");

  await sleep(75);

  logger.set("Trying database fallback");

  await sleep(200);

  logger.set("Order created successfully");

  await sleep(50);

  logger.set("Sending confirmation email");

  res.json({
    success: true,
  });
});

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

app.use(errorMiddleware);

// app.use(errorMiddleware);
app.listen(8000, () => {
  run.set("Server started successfully");
});
