import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Path to the Prisma schema file
  schema: "prisma/schema.prisma",

  // Migration configuration
  migrations: {
    // Directory where migrations are stored
    path: "prisma/migrations",
  },

  // Database connection configuration
  datasource: {
    // The database URL from environment variables
    url: env("DATABASE_URL"),
  },
});
