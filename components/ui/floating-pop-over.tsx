"use client";

// React
import React, { useEffect, useState } from "react";

// Next js
import Link from "next/link";

// Radix ui
import { PopoverProps } from "@radix-ui/react-popover"

// Fonts
import { secondary } from "@/app/fonts";

// Components
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Utils
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";


// Types
interface FloatingPopOver extends PopoverProps, VariantProps<typeof floatingPopOverVariants> {
  title:string
  description:string
  buttonText:string
  buttonUrl:string
  smallText:string
  imageSrc:string
  imageAlt?:string
  openDelayTime?: number
}

const floatingPopOverVariants = cva(
  "fixed z-50",
  {
    variants: {
      position: {
        right: "bottom-0 right-0",
        left: "bottom-0 left-0",
      },
    },
    defaultVariants: {
      position: "right",
    },
  }
);

export function FloatingPopOver({
  title,
  description,
  buttonText,
  buttonUrl,
  smallText,
  imageSrc,
  imageAlt,
  position = "right",
  openDelayTime = 0,
  ...props
}: FloatingPopOver) {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (openDelayTime > 0) {
      const autoOpen = setTimeout(() => setOpen(true), openDelayTime);
      return () => clearTimeout(autoOpen);
    }
  }, [openDelayTime]);

  return <Popover open={open} {...props}>
    <PopoverTrigger
       className={cn(floatingPopOverVariants({position}))}
      onClick={() => setOpen(!open)}
      asChild>
      <Avatar className="w-24 h-24 hover:cursor-pointer shadow-black/30 shadow-xl">
        <AvatarImage src={imageSrc} alt={imageAlt} />
      </Avatar>
    </PopoverTrigger>
    <PopoverContent>
      <h4 className="font-bold leading-none text-lg text-left mb-2">
        {title}
      </h4>
      <p className={cn(secondary.className, "text-primary text-sm w-full")} >
        {description}
      </p>

      <Button
        variant="default"
        asChild
        className="w-full rounded-none mt-4 mb-1.5"
        size="icon"
      >
        <Link href={buttonUrl}>
          {buttonText}
        </Link>
      </Button>

      <small className={cn(secondary.className, 'block text-center text-xs mt-1 text-gray-400')}>
        {smallText}
      </small>
    </PopoverContent>
  </Popover>

}




