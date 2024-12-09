import { z } from "zod";

export const loginSchema = z.object({
  password: z.string(),
  email: z.string().email({ message: "Invalid Email" }),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "The should be atleast 3 characters" })
    .max(255, { message: "The Name is too long" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z.string().min(6, { message: "Password should be atleast 6 characters" }),
});
