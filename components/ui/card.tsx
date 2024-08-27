import React from "react";

// Fonts
import { secondary } from "@/app/fonts";

// Components
import { Button } from "@/components/ui/button";

// Next js
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

interface CardButton extends React.ComponentProps<typeof Button> {
  buttonUrl:string
}

const Card = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div ref={ref} 
className={cn("rounded-md relative overflow-hidden",className)}
{...props}
/>)
Card.displayName = 'Card'

const CardContent = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div
ref={ref}
className="text-white absolute bottom-3 left-3 z-50"
{...props}/>)
CardContent.displayName = 'CardContent'

const CardTitle = React.forwardRef<HTMLHeadingElement,React.HTMLAttributes<HTMLHeadingElement>>(({className,...props},ref)=><h3 ref={ref} className="text-xl lg:text-lg font-medium tracking-wider" {...props}/>)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLSpanElement,React.HTMLAttributes<HTMLSpanElement>>(({className,...props},ref)=> <span
ref={ref} 
className={cn(secondary.className,'text-sm',className)}
{...props}
/>) 
CardDescription.displayName = 'CardDescription'

const CardButton = React.forwardRef<React.HTMLAttributes<HTMLButtonElement>,CardButton>(({buttonUrl,className,children})=> <Button variant="secondary" className={className}>
  <Link href={buttonUrl}>{children}</Link>
</Button>)
CardButton.displayName = 'CardButton'


const CardOverlay = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=><div ref={ref}
className="block bg-black/40 absolute top-0 left-0 w-full h-full z-10"
{...props}/>)
CardOverlay.displayName = 'CardOverlay'



export {Card,CardContent,CardTitle,CardDescription,CardButton,CardOverlay}