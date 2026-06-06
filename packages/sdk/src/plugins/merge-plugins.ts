import { Plugin } from "@/types/types";

type GlobalPlugins = Plugin[];
type InstancePlugins = Plugin[];

export const mergePlugins = (
  globalPlugins: GlobalPlugins,
  instancePlugins: InstancePlugins,
) => {
  const pluginsMap = new Map<string, Plugin>();
  for (const global_plugin of globalPlugins) {
    pluginsMap.set(global_plugin.name, global_plugin);
  }
  for (const instance_plugin of instancePlugins) {
    pluginsMap.set(instance_plugin.name, instance_plugin);
  }

  return [...pluginsMap.values()];
};
