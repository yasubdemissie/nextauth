import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="text-white h-dvh flex justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-sky-800">
      <div className="space-y-6">
        <p className=" text-6xl font-semibold drop-shadow-md">🔐 Auth</p>
        <p>This where the operation begins</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Click me
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
