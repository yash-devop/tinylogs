"use client";
import { AnimatePresence } from "motion/react";
import { useAnimationInterval } from "../../hooks/useAnimationInterval";
import { cn } from "../../utils/cn";
import * as CodeBlock from "../code-block";
import { motion } from "motion/react";
import { IconAlertCircle, IconCheck } from "@tabler/icons-react";
import React from "react";

type ContextExampleStatus = {
  id: number | string;
  name: string;
  jsx: React.ReactNode;
  color?: string;
  background?: string;
};

export const SetContextSection = () => {
  const iterableArray: ContextExampleStatus[] = [
    {
      id: 1,
      name: "200",
      jsx: (
        <pre className="overflow-x-auto p-6 text-sm leading-7 text-left font-geist-mono">
          <span className="text-stone-500">May 26 at 06:40:20 PM</span>{" "}
          <span className="text-cyan-400">[INFO]</span>{" "}
          <span className="text-stone-200">GET / in 31 ms</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">requestId</span>{" "}
          <span className="text-stone-500">
            001cefcd-c130-4bcc-a1e7-aee381565953
          </span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">userId</span>
          <span className="text-stone-500">:</span>{" "}
          <span className="text-emerald-400">usr_29</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">plan</span>
          <span className="text-stone-500">:</span>{" "}
          <span className="text-emerald-400">premium</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">paymentId</span>
          <span className="text-stone-500">:</span>{" "}
          <span className="text-emerald-400">pay_dev_421</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-stone-200">
            Processing subscription payment
          </span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-cyan-400">Subscription activated</span>
          <div className="flex items-start gap-2 border-t border-stone-800 pt-6 pb-2 mt-10 text-xs text-stone-500 select-none">
            <IconCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />

            <div className="space-y-1">
              <span className="block text-stone-300">
                Request completed successfully
              </span>

              <span className="block">
                TinyLogs attached requestId, userId, plan and payment context
                automatically.
              </span>
            </div>
          </div>
        </pre>
      ),
      color: "text-emerald-500",
      background: "bg-emerald-500/20",
    },
    {
      id: 2,
      name: "503",
      jsx: (
        <pre className="overflow-x-auto p-6 text-sm leading-7 text-left font-geist-mono">
          <span className="text-stone-500">May 26 at 06:42:50 PM</span>{" "}
          <span className="text-rose-400">[ERROR]</span>{" "}
          <span className="text-stone-200">GET / in 79 ms</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">requestId</span>{" "}
          <span className="text-stone-500">
            9fd7b4e4-adb3-4b2d-a46d-5f35b6d44d16
          </span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">userId</span>
          <span className="text-stone-500">:</span>{" "}
          <span className="text-emerald-400">usr_29</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">plan</span>
          <span className="text-stone-500">:</span>{" "}
          <span className="text-emerald-400">premium</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-amber-300">paymentId</span>
          <span className="text-stone-500">:</span>{" "}
          <span className="text-emerald-400">pay_dev_421</span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-stone-200">
            Processing subscription payment
          </span>
          {"\n"}
          <span className="text-stone-500">├─</span>{" "}
          <span className="text-rose-400">error:</span>{" "}
          <span className="text-amber-300">name</span>
          <span className="text-stone-500">=</span>
          <span className="text-emerald-400">"TinyLogError"</span>{" "}
          <span className="text-amber-300">message</span>
          <span className="text-stone-500">=</span>
          <span className="text-emerald-400">"Payment Failed"</span>
          {"\n   "}
          <span className="text-amber-300">status</span>
          <span className="text-stone-500">=</span>
          <span className="text-cyan-400">"503"</span>{" "}
          <span className="text-amber-300">why</span>
          <span className="text-stone-500">=</span>
          <span className="text-emerald-400">
            "because you used development id"
          </span>
          {"\n   "}
          <span className="text-amber-300">fix</span>
          <span className="text-stone-500">=</span>
          <span className="text-emerald-400">
            "retry the same method with different pay id"
          </span>
          <div className="border-t border-stone-800 pt-6 pb-2 mt-10">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <div className="flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-rose-400">
                <IconAlertCircle size={14} />
                <span>status: 503</span>
              </div>

              <div className="rounded-full border border-stone-700 bg-stone-900 px-3 py-1 text-stone-300">
                userId: usr_29
              </div>

              <div className="rounded-full border border-stone-700 bg-stone-900 px-3 py-1 text-stone-300">
                paymentId: pay_dev_421
              </div>

              <div className="rounded-full border border-stone-700 bg-stone-900 px-3 py-1 text-stone-300">
                why: development id used
              </div>

              <div className="rounded-full border border-stone-700 bg-stone-900 px-3 py-1 text-stone-300">
                fix: retry with valid pay id
              </div>
            </div>
          </div>
        </pre>
      ),
      color: "text-red-500",
      background: "bg-red-500/20",
    },
  ];

  const { renderActiveElement, currentActive, setCurrentActive } =
    useAnimationInterval<ContextExampleStatus>({
      data: iterableArray,
    });

  const JSX = renderActiveElement?.jsx;
  return (
    <div className="flex w-full h-full flex-col gap-2 px-2 pb-5 lg:flex-row">
      <CodeBlock.Root className="min-w-0 flex-1">
        <CodeBlock.Header>
          <CodeBlock.Dots />
          <CodeBlock.Filename>checkout.payment.ts</CodeBlock.Filename>
        </CodeBlock.Header>

        <CodeBlock.Body className="min-w-0">
          <CodeBlock.Pre className="overflow-x-auto p-6 text-sm leading-7 text-left font-geist-mono">
            <span className="text-fuchsia-400">import</span>{" "}
            <span className="text-stone-200">{`{ logger, TinyLogError }`}</span>{" "}
            <span className="text-fuchsia-400">from</span>{" "}
            <span className="text-emerald-400">"@yash-devop/tinylog"</span>
            {"\n\n"}
            <span className="text-stone-200">logger.</span>
            <span className="text-sky-400">set</span>
            <span className="text-stone-200">({`{`}</span>
            {"\n  "}
            <span className="text-amber-300">userId</span>
            <span className="text-stone-500">:</span>{" "}
            <span className="text-emerald-400">"usr_29"</span>
            <span className="text-stone-200">,</span>
            {"\n  "}
            <span className="text-amber-300">plan</span>
            <span className="text-stone-500">:</span>{" "}
            <span className="text-emerald-400">"premium"</span>
            <span className="text-stone-200">,</span>
            {"\n  "}
            <span className="text-amber-300">paymentId</span>
            <span className="text-stone-500">:</span>{" "}
            <span className="text-emerald-400">"pay_dev_421"</span>
            {"\n"}
            <span className="text-stone-200">{`})`}</span>
            {"\n"}
            <span className="text-stone-200">logger.</span>
            <span className="text-sky-400">set</span>
            <span className="text-stone-200">(</span>
            <span className="text-emerald-400">
              "Processing subscription payment"
            </span>
            <span className="text-stone-200">)</span>
            {"\n"}
            <span className="text-fuchsia-400">try</span>{" "}
            <span className="text-stone-200">{`{`}</span>
            {"\n  "}
            <span className="text-fuchsia-400">await</span>{" "}
            <span className="text-stone-200">processPayment()</span>
            {"\n  "}
            <span className="text-stone-200">logger.</span>
            <span className="text-cyan-400">set</span>
            <span className="text-stone-200">(</span>
            <span className="text-emerald-400">"Subscription activated"</span>
            <span className="text-stone-200">)</span>
            {"\n"}
            <span className="text-stone-200">{`}`}</span>{" "}
            <span className="text-fuchsia-400">catch</span>
            <span className="text-stone-200"> (</span>
            <span className="text-amber-300">error</span>
            <span className="text-stone-200">) {`{`}</span>
            {"\n  "}
            <span className="text-fuchsia-400">throw new</span>{" "}
            <span className="text-rose-400">TinyLogError</span>
            <span className="text-stone-200">({`{`}</span>
            {"\n    "}
            <span className="text-amber-300">message</span>
            <span className="text-stone-500">:</span>{" "}
            <span className="text-emerald-400">"Payment Failed"</span>
            <span className="text-stone-200">,</span>
            {"\n    "}
            <span className="text-amber-300">status</span>
            <span className="text-stone-500">:</span>{" "}
            <span className="text-cyan-400">503</span>
            <span className="text-stone-200">,</span>
            {"\n    "}
            <span className="text-amber-300">fix</span>
            <span className="text-stone-500">:</span>{" "}
            <span className="text-emerald-400">
              "retry the same method with different pay id"
            </span>
            <span className="text-stone-200">,</span>
            {"\n    "}
            <span className="text-amber-300">why</span>
            <span className="text-stone-500">:</span>{" "}
            <span className="text-emerald-400">
              "because you used development id"
            </span>
            {"\n  "}
            <span className="text-stone-200">{`}`})</span>
            {"\n"}
            <span className="text-stone-200">{`}`}</span>
          </CodeBlock.Pre>
        </CodeBlock.Body>
      </CodeBlock.Root>
      <CodeBlock.Root className="min-w-0 flex-1">
        <CodeBlock.Header>
          <CodeBlock.Dots />
          <CodeBlock.SwitchContainer>
            {iterableArray?.map((item, index) => {
              const isActive = currentActive === index;

              return (
                <CodeBlock.SwitchButton
                  key={item.id}
                  value={item.name}
                  className={cn(
                    "transition-colors duration-300",
                    isActive
                      ? `${item.color} ${item.background}`
                      : "bg-stone-800 text-stone-400",
                  )}
                  onClick={() => {
                    setCurrentActive(index);
                  }}
                />
              );
            })}
          </CodeBlock.SwitchContainer>
        </CodeBlock.Header>

        <CodeBlock.Body className="min-w-0">
          <CodeBlock.Pre className="h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={renderActiveElement?.name}
                initial={{
                  opacity: 0.7,
                  filter: "blur(3px)",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0.3,
                  filter: "blur(3px)",
                }}
              >
                {renderActiveElement?.jsx}
              </motion.div>
            </AnimatePresence>
          </CodeBlock.Pre>
        </CodeBlock.Body>
      </CodeBlock.Root>
    </div>
  );
};
