import { NormalizeInputMessage } from "@/types/types";

export const normalizeInputMessage = (data: any): NormalizeInputMessage[] => {
  const result: NormalizeInputMessage[] = [];

  const formatNested = (obj: any): string => {
    let str = "";

    Object.entries(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === "object") {
        str += `${key}=${JSON.stringify(value)} `;
      } else {
        str += `${key}=${value} `;
      }
    });

    return str.trim();
  };

  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      const nestedStr = formatNested(value);

      result.push({
        key,
        nestedStr,
      });
    } else {
      const val = value as string;
      result.push({
        key,
        nestedStr: val,
      });
    }
  });

  return result;
};
