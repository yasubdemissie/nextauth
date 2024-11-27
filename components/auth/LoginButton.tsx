'use client';

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
  return (
    <span onClick={() => console.log("The Button is clicked")}>{children}</span>
  );
}
