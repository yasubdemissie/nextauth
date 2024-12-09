import { auth } from "@/auth";
// import authConfig from "./auth.config";
// import NextAuth from "next-auth";

// const { auth } = NextAuth(authConfig);

// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const session = auth;
  // console.log(typeof session);

  return null;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}
