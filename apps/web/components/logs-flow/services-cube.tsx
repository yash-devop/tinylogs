import React from "react";
import { cn } from "@tinylogs/ui";

export const ServiceCube = ({
  name,
  Icon,
  className,
  children,
}: {
  name: string;
  Icon: React.ElementType<React.ComponentProps<"svg">>;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("relative bg-white h-fit", className)}>
      <div className="ring ring-neutral-300 px-2 ring-offset-2 ring-offset-white shadow-2xl py-1.5 lg:py-2 lg:px-4 rounded-lg text-sm flex items-center gap-1.5">
        <Icon className="size-5 stroke-1" />
        <span className="font-medium">{name}</span>
      </div>
      {children}
    </div>
  );
};
