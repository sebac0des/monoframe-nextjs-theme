// Fonts
import { secondary } from "@/app/fonts";

// Next
import Link from "next/link";

// Components
import { Button } from "./ui/button";

// Utils
import { cn } from "@/lib/utils";
import { RRSS } from "./RRSS";

interface Props {
  message: string;
  url?: string;
  className?:string
}

const Topbar = ({ message, url,className }: Props) => {
  return (
    <div
      className={cn(
        secondary.className,
        "bg-white border-b border-primary/20 p-3 flex justify-between items-center md:text-left",
        className
      )}
    >
      <Button
        variant="ghost"
        asChild
        className="p-0 w-fit h-fit bg-transparent hover:bg-transparent hover:text-accent text-xs xl:text-sm transition ease-in-out delay-75 hover:scale-105 duration-150"
      >
        <Link href={url || ''}>{message}</Link>
      </Button>
      <RRSS/>
    </div>
  );
};

export default Topbar;
