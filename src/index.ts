import express, { Request, Response } from "express";
import { TinyLogError } from "./logger/create-error";
import { useTinyLogs } from "./logger/logger";
import { tinylogs } from "./middleware/express";
import { getUser } from "./test";
import { errorMiddleware } from "./middleware/error-middleware";

const app = express();

app.use(express.json());
app.use(tinylogs());

app.get("/", async (req: Request, res: Response) => {
  const logger = useTinyLogs();

  console.log("start");
  req.log.set({
    message: "Message directly from request object.",
  });
  console.log("mid");
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
  console.log("end");
  logger.set({
    name: "John summit",
    role: "Producer",
    address: {
      country: "New York",
    },
  });
  console.log("end2");

  logger.warn("Warning log");

  await getUser();
  throw new TinyLogError({
    message: "Payment Failed",
    status: 503,
    fix: "retry the same method with different pay id",
    why: "because you used development id",
  });

  return res.json("working");
});

app.use(errorMiddleware);
app.listen(8000);
