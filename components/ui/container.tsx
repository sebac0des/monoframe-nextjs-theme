import React from "react";

// Utils
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface ContainerProps extends React.ButtonHTMLAttributes<HTMLDivElement>,
  VariantProps<typeof containerVariants> { }

const containerVariants = cva(
  "m-auto",
  {
    variants: {
      variant: {
        default: '',
      },
      padding:{
        "1":'px-2 py-4',
        "2":'px-4 py-8',
        "3":'px-8 py-16'
      },
      align: {
        left: 'content-start',
        center: 'content-center',
        right: 'content-end'
      },
      size: {
        "1": "max-w-screen-sm",
        "2": "max-w-screen-md",
        "3": "max-w-6xl",
        "4": "max-w-screen-lg",
        "5": "max-w-screen-xl",
        "6":"max-w-screen-2xl"
      },
    },
    defaultVariants: {
      padding:'1',
      align: 'center',
      variant: "default",
      size: "4",
    },
  }
);

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ align, padding,size, variant, className, ...props }, ref) => <div
  ref={ref}
  className={cn(containerVariants({ size, variant, align,padding }), className)}
  {...props} />)
Container.displayName = 'Container'

export default Container;