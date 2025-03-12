import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Wallet } from "lucide-react";
import { StudentCard } from "@/components/dashboard/student-card";

// Mock data for students
const students = [
  {
    id: "1",
    name: "John Doe",
    grade: "Grade 5",
    age: 10,
    subjects: ["Mathematics", "Science"],
    performance: "Excellent",
    score: 95,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Jane Smith",
    grade: "Grade 5",
    age: 11,
    subjects: ["Mathematics", "English"],
    performance: "Good",
    score: 85,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Mike Johnson",
    grade: "Grade 6",
    age: 12,
    subjects: ["Science", "Social Studies"],
    performance: "Needs Improvement",
    score: 65,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Sarah Williams",
    grade: "Grade 4",
    age: 9,
    subjects: ["Mathematics", "English"],
    performance: "Good",
    score: 82,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "David Brown",
    grade: "Grade 5",
    age: 10,
    subjects: ["Science", "Mathematics"],
    performance: "Excellent",
    score: 92,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "Emily Davis",
    grade: "Grade 6",
    age: 12,
    subjects: ["English", "Social Studies"],
    performance: "Good",
    score: 88,
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function TeacherDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Sarah</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your classes today.
          </p>
        </div>
        <Button>Start</Button>
      </div>

      {/* Students List */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Students</h2>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
}
