CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar(26) PRIMARY KEY NOT NULL,
	"category_id" varchar(26),
	"name" varchar NOT NULL,
	"description" varchar NOT NULL,
	"producer_name" varchar NOT NULL,
	"producer_email" varchar NOT NULL,
	"cover" varchar NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
