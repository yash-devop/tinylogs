import { group } from "@/formatters/formatters";
import { Formatter, Plugin, TinylogsOptions } from "@/types/types";

let globalConfig: Plugin[] | undefined = [];
let globalFormatterConfig: Formatter | undefined;

export const defineConfig = ({ plugins, formatter }: TinylogsOptions): void => {
  globalConfig = plugins;
  globalFormatterConfig = formatter ?? group; // run default formatter if options doesnt have one.
};

export const getDefinedConfig = () => {
  return { globalConfig, globalFormatterConfig };
};
