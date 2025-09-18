import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header
  // that will be sent to the page
  const requestHeaders = new Headers(request.headers);

  // Vercel provides the user's country code in the `x-vercel-ip-country` header
  const country = request.headers.get("x-vercel-ip-country") || "unknown";

  requestHeaders.set("X-User-Country", country);

  return NextResponse.next({
    request: {
      // Apply the new headers to the request
      headers: requestHeaders,
    },
  });
}

// Configure the middleware to run on all paths except for static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
