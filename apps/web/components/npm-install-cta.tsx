"use client";
import { IconCheck } from "@tabler/icons-react";
import { useCopyClipboard } from "@tinylogs/ui";
import { AnimatePresence, motion } from "motion/react";
export const NpmInstallCTA = ({ packageName }: { packageName: string }) => {
  const { copyToClipboard, isCopied } = useCopyClipboard();
  return (
    <AnimatePresence>
      <motion.button
        className="px-4 py-2 cursor-pointer rounded-xl ring-offset-2 ring-offset-rose-400 ring ring-rose-500 bg-linear-to-b from-rose-400 from-0% via-0% via-primary to-rose-400 to-80% text-white hover:ring-offset-rose-300/70 transition-all duration-200 text-shadow-lg flex items-center gap-2 text-sm"
        onClick={() => {
          copyToClipboard(packageName);
        }}
      >
        <span>npm i @yash-devop/tinylog</span>

        {isCopied && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            className="bg-neutral-800 border border-emerald-400/40 rounded-full p-1"
          >
            <IconCheck className="text-emerald-400 size-3" />
          </motion.div>
        )}
      </motion.button>
    </AnimatePresence>
  );
};
