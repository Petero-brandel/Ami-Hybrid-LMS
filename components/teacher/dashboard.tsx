"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProfileCard } from "./profile-card";

interface TeacherDashboardProps {
  teacher: any;
}

export function TeacherDashboard({ teacher }: TeacherDashboardProps) {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {teacher.name}</h1>
          <p className="text-gray-500">Teacher ID: {teacher.teacherId}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/teacher/schedule">Manage Schedule</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <ProfileCard teacher={teacher} />
      </div>
    </div>
  );
}
