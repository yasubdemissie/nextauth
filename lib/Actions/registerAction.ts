"use server";
import bcrypt from "bcrypt";
import { registerSchema } from "../schema/loginRegisreSchema";
import { prisma } from "../db";
import { signIn } from "@/auth";
export async function registerAction(_prevState: unknown, data: FormData) {
  const userData = {
    name: data.get("name"),
    email: data.get("email") as string | null,
    password: data.get("password"),
  };
  const validatedData = registerSchema.safeParse(userData);

  if (!validatedData.success) {
    // console.log(validatedData.error.flatten().fieldErrors);
    return { error: "Fill all the fields appropirately" };
  }

  const { email, password, name } = validatedData.data;

  // const isEmailTaken = await prisma.user.findUnique({
  //   where: { email: email },
  // });

  // if (isEmailTaken) return { error: "Email is already taken" };

  const hashedPassword = await bcrypt.hash(password, 10);

  // await prisma.user.create({
  //   data: {
  //     name: name,
  //     email: email,
  //     password: hashedPassword,
  //   },
  // });

  const userSignInfo = await signIn("credentials", {
    name: name,
    email: email,
    password: hashedPassword,
  });
  // console.log("USER INFO: ", userSignInfo);

  return userSignInfo;
}
