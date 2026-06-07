import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { cn, useCopyClipboard } from "@tinylogs/ui";

export const CopyButton = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const { copyToClipboard, isCopied } = useCopyClipboard();

  return (
    <button
      onClick={() => copyToClipboard(value)}
      className={cn(`cursor-pointer`, className)}
      disabled={isCopied}
    >
      {isCopied ? (
        <IconCheck size={17} />
      ) : (
        <IconClipboard
          size={17}
          className="text-neutral-500 hover:text-black"
        />
      )}
    </button>
  );
};
