import {
  errorMiddleware
} from "./chunk-76M472UZ.js";
import {
  tinylogs
} from "./chunk-3LXT2OML.js";
import {
  getUser
} from "./chunk-X4BLZX2L.js";
import "./chunk-EFEQ42PX.js";
import "./chunk-UI2SU2NQ.js";
import {
  TinyLogError
} from "./chunk-ARG3R73F.js";
import "./chunk-F4NCMQWD.js";
import "./chunk-XKC2T3YM.js";
import {
  useTinyLogs
} from "./chunk-54NNCMIF.js";
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
  logger.set("fetching users");
  const users = await getUser();
  logger.set(`fetched ${users} users`);
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
