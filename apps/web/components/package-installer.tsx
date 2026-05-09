"use client";
import React, { createContext, useContext, useRef } from "react";

import { useCopyClipboard } from "../hooks/useCopyClipboard";
import { cn } from "../utils/cn";
import { CopyButton } from "./copy-button";
import * as Tabs from "@tinylogs/ui/tabs";

type TRootProps = {
  className?: string;
  children: React.ReactNode;
  defaultOpen?: string;
};

type TCopyContext = {
  ref?: React.RefObject<HTMLDivElement | null>;
  copyToClipboard: <T extends string>(copyText: T) => void;
  isCopied?: boolean;
};

const CopyContext = createContext<TCopyContext | null>(null);

const useCopyContext = () => {
  const context = useContext(CopyContext);
  if (!context) {
    throw new Error(
      "useCopyContext must be wrapped withing CopyContext.Provider",
    );
  }
  return context;
};

const BlockRoot = ({ className, children, defaultOpen }: TRootProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { copyToClipboard, isCopied } = useCopyClipboard();

  return (
    <CopyContext.Provider
      value={{ copyToClipboard, ref: contentRef, isCopied }}
    >
      <div
        className={cn(
          `max-w-200 border rounded-lg border-neutral-300`,
          className,
        )}
      >
        <Tabs.Root defaultOpen={defaultOpen}>{children}</Tabs.Root>
      </div>
    </CopyContext.Provider>
  );
};

const BlockList = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs.TabsList className="w-full p-0 pl-2.5">{children}</Tabs.TabsList>
  );
};

const BlockHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `border-b border-neutral-300 p-2 flex items-center justify-between gap-1 w-full bg-neutral-100 rounded-t-lg`,
        className,
      )}
    >
      {children}
    </div>
  );
};

const BlockTab = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <Tabs.Trigger
      value={value}
      className="
      flex items-center gap-1 py-1.5 px-1 leading-3 w-fit bg-neutral-100
      rounded-sm transition border-0 ring-0
      focus-visible:ring-0 focus-visible:outline-none
      data-[active=true]:ring
      data-[active=true]:ring-neutral-300
      hover:bg-neutral-200
    "
    >
      {children}
    </Tabs.Trigger>
  );
};

const BlockContent = ({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref } = useCopyContext();
  return (
    <Tabs.TabContent
      ref={ref}
      value={value}
      className={cn(
        `
bg-transparent overflow-x-auto max-w-200
[&::-webkit-scrollbar]:h-1
[&::-webkit-scrollbar-track]:bg-neutral-100
[&::-webkit-scrollbar-thumb]:bg-neutral-400
[&::-webkit-scrollbar-thumb]:rounded-full
hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500
text-sm`,
        className,
      )}
    >
      {children}
    </Tabs.TabContent>
  );
};

const BlockIcon = ({ children }: { children: React.ReactNode }) => {
  return children;
};

const BlockCopy = () => {
  const { copyToClipboard, isCopied, ref } = useCopyContext();

  const handleCopy = () => {
    if (!ref) return "";
    if (!ref.current?.textContent) return "";
    return ref.current?.textContent;
  };
  return <CopyButton getValue={handleCopy} />;
};

export {
  BlockContent,
  BlockCopy,
  BlockHeader,
  BlockIcon,
  BlockList,
  BlockRoot,
  BlockTab,
};
