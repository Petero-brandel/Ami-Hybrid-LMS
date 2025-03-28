"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, DollarSign, FileText, Bell } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export function ParentDashboard({ parent }: { parent: any }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {parent.name}</h1>
          <p className="text-gray-500">Parent ID: {parent.parentId}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/parent/payments">Manage Payments</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profile</CardTitle>
            <CardDescription>Your parent information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img
                  src={parent.image || "/placeholder.svg?height=96&width=96"}
                  alt={parent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">{parent.name}</h3>
              <p className="text-gray-500">{parent.email}</p>
              <div className="mt-4 w-full">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">Contact:</span>
                  <span className="font-medium">
                    {parent.contactNumber || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">Address:</span>
                  <span className="font-medium">
                    {parent.address || "Not set"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-500">Wallet Balance:</span>
                  <span className="font-medium">
                    {formatCurrency(parent.walletBalance || 0)}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Children</CardTitle>
            <CardDescription>Your registered children</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* This would be populated with real data */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Child"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">John Smith</h4>
                  <p className="text-sm text-gray-500">Grade 5</p>
                </div>
                <Button size="sm" variant="outline" className="ml-auto">
                  View
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Child"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah Smith</h4>
                  <p className="text-sm text-gray-500">Grade 3</p>
                </div>
                <Button size="sm" variant="outline" className="ml-auto">
                  View
                </Button>
              </div>
            </div>
            <Button size="sm" className="w-full mt-4">
              Add Child
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Payment Overview</CardTitle>
            <CardDescription>Your payment status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-500">Wallet Balance</p>
                    <p className="text-xl font-bold">
                      {formatCurrency(parent.walletBalance || 0)}
                    </p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Top Up
                </Button>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Due Payments:</span>
                <span className="font-medium text-red-500">
                  {formatCurrency(25000)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-500">Next Payment:</span>
                <span className="font-medium">
                  {formatDate(new Date(Date.now() + 7 * 86400000))}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 md:w-[500px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="children">Children</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Parent Dashboard</CardTitle>
              <CardDescription>
                Monitor your children's education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-4">Upcoming Classes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Mathematics - John Smith
                        </h4>
                        <p className="text-sm text-gray-500">
                          Today, 2:00 PM - 3:30 PM
                        </p>
                        <p className="text-sm text-gray-500">Mr. Johnson</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">English - Sarah Smith</h4>
                        <p className="text-sm text-gray-500">
                          Tomorrow, 10:00 AM - 11:30 AM
                        </p>
                        <p className="text-sm text-gray-500">Mrs. Williams</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-4">
                    Recent Activities
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Mathematics Quiz - John Smith
                        </h4>
                        <p className="text-sm text-gray-500">
                          Completed on {formatDate(new Date())}
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          Score: 85%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Tuition Payment</h4>
                        <p className="text-sm text-gray-500">
                          Processed on{" "}
                          {formatDate(new Date(Date.now() - 2 * 86400000))}
                        </p>
                        <p className="text-sm font-medium">
                          {formatCurrency(50000)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="children">
          <Card>
            <CardHeader>
              <CardTitle>My Children</CardTitle>
              <CardDescription>
                Manage and monitor your children
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-primary/5 p-4 border-b">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Child"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">John Smith</h3>
                        <p className="text-sm text-gray-500">
                          Grade 5 • Student ID: STD-2023-1234
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Current Classes</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>Mathematics (Mr. Johnson)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>English (Mrs. Williams)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>Science (Mr. Davis)</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Performance</h4>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Mathematics</span>
                            <span className="text-sm font-medium">85%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">English</span>
                            <span className="text-sm font-medium">78%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "78%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">View Full Profile</Button>
                      <Button size="sm" variant="outline">
                        View Schedule
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-primary/5 p-4 border-b">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Child"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Sarah Smith</h3>
                        <p className="text-sm text-gray-500">
                          Grade 3 • Student ID: STD-2023-5678
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Current Classes</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>Mathematics (Mrs. Brown)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>English (Mr. Wilson)</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Performance</h4>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Mathematics</span>
                            <span className="text-sm font-medium">92%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "92%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">English</span>
                            <span className="text-sm font-medium">88%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm">View Full Profile</Button>
                      <Button size="sm" variant="outline">
                        View Schedule
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full">Add New Child</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment Management</CardTitle>
              <CardDescription>
                Manage your tuition payments and wallet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">
                            Wallet Balance
                          </p>
                          <p className="text-2xl font-bold">
                            {formatCurrency(parent.walletBalance || 0)}
                          </p>
                        </div>
                        <DollarSign className="h-8 w-8 text-primary" />
                      </div>
                      <Button size="sm" className="w-full mt-4">
                        Top Up Wallet
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Due Payments</p>
                          <p className="text-2xl font-bold text-red-500">
                            {formatCurrency(25000)}
                          </p>
                        </div>
                        <Bell className="h-8 w-8 text-red-500" />
                      </div>
                      <Button size="sm" className="w-full mt-4">
                        Pay Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">
                            Total Paid (This Year)
                          </p>
                          <p className="text-2xl font-bold">
                            {formatCurrency(350000)}
                          </p>
                        </div>
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full mt-4"
                      >
                        View Statement
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-4">Payment History</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatDate(new Date(Date.now() - 2 * 86400000))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            Tuition Fee - John Smith
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatCurrency(50000)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatDate(new Date(Date.now() - 32 * 86400000))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            Tuition Fee - Sarah Smith
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatCurrency(45000)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatDate(new Date(Date.now() - 62 * 86400000))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            Wallet Top-up
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatCurrency(100000)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-lg mb-4">
                    Upcoming Payments
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Due Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatDate(new Date(Date.now() + 7 * 86400000))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            Tuition Fee - John Smith
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatCurrency(50000)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Button size="sm">Pay Now</Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatDate(new Date(Date.now() + 14 * 86400000))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            Tuition Fee - Sarah Smith
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            {formatCurrency(45000)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <Button size="sm">Pay Now</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Stay updated with important information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4 bg-yellow-50 border-yellow-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 p-2 rounded-md">
                      <Bell className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Payment Due Reminder</h4>
                      <p className="text-sm text-gray-700">
                        Tuition payment for John Smith is due in 7 days.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(new Date())}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Class Schedule Update</h4>
                      <p className="text-sm text-gray-700">
                        Mathematics class for John Smith has been rescheduled to
                        Friday at 3:00 PM.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(new Date(Date.now() - 1 * 86400000))}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Performance Report Available
                      </h4>
                      <p className="text-sm text-gray-700">
                        Sarah Smith's quarterly performance report is now
                        available for review.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(new Date(Date.now() - 3 * 86400000))}
                      </p>
                      <Button size="sm" variant="outline" className="mt-2">
                        View Report
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-md">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Payment Confirmation</h4>
                      <p className="text-sm text-gray-700">
                        Your payment of {formatCurrency(50000)} for John Smith's
                        tuition has been processed successfully.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(new Date(Date.now() - 5 * 86400000))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
