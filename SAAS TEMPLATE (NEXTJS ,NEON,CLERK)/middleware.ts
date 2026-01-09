import {
    clerkMiddleware,
    clerkClient,
    createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
    "/",
    "/api/webhook/register",
    "/sign-up",
    "/sign-in",
]);
export default clerkMiddleware({
    isPublicRoute,
    async afterAuth(auth: { userId: any; }, req: NextRequest) {
        const pathname = req.nextUrl.pathname;

        // Handle unauthenticated users trying to access protected routes
        if (!auth.userId && !isPublicRoute.includes(pathname)) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }

        let role: string | undefined;

        try {
            if (auth.userId) {
                const user = await clerkClient.users.getUser(auth.userId);
                role = user.publicMetadata.role as string | undefined;
            }

            // Admin role redirection
            if (role === "admin" && pathname === "/dashboard") {
                return NextResponse.redirect(
                    new URL("/admin/dashboard", req.url)
                );
            }

            // Prevent non-admins from accessing admin routes
            if (role !== "admin" && pathname.startsWith("/admin")) {
                return NextResponse.redirect(new URL("/dashboard", req.url));
            }

            // Redirect authenticated users trying to access public routes
            if (auth.userId && isPublicRoute.includes(pathname)) {
                return NextResponse.redirect(
                    new URL(
                        role === "admin" ? "/admin/dashboard" : "/dashboard",
                        req.url
                    )
                );
            }
        } catch (error) {
            console.error(error);
            return NextResponse.redirect(new URL("/error", req.url));

        }
    },
});

export const config = {
    matcher: [
        // Skip Next.js internals and static files
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
