import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const jwt = request.cookies.get("jwt")

    if (
        (request.nextUrl.pathname.startsWith("/api/cart") ||
            request.nextUrl.pathname.startsWith("/api/order")) && !jwt
    ) {
        const loginUrl = new URL("/auth/signin", request.url)
        loginUrl.searchParams.set("from", request.nextUrl.pathname)
        return NextResponse.redirect("loginUrl")
    }

    return NextResponse.next()
}