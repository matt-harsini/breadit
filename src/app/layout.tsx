import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "DevZen",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("text-white antialiased light h-full", inter.className)}
    >
      <body className="h-full bg-gray-900">
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
