"use client";
import { ExpressLogo, NextjsLogo, ViteLogo } from "@tinylogs/ui";
import { CurrentPageIndicator } from "../current-page-indicator";
import * as HeadingSection from "../heading-section";
import * as Seperator from "../heading-seperator/heading-seperator";
import { MainSection } from "../main-section";
import { StatusPing } from "../status-ping";

type FrameworkType = {
  id: string | number;
  name: string;
  jsx: React.ElementType;
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
  // const { currentActive, renderActiveElement } =
  //   useAnimationInterval<FrameworkType>({
  //     data: FRAMEWORKS_DATA,
  //   });
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
            <HeadingSection.Heading className="text-xl md:text-3xl tracking-tight font-semibold font-geist-sans text-neutral-700">
              Your Framework. Our Logs
            </HeadingSection.Heading>
            <HeadingSection.Description className="text-neutral-500">
              Plug TinyLogs into your stack and get structured, context-aware
              logs across every request automatically.
            </HeadingSection.Description>
          </HeadingSection.Section>
        </MainSection>
        <div className="flex justify-center">
          <div className="grid w-fit grid-cols-3 border border-neutral-200">
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

        <section className="w-full flex items-center justify-center px-6 py-24 bg-white">
          <div className="max-w-2xl w-full text-center">
            <div className="space-y-4">
              <h2 className="text-xl md:text-3xl font-semibold tracking-tight text-neutral-700">
                Ready to debug smarter?
              </h2>

              <p className="text-lg leading-8 text-neutral-500 max-w-xl mx-auto">
                Add TinyLogs in seconds. Structured logs, request tracing, and
                cleaner debugging without the noise.
              </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="h-11 px-4 rounded-xl border border-neutral-300 bg-white flex items-center gap-3 text-sm font-mono text-neutral-700">
                <span className="text-neutral-400">$</span>
                <span>npm i @yash-devop/tinylog</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
