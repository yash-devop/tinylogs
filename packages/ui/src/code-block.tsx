"use client";

import { BundledTheme, codeToHtml } from "shiki";
import { useCopyClipboard } from "./hooks";
import { useEffect, useState } from "react";
import { IconCheck, IconClipboard } from "@tabler/icons-react";
import {} from "motion";

type CodeBlockProps = {
  code: string;
  lang?: string;
  theme?: BundledTheme;
};

export const CodeBlock = ({
  code,
  lang = "ts",
  theme = "vitesse-light",
}: CodeBlockProps) => {
  const [codeState, setCodeState] = useState<string>("");

  useEffect(() => {
    async function generateCode() {
      const html = await codeToHtml(code, {
        lang,
        theme,
      });
      if (html) {
        setCodeState(html);
      }
    }

    generateCode();
  }, [code, lang, theme]);

  const { copyToClipboard, isCopied } = useCopyClipboard();

  return (
    <div className="overflow-hidden bg-white relative w-fit h-full">
      <div
        className="text-xs leading-relaxed m-0 p-4 text-left w-full"
        style={{ textAlign: "left" }}
        dangerouslySetInnerHTML={{ __html: codeState }}
      />
      <button
        onClick={() => copyToClipboard(code)}
        className="absolute top-3 right-3 cursor-pointer"
      >
        {isCopied ? (
          <IconCheck size={17} />
        ) : (
          <IconClipboard
            size={17}
            className="text-neutral-500 hover:text-black"
          />
        )}
      </button>
    </div>
  );
};
