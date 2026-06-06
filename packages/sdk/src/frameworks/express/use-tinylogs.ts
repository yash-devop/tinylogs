import { getContext } from "@/context/context";
import { RequestLogger } from "@/core/request-logger";
import { normal } from "@/formatters";
import { updateLogLevel } from "@/output";
import { getDefinedConfig } from "@/plugins";
import { mergePlugins } from "@/plugins/merge-plugins";
import { TinylogsOptions, TinylogsType } from "@/types/types";

export const useTinyLogs = (options?: TinylogsOptions): TinylogsType => {
  const store = getContext();
  const { globalConfig: globalPlugins, globalFormatterConfig } =
    getDefinedConfig();

  store.formatter = options?.formatter || normal;

  return new RequestLogger({
    logs: store.logs,
    hooks: {
      onLevelChange: (newLevel) => {
        updateLogLevel(store, newLevel);
      },
    },
    plugins: options?.plugins
      ? mergePlugins(globalPlugins ?? [], options.plugins)
      : store.plugins,
  });
};
