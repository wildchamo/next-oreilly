"use client";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="grid h-screen min-h-screen w-screen place-items-center">
      <div className="flex w-1/3 flex-col items-center gap-4 text-center">
        <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
        <h1 className="text-4xl font-bold">
          404 - This page doesnt exists or u dont have access to it
        </h1>
        <Link href="/">
          <Button>Go Back</Button>
        </Link>
        <Button className="bg-red-500">Logout</Button>
      </div>
    </div>
  );
}
