import { NextResponse } from "next/server"
import { auth } from "@/auth"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth")
  const isVerifyEmailPage = req.nextUrl.pathname.startsWith("/auth/verify-email")

  // redirect logged-in users away from auth pages, except verify-email
  // (users may need to verify email even while logged in via OAuth)
  if (isLoggedIn && isAuthPage && !isVerifyEmailPage) {
    return NextResponse.redirect(new URL("/stories", req.nextUrl))
  }
})

export const config = {
  matcher: ["/auth/:path*"],
}
