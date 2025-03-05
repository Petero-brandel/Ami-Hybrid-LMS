import { compare } from "bcrypt-ts";
import NextAuth, { type User, type Session } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

import { getUser } from "@/lib/db/queries";

import { authConfig } from "./auth.config";

interface ExtendedSession extends Session {
  user: User;
}

// Define proper credential types
interface CredentialInput {
  email: string;
  password: string;
}

// Define token type to include id
interface ExtendedToken extends JWT {
  id?: string;
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {},
      async authorize({ email, password }: CredentialInput) {
        const users = await getUser(email);
        if (users.length === 0) return null;
        // biome-ignore lint: Forbidden non-null assertion.
        const passwordsMatch = await compare(password, users[0].password!);
        if (!passwordsMatch) return null;
        return users[0] as User;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({
      session,
      token,
    }: {
      session: ExtendedSession;
      token: ExtendedToken;
    }) {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },
});
