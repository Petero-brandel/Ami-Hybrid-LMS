import type { InferSelectModel } from "drizzle-orm";
import {
  pgTable,
  varchar,
  timestamp,
  json,
  uuid,
  text,
  decimal,
  date,
  boolean,
} from "drizzle-orm/pg-core";

export const user = pgTable("User", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  email: varchar("email", { length: 64 }).notNull(),
  password: varchar("password", { length: 64 }),
  role: varchar("role", { length: 20 }),
});

export type User = InferSelectModel<typeof user>;

// Application specific tables
export const teacher = pgTable("Teacher", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId").references(() => user.id, { onDelete: "cascade" }),
  firstName: varchar("firstName", { length: 100 }),
  lastName: varchar("lastName", { length: 100 }),
  email: varchar("email", { length: 64 }),
  phoneNumber: varchar("phoneNumber", { length: 20 }),
  state: varchar("state", { length: 50 }),
  qualification: varchar("qualification", { length: 100 }),
  experience: varchar("experience", { length: 50 }),
  subjects: json("subjects"),
  bio: text("bio"),
  documents: json("documents"),
  verified: boolean("verified").default(false),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  hourlyRate: decimal("hourlyRate", { precision: 10, scale: 2 }),
  availability: json("availability"),
  currentStep: varchar("currentStep", { length: 20 }).default("1"), // Added field
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const parent = pgTable("Parent", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  firstName: varchar("firstName", { length: 100 }).notNull(),
  lastName: varchar("lastName", { length: 100 }).notNull(),
  email: varchar("email", { length: 64 }),
  state: varchar("state", { length: 50 }),
  phoneNumber: varchar("phoneNumber", { length: 20 }),
  address: text("address"),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export const student = pgTable("Student", {
  id: uuid("id").primaryKey().defaultRandom(),
  parentId: uuid("parentId")
    .notNull()
    .references(() => parent.id, { onDelete: "cascade" }),
  firstName: varchar("firstName", { length: 100 }).notNull(),
  lastName: varchar("lastName", { length: 100 }).notNull(),
  dateOfBirth: date("dateOfBirth").notNull(),
  gradeLevel: varchar("gradeLevel", { length: 20 }).notNull(),
  learningPreferences: json("learningPreferences"),
  documents: json("documents"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// Types
export type Teacher = InferSelectModel<typeof teacher>;
export type Parent = InferSelectModel<typeof parent>;
export type Student = InferSelectModel<typeof student>;
