"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchFilter } from "@/components/tables/search-filter";
import { StudentTableSkeleton } from "@/components/tables/student/student-table-skeleton";
import type { StudentData } from "@/types";
import axios from "axios";
import { toast } from "sonner";
import { Pagination } from "@/components/tables/pagination";
import { StudentRow } from "@/components/tables/student/student-row";
import { StudentUpdateModal } from "@/components/tables/student/student-update-modal";
import { StudentDeleteModal } from "@/components/tables/student/student-delete-modal";

interface StudentsTableProps {
  data: StudentData[];
  isLoading: boolean;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
  pageSize: number;
  onRefresh?: () => void;
}

export function StudentsTable({
  data,
  isLoading,
  totalItems,
  currentPage,
  onPageChange,
  onSearch,
  searchQuery,
  pageSize,
  onRefresh,
}: StudentsTableProps) {
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(
    null
  );
  const totalPages = Math.ceil(totalItems / pageSize);

  const handleUpdateStudent = async (formData: any) => {
    if (!selectedStudent) return;

    try {
      await axios.put(`/api/student/${selectedStudent.id}`, formData);
      toast.success("Student updated successfully");
      setIsEditModalOpen(false);
      if (onRefresh) onRefresh();
    } catch (error) {
      toast.error("Failed to update Student");
      console.error(error);
    }
  };

  const handleDeleteStudent = async () => {
    if (!selectedStudent) return;

    try {
      await axios.delete(`/api/student/${selectedStudent.id}`);
      toast.success("Student deleted successfully");
      setIsDeleteModalOpen(false);
      setIsEditModalOpen(false);
      if (onRefresh) onRefresh();
    } catch (error) {
      toast.error("Failed to delete Student");
      console.error(error);
    }
  };

  const handleRowClick = (student: StudentData) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <>
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Student Records
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Manage your student records
            </CardDescription>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-end md:items-center">
            <SearchFilter value={searchQuery} onChange={onSearch} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-gray-200">
          <Table className="w-full text-sm text-left text-gray-700">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="px-4 py-2">Student</TableHead>
                <TableHead className="px-4 py-2">Age/Gender</TableHead>
                <TableHead className="px-4 py-2">Status</TableHead>
                <TableHead className="px-4 py-2">Contact</TableHead>
                <TableHead className="px-4 py-2">Student ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <StudentTableSkeleton rows={5} />
              ) : data.length > 0 ? (
                data.map((student) => (
                  <StudentRow
                    key={student.id}
                    student={student}
                    onClick={() => handleRowClick(student)}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No student found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            pageSize={pageSize}
            totalItems={totalItems}
          />
        )}
      </CardContent>

      <StudentUpdateModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        student={selectedStudent}
        onUpdate={handleUpdateStudent}
        onDelete={() => setIsDeleteModalOpen(true)}
        router={router}
      />

      <StudentDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        student={selectedStudent}
        onDelete={handleDeleteStudent}
      />
    </>
  );
}

export function TableSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Student Records</CardTitle>
            <CardDescription>Manage student records</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Age/Gender</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Student ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <StudentTableSkeleton rows={5} />
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
