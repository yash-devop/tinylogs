import { cn } from "@tinylogs/ui";

type SectionProps = React.ComponentProps<"div">;

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <div
      className={cn("space-y-4 pt-32 pb-7 text-center", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type HeadingProps = React.ComponentProps<"div">;

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <div
      className={cn("text-3xl font-medium tracking-tight", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type DescriptionProps = React.ComponentProps<"p">;

const Description = ({ children, className, ...props }: DescriptionProps) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-2xl text-pretty text-center text-neutral-500",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export { Section, Description, Heading };
