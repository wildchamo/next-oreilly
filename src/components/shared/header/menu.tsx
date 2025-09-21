import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EllipsisVertical, ShoppingCartIcon } from "lucide-react";
import { UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild className="align-middle">
            <Button variant="ghost" size="icon">
              <EllipsisVertical />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex items-start gap-2">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

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
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};
