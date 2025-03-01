import ParentRegistration from "@/components/parent-registration";
import { auth } from "../../auth";

export default async function Page() {
  const session = await auth();

  return <ParentRegistration session={session} />;
}
