export type StudentDetail = {
  age?: number;
  gender?: string;
  contactNumber?: string;
  address?: string;
  dateOfBirth?: Date | null;
  bloodGroup?: string;
  allergies?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
};
export type StudentData = {
  id: string;
  userId: string;
  studentId: string;
  status: string;
  details: StudentDetail;
  name: string | null;
  email: string;
  image: string | null;
};
