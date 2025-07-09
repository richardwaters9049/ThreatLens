"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

// Load Poppins font with multiple weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const showLayout = pathname !== "/";

  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-zinc-950 text-white">
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
