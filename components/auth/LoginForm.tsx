import { CardWrapper } from "./CardWrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Login"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/login"
      showSocial={true}
    >
      Login Form
    </CardWrapper>
  );
}
