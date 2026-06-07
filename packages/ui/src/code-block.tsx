"use client";

import { IconCheck, IconClipboard, IconLoader } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { BundledTheme, codeToHtml } from "shiki";
import { useCopyClipboard } from "./hooks";
import { cn } from "./utils";

type CodeBlockProps = {
  code: string;
  lang?: string;
  theme?: BundledTheme;
  className?: string;
  children: React.ReactNode;
};

const LINE_HEIGHT_PX = 18;
const PADDING_PX = 32;

export const CodeBlock = ({
  code,
  lang = "ts",
  theme = "vitesse-light",
  className,
  children,
}: CodeBlockProps) => {
  const [codeState, setCodeState] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const lineCount = code.split("\n").length;
  const contentLength = lineCount * LINE_HEIGHT_PX + PADDING_PX;

  useEffect(() => {
    async function generateCode() {
      setIsLoading(true);
      const html = await codeToHtml(code, { lang, theme });
      if (html) {
        setCodeState(html);
        setIsLoading(false);
      }
    }
    generateCode();
  }, [code, lang, theme]);

  return (
    <div
      className={cn(
        `overflow-hidden bg-white relative w-fit rounded-xl border border-neutral-300`,
        className,
      )}
      style={{ minHeight: contentLength }}
    >
      <div
        className={`text-xs leading-relaxed m-0 p-4 text-left w-full transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        dangerouslySetInnerHTML={{ __html: codeState || "" }}
      />

      <div
        className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-300 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <IconLoader className="animate-spin" size={14} />
      </div>
      {children}
    </div>
  );
};
