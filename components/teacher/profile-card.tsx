import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface ProfileCardProps {
  teacher: {
    name: string;
    email: string;
    image: string;
    teacherId: string;
    specialization: string;
    hourlyRate: string;
    isActive: boolean;
  };
}

export function ProfileCard({ teacher }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
              src={teacher.image || "/placeholder.svg?height=96&width=96"}
              alt={teacher.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-medium text-lg">{teacher.name}</h3>
          <p className="text-gray-500">{teacher.email}</p>
          <div className="mt-4 w-full">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Specialization:</span>
              <span className="font-medium">
                {teacher.specialization || "Not set"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Hourly Rate:</span>
              <span className="font-medium">
                {teacher.hourlyRate
                  ? formatCurrency(teacher.hourlyRate)
                  : "Not set"}
              </span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Status:</span>
              <span className="font-medium text-green-600">
                {teacher.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
