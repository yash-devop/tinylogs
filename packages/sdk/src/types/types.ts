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

export type Entry = {
  level: LogType;
  message: LogParameter;
  count?: number;
};
export type LevelsType = Entry[];
export type Store = {
  requestId: string;
  method?: Method;
  route: string;
  statusCode: string | number;
  startTime: number;
  errors?: TinyLogErrorOptions;
  level: LogType;
  logs: LevelsType;
  plugins: Plugin[];
  formatter: Formatter;
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

export type Plugin = {
  name: string;
  transform?: (entry: LogParameter) => void;
  transformLogs?: (store: Store) => Store;
};

export type Formatter = (store: Store) => string;

export type TinylogsOptions = {
  plugins?: Plugin[];
  formatter?: Formatter;
};

export type Hooks = {
  onLevelChange: (newLevel: LogType) => void;
};

export interface BaseLoggerType {
  logs: LevelsType;
  plugins?: Plugin[];
}
export interface RequestLoggerType extends BaseLoggerType {
  hooks?: Hooks;
  formatter?: Formatter;
}
