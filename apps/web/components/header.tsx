import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="pt-4 px-2 md:px-0">
      <nav className="bg-neutral-100 shadow-xs max-w-xl mx-auto h-12 rounded-2xl  flex items-center px-4 ring ring-neutral-300 border-2 border-neutral-50 ring-offset-1 ring-offset-white justify-between">
        <p className="tracking-tighter text-shadow-sm select-none">tinylogs.</p>
        <div className="flex items-center justify-center gap-x-3">
          <Link href={"https://x.com/yash_devop"} target="_blank">
            <IconBrandX size={18} />
          </Link>
          <Link href={"https://github.com/yash-devop/"} target="_blank">
            <IconBrandGithub size={18} />
          </Link>
          <Link href={"https://www.linkedin.com/in/yash-dev/"} target="_blank">
            <IconBrandLinkedin size={18} />
          </Link>
        </div>
      </nav>
    </header>
  );
};
