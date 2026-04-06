import {
  Tinylogs
} from "./chunk-V6WTEF42.js";
import "./chunk-LTWKJRQY.js";
import "./chunk-MBV5ZDXE.js";

// src/index.ts
import express from "express";
var app = express();
app.use(express.json());
app.get("/", (req, res) => {
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
          age: 40
        }
      },
      2: {
        vote: true
      }
    }
  });
  logger.set({
    name: "yash",
    age: 23,
    address: {
      state: "maharashtra",
      city: "mumbai",
      pincode: 410206
    }
  });
  logger.set("2nd");
  logger.set("3rd");
  logger.set("4th");
  logger.warn("dsa");
  return res.json("working");
});
app.listen(8e3);
