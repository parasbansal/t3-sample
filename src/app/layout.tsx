import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import TopNav from "@/components/TopNav";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "User Management",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <div className="flex min-h-screen flex-col bg-neutral-800 text-neutral-200">
            <TopNav />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
