import {
  getUser
} from "./chunk-N7VZTWQO.js";
import {
  tinylogs
} from "./chunk-CEK57UGS.js";
import {
  useTinyLogs
} from "./chunk-QGSLO6VO.js";
import "./chunk-BLJ74T7Z.js";
import "./chunk-I2R2DFQS.js";
import "./chunk-L55LDJIM.js";
import "./chunk-QKXGJF2V.js";
import "./chunk-VDWADJO2.js";
import "./chunk-F3GOZR6K.js";

// src/index.ts
import express from "express";
var app = express();
app.use(express.json());
app.use(tinylogs());
app.get("/", async (req, res) => {
  const logger = useTinyLogs();
  req.log.set({
    message: "Message directly from request object."
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
        long: 0
      }
    }
  });
  logger.set({
    name: "John summit",
    role: "Producer",
    address: {
      country: "New York"
    }
  });
  logger.warn("Warning log");
  await getUser();
  return res.json("working");
});
app.listen(8e3);
