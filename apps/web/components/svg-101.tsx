"use client";

import { motion, Variants } from "motion/react";

export const SVGAnimations = () => {
  return (
    <>
      <main className="h-screen bg-gray-50 max-w-4xl mx-auto flex items-center flex-col my-20 [--color-line:var(--color-neutral-300)]">
        <SVGLines />
      </main>
    </>
  );
};

const SVGLines = () => {
  return (
    <>
      <motion.div className="flex justify-between items-center w-full max-w-md">
        <div className="flex flex-col justify-between gap-8">
          <div className="relative text-sm">
            Meeting Summarizer
            <TopSVG className="absolute left-32 top-2.5" />
          </div>
          <div className="relative text-sm">
            Meeting Summarizer
            <MiddleSVG className="absolute left-32 top-2.5" />
          </div>
          <div className="relative text-sm">
            Meeting Summarizer
            <BottomSVG className="absolute left-32 -top-3.5" />
          </div>
        </div>
        <div className="size-20 rounded-sm bg-neutral-100 relative z-20 p-px relative overflow-hidden">
          <div className="w-full h-full bg-white rounded-[3px] flex items-center justify-center text-sm">
            SERVER
          </div>

          <motion.div
            className="absolute inset-0 -z-10 scale-[1.4] [background-image:conic-gradient(at_center,transparent,var(--color-blue-400)_20%,transparent_30%)]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 2,
              delay: 2,
            }}
          />

          {/* Red conic */}
          <motion.div
            className="absolute inset-0 -z-10 scale-[1.4] [background-image:conic-gradient(at_center,transparent,var(--color-red-400)_20%,transparent_30%)]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 2,
              delay: 3,
            }}
          />
        </div>
      </motion.div>
    </>
  );
};

const TopSVG = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="266"
      height="27"
      viewBox="0 0 266 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="lineGradient"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <stop stopColor="var(--color-line)" />
          <stop offset="0.33" stopColor="var(--color-line)" />
          <stop offset="0.66" stopColor="var(--color-red-700)" />
          <stop offset="1" stopColor="var(--color-line)" />
        </motion.linearGradient>
      </defs>

      <path d="M0 0.5H265V26.5" stroke="url(#lineGradient)" strokeWidth="1" />
    </svg>
  );
};
const MiddleSVG = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="295"
      height="1"
      viewBox="0 0 295 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="0.5" x2="295" y2="0.5" stroke="var(--color-line)" />
    </svg>
  );
};
const BottomSVG = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      width="266"
      height="27"
      viewBox="0 0 266 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 26H265V0" stroke="var(--color-line)" />
    </svg>
  );
};
