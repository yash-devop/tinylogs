import {
  tinylogs,
  useTinyLogs,
  createStandaloneLogger,
} from "@yash-devop/tinylog";
import express, { Request, Response } from "express";
const app = express();

app.use(express.json());
app.use(tinylogs());

const run = createStandaloneLogger();

app.get("/", async (req: Request, res: Response) => {
  const logger = useTinyLogs();
  run.set("start");
  req.log.set({
    message: "Message directly from request object.",
  });

  run.set("Mid");
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
  run.set("end");

  logger.set({
    name: "John summit",
    role: "Producer",
    address: {
      country: "New York",
    },
  });
  console.log("end2");

  logger.warn("Warning log");

  logger.set("fetching users");

  setTimeout(() => {
    run.set("timeout res.");
  }, 4000);
  // throw new TinyLogError({
  //   message: "Payment Failed",
  //   status: 503,
  //   fix: "retry the same method with different pay id",
  //   why: "because you used development id",
  // });

  run.print();
  return res.json("working");
});

// app.use(errorMiddleware);
app.listen(8000, () => {
  run.set("Server started successfully");
});
