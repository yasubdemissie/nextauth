import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import type { NextAuthConfig } from "next-auth";
import { registerSchema } from "./lib/schema/loginRegisreSchema";
import { prisma } from "./lib/db";
import bcrypt from "bcrypt";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: boolean | Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}
interface ErrorMessage {
  error: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        name: {},
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<ErrorMessage | User | null> => {
        try {
          console.log(typeof credentials, "authorization");

          const { name, email, password } = registerSchema.parse(credentials);
          console.log(name, email, password);

          // FIND USER IF EXISTS
          const existingUser = await prisma.user.findUnique({
            where: { email },
          });

          if (existingUser) {
            return { error: "User already exists try another Account" };
          }

          // CREATE USER
          const user = await prisma.user.create({
            data: {
              name,
              email,
              password,
            },
          });

          console.log(user);

          return user;
        } catch (error) {
          console.log(error);
          return { error: "Authorization failed" };
        }
      },
    }),
  ],
  // callbacks: {
  //   async signIn() {
  //     console.log("Middleware is registered");
  //     return true;
  //   }
  // },
  // adapter: PrismaAdapter(prisma),
  // session: { strategy: "jwt" },
  // ...authConfig,
});
