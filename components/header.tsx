import React from "react";

// Utilities
import { cn } from "@/lib/utils";

// Components
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = ({ className }: React.HTMLAttributes<HTMLElement>) => {

  return <header
    className={cn(
      "bg-secondary p-4 flex justify-between items-center min-h-14",
      className
    )}
  >
    <Logo />
    <Button asChild size="sm" className="text-sm">
      <Link href="https://api.whatsapp.com/send?phone=+5491130963298">Contactar</Link>
    </Button>
  </header>
}


export default Header
