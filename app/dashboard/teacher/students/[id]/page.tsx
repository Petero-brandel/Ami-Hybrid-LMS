"use client";

import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Calendar,
  Clock,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

// Mock data for a single student
const getStudentData = (id: string) => {
  return {
    id,
    name: "John Doe",
    grade: "Grade 5",
    age: 10,
    subjects: ["Mathematics", "Science", "English", "Social Studies"],
    performance: "Excellent",
    score: 95,
    avatar: "/placeholder.svg?height=80&width=80",
    address: "123 School Lane, Lagos",
    parentName: "Mr. & Mrs. Doe",
    parentPhone: "+234 123 456 7890",
    parentEmail: "parent@example.com",
    attendance: 95,
    subjectScores: [
      { subject: "Mathematics", score: 92 },
      { subject: "Science", score: 95 },
      { subject: "English", score: 88 },
      { subject: "Social Studies", score: 90 },
    ],
    recentAssignments: [
      {
        title: "Algebra Basics",
        subject: "Mathematics",
        score: 90,
        date: "2025-03-05",
      },
      {
        title: "Plant Biology",
        subject: "Science",
        score: 95,
        date: "2025-03-02",
      },
      {
        title: "Essay Writing",
        subject: "English",
        score: 85,
        date: "2025-02-28",
      },
    ],
    upcomingClasses: [
      {
        subject: "Mathematics",
        date: "2025-03-15",
        time: "09:00 AM - 10:30 AM",
        type: "Offline",
      },
      {
        subject: "Science",
        date: "2025-03-16",
        time: "11:00 AM - 12:30 PM",
        type: "Online",
      },
      {
        subject: "English",
        date: "2025-03-18",
        time: "02:30 PM - 04:00 PM",
        type: "Offline",
      },
    ],
    notes:
      "John is a bright student who excels in mathematics and science. He participates actively in class discussions and shows great potential. He could benefit from additional reading exercises to improve his comprehension skills.",
  };
};

export default function StudentDetail() {
  const params = useParams();
  const router = useRouter();
  const studentId = params.id as string;
  const student = getStudentData(studentId);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Student Profile</h1>
      </div>

      {/* Student Overview */}
      <div className="grid gap-6 md:grid-cols-[1fr,2fr]">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>
                  {student.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{student.name}</h2>
              <p className="text-muted-foreground">
                {student.grade} • {student.age} years
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {student.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary px-2 py-1 rounded"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              <div className="mt-6 w-full space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Parent: {student.parentName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.parentPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.parentEmail}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="performance">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Subject Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.subjectScores.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{subject.subject}</span>
                        <span>{subject.score}%</span>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Recent Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.recentAssignments.map((assignment, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {assignment.subject} •{" "}
                          {new Date(assignment.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-sm font-medium">
                        {assignment.score}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Upcoming Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.upcomingClasses.map((class_, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{class_.subject}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(class_.date).toLocaleDateString()}
                          </span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{class_.time}</span>
                        </div>
                      </div>
                      <Button
                        variant={
                          class_.type === "Online" ? "default" : "outline"
                        }
                        size="sm"
                      >
                        {class_.type}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Overall Attendance</span>
                    <span>{student.attendance}%</span>
                  </div>
                  <Progress value={student.attendance} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {student.attendance >= 90
                      ? "Excellent attendance record"
                      : student.attendance >= 80
                      ? "Good attendance record"
                      : "Needs improvement in attendance"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes" className="space-y-4 pt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">
                  Teacher&apos;s Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{student.notes}</p>
                <div className="mt-4 flex justify-end">
                  <Button>Update Notes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
