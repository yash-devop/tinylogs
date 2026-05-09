import { cn } from "../../utils/cn";

const Section = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`absolute inset-x-0 -top-6 h-16 border-y border-neutral-300 w-full  ${className}`}
    >
      <div className="flex items-center justify-between w-full h-full px-6">
        {children}
      </div>
    </div>
  );
};

const Heading = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("text-neutral-400 text-sm flex gap-x-2.5", className)}>
      {children}
    </div>
  );
};
const SubHeading = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={cn("text-neutral-400 text-sm", className)}>
      {children}
    </span>
  );
};

export { Section, Heading, SubHeading };
