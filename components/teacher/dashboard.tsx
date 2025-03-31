"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getStudentsByTeacherId } from "@/app/(teacher)/actions";
import { StudentCard } from "../student-card";

interface TeacherDashboardProps {
  teacher: any;
}
type Student = {
  name: string;
  email: string;
  image: string;
  subjects: string[];
  details: any;
};

export function TeacherDashboard({ teacher }: TeacherDashboardProps) {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeacherStudents = async (id: string) => {
    try {
      setIsLoading(true);
      const result = await getStudentsByTeacherId(id);
      setStudents(result as any);
      setError(null);
    } catch (err) {
      setError("Failed to load students. Please try again later.");
      console.error("Error fetching students:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (teacher?.id) {
      fetchTeacherStudents(teacher.id);
    }
  }, [teacher?.id]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {teacher.name}</h1>
          <p className="text-gray-500">Teacher ID: {teacher.teacherId}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/teacher/profile">Open Profile</Link>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Your Students</h2>

        {isLoading && (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading students...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {!isLoading && !error && students.length === 0 && (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No students assigned yet.</p>
          </div>
        )}

        {!isLoading && !error && students.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map((student) => (
              <StudentCard key={student.email} student={student} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
