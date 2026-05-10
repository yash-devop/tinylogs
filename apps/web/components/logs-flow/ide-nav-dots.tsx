import { FlowType } from "../../types/types";
import { cn } from "../../utils/cn";

export const IDENavDots = ({
  type = "new",
  length = 3,
  size = 2.5,
}: { length?: number; size?: number } & FlowType) => {
  return (
    <div className="flex items-center gap-x-1">
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "size-2.5 rounded-full",
            size,
            type === "old" ? "bg-neutral-500/50" : "bg-primary/50",
          )}
        />
      ))}
    </div>
  );
};
