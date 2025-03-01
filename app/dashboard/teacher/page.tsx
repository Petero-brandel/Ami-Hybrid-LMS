// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/app/(auth)/auth";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default async function TeacherDashboard() {
  const session = await auth();

  if (!session?.user?.id) {
    return notFound();
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back, {session?.user?.email}
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your classes today.
          </p>
        </div>
        <Button>Start Online Class</Button>
      </div>
    </div>
  );
}
