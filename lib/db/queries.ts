import "server-only";

import { genSaltSync, hashSync } from "bcrypt-ts";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { teacher, parent, user, type User } from "./schema";

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle

// biome-ignore lint: Forbidden non-null assertion.
const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client);

export async function getUser(email: string): Promise<Array<User>> {
  try {
    return await db.select().from(user).where(eq(user.email, email));
  } catch (error) {
    console.error("Failed to get user from database");
    throw error;
  }
}

export async function createUser(
  email: string,
  password: string,
  role: string
) {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);

  try {
    return await db.insert(user).values({ email, password: hash, role });
  } catch (error) {
    console.error("Failed to create user in database");
    throw error;
  }
}

export async function saveTeacherPersonalInfo({
  userId,
  firstName,
  lastName,
  email,
  phoneNumber,
  state,
}: {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
}) {
  try {
    const existingTeacher = await db
      .select()
      .from(teacher)
      .where(eq(teacher.userId, userId));
    if (existingTeacher.length > 0) {
      return await db
        .update(teacher)
        .set({
          firstName,
          lastName,
          email,
          phoneNumber,
          state,
          updatedAt: new Date(),
        })
        .where(eq(teacher.userId, userId));
    } else {
      return await db.insert(teacher).values({
        createdAt: new Date(),
        userId,
        firstName,
        lastName,
        email,
        phoneNumber,
        state,
      });
    }
  } catch (error) {
    console.error("Failed to save or update teacher personal info in database");
    throw error;
  }
}

export async function saveTeacherProfessionalInfo({
  userId,
  highestQualification,
  yearsOfExperience,
  primarySubject,
  introduction,
}: {
  userId: string;
  highestQualification: string;
  yearsOfExperience: string;
  primarySubject: string;
  introduction: string;
}) {
  try {
    const existingTeacher = await db
      .select()
      .from(teacher)
      .where(eq(teacher.userId, userId));
    if (existingTeacher.length > 0) {
      return await db
        .update(teacher)
        .set({
          qualification: highestQualification,
          experience: yearsOfExperience,
          subjects: primarySubject,
          bio: introduction,
          updatedAt: new Date(),
        })
        .where(eq(teacher.userId, userId));
    } else {
      return await db.insert(teacher).values({
        userId,
        qualification: highestQualification,
        experience: yearsOfExperience,
        subjects: primarySubject,
        bio: introduction,
        updatedAt: new Date(),
      });
    }
  } catch (error) {
    console.error(
      "Failed to save or update teacher professional info in database"
    );
    throw error;
  }
}

export async function saveTeacherDocuments({
  userId,
  resume,
  certificates,
  governmentId,
  profilePhoto,
}: {
  userId: string;
  resume: string;
  certificates: string;
  governmentId: string;
  profilePhoto: string;
}) {
  try {
    const existingTeacher = await db
      .select()
      .from(teacher)
      .where(eq(teacher.userId, userId));
    if (existingTeacher.length > 0) {
      return await db
        .update(teacher)
        .set({
          documents: {
            resume,
            certificates,
            governmentId,
            profilePhoto,
          },
          updatedAt: new Date(),
        })
        .where(eq(teacher.userId, userId));
    } else {
      return await db.insert(teacher).values({
        userId,
        documents: {
          resume,
          certificates,
          governmentId,
          profilePhoto,
        },
        updatedAt: new Date(),
      });
    }
  } catch (error) {
    console.error("Failed to save or update teacher documents in database");
    throw error;
  }
}

export async function saveParentPersonalInfo({
  userId,
  firstName,
  lastName,
  email,
  phoneNumber,
  state,
}: {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  state: string;
}) {
  try {
    const existingParent = await db
      .select()
      .from(parent)
      .where(eq(parent.userId, userId));
    if (existingParent.length > 0) {
      return await db
        .update(parent)
        .set({
          firstName,
          lastName,
          email,
          phoneNumber,
          state,
          updatedAt: new Date(),
        })
        .where(eq(parent.userId, userId));
    } else {
      return await db.insert(parent).values({
        createdAt: new Date(),
        userId,
        firstName,
        lastName,
        email,
        phoneNumber,
        state,
      });
    }
  } catch (error) {
    console.error("Failed to save or update teacher personal info in database");
    throw error;
  }
}
