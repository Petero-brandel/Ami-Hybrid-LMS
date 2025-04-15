DO $$ BEGIN
 CREATE TYPE "public"."request_status" AS ENUM('pending', 'assigned', 'completed', 'cancelled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Enrollment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"studentId" uuid,
	"teacherId" uuid,
	"startDate" timestamp,
	"details" json,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tutorRequest" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"requestId" varchar(20) NOT NULL,
	"parentId" uuid,
	"studentId" uuid,
	"details" json,
	CONSTRAINT "tutorRequest_requestId_unique" UNIQUE("requestId")
);
--> statement-breakpoint
ALTER TABLE "Student" ADD COLUMN "status" varchar(20) DEFAULT 'Improved';--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_studentId_Student_id_fk" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_teacherId_Teacher_id_fk" FOREIGN KEY ("teacherId") REFERENCES "public"."Teacher"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tutorRequest" ADD CONSTRAINT "tutorRequest_parentId_Parent_id_fk" FOREIGN KEY ("parentId") REFERENCES "public"."Parent"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tutorRequest" ADD CONSTRAINT "tutorRequest_studentId_Student_id_fk" FOREIGN KEY ("studentId") REFERENCES "public"."Student"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
