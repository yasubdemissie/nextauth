"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface backButtonProps {
  label: string;
  href: string;
}

export function BackButton({ label, href }: backButtonProps) {
  const router = useRouter();
  return (
    <Button
      variant={"link"}
      size={"sm"}
      className="w-full"
      onClick={() => router.push(href)}
    >
      {label}
    </Button>
  );
}
