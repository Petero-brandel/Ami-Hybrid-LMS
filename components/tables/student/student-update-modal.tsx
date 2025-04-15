import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import type { StudentData } from "@/types";

interface StudentUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentData | null;
  onUpdate: (formData: any) => void;
  onDelete: () => void;
  router: ReturnType<typeof useRouter>;
}

export function StudentUpdateModal({
  isOpen,
  onClose,
  student,
  onUpdate,
  onDelete,
  router,
}: StudentUpdateModalProps) {
  return (
    <Modal
      title="Update student Status"
      description="Update student status or schedule an appointment."
      isOpen={isOpen}
      onClose={onClose}
    >
      {student && (
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="status">student Status</Label>
            <Select
              value={student.status}
              onValueChange={(value) =>
                student && onUpdate({ ...student, status: value })
              }
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Admitted">Admitted</SelectItem>
                <SelectItem value="Scheduled">Scheduled</SelectItem>
                <SelectItem value="Stable">Stable</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="Discharged">Discharged</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full"
            onClick={() => {
              onUpdate({ status: student.status });
            }}
          >
            Update Status
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Actions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => {
                onClose();
                router.push(
                  `/appointments?studentEmail=${student.email}&studentName=${student.name}`
                );
              }}
            >
              Schedule Appointment
            </Button>

            <Button variant="destructive" onClick={onDelete}>
              Delete student
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={() => {
                onClose();
                router.push(
                  `/medical-records?studentEmail=${student.email}&studentName=${student.name}`
                );
              }}
            >
              Add Medical Record
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                onClose();
                router.push(`/students/${student.id}`);
              }}
            >
              View Details
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
