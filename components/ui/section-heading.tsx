import React from "react";

// Fonts
import { secondary } from "@/app/fonts";

// Utils
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  smallText?: string
}

export const SectionHeading = ({ title, description, smallText, className, ...props }: SectionHeadingProps) => {
  return <div
    className={className}
    {...props}
  >
    <small className={cn(secondary.className, "inline-block text-base")}
    >{smallText}</small>
    <h2 className="text-2xl md:text-4xl font-semibold mb-2">{title}</h2>
    <p className={cn(secondary.className)}>{description}</p>
  </div>
}





