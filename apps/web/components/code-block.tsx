import { cn } from "../utils/cn";
import { IDENavDots } from "./logs-flow/ide-nav-dots";

type CodeBlockRootProps = React.ComponentProps<"div">;

const Root = ({ className, ...props }: CodeBlockRootProps) => {
  return (
    <div
      className={cn(
        "rounded-tr-2xl rounded-tl-2xl rounded-b-3xl border border-stone-800 bg-stone-800",
        className,
      )}
      {...props}
    />
  );
};

type HeaderProps = React.ComponentProps<"div">;

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 py-3 text-xs text-stone-300 font-geist-mono",
        className,
      )}
      {...props}
    />
  );
};

const Dots = () => {
  return <IDENavDots type="new" length={3} />;
};

type FilenameProps = React.ComponentProps<"span">;

const Filename = ({ className, ...props }: FilenameProps) => {
  return <span className={cn("text-stone-400", className)} {...props} />;
};

type BodyProps = React.ComponentProps<"section">;

const Body = ({ className, ...props }: BodyProps) => {
  return (
    <section
      className={cn(
        "w-full rounded-3xl ring ring-stone-700 bg-stone-950 shadow-2xl h-full",
        className,
      )}
      {...props}
    />
  );
};

type PreProps = React.ComponentProps<"pre">;

const Pre = ({ className, ...props }: PreProps) => {
  return (
    <pre
      className={cn(
        "overflow-x-auto text-left text-sm leading-7 font-geist-mono",
        className,
      )}
      {...props}
    />
  );
};

type SwitchContainerProps = React.ComponentProps<"div">;
const SwitchContainer = ({ className, children }: SwitchContainerProps) => {
  return <div className={cn(`flex gap-x-2`, className)}>{children}</div>;
};

type SwitchButtonProps = React.ComponentProps<"div"> & {
  value: number | string;
};

const SwitchButton = ({
  value,
  children,
  className,
  ...props
}: SwitchButtonProps) => {
  return (
    <div className={cn("cursor-pointer px-2 py-px", className)} {...props}>
      <span className="tabular-nums">{value}</span>

      {children}
    </div>
  );
};

export {
  Root,
  Header,
  Dots,
  Filename,
  Body,
  Pre,
  SwitchButton,
  SwitchContainer,
};
