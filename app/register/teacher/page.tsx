"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { LanguageSelector } from "@/components/language-selector";

export default function TeacherRegistration() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen">
      {/* Left side - Fixed illustration */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/2 h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://qgame3ccfcbtygae.public.blob.vercel-storage.com/A%20classic%20oil%20painting%20depicting%20a%203D%20illustration%20of%20an%20African%20child%20with%20curly%20hair,%20joyf-uRZIYmegcY6p4GEoKXNsckyWkfksMI.jpg"
            alt="African education illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          <Link href="/" className="text-xl font-bold text-white">
            AMI Education
          </Link>
          <div className="space-y-4 max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Join Our Teaching Community
            </h1>
            <p className="text-lg text-white/90">
              Apply now to become part of our innovative hybrid learning
              platform and shape the future of education.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/90">
            <Link href="/help" className="hover:text-white">
              Help Center
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Scrollable content */}
      <div className="lg:ml-[50%] min-h-screen flex flex-col">
        <header className="flex items-center justify-between p-4 lg:p-6 border-b lg:border-none">
          <Link href="/" className="text-xl font-bold lg:hidden">
            AMI Education
          </Link>
          <div className="ml-auto">
            <LanguageSelector />
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="max-w-[500px] mx-auto p-4 lg:p-8 space-y-8">
            {/* Progress Indicator */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center gap-2 flex-1">
                  <div
                    className={`h-6 w-6 rounded-full flex items-center justify-center text-sm flex-shrink-0
                    ${
                      num === step
                        ? "bg-primary text-white"
                        : num < step
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {num < step ? "✓" : num}
                  </div>
                  {num < 3 && (
                    <div
                      className={`h-0.5 w-full ${
                        num < step ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    Personal Information
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Tell us about yourself
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>First Name</Label>
                      <Input placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label>Last Name</Label>
                      <Input placeholder="Enter last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <div className="flex gap-2">
                      <Select defaultValue="+234">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+234">+234</SelectItem>
                          <SelectItem value="+233">+233</SelectItem>
                          <SelectItem value="+254">+254</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="Enter phone number"
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>State</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ebonyi">Ebonyi</SelectItem>
                        <SelectItem value="kogi">Kogi</SelectItem>
                        <SelectItem value="kwara">Kwara</SelectItem>
                        <SelectItem value="kaduna">Kaduna</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full" onClick={() => setStep(2)}>
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    Professional Information
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Tell us about your teaching experience
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Highest Qualification</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelors">
                          Bachelor's Degree
                        </SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Years of Teaching Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Subjects</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="social-studies">
                          Social Studies
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Brief Introduction</Label>
                    <Textarea
                      placeholder="Tell us about your teaching philosophy and approach"
                      className="h-32"
                    />
                  </div>

                  <Button className="w-full" onClick={() => setStep(3)}>
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Documentation</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Upload required documents
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Resume/CV</Label>
                    <Input type="file" accept=".pdf,.doc,.docx" />
                  </div>

                  <div className="space-y-2">
                    <Label>Teaching Certificates</Label>
                    <Input type="file" accept="image/*,.pdf" />
                  </div>

                  <div className="space-y-2">
                    <Label>Government ID</Label>
                    <Input type="file" accept="image/*,.pdf" />
                  </div>

                  <div className="space-y-2">
                    <Label>Profile Photo</Label>
                    <Input type="file" accept="image/*" />
                  </div>

                  <Button className="w-full">Complete Registration</Button>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="border-t p-4 lg:p-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 AMI Education. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
