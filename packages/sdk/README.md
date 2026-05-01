# TinyLogs

Minimal request-scoped logging SDK for Node.js and Express.

TinyLogs helps you create structured, grouped, colorful logs with request tracking using `AsyncLocalStorage`.

---

# Features

* Request-scoped logging
* Express middleware support
* Async context tracking
* Structured logs
* Colored CLI output
* Tiny bundle size
* TypeScript support
* ESM + CommonJS support
* Custom error handling

---

# Installation

```bash
npm i @yash-devop/tinylogs
```

Peer dependency:

```bash
npm i express
```

---

# Quick Start

## Setup middleware

```ts
import express from "express";
import { tinylogs } from "@yash-devop/tinylogs";

const app = express();

app.use(express.json());
app.use(tinylogs());
```

---

## Logging inside routes

```ts
import { useTinyLogs } from "@yash-devop/tinylogs";

app.get("/", async (req, res) => {
  const logger = useTinyLogs();

  logger.set({
    user: "Yash",
    role: "Fullstack Engineer",
  });

  logger.warn("Payment service latency detected");

  res.json({ success: true });
});
```

---

# Example Output

```bash
April 26 at 11:14:58 PM [INFO] GET / in 56 ms
├─ requestId: 63cb2b9d-3b1d-46d4-b2e7-8e3f4c9c6e13
├─ user: Yash
├─ role: Fullstack Engineer
├─ Payment service latency detected
```

---

# Error Logging

TinyLogs includes a built-in custom error class.

```ts
import { TinyLogError } from "@yash-devop/tinylogs";

throw new TinyLogError({
  message: "Payment Failed",
  status: 503,
  why: "Invalid payment id",
  fix: "Retry with valid payment credentials",
});
```

---

# Error Middleware

```ts
import { errorMiddleware } from "@yash-devop/tinylogs";

app.use(errorMiddleware);
```

---

# API

## `tinylogs()`

Express middleware that initializes request-scoped logging.

---

## `useTinyLogs()`

Returns logger methods:

```ts
const logger = useTinyLogs();
```

### Methods

#### `logger.set()`

```ts
logger.set({
  user: "Yash",
});
```

#### `logger.warn()`

```ts
logger.warn("Something looks suspicious");
```

#### `logger.error()`

Used internally by TinyLogs error handling.

---

# TypeScript Support

TinyLogs ships with built-in TypeScript types.

No additional typings required.

---

# Example Project Structure

```txt
src/
├── middleware/
├── logger/
├── routes/
└── server.ts
```

---

# Why TinyLogs?

Most loggers are either:

* too noisy
* hard to read
* overly configurable
* difficult to setup

TinyLogs focuses on:

* simplicity
* request grouping
* clean developer experience
* readable terminal output

---

# Roadmap

* Pretty log themes
* File transports
* JSON logging mode
* Better async log grouping
* Framework adapters
* Browser/devtools support

---

# License

MIT
