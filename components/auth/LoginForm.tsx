import { CardWrapper } from "./CardWrapper";
import { SignInForm as Form } from "./Form";

export default async function LoginForm({
  type,
}: {
  type: "login" | "register";
}) {
  return (
    <CardWrapper
      headerLabel="Login"
      backButtonLabel="Don't have an account"
      backButtonHref={
        type === "login" ? "/auth?sign=register" : "/auth?sign=login"
      }
      showSocial={true}
    >
      <Form type={type} />
    </CardWrapper>
  );
}
