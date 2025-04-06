import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default createMiddleware(routing);

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // Check if the request is for protected admin/dashboard routes
  if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
    // If no token, redirect to admin login page
    if (!token) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // Allow other requests to pass through
  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/dashboard/:path*", "/admin/dashboard"],
};
