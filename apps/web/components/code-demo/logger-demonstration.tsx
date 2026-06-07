import { CodeBlock } from "@tinylogs/ui";
import { motion } from "motion/react";
import { CopyButton } from "../copy-button";
import { IconTerminal, IconTerminal2 } from "@tabler/icons-react";

export const LoggerDemonstration = ({ code }: { code: string }) => {
  const logs = [
    "requestId 404abdfc-4c97-4fae-a07c-5a41aaa276ee",
    "Validating request (x3)",
    "Fetching cart & pricing (x4)",
    "Loading cart items",
    "Calculating totals",
    "Applying active discounts",
    "Inventory missing in cache",
    "Fallback to DB lookup (x2)",
    "Loading inventory from database",
    "Inventory reserved",
    "Creating order",
    "Fallback to DB lookup",
    "Persisting order record (x2)",
    "Publishing order.created event",
    "Order created",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <CodeBlock
        code={code}
        className="w-full rounded-b-none border-b-0 lg:rounded-r-none lg:border-b lg:border-r-0 lg:rounded-bl-xl"
      >
        <CopyButton className="absolute top-3 right-3 " value={code} />
      </CodeBlock>
      <div className="border border-neutral-300 rounded-t-none rounded-b-xl lg:rounded-l-none lg:rounded-r-xl h-full min-h-max overflow-hidden">
        <div className="h-12 w-full border-b border-neutral-300 bg-slate-50 flex items-center justify-between px-4 font-geist-mono text-xs">
          <div className="flex items-center gap-2">
            <IconTerminal2 stroke={1} size={18} className="text-neutral-700" />
            <span className=" text-neutral-700 cursor-default">Terminal</span>
          </div>
          <span>server.ts</span>
        </div>
        <div className="p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs lg:text-sm text-left space-x-2 mb-4"
          >
            <span className="text-neutral-500">June 26 at 05:41:12 PM</span>
            <span className="text-yellow-600">[WARN]</span>
            <span className="text-green-600">GET /checkout</span>
            <span className="text-neutral-400">in</span>
            <span className="text-blue-600">432ms</span>
          </motion.div>

          <div className="flex flex-col gap-1 font-mono text-xs lg:text-sm">
            <div className="space-y-1">
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className="text-neutral-400">
                    {index === logs.length - 1 ? "└─" : "├─"}
                  </span>
                  <div
                    className={`flex items-center gap-x-1.5 text-neutral-600 whitespace-nowrap ${
                      log.includes("Inventory missing") ? "text-yellow-600" : ""
                    }`}
                  >
                    {log.includes("Inventory missing") && <span>⚠</span>}
                    <span>{log}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
