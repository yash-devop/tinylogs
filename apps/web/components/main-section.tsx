import { cn } from "@tinylogs/ui";

export const MainSection = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "gap-4 px-3 md:px-5 lg:px-6 relative w-full h-full",
        className,
      )}
    >
      {children}
    </div>
  );
};
