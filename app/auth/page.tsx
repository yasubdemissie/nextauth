import LoginForm from "@/components/auth/LoginForm";

type SearchParams = Promise<{ [key: string]: "login" | "register" }>;

export default async function SignInPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParam = await searchParams;
  const sign = searchParam?.sign || "login";
  console.log(sign);

  return <LoginForm type={sign === "login" || sign === "register" ? sign : "login"} />;
}
