export type SetObject = Record<string, unknown>;
export type LogParameter = string | number | SetObject;
export type LogType = "info" | "set" | "warn" | "error";

export type TinylogsType = {
  set: (message: LogParameter) => void;
  // info: () => void;
  warn: (message: string) => void;
  error: (message: Error | string) => void;
};

export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export type LevelsType = {
  level: LogType;
  message: LogParameter;
}[];
export type Store = {
  requestId: string;
  method?: Method;
  route: string;
  statusCode: string | number;
  startTime: number;
  errors?: TinyLogErrorOptions;
  level: LogType;
  logs: LevelsType;
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
  stack?: string;
};
