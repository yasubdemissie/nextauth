"use server";
import { z } from "zod";
import { loginSchema } from "../schema/loginRegisreSchema";
export async function loginAction(
  _prevState: unknown,
  data: z.infer<typeof loginSchema>
) {
  const validatedData = loginSchema.safeParse(data);

  if (!validatedData.success) return { error: "Incorrect name or password. Try again" };
  console.log("loginAction", data);
  return { success: "The data reveived successfully", data: data };
}
