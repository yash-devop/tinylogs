"use client";
import {
  IconCreditCard,
  IconHours24,
  IconProgressDown,
  IconServer,
} from "@tabler/icons-react";
import { IDEStructure } from "./ide";
import { ServiceCube } from "./services-cube";

import { motion } from "motion/react";
import { useState } from "react";
import { FlowType } from "../../types/types";

export const LogsFlowWorkArea = () => {
  const [changeUi, setChangeUi] = useState<FlowType["type"]>("old");
  return (
    <>
      <div className="hidden lg:grid relative w-fit grid-cols-[auto_auto_auto_auto] gap-x-12 mx-auto pb-40 min-h-[420px] pl-12">
        <ServiceCube name="API Server" Icon={IconServer}>
          <motion.svg
            width="237"
            height="118"
            viewBox="0 0 237 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-14 -z-10"
          >
            <defs>
              <motion.linearGradient
                id="line-gradient-1"
                gradientUnits="userSpaceOnUse"
                initial={{
                  x1: -300,
                  y1: -118,
                  x2: -270,
                  y2: -103,
                }}
                animate={{
                  x1: 237,
                  y1: 118,
                  x2: 267,
                  y2: 133,
                }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                <stop
                  offset="0"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="0.5"
                  stopColor="var(--color-primary)"
                  stopOpacity="1"
                />
                <stop
                  offset="1"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />
              </motion.linearGradient>
            </defs>

            <motion.path
              d="M0.5 0V39.4841C0.5 43.4988 3.47556 46.8917 7.45593 47.4156L226.436 76.241C231.909 76.9614 236 81.6267 236 87.1469V117.5"
              stroke="url(#line-gradient-1)"
              strokeMiterlimit="16"
            />
          </motion.svg>
        </ServiceCube>
        <ServiceCube name="Workers Service" Icon={IconHours24}>
          <svg
            width="111"
            height="118"
            viewBox="0 0 111 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-14 -z-10"
          >
            <defs>
              <motion.linearGradient
                id="line-gradient-2"
                gradientUnits="userSpaceOnUse"
                initial={{
                  x1: -300,
                  y1: -118,
                  x2: -270,
                  y2: -103,
                }}
                animate={{
                  x1: 237,
                  y1: 118,
                  x2: 267,
                  y2: 133,
                }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                <stop
                  offset="0"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="0.5"
                  stopColor="var(--color-primary)"
                  stopOpacity="1"
                />
                <stop
                  offset="1"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />
              </motion.linearGradient>
            </defs>
            <path
              d="M0.5 0V38.0416C0.5 44.6297 5.42822 50.1763 11.9705 50.9514L94.6177 60.7428C103.676 61.816 110.5 69.4959 110.5 78.6178V117.5"
              stroke="url(#line-gradient-2)"
              strokeMiterlimit="16"
            />
          </svg>
        </ServiceCube>
        <ServiceCube name="Background jobs" Icon={IconProgressDown}>
          <svg
            width="116"
            height="124"
            viewBox="0 0 116 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-16 -z-10"
          >
            <defs>
              <motion.linearGradient
                id="line-gradient-3"
                gradientUnits="userSpaceOnUse"
                animate={{
                  x1: [400, -300, -300],
                  y1: [-124, 124, 124],
                  x2: [370, -330, -330],
                  y2: [-109, 139, 139],
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  //   times: [0, 0.71, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <stop
                  offset="0"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />
                <stop
                  offset="0.5"
                  stopColor="var(--color-primary)"
                  stopOpacity="1"
                />
                <stop
                  offset="1"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />
              </motion.linearGradient>
            </defs>
            <path
              d="M115.5 0V42.0881C115.5 48.6167 110.658 54.1327 104.184 54.9785L16.1679 66.4791C7.20445 67.6503 0.5 75.2878 0.5 84.3274V124"
              stroke="url(#line-gradient-3)"
              strokeMiterlimit="16"
            />
          </svg>
        </ServiceCube>
        <ServiceCube name="Payment Service" Icon={IconCreditCard}>
          <svg
            width="237"
            height="118"
            viewBox="0 0 237 118"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[6.25rem] -z-10"
          >
            <defs>
              <motion.linearGradient
                id="line-gradient-4"
                gradientUnits="userSpaceOnUse"
                animate={{
                  x1: [400, -300, -300],
                  y1: [-118, 118, 118],
                  x2: [370, -330, -330],
                  y2: [-103, 133, 133],
                }}
                transition={{
                  duration: 3.5,
                  ease: "linear",
                  times: [0, 0.71, 1],
                  repeat: Infinity,
                }}
              >
                <stop
                  offset="0"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />

                <stop
                  offset="0.5"
                  stopColor="var(--color-primary)"
                  stopOpacity="1"
                />

                <stop
                  offset="1"
                  stopColor="var(--color-neutral-500)"
                  stopOpacity="0.2"
                />
              </motion.linearGradient>
            </defs>

            <path
              d="M236 0V39.4841C236 43.4988 233.024 46.8917 229.044 47.4156L10.0644 76.241C4.5914 76.9614 0.5 81.6267 0.5 87.1469V117.5"
              stroke="url(#line-gradient-4)"
              strokeMiterlimit="16"
              fill="none"
            />
          </svg>
        </ServiceCube>
        <IDEStructure type={changeUi} changeType={setChangeUi} />
      </div>
    </>
  );
};

// mobile
{
  /* <div className="flex flex-col relative lg:hidden gap-y-3">
        <div className="flex items-center gap-x-3">
          <ServiceCube name="API Server" Icon={IconServer} />
          <ServiceCube name="Workers Service" Icon={IconHours24} />
        </div>
        <div className="flex items-center gap-x-3">
          <ServiceCube name="Background jobs" Icon={IconProgressDown} />
          <ServiceCube name="Payment Service" Icon={IconCreditCard} />
        </div>
      </div> */
}
