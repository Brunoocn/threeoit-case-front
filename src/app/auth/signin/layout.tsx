import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "signin",
};

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
