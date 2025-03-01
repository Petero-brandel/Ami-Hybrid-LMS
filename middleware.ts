import NextAuth from "next-auth";

import { authConfig } from "@/app/(auth)/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/:id", "/api/:path*", "/login", "/register"],
};

// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   function middleware(req) {
//     // Add any custom middleware logic here
//   },
//   {
//     callbacks: {
//       authorized({ req, token }) {
//         // Protect dashboard routes based on role
//         if (req.nextUrl.pathname.startsWith("/dashboard/teacher")) {
//           return token?.role === "teacher";
//         }
//         if (req.nextUrl.pathname.startsWith("/dashboard/parent")) {
//           return token?.role === "parent";
//         }
//         return !!token;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
