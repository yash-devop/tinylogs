import { IconArrowLeft, IconArrowRight, IconReload } from "@tabler/icons-react";

export const IDEStructure = () => {
  return (
    <div className="max-w-5xl mx-auto bg-stone-900 ring ring-stone-400 ring-offset-2 ring-offset-stone-700 outline-none outline-0 w-full h-[600px] rounded-xl overflow-hidden flex flex-col">
      <IDEHeader />
      <IDENavigation />
      <div className="flex-1 overflow-y-auto pb-24 min-h-0 pt-2">
        <div className="space-y-1">
          <div className="group flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-neutral-900/60 transition-colors">
            <span className="w-5 text-neutral-500 font-mono text-sm">1</span>

            <span className="text-neutral-600 text-sm tabular-nums">
              2 Mar 2026 • 10:42:21 PM
            </span>

            <span className="font-medium text-emerald-500">200</span>

            <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              GET
            </span>

            <span className="text-neutral-200 truncate">/api/health</span>

            <span className="ml-auto text-xs text-neutral-500">42ms</span>
          </div>

          <div className="group flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-neutral-900/60 transition-colors">
            <span className="w-5 text-neutral-500 font-mono text-sm">2</span>

            <span className="text-neutral-600 text-sm tabular-nums">
              2 Mar 2026 • 10:42:25 PM
            </span>

            <span className="font-medium text-red-500">500</span>

            <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              POST
            </span>

            <span className="text-neutral-200 truncate">/api/auth/login</span>

            <span className="text-red-400 text-xs">Internal Server Error</span>

            <span className="ml-auto text-xs text-neutral-500">128ms</span>
          </div>

          <div className="group flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-neutral-900/60 transition-colors">
            <span className="w-5 text-neutral-500 font-mono text-sm">3</span>

            <span className="text-neutral-600 text-sm tabular-nums">
              2 Mar 2026 • 10:42:29 PM
            </span>

            <span className="font-medium text-yellow-500">401</span>

            <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              GET
            </span>

            <span className="text-neutral-200 truncate">/api/user/profile</span>

            <span className="text-yellow-400 text-xs">Unauthorized</span>

            <span className="ml-auto text-xs text-neutral-500">17ms</span>
          </div>

          <div className="group flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-neutral-900/60 transition-colors">
            <span className="w-5 text-neutral-500 font-mono text-sm">4</span>

            <span className="text-neutral-600 text-sm tabular-nums">
              2 Mar 2026 • 10:42:33 PM
            </span>

            <span className="font-medium text-blue-500">304</span>

            <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              GET
            </span>

            <span className="text-neutral-200 truncate">/assets/logo.svg</span>

            <span className="text-blue-400 text-xs">Cached</span>

            <span className="ml-auto text-xs text-neutral-500">3ms</span>
          </div>

          <div className="group flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-neutral-900/60 transition-colors">
            <span className="w-5 text-neutral-500 font-mono text-sm">5</span>

            <span className="text-neutral-600 text-sm tabular-nums">
              2 Mar 2026 • 10:42:38 PM
            </span>

            <span className="font-medium text-purple-500">101</span>

            <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              WS
            </span>

            <span className="text-neutral-200 truncate">/socket</span>

            <span className="text-purple-400 text-xs">WebSocket Connected</span>

            <span className="ml-auto text-xs text-neutral-500">persistent</span>
          </div>

          <div className="group flex items-center gap-4 rounded-lg px-3 py-2 hover:bg-neutral-900/60 transition-colors">
            <span className="w-5 text-neutral-500 font-mono text-sm">6</span>

            <span className="text-neutral-600 text-sm tabular-nums">
              2 Mar 2026 • 10:42:44 PM
            </span>

            <span className="font-medium text-red-500">429</span>

            <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              POST
            </span>

            <span className="text-neutral-200 truncate">/api/messages</span>

            <span className="text-red-400 text-xs">Rate Limited</span>

            <span className="ml-auto text-xs text-neutral-500">9ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function IDEHeader() {
  return (
    <header className="h-12 w-full border-b border-stone-800 flex items-center justify-between text-stone-500 px-4">
      <div className="flex items-center gap-x-1">
        <div className="size-2.5 rounded-full bg-primary/50" />
        <div className="size-2.5 rounded-full bg-primary/50" />
        <div className="size-2.5 rounded-full bg-primary/50" />
      </div>
      <span className="text-xs">tinylogs.</span>
      <span className="text-xs hidden lg:inline cursor-default">
        npm i @yash-devop/tinylog
      </span>
    </header>
  );
}

function IDENavigation() {
  return (
    <div className="h-8 w-full border-y border-stone-700/50  flex flex-col justify-center gap-3 overflow-y-auto  min-h-0 bg-stone-800">
      <div className="flex items-center px-3 text-stone-500 gap-x-5">
        <IconArrowLeft size={18} />
        <IconArrowRight size={18} />
        <IconReload size={18} />
        <span className="text-xs tabular-nums">http://localhost:8001</span>
      </div>
    </div>
  );
}
