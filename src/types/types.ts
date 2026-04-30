export type SetObject = Record<string, unknown>;
export type LogParameter = string | number | SetObject;
export type LogType = "info" | "set" | "warn" | "error";

export type TinylogsType = {
  set: (message: LogParameter) => void;
  // info: () => void;
  warn: (message: string) => void;
  error: (message: string) => void;
};

export type Type = "info" | "warn" | "error";
export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type LevelsType = Record<Type, string>;
export type Store = {
  requestId: string;
  method?: Method;
  route: string;
  statusCode: string | number;
  startTime: number;
  errors?: TinyLogErrorOptions;
};

export type NormalizeInputMessage = {
  key: string;
  nestedStr: string;
};

export type TinyLogErrorOptions = {
  message: string;
  status?: number;
  why?: string;
  fix?: string;
  link?: string;
};
