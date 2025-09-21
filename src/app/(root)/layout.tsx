import { Header } from "@/components/shared/header";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex h-screen flex-col">
        <Header />
        <main className="wrapper flex-1">{children}</main>
        <Footer />
      </div>
    </main>
  );
}
