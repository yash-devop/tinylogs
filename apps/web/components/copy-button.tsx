import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useCopyClipboard } from "../hooks/useCopyClipboard";
export const CopyButton = ({
  value,
  getValue,
}: {
  value?: string;
  getValue?: () => string;
}) => {
  const { copyToClipboard, isCopied } = useCopyClipboard();

  return (
    <button
      className="flex items-center justify-center text-neutral-600 cursor-pointer"
      //   size={"sm"}
      //   variant={"link"}
      onClick={() => {
        if (!value && !getValue) return;
        const copyString = getValue ? getValue() : value;

        copyToClipboard(copyString);
      }}
    >
      {isCopied ? <IconCheck size={17} /> : <IconCopy size={17} />}
    </button>
  );
};
