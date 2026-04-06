export type SetObject = Record<string, unknown>;
export type LogParameter = string | number | SetObject;

export type TinylogsType = () => {
  set: (message: LogParameter) => void;
  info: () => void;
  warn: (message: string) => void;
  error: () => void;
};

export type Type = "info" | "warn" | "error";
export type LevelsType = Record<Type, string>;
