"use client";
import { MainSection } from "../main-section";
import * as Seperator from "../heading-seperator/heading-seperator";
import * as HeadingSection from "../heading-section";
import { StatusPing } from "../status-ping";
import { ExpressLogo, NextjsLogo, ViteLogo } from "@tinylogs/ui/logos";
import { useAnimationInterval } from "../../hooks/useAnimationInterval";
import { CurrentPageIndicator } from "../current-page-indicator";
import {
  BlockContent,
  BlockCopy,
  BlockHeader,
  BlockList,
  BlockRoot,
  BlockTab,
} from "../package-installer";

type FrameworkType = {
  id: string | number;
  name: string;
  jsx: React.ReactNode;
};
const FRAMEWORKS_DATA = [
  {
    id: 1,
    name: "NextJS",
    jsx: NextjsLogo,
  },
  {
    id: 2,
    name: "express",
    jsx: ExpressLogo,
  },
  {
    id: 3,
    name: "Vite",
    jsx: ViteLogo,
  },
];

export const FrameworkSection = () => {
  const { currentActive, renderActiveElement } =
    useAnimationInterval<FrameworkType>({
      data: FRAMEWORKS_DATA,
    });
  return (
    <div className="flex w-full h-full flex-col gap-2 pb-5 pt-28 pb-12 lg:flex-row">
      <div className="relative w-full h-full flex flex-col gap-y-10">
        <MainSection>
          <Seperator.Section className="-z-10">
            <Seperator.Heading>
              <StatusPing />
              Package Installation
            </Seperator.Heading>
            <Seperator.SubHeading>
              <CurrentPageIndicator section={2} total={2} />
            </Seperator.SubHeading>
          </Seperator.Section>
          <HeadingSection.Section className="">
            <HeadingSection.Heading className="text-3xl tracking-tight font-semibold font-geist-sans text-neutral-700">
              Your Framework. Our Logs
            </HeadingSection.Heading>
            <HeadingSection.Description className="text-neutral-500">
              Plug TinyLogs into your stack and get structured, context-aware
              logs across every request automatically.
            </HeadingSection.Description>
          </HeadingSection.Section>
        </MainSection>
        <BlockRoot defaultOpen="npm" className="max-w-md rounded-xl">
          <BlockHeader className="px-2 py-1.5">
            <BlockList className="gap-1">
              <BlockTab value="npm" className="w-fit">
                <span className="text-[13px] text-neutral-700">npm</span>
              </BlockTab>

              <BlockTab value="pnpm">
                <span className="text-[13px] text-neutral-700">pnpm</span>
              </BlockTab>
            </BlockList>

            <BlockCopy />
          </BlockHeader>

          <BlockContent
            value="npm"
            className="px-3 py-2.5 font-mono text-[13px] text-neutral-700"
          >
            npm i @yash-devop/tinylog
          </BlockContent>

          <BlockContent
            value="pnpm"
            className="px-3 py-2.5 font-mono text-[13px] text-neutral-700"
          >
            pnpm add @yash-devop/tinylog
          </BlockContent>
        </BlockRoot>
        <div className="flex justify-center">
          <div className="grid w-fit grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 border border-neutral-200">
            {FRAMEWORKS_DATA.map((frameworkUnit, index) => {
              const Logo = frameworkUnit?.jsx;

              return (
                <div
                  key={index}
                  className={`flex h-32 w-32 items-center justify-center border border-neutral-200 ${index !== 1 && "bg-neutral-100"}`}
                  title={
                    index !== 1
                      ? `${frameworkUnit.name} soon`
                      : frameworkUnit.name
                  }
                >
                  <Logo className="size-14 text-neutral-700" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
