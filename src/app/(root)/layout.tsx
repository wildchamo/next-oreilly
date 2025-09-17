import { Header } from "@/components/ui/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex h-screen-flex-col">
        <Header />
        <main className="flex-1 wrapper">{children}</main>
      </div>
    </main>
  );
}
