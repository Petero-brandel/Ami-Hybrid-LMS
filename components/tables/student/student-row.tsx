import { TableCell, TableRow } from "@/components/ui/table";
import type { StudentData } from "@/types";

interface PatientRowProps {
  student: StudentData;
  onClick: () => void;
}

export function StudentRow({ student, onClick }: PatientRowProps) {
  return (
    <TableRow
      key={student.id}
      className="cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <TableCell className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={student.image || "/placeholder.svg?height=40&width=40"}
            alt={`${student.name}'s avatar`}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium">{student.name}</div>
            <div className="text-gray-400 text-xs">{student.email}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className="px-4 py-3">
        {student.details.age || "N/A"} •{" "}
        {student.details.gender ? (
          <span className="capitalize">{student.details.gender}</span>
        ) : (
          "N/A"
        )}
      </TableCell>
      <TableCell className="px-4 py-3">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            student.status === "Admitted"
              ? "bg-blue-100 text-blue-800"
              : student.status === "Discharged"
              ? "bg-green-100 text-green-800"
              : student.status === "Critical"
              ? "bg-red-100 text-red-800"
              : student.status === "Stable"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {student.status}
        </span>
      </TableCell>
      <TableCell className="px-4 py-3">
        {student.details.contactNumber || "N/A"}
      </TableCell>
      <TableCell className="px-4 py-3">{student.studentId}</TableCell>
    </TableRow>
  );
}
