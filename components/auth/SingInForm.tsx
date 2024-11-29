import { Button } from "../ui/button";
import { Input } from "./Input";

export function SignInForm({ type }: { type: "login" | "register" }) {
  if (type === "login") {
    return (
      <form>
        <Input name="email" placeholder="name@example.com" />
        <Input name="password" />
        <Button type="submit" size={"lg"} className="w-full my-3">Login</Button>
      </form>
    );
  } else if (type === "register") {
    return (
      <form>
        <Input name="name" />
        <Input name="email" placeholder="test@example.com" />
        <Input name="username" placeholder="Your Name" />
        <Button type="submit" size={"lg"} className="w-full my-3">Register</Button>
      </form>
    );
  }
}
