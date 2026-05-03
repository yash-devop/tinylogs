import { IconBrandGithub, IconTerminal } from "@tabler/icons-react";
import { Header } from "../components/header";
import { cn } from "../utils/cn";
import {
  BlockRoot,
  BlockContent,
  BlockCopy,
  BlockHeader,
  BlockIcon,
  BlockList,
  BlockTab,
} from "../components/package-installer";
import { IDEStructure } from "../components/logs-flow/ide";
export default function Home() {
  return (
    <section className="relative h-screen w-full [--pattern:var(--color-neutral-300)] overflow-hiddens">
      <div className="max-w-7xl relative w-full h-full mx-auto border-x border-neutral-300">
        {/* <VerticalScale className="h-screen absolute left-0 mx-auto" /> */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-fixed bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_47%_at_50%_0%,#000_70%,transparent_110%)] -z-10"></div>
        {/* <VerticalScale className="h-screen absolute right-0 mx-auto" /> */}

        <Header />
        <div className="w-full h-full flex justify-center px-3">
          <div className="mt-14 md:mt-16 py-10 text-center flex flex-col items-center gap-y-4 relative w-full h-fit">
            {/* <HorizontalScale className="absolute w-full mx-auto -top-4" /> */}
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-700 text-balance md:leading-10">
              <h1 className="">Your logs, In context.</h1>
              <h1 className="">
                Know exactly what
                <span className="ml-1.5 bg-linear-to-b from-primary from-10% to-rose-400 to-100% text-white px-2">
                  broke — and why.
                </span>
              </h1>
            </div>
            <p className="text-sm md:text-[16px] max-w-xl text-center text-neutral-600 tracking-tight text-balance">
              A ~3kb request-scoped logging SDK for Node.js and Express. Drop in
              one import — every log stays grouped to its request, with full
              context attached. No more hunting through mixed output to find
              what broke.
            </p>
            <div className="flex items-center gap-x-6 tracking-tight pt-4 pb-10">
              <button className="px-4 py-2 cursor-pointer rounded-xl ring-offset-2 ring-offset-rose-400 ring ring-rose-500 bg-linear-to-b from-rose-400 from-0% via-0% via-primary to-rose-400 to-80% text-white hover:ring-offset-rose-300/70 transition-all duration-200">
                Get Started
              </button>
              <button className="px-4 py-2 space-x-1 cursor-pointer rounded-xl ring ring-neutral-400 ring-offset-2 shadow-xs bg-neutral-200">
                <IconBrandGithub className="inline" size={18} />
                <span>Github</span>
              </button>
            </div>
            <IDEStructure />
            {/* <div className="space-y-6">
              <BlockRoot defaultOpen="npmsds">
                <BlockHeader>
                  <BlockIcon>
                    <IconTerminal
                      size={20}
                      className="stroke-1 text-neutral-600 rounded-none shrink-0 mt-0.5 "
                    />
                  </BlockIcon>
                  <BlockList>
                    <BlockTab value="npm">npm</BlockTab>
                    <BlockTab value="pnpm">pnpm</BlockTab>
                    <BlockTab value="bun">bun</BlockTab>
                  </BlockList>

                  <BlockCopy />
                </BlockHeader>
                <BlockContent value="npm">
                  npx shadcn@latest add @eldoraui/clerk-otp
                </BlockContent>
                <BlockContent value="pnpm">
                  pnpm dlx shadcn@latest add @eldoraui/clerk-otp
                </BlockContent>
                <BlockContent value="bun">
                  bunx --bun shadcn@latest add @eldoraui/clerk-otp
                </BlockContent>
              </BlockRoot>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

const HorizontalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-10 w-full bg-fixed bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern)]",
        className,
      )}
    />
  );
};
const VerticalScale = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-10 h-full bg-fixed bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-x border-[var(--pattern)] -z-10",
        className,
      )}
    />
  );
};

const Line = () => {
  return <div className="h-px w-full bg-neutral-300 absolute" />;
};
