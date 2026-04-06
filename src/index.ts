import express, { Request, Response } from "express";
import { Tinylogs } from "./core/tinylogs";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const logger = Tinylogs();
  logger.set({
    name: "yash",
    age: 23,
    address: {
      state: "maharashtra",
      city: "mumbai",
      pincode: 400104,
      building: {
        wing: "b",
        room: 402,
        owner: {
          name: "paaji",
          age: 40,
        },
      },
      2: {
        vote: true,
      },
    },
  });
  logger.set({
    name: "yash",
    age: 23,
    address: {
      state: "maharashtra",
      city: "mumbai",
      pincode: 410206,
    },
  });
  logger.set("2nd");
  logger.set("3rd");
  logger.set("4th");
  logger.warn("dsa");

  return res.json("working");
});

app.listen(8000);
