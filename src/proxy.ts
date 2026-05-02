import { NextRequest, NextResponse } from "next/server";

import { verifySessionToken } from "@/lib/auth/session";
import { AUTH_COOKIE_NAME } from "@/lib/config/constants";

// Handles authentication and route protection
const authRoutes = ["/login", "/register"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const session = token ? await verifySessionToken(token) : null;

  const isAuthRoute = authRoutes.includes(pathname);
  const isSignedIn = Boolean(session);

  // Redirect signed-in users away from auth pages to docs
  if (isAuthRoute && isSignedIn) {
    return NextResponse.redirect(new URL("/docs", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register"]
};
