import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);
const isUploadRoute = createRouteMatcher(['/api/uploadthing(.*)']);

export default clerkMiddleware();

export const config = {
    matcher:["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)",
        '/(api|trpc)(.*)',
    ],
};