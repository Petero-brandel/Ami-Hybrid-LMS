import { redirect } from "next/navigation";
import { auth } from "@/app/(auth)/auth";
import { ParentDashboard } from "@/components/parent/dashboard";
import { getParentProfile } from "./actions";

export default async function ParentPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session?.user.role !== "parent") {
    redirect("/");
  }

  const parentId = session.user.id;
  if (!parentId) {
    redirect("/login");
  }

  // Get parent profile
  const parentProfile = await getParentProfile(parentId);

  if (!parentProfile || parentProfile.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Parent Profile Not Found</h1>
        <p className="mb-4">We couldn&apos;t find your parent profile.</p>
        <a href="/login" className="text-blue-500 hover:underline">
          Return to Login
        </a>
      </div>
    );
  }

  return <ParentDashboard parent={parentProfile[0]} />;
}
