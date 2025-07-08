// Client-aware layout to hide Sidebar + Header on login page only

"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showLayout = pathname !== "/";

  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        <div className="flex min-h-screen">
          {showLayout && <Sidebar />}
          <main className="flex-1 flex flex-col">
            {showLayout && <Header />}
            <div className="p-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
