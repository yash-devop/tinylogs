import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export const cn = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};
