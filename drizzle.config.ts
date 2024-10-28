import { defineConfig } from "drizzle-kit";

import * as dotenv from "dotenv";
dotenv.config({
  path: "./.env.local",
});
if (typeof process.env.XATA_DATABASE_URL !== "string") {
  throw new Error("Please set the XATA_DATATABLE_UR in the env ");
}
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials: {
    url: process.env.XATA_DATABASE_URL,
  },
});