import { redirect } from "next/navigation";
import { auth } from "@/app/(auth)/auth";
import { getTeacherById } from "@/lib/db/queries";
import { TeacherDashboard } from "@/components/teacher/dashboard";

export default async function TeacherPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session?.user.role !== "teacher") {
    redirect("/");
  }

  // Get teacher profile
  const teacherId = session.user.id;
  if (!teacherId) {
    redirect("/login");
  }
  const teacherProfile = await getTeacherById(teacherId);
  console.log("teacher", teacherProfile);

  if (!teacherProfile || teacherProfile.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Teacher Profile Not Found</h1>
        <p className="mb-4">We couldn&apos;t find your teacher profile.</p>
        <a href="/login" className="text-blue-500 hover:underline">
          Return to Login
        </a>
      </div>
    );
  }

  return <TeacherDashboard teacher={teacherProfile[0]} />;
}
