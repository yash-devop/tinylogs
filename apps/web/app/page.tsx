import { IconBrandGithub } from "@tabler/icons-react";
import { Header } from "../components/header";
import * as HeadingSection from "../components/heading-section";
import * as Seperator from "../components/heading-seperator/heading-seperator";
import { SetContextSection } from "../components/landing-page/set-context-section";
import { LogsFlowWorkArea } from "../components/logs-flow/LogsFlow";
import { MainSection } from "../components/main-section";
import { StatusPing } from "../components/status-ping";
import { FrameworkSection } from "../components/landing-page/frameworks-section";
import { NpmInstallCTA } from "../components/npm-install-cta";
import { CurrentPageIndicator } from "../components/current-page-indicator";
export default function Home() {
  return (
    <section className="relative min-h-screen w-full [--pattern:var(--color-neutral-300)] overflow-hidden">
      <div className="max-w-7xl relative w-full min-h-screen mx-auto border-x border-neutral-300">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_35%_at_50%_0%,#000_70%,transparent_110%)]" />

        <Header />

        <div className="mt-14 md:mt-16 py-10 text-center flex flex-col items-center gap-y-4 relative w-full overflow-hidden">
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-700 text-balance md:leading-10">
            <h1>Your logs, In context.</h1>

            <h1>
              Know exactly what
              <span className="ml-1.5 bg-linear-to-b from-primary from-10% to-rose-400 to-100% text-white px-2">
                broke — and why.
              </span>
            </h1>
          </div>

          <p className="text-sm md:text-[16px] max-w-xl text-center text-neutral-600 tracking-tight text-balance">
            A ~3kb request-scoped logging SDK for Node.js and Express. Drop in
            one import — every log stays grouped to its request, with full
            context attached. No more hunting through mixed output to find what
            broke.
          </p>

          <div className="flex items-center gap-x-6 tracking-tight pt-4 pb-10">
            <NpmInstallCTA packageName="npm i @yash-devop/tinylog" />
            <button className="px-4 py-2 space-x-1 cursor-pointer rounded-xl ring ring-neutral-400 ring-offset-2 shadow-xs bg-neutral-200">
              <IconBrandGithub className="inline" size={18} />
              <span>Github</span>
            </button>
          </div>

          <div className="relative w-full h-full pb-[260px]">
            <LogsFlowWorkArea />
          </div>
          <div className="relative w-full h-full flex flex-col gap-y-10">
            <MainSection>
              <Seperator.Section className="-z-10">
                <Seperator.Heading>
                  <StatusPing />
                  Tinylogs api usage
                </Seperator.Heading>
                <Seperator.SubHeading>
                  <CurrentPageIndicator section={1} total={2} />
                </Seperator.SubHeading>
              </Seperator.Section>
              <HeadingSection.Section className="">
                <HeadingSection.Heading className="text-3xl tracking-tight font-semibold font-geist-sans text-neutral-700">
                  Set context to every log
                </HeadingSection.Heading>
                <HeadingSection.Description className="text-neutral-500">
                  Track requests, users, services, and metadata effortlessly
                  with logger.set() — so every log carries the full story
                  automatically.
                </HeadingSection.Description>
              </HeadingSection.Section>
            </MainSection>
            <SetContextSection />
            <FrameworkSection />
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="space-y-6 w-fit">
          <BlockRoot defaultOpen="npmsds">
            <BlockHeader>
              <BlockIcon>
                <IconTerminal2
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
        </div> */
}
