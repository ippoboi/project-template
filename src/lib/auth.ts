import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Set to true in production
    autoSignIn: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  secret: process.env.BETTER_AUTH_SECRET as string,
  baseURL: process.env.BETTER_AUTH_URL as string,
});

// Note: Polar integration is handled via:
// - src/lib/polar.ts - Polar SDK configuration
// - src/app/api/polar/checkout/route.ts - Checkout API
// - src/app/api/polar/webhook/route.ts - Webhook handling
// - src/app/api/polar/portal/route.ts - Customer portal
//
// The @polar-sh/better-auth plugin can be added when you need
// tighter integration between Better Auth and Polar. See:
// https://www.better-auth.com/docs/plugins/polar
