import React from "react";

// Utilities
import { cn } from "@/lib/utils";

// Components
import Logo from "@/components/logo";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "@/components/forms/contact";
import { Button } from "@/components/ui/button";

const Header = ({ className }: React.HTMLAttributes<HTMLElement>) => {

  return <header
    className={cn(
      "bg-secondary p-4 flex justify-between items-center min-h-14",
      className
    )}
  >
    <Logo />
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="text-sm">Contactar</Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 m-auto">
       <ContactForm/>
      </DialogContent>
    </Dialog>

  </header>
}


export default Header
