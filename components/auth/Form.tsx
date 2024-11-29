"use client";
import { useActionState } from "react";
import { Button } from "../ui/button";
import { Input } from "./Input";
import { loginAction } from "@/lib/Actions/loginAction";
import { ErrorMessage } from "./ErrorMessage";
import { registerAction } from "@/lib/Actions/registerAction";

export function SignInForm({ type }: { type: "login" | "register" }) {
  const [loginState, logAction, logLoading] = useActionState(loginAction, {
    error: "",
    success: undefined,
    data: { name: "", email: "", password: "" },
  });
  const [registerState, regAction, regLoading] = useActionState(
    registerAction,
    { error: undefined, data: { name: "", email: "", username: "" } }
  );

  if (type === "login") {
    return (
      <form action={logAction}>
        <Input
          disabled={logLoading}
          name="email"
          placeholder="name@example.com"
        />
        <Input name="password" />
        {loginState?.error && <ErrorMessage>{loginState.error}</ErrorMessage>}
        <Button
          disabled={logLoading}
          type="submit"
          size={"lg"}
          className="w-full my-3"
        >
          Login
        </Button>
      </form>
    );
  } else if (type === "register") {
    return (
      <form action={regAction}>
        <Input disabled={regLoading} name="name" />
        <Input
          disabled={regLoading}
          name="email"
          placeholder="test@example.com"
        />
        <Input disabled={regLoading} name="password" />
        <>
          {registerState?.error && (
            <ErrorMessage>{registerState.error}</ErrorMessage>
          )}
        </>
        <Button
          disabled={regLoading}
          type="submit"
          size={"lg"}
          className="w-full my-3"
        >
          Register
        </Button>
      </form>
    );
  }
}
