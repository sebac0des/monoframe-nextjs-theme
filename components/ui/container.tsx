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
      align: {
        left: 'content-start',
        center: 'content-center',
        right: 'content-end'
      },
      size: {
        "1": "max-w-md",
        "2": "max-w-2xl",
        "3": "max-w-4xl",
        "4": "max-w-6xl",
        "5": 'max-w-7xl'
      },
    },
    defaultVariants: {
      align: 'center',
      variant: "default",
      size: "4",
    },
  }
);

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ align, size, variant, className, ...props }, ref) => <div
  ref={ref}
  className={cn(containerVariants({ size, variant, align }), className)}
  {...props} />)
Container.displayName = 'Container'

export default Container;
