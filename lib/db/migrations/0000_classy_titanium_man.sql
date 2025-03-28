DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('teacher', 'student', 'parent', 'admin', 'regional_admin', 'general_admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Parent" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"parentId" varchar(20) NOT NULL,
	"contactNumber" varchar(20),
	"address" text,
	"details" json,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "Parent_parentId_unique" UNIQUE("parentId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Student" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"studentId" varchar(20) NOT NULL,
	"parentId" uuid,
	"gradeLevel" varchar(20),
	"learningPreferences" text,
	"performanceHistory" json,
	"details" json,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "Student_studentId_unique" UNIQUE("studentId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Teacher" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"teacherId" varchar(20) NOT NULL,
	"isActive" boolean DEFAULT true,
	"hourlyRate" varchar(10),
	"subjects" json,
	"qualifications" text,
	"location" json,
	"details" json,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "Teacher_teacherId_unique" UNIQUE("teacherId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(64) NOT NULL,
	"password" varchar(64),
	"name" varchar(100),
	"image" varchar(255) DEFAULT '/avatar-placeholder.svg',
	"role" "role" DEFAULT 'student' NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Parent" ADD CONSTRAINT "Parent_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Student" ADD CONSTRAINT "Student_parentId_Parent_id_fk" FOREIGN KEY ("parentId") REFERENCES "public"."Parent"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
