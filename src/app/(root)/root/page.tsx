import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Root",
};
export default function RootPage() {
  return (
    <main>
      <div className="flex h-screen-flex-col">
        <main className="flex-1 wrapper">ROOT</main>
      </div>
    </main>
  );
}
