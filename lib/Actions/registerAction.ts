"use server";
import { z } from "zod";
import { registerSchema } from "../schema/loginRegisreSchema";
export async function registerAction(_prevState: unknown, data: FormData) {
  const userData = {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
  };
  const validatedData = registerSchema.safeParse(userData);

  if (!validatedData.success) {
    console.log(validatedData.error.flatten().fieldErrors);
    return { error: "Fill all the fields appropirately" };
  }
  return validatedData;
}
