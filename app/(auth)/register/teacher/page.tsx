import TeacherRegistration from "@/components/teacher-registration";
import { auth } from "../../auth";

export default async function Page() {
  const session = await auth();

  return <TeacherRegistration session={session} />;
}
