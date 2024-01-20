import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operações",
  description: "Operações Matematicas",
};

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
