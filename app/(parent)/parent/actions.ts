import { eq } from "drizzle-orm";
import { db, getParentById } from "@/lib/db/queries";
import { parent, user } from "@/lib/db/schema";

export async function getParentProfile(userId: string) {
  const result = await db
    .select({ id: parent.id })
    .from(parent)
    .leftJoin(user, eq(parent.userId, user.id))
    .where(eq(user.id, userId));

  if (!result.length) {
    return null; // No parent found for this user ID
  }

  return getParentById(result[0].id);
}
