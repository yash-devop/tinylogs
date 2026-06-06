import {
  createStandaloneLogger,
  group,
  tinylogs,
  useTinyLogs,
  xNCompression,
} from "@yash-devop/tinylog";
import express, { Request, Response } from "express";
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

app.get("/new", async (req: Request, res: Response) => {
  const logger = useTinyLogs({
    formatter: group,
    plugins: [xNCompression()],
  });
  logger.set("API route here");
  return res.json("working");
});

// app.use(errorMiddleware);
app.listen(8000, () => {
  run.set("Server started successfully");
});
