"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

interface Student {
  id: string;
  name: string;
  grade: string;
  age: number;
  subjects: string[];
  performance: string;
  score: number;
  avatar: string;
}

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dashboard/teacher/students/${student.id}`);
  };

  return (
    <Card
      className="cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>
              {student.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-medium">{student.name}</h3>
            <p className="text-sm text-muted-foreground">
              {student.grade} • {student.age} years
            </p>

            <div className="mt-2 flex flex-wrap gap-1">
              {student.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="text-xs bg-secondary px-2 py-1 rounded"
                >
                  {subject}
                </span>
              ))}
            </div>

            <div className="mt-3 flex justify-between items-center">
              <div className="text-sm">
                Score: <span className="font-medium">{student.score}%</span>
              </div>
              <div
                className={`text-xs px-2 py-1 rounded ${
                  student.performance === "Excellent"
                    ? "bg-green-100 text-green-800"
                    : student.performance === "Good"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {student.performance}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
