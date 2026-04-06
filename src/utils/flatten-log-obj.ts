export const flattenLogObj = (data: any): string[] => {
  const result: string[] = [];

  if (typeof data === "string") {
    return [data.toString()];
  }

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
      result.push(`${key}: ${nestedStr}`);
    } else {
      result.push(`${key}: ${value}`);
    }
  });

  return result;
};
