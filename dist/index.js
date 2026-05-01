import {
  errorMiddleware
} from "./chunk-6MMSJOXM.js";
import {
  tinylogs
} from "./chunk-X4O6LOCM.js";
import {
  getUser
} from "./chunk-RANMZJDM.js";
import "./chunk-7ZK2A6ZF.js";
import "./chunk-UI2SU2NQ.js";
import {
  TinyLogError
} from "./chunk-ARG3R73F.js";
import "./chunk-F4NCMQWD.js";
import "./chunk-XKC2T3YM.js";
import {
  useTinyLogs
} from "./chunk-NQUISDFW.js";
import "./chunk-7AWXYSQG.js";
import "./chunk-SYOW6WOI.js";
import "./chunk-VDWADJO2.js";

// src/index.ts
import express from "express";
var app = express();
app.use(express.json());
app.use(tinylogs());
app.get("/", async (req, res) => {
  const logger = useTinyLogs();
  console.log("start");
  req.log.set({
    message: "Message directly from request object."
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
        long: 0
      }
    }
  });
  console.log("end");
  logger.set({
    name: "John summit",
    role: "Producer",
    address: {
      country: "New York"
    }
  });
  console.log("end2");
  logger.warn("Warning log");
  await getUser();
  throw new TinyLogError({
    message: "Payment Failed",
    status: 503,
    fix: "retry the same method with different pay id",
    why: "because you used development id"
  });
  return res.json("working");
});
app.use(errorMiddleware);
app.listen(8e3);
