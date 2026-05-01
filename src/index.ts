import express, { Request, Response } from "express";
import { TinyLogError } from "./core/errors";
import { useTinyLogs } from "./logger/logger";
import { errorMiddleware } from "./middleware/error-middleware";
import { tinylogs } from "./middleware/express";
import { getUser } from "./test";
import { createError } from "./logger/create-error";

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

  logger.set("fetching users");
  const users = await getUser();
  logger.set(`fetched ${users} users`);
  // throw new TinyLogError("ERROR HU MEIN");
  // throw new TinyLogError(new Error("jod"));

  throw createError("ERror bolte bro");
  // throw new TinyLogError({
  //   message: "Payment Failed",
  //   status: 503,
  //   fix: "retry the same method with different pay id",
  //   why: "because you used development id",
  // });
  return res.json("working");
});

app.use(errorMiddleware);
app.listen(8000);
