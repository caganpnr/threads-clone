import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    //Defining which routes are public and can be seen without any authorization.
    publicRoutes:['/','/api/webhook/clerk'],
    ignoredRoutes:['/api/webhook/clear'],
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 