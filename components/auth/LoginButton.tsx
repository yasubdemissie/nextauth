"use client";

import { useRouter } from "next/navigation";

interface loginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: loginButtonProps) {
  const router = useRouter();
  function onClick() {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return <div>Modal</div>;
  }
  return <span onClick={onClick}>{children}</span>;
}
