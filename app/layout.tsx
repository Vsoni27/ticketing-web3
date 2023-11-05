import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import NavBar from "@/app/components/NavBar";

import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ticketing 3.0",
  description: "Ticketing 3.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Providers>
          <Theme>
            <NavBar />
            {children}
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
