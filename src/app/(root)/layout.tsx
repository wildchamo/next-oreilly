export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex h-screen-flex-col">
        ROOT
        <main className="flex-1 wrapper">{children}</main>
      </div>
    </main>
  );
}
