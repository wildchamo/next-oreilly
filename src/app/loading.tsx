import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <Image src="/loader.gif" alt="Loading..." width={150} height={150} />
    </div>
  );
}
