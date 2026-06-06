import {
  defineConfig,
  tinylogs,
  useTinyLogs,
  xNCompression,
  group,
} from "@yash-devop/tinylog";
import express, { Request, Response } from "express";
const app = express();

app.use(express.json());
app.use(tinylogs());

defineConfig({
  plugins: [xNCompression()],
});

// const run = createStandaloneLogger();

app.get("/", async (req: Request, res: Response) => {
  const logger = useTinyLogs({
    formatter: group,
  });
  req.log.set({
    message: "Message directly from request object.",
  });

  logger.set("user fetched");
  logger.set("user fetched");
  logger.set("user fetched");
  logger.set("user fetched");
  logger.set("user fetched xyz");
  logger.set("user fetched xyz");
  logger.set("user fetched xyz");
  logger.set("user fetched xyz");
  logger.set("user fetched xyz");
  logger.set("user fetched");
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

  // objects form.

  // logger.set({
  //   msg: "api request"
  // })
  // logger.set({
  //   msg: "api request"
  // })
  // logger.set({
  //   msg: "api request"
  // })
  // logger.set({
  //   msg: "api request"
  // })

  return res.json("working");
});

// app.use(errorMiddleware);
app.listen(8000, () => {
  console.log("serverstarted");
  // run.set("Server started successfully");
});
