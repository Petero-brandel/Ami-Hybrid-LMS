ALTER TABLE "Parent" RENAME COLUMN "phone" TO "phoneNumber";--> statement-breakpoint
ALTER TABLE "Parent" ALTER COLUMN "phoneNumber" DROP NOT NULL;