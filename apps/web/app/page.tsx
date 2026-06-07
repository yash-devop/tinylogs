"use client";
import { IconBrandGithub } from "@tabler/icons-react";
import { CodeBlock } from "@tinylogs/ui";
import Link from "next/link";
import { CurrentPageIndicator } from "../components/current-page-indicator";
import { Header } from "../components/header";
import * as HeadingSection from "../components/heading-section";
import * as Seperator from "../components/heading-seperator/heading-seperator";
import { FrameworkSection } from "../components/landing-page/frameworks-section";
import { LogsFlowWorkArea } from "../components/logs-flow/LogsFlow";
import { MainSection } from "../components/main-section";
import { NpmInstallCTA } from "../components/npm-install-cta";
import { StatusPing } from "../components/status-ping";

export default function Home() {
  const snippet = `app.post("/checkout", async (req, res) => {
  const logger = useTinyLogs({
    formatter: group,
    plugins: [xNCompression()],
  });

  logger.set("Validating request");
  await sleep(50);

  logger.set("Verifying user session");
  await sleep(80);

  logger.set("Fetching cart & pricing");
  await sleep(100);

  logger.warn("Inventory missing in cache");
  await sleep(60);

  logger.set("Fallback to DB lookup");
  await sleep(120);

  logger.set("Order created");
  logger.set("Sending confirmation email");

  res.json({ success: true });
});`;
  return (
    <section className="relative min-h-screen w-full [--pattern:var(--color-neutral-300)] overflow-hidden">
      <div className="max-w-7xl relative w-full min-h-screen mx-auto border-x border-neutral-300">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_10%_at_50%_0%,#000_70%,transparent_110%)] md:[mask-image:radial-gradient(ellipse_80%_14%_at_50%_0%,#000_70%,transparent_110%)]" />

        <Header />

        <div className="mt-14 md:mt-16 py-10 text-center flex flex-col items-center gap-y-4 relative w-full overflow-hidden">
          <div className="text-xl md:text-3xl font-semibold tracking-tight text-neutral-700 text-balance md:leading-10">
            <h1>Your logs, In context.</h1>

            <h1>
              Know exactly what
              <span className="ml-1.5 bg-linear-to-b from-primary from-10% to-rose-400 to-100% text-white px-2">
                broke — and why.
              </span>
            </h1>
          </div>

          <p className="text-sm md:text-[16px] max-w-xl text-center text-neutral-600 tracking-tight text-balance">
            A lightweight request-scoped logging SDK for Node.js and Express
            that reduces debugging noise by grouping related events, attaching
            full request context, collapsing repetitive logs, and surfacing the
            signals that actually matter.
          </p>

          <div className="flex items-center gap-x-6 tracking-tight pt-4 pb-10">
            <NpmInstallCTA packageName="npm i @yash-devop/tinylog" />
            <Link href={"https://github.com/yash-devop/"} target="_blank">
              <button className="px-4 py-2 space-x-1 cursor-pointer rounded-xl ring ring-neutral-400 ring-offset-2 shadow-xs bg-neutral-200 text-sm">
                <IconBrandGithub className="inline" size={18} />
                <span>Github</span>
              </button>
            </Link>
          </div>

          <div className="relative w-full h-full pb-24 md:pb-[260px]">
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
                <HeadingSection.Heading className="text-xl md:text-3xl tracking-tight font-semibold font-geist-sans text-neutral-700">
                  Set context to every log
                </HeadingSection.Heading>
                <HeadingSection.Description className="text-neutral-500">
                  Track requests, users, services, and metadata effortlessly
                  with logger.set() — so every log carries the full story
                  automatically.
                </HeadingSection.Description>
              </HeadingSection.Section>
              <CodeBlock code={snippet} />
            </MainSection>
            {/* <SetContextSection /> */}
            <FrameworkSection />
          </div>
        </div>
      </div>
    </section>
  );
}
