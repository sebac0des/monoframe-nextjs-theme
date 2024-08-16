// React
import React from "react";

// Next js
import Link from "next/link";

// Fonts
import { secondary } from "@/app/fonts";

// Utils
import { cn } from "@/lib/utils";

// Types
interface MessageBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  smallMessage?: string
  title?: string
  linkUrl?: string
  linkText?: string
}

export const MessageBox = ({ className, smallMessage, title, linkUrl, linkText, ...props }: MessageBoxProps) => {
  return <div
    className={cn('bg-soft text-center rounded-lg min-h-96 py-20 place-content-center', className)}
    {...props}
  >
    <span
      className={cn(secondary.className, "text-sm xl:text-base")}
    >{smallMessage}</span>

    <h4
      className={cn("text-xl xl:text-2xl font-regular mt-0.5", className)}
    >
      {title}
      
      {linkUrl &&
        <Link
          className={cn("border-b border-primary ml-1", className)}
          href={linkUrl}
        >{linkText}</Link>
      }
    </h4>
  </div>
}
