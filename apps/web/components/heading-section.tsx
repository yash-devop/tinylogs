import { cn } from "../utils/cn";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`space-y-4 text-center pt-32 pb-7`, className)}>
      {children}
    </div>
  );
};

const Heading = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(`text-3xl tracking-tight font-medium`, className)}>
      {children}
    </div>
  );
};

const Description = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        `text-neutral-500 max-w-2xl mx-auto text-pretty text-center`,
        className,
      )}
    >
      {children}
    </p>
  );
};
export { Section, Description, Heading };
