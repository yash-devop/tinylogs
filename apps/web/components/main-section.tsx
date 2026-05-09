import { cn } from "../utils/cn";

export const MainSection = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("gap-4 px-6 relative w-full h-full", className)}>
      {children}
    </div>
  );
};
