"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function StudentsOverview() {
  return (
    <Card className="col-span-4 shadow-sm max-w-[1260px] mx-auto overflow-hidden">
      <CardHeader className="py-2 px-4 border-b bg-gray-50 dark:bg-gray-800">
        <CardTitle className="text-lg font-semibold">
          Student Overview
        </CardTitle>
        <CardDescription className="text-xs">
          Current students statistics
        </CardDescription>
      </CardHeader>
      <CardContent className="p-3 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"></div>
      </CardContent>
    </Card>
  );
}
