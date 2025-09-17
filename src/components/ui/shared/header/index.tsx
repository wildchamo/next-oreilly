import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../button";
import { APP_NAME } from "@/lib/constants";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
            />
            <span className="ml-3 hidden text-2xl font-bold lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
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
        </div>
      </div>
    </header>
  );
};
