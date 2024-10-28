CREATE TYPE "public"."status" AS ENUM('open', 'closed', 'void', 'paid');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"createTs" timestamp DEFAULT now() NOT NULL,
	"statusEnum" "status" NOT NULL,
	"value" integer NOT NULL,
	"description" text NOT NULL
);
