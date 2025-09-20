import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { UserIcon } from "lucide-react";

export const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden w-full max-w-xs gap-1 md:flex">
        <ModeToggle />

        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>
        <Button asChild variant="default">
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
    </div>
  );
};
