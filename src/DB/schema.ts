import { integer, pgTable, timestamp, text, pgEnum, serial } from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", ["open", "closed", "void", "paid"]);
export const Invoices = pgTable("invoices", {
  id: serial('id').primaryKey().notNull(),
  createTs: timestamp("createTs").defaultNow().notNull(),
  status: statusEnum("statusEnum").notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
});
