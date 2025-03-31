import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface StudentCardProps {
  student: {
    name: string;
    email: string;
    image: string;
    subjects: string[];
    details: any;
  };
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
              src={student.image || "/placeholder.svg?height=96&width=96"}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-lg">{student.name}</h3>
          <p className="text-gray-500">{student.email}</p>
          <div className="mt-4 w-full">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Grade:</span>
              <span className="font-medium">
                {student.details.gradeLevel || ""}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
