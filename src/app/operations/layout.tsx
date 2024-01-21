import PageHeader from "@/components/header";
import { OperationsDataProvider } from "@/components/operations/hooks/operations.hook";
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
  return (
    <OperationsDataProvider>
      <PageHeader />
      <div className="h-[1px] bg-gray-5 "></div>
      <main className="mx-[100px] mt-[24px]">{children}</main>
    </OperationsDataProvider>
  );
}
