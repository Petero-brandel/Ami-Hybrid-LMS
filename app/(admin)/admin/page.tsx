"use client";

import { useState } from "react";
import useStudents from "@/hooks/useStudents";
import { StudentsOverview } from "@/components/students-overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentsTable } from "@/components/tables/student/student-table";
import { Card } from "@/components/ui/card";

export default function AdminPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("all");
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading, refetch } = useStudents(
    page,
    search,
    activeStatus,
    pageSize
  );

  return (
    <div className="space-y-6 px-4 md:px-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Student Management</h1>
      </div>

      <StudentsOverview />

      <Card className="max-w-[1260px] mx-auto p-4 shadow-lg">
        <Tabs defaultValue="all" onValueChange={setActiveStatus}>
          <TabsList className="flex justify-start gap-4 border-b pb-2">
            <TabsTrigger
              value="all"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              All Students
            </TabsTrigger>
            <TabsTrigger
              value="Improved"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              Improved
            </TabsTrigger>
            <TabsTrigger
              value="Stable"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
              Improving
            </TabsTrigger>
            <TabsTrigger
              value="Critical"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              Critical
            </TabsTrigger>
          </TabsList>
          <TabsContent value={activeStatus} className="mt-4">
            <StudentsTable
              data={data?.data || []}
              isLoading={isLoading}
              totalItems={data?.totalItems || 0}
              currentPage={page}
              onPageChange={setPage}
              searchQuery={search}
              onSearch={setSearch}
              pageSize={pageSize}
              onRefresh={refetch}
            />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
