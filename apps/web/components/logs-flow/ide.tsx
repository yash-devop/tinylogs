import { IconArrowLeft, IconArrowRight, IconReload } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SAMPLE_LOGS_DATA } from "../../constants";
import { FlowType, LogType } from "../../types/types";
import { cn } from "../../utils/cn";

export const IDEStructure = ({
  type,
  changeType,
}: { changeType: Dispatch<SetStateAction<FlowType["type"]>> } & FlowType) => {
  const [logs, setLogs] = useState<LogType[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [
          ...prev,
          {
            id: Math.random().toString(),
            message:
              SAMPLE_LOGS_DATA[
                Math.floor(Math.random() * SAMPLE_LOGS_DATA.length)
              ] || "",
            srNo: Math.random().toString(),
          },
        ];

        return newLogs.slice(-9);
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <AnimatePresence mode="popLayout">
      {type === "old" ? (
        <motion.div
          key="logs-old"
          initial={{
            opacity: 0,
            y: 12,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -12,
            scale: 0.985,
          }}
          transition={{
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl mx-auto bg-stone-900
      ring ring-stone-400 ring-offset-2 ring-offset-stone-700
      w-full rounded-xl overflow-hidden flex flex-col
      absolute top-36 inset-x-0 min-h-[440px] max-h-[440px]"
        >
          <IDEHeader type={type} changeType={changeType} />
          <IDENavigation />

          <div className="flex-1 overflow-hidden min-h-0 py-4 px-2">
            <AnimatePresence initial={false}>
              {logs.map((log, idx) => (
                <motion.div
                  key={log.id}
                  layout="position"
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -4,
                    scale: 0.995,
                  }}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    },
                    opacity: {
                      duration: 0.18,
                    },
                    y: {
                      duration: 0.18,
                    },
                  }}
                  className="group flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-neutral-900/60 text-xs"
                >
                  <span className="w-5 text-neutral-500 font-mono text-sm">
                    {idx + 1}
                  </span>

                  <span className="text-neutral-400 text-sm tabular-nums">
                    {log.message}
                  </span>

                  <span className="text-neutral-600 text-sm tabular-nums">
                    2 Mar 2026 • 10:42:21 PM
                  </span>

                  <span className="font-medium text-emerald-500">200</span>

                  <span
                    className="text-xs px-2 py-0.5 rounded
                bg-neutral-800 text-neutral-300
                border border-neutral-700"
                  >
                    GET
                  </span>

                  <span className="text-neutral-200 truncate">/api/health</span>

                  <span className="ml-auto text-xs text-neutral-500">42ms</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="logs-new"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.25,
          }}
          className="max-w-5xl mx-auto bg-stone-900
      ring ring-stone-400 ring-offset-2 ring-offset-stone-700
      w-full rounded-xl overflow-hidden flex flex-col
      absolute top-36 inset-x-0"
        >
          <IDEHeader type={type} changeType={changeType} />
          <IDENavigation />
          <div className="rounded-xl border border-neutral-800 bg-neutral-950  overflow-hidden font-mono text-xs">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3 px-4 py-3    border-b border-neutral-800 bg-neutral-900/50"
            >
              {" "}
              <span className="text-neutral-500 whitespace-nowrap">
                {" "}
                May 26 at 10:16:44 PM{" "}
              </span>{" "}
              <span className="px-2 py-0.5 rounded-md      bg-yellow-500/10 text-yellow-400      border border-yellow-500/20 text-xs font-semibold">
                {" "}
                WARN{" "}
              </span>{" "}
              <span className="px-2 py-0.5 rounded-md      bg-emerald-500/10 text-emerald-400      border border-emerald-500/20 text-xs font-semibold">
                {" "}
                POST{" "}
              </span>{" "}
              <span className="text-neutral-200 font-medium">
                {" "}
                /api/v1/orders/checkout{" "}
              </span>{" "}
              <span className="text-neutral-500">in</span>{" "}
              <span className="text-neutral-200">184ms</span>{" "}
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="px-4 py-5 space-y-2"
            >
              {" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">├─</span>{" "}
                <div>
                  {" "}
                  <span className="text-neutral-500"> requestId </span>{" "}
                  <span className="text-neutral-300 ml-2">
                    {" "}
                    8f3ac5c2-71c0-45fb-b6d1-92191f03c281{" "}
                  </span>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">├─</span>{" "}
                <div>
                  {" "}
                  <span className="text-neutral-500"> message: </span>{" "}
                  <span className="text-neutral-300 ml-2">
                    {" "}
                    Payment intent created and queued for confirmation.{" "}
                  </span>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">├─</span>{" "}
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500"> customer= </span>{" "}
                    <span className="text-neutral-200">
                      {" "}
                      "Priya Sharma"{" "}
                    </span>{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500"> tier= </span>{" "}
                    <span className="text-violet-400"> "premium" </span>{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500"> cartValue= </span>{" "}
                    <span className="text-emerald-400"> ₹12,480 </span>{" "}
                  </span>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">├─</span>{" "}
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500">
                      {" "}
                      paymentProvider={" "}
                    </span>{" "}
                    <span className="text-sky-400"> "stripe" </span>{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500">
                      {" "}
                      paymentMethod={" "}
                    </span>{" "}
                    <span className="text-neutral-300"> "upi" </span>{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500"> riskScore= </span>{" "}
                    <span className="text-yellow-400"> 0.12 </span>{" "}
                  </span>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">├─</span>{" "}
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500"> region= </span>{" "}
                    <span className="text-pink-400"> "ap-south-1" </span>{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500"> node= </span>{" "}
                    <span className="text-neutral-300">
                      {" "}
                      "checkout-worker-03"{" "}
                    </span>{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    <span className="text-neutral-500"> dbLatency= </span>{" "}
                    <span className="text-emerald-400"> 18ms </span>{" "}
                  </span>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">├─</span>{" "}
                <span className="text-yellow-400">
                  {" "}
                  Redis cache miss for active cart session{" "}
                </span>{" "}
              </motion.div>{" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">├─</span>{" "}
                <span className="text-neutral-400">
                  {" "}
                  BullMQ job queued for invoice generation{" "}
                </span>{" "}
              </motion.div>{" "}
              <motion.div variants={item} className="flex gap-3">
                {" "}
                <span className="text-neutral-700">└─</span>{" "}
                <span className="text-neutral-400">
                  {" "}
                  Webhook dispatched to analytics pipeline{" "}
                </span>{" "}
              </motion.div>{" "}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function IDEHeader({
  type,
  changeType,
}: { changeType: Dispatch<SetStateAction<FlowType["type"]>> } & FlowType) {
  return (
    <header className="h-12 shrink-0 w-full border-b border-stone-800 flex items-center justify-between text-stone-500 px-4">
      <div className="flex items-center gap-x-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "size-2.5 rounded-full",
              type === "old" ? "bg-neutral-500/50" : "bg-primary/50",
            )}
          />
        ))}
      </div>
      <span className="text-xs md:pl-24">
        {type === "old" ? "generic logs" : "tinylogs."}
      </span>
      <button
        onClick={() => changeType({ type: "new" })}
        className="text-xs ring ring-primary hover:bg-primary/30
         text-white px-2 py-1 flex items-center gap-x-2 cursor-pointer"
      >
        <span>Fix it with tinylogs</span>
        <IconArrowRight size={10} />
      </button>
    </header>
  );
}

function IDENavigation() {
  return (
    <div className="h-8 shrink-0 w-full border-y border-stone-700/50  flex flex-col justify-center gap-3 overflow-y-auto  min-h-0 bg-stone-800">
      <div className="flex items-center px-3 text-stone-500 gap-x-5">
        <IconArrowLeft size={18} />
        <IconArrowRight size={18} />
        <IconReload size={18} />
        <span className="text-xs tabular-nums">http://localhost:8001</span>
      </div>
    </div>
  );
}
