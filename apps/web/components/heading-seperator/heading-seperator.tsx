import { cn } from "@tinylogs/ui";

type SectionProps = React.ComponentProps<"div">;

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <div
      className={`absolute inset-x-0 -top-6 h-16 w-full [--pattern:var(--color-neutral-200)] bg-fixed bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern)] -z-10 ${className}`}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-between px-6">
        {children}
      </div>
      {/* <div
        className={cn(
          "h-10 w-full bg-fixed bg-[repeating-linear-gradient(315deg,var(--pattern)_0,var(--pattern)_1px,transparent_1px,transparent_50%)] bg-[size:10px_10px] border-y border-[var(--pattern)]",
          className,
        )}
      /> */}
    </div>
  );
};

type HeadingProps = React.ComponentProps<"div">;

const Heading = ({ className, children, ...props }: HeadingProps) => {
  return (
    <div
      className={cn("flex gap-x-2.5 text-sm text-neutral-400", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type SubHeadingProps = React.ComponentProps<"span">;

const SubHeading = ({ className, children, ...props }: SubHeadingProps) => {
  return (
    <span
      className={cn("flex gap-x-2.5 text-sm text-neutral-400", className)}
      {...props}
    >
      {children}
    </span>
  );
};

export { Section, Heading, SubHeading };
