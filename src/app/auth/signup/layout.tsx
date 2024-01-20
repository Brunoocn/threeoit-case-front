import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
  description: "signup",
};

export default function SigninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
