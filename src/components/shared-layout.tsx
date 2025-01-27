import "../styles/globals.css";
import { Providers } from "./providers";
import TopNav from "./top-nav/top-nav";

export default function SharedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className="max-w-screen flex h-screen  max-h-screen w-screen flex-col">
        <TopNav />
        <main className="flex max-h-screen grow flex-col items-center justify-center gap-4 p-24">
          {children}
        </main>
      </div>
    </Providers>
  );
}
