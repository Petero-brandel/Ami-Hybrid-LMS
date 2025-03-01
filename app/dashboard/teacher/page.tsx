// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Wallet } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Sarah</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your classes today.
          </p>
        </div>
        <Button>Start Online Class</Button>
      </div>
    </div>
  );
}
