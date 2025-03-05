"use client";

import { useState } from "react";
import { AuthLayout } from "@/components/auth/auth-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeacherRegistration() {
  return (
    <AuthLayout
      title="Join Our Teaching Community"
      description="Apply now to become part of our innovative hybrid learning platform and shape the future of education."
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Button asChild size="lg" className="text-base">
          <Link href="/register/parent">Register as Parent</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="text-base">
          <Link href="/register/teacher">Join as Teacher</Link>
        </Button>
      </div>
    </AuthLayout>
  );
}
