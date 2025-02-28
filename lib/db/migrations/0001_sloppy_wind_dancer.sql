CREATE TABLE "Parent" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid NOT NULL,
	"phone" varchar(20) NOT NULL,
	"address" text,
	"latitude" numeric(10, 8),
	"longitude" numeric(11, 8),
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "Student" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"parentId" uuid NOT NULL,
	"firstName" varchar(100) NOT NULL,
	"lastName" varchar(100) NOT NULL,
	"dateOfBirth" date NOT NULL,
	"gradeLevel" varchar(20) NOT NULL,
	"learningPreferences" json,
	"documents" json,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "Teacher" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid,
	"firstName" varchar(100),
	"lastName" varchar(100),
	"email" varchar(64),
	"phoneNumber" varchar(20),
	"state" varchar(50),
	"qualification" varchar(100),
	"experience" varchar(50),
	"subjects" json,
	"bio" text,
	"documents" json,
	"verified" boolean DEFAULT false,
	"latitude" numeric(10, 8),
	"longitude" numeric(11, 8),
	"hourlyRate" numeric(10, 2),
	"availability" json,
	"currentStep" varchar(20) DEFAULT '1',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Student" ADD CONSTRAINT "Student_parentId_Parent_id_fk" FOREIGN KEY ("parentId") REFERENCES "public"."Parent"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;