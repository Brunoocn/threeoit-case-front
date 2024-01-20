import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ["400", "600", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Threeoit - Case",
  description: "Threeoit - Case",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
