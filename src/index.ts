import express, { Request, Response } from "express";
import { useTinyLogs } from "./logger/logger";
import { tinylogs } from "./middleware/express";
import { getUser } from "./test";

const app = express();

app.use(express.json());
app.use(tinylogs());

app.get("/", async (req: Request, res: Response) => {
  const logger = useTinyLogs();

  req.log.set({
    message: "Message directly from request object.",
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
  logger.set({
    name: "John summit",
    role: "Producer",
    address: {
      country: "New York",
    },
  });
  logger.warn("Warning log");

  await getUser();

  return res.json("working");
});
app.listen(8000);
