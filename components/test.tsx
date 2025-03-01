import Image from "next/image";
import Link from "next/link";
import TeacherRegistrationSteps from "@/components/register-teacher-steps";
import { auth } from "../../auth";
import RegisterAuth from "@/components/auth";

export default async function Page() {
  const session = await auth();

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
      <div className="lg:ml-1/2 p-6">
        {session ? (
          <TeacherRegistrationSteps initialStep={1} userId={session.user.id} />
        ) : (
          <RegisterAuth />
        )}
      </div>
    </div>
  );
}

("use client");

import type React from "react";

// Previous imports remain the same...
import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, LoaderIcon, X } from "lucide-react";

interface FileData {
  url: string;
  name: string;
  type: string;
}

interface UploadState {
  loading: boolean;
  error: string;
  data: FileData | null;
}

export default function TeacherRegistrationSteps({
  initialStep,
  userId,
}: {
  initialStep: number;
  userId: string;
}) {
  const [step, setStep] = useState(initialStep);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, setState] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [primarySubject, setPrimarySubject] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [loading, setLoading] = useState(false);

  // Document Upload States
  const [uploadStates, setUploadStates] = useState<Record<string, UploadState>>(
    {
      resume: { loading: false, error: "", data: null },
      certificates: { loading: false, error: "", data: null },
      governmentId: { loading: false, error: "", data: null },
      profilePhoto: { loading: false, error: "", data: null },
    }
  );

  useEffect(() => {
    console.log("uploadStates", uploadStates);
  }, [uploadStates]);

  const handlePersonalInfoSubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleProfessionalInfoSubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1000);
  };

  const handleDocumentsSubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Registration Complete!");
    }, 1000);
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const file = e.target.files?.[0];
    console.log("file", file);
    if (!file) return;

    setUploadStates((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], loading: true, error: "" },
    }));

    console.log("uploadStates", uploadStates);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Upload failed");
      }

      setUploadStates((prev) => ({
        ...prev,
        [fieldName]: {
          loading: false,
          error: "",
          data: {
            url: result.url,
            name: file.name,
            type: file.type,
          },
        },
      }));
    } catch (error: any) {
      setUploadStates((prev) => ({
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          loading: false,
          error: error.message || "Upload failed. Please try again.",
          data: null,
        },
      }));
    }
  };

  const removeFile = (fieldName: string) => {
    setUploadStates((prev) => ({
      ...prev,
      [fieldName]: { loading: false, error: "", data: null },
    }));
  };

  const areAllFilesUploaded =
    uploadStates.resume.data !== null &&
    uploadStates.certificates.data !== null &&
    uploadStates.governmentId.data !== null &&
    uploadStates.profilePhoto.data !== null;

  const LanguageSelector = () => {
    return <div>Language</div>;
  };

  return (
    <>
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
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
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
                        id="phoneNumber"
                        placeholder="Enter phone number"
                        className="flex-1"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select onValueChange={setState}>
                      <SelectTrigger id="state">
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

                  <Button
                    className="w-full"
                    onClick={handlePersonalInfoSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <LoaderIcon className="animate-spin" />
                    ) : (
                      "Continue"
                    )}
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
                    <Label htmlFor="qualification">Highest Qualification</Label>
                    <Select onValueChange={setHighestQualification}>
                      <SelectTrigger id="qualification">
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelors">
                          Bachelor&apos;s Degree
                        </SelectItem>
                        <SelectItem value="masters">
                          Master&apos;s Degree
                        </SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">
                      Years of Teaching Experience
                    </Label>
                    <Select onValueChange={setYearsOfExperience}>
                      <SelectTrigger id="experience">
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
                    <Label htmlFor="subject">Subjects</Label>
                    <Select onValueChange={setPrimarySubject}>
                      <SelectTrigger id="subject">
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
                    <Label htmlFor="introduction">Brief Introduction</Label>
                    <Textarea
                      id="introduction"
                      placeholder="Tell us about your teaching philosophy and approach"
                      className="h-32"
                      value={introduction}
                      onChange={(e) => setIntroduction(e.target.value)}
                    />
                  </div>

                  <Button
                    className="w-full"
                    onClick={handleProfessionalInfoSubmit}
                    disabled={loading}
                  >
                    {loading ? (
                      <LoaderIcon className="animate-spin" />
                    ) : (
                      "Continue"
                    )}
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
                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume/CV</Label>
                    <div className="relative">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, "resume")}
                        disabled={uploadStates.resume.loading}
                        className={
                          uploadStates.resume.error ? "border-red-500" : ""
                        }
                      />
                      {uploadStates.resume.data && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => removeFile("resume")}
                          aria-label="Remove resume"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {uploadStates.resume.loading && (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Uploading...</span>
                      </div>
                    )}
                    {uploadStates.resume.error && (
                      <p className="text-sm text-red-500" role="alert">
                        {uploadStates.resume.error}
                      </p>
                    )}
                    {uploadStates.resume.data && (
                      <p className="text-sm text-muted-foreground">
                        Uploaded: {uploadStates.resume.data.name}
                      </p>
                    )}
                  </div>

                  {/* Certificates Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="certificates">Teaching Certificates</Label>
                    <div className="relative">
                      <Input
                        id="certificates"
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileChange(e, "certificates")}
                        disabled={uploadStates.certificates.loading}
                        className={
                          uploadStates.certificates.error
                            ? "border-red-500"
                            : ""
                        }
                      />
                      {uploadStates.certificates.data && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => removeFile("certificates")}
                          aria-label="Remove certificates"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {uploadStates.certificates.loading && (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Uploading...</span>
                      </div>
                    )}
                    {uploadStates.certificates.error && (
                      <p className="text-sm text-red-500" role="alert">
                        {uploadStates.certificates.error}
                      </p>
                    )}
                    {uploadStates.certificates.data && (
                      <p className="text-sm text-muted-foreground">
                        Uploaded: {uploadStates.certificates.data.name}
                      </p>
                    )}
                  </div>

                  {/* Government ID Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="governmentId">Government ID</Label>
                    <div className="relative">
                      <Input
                        id="governmentId"
                        type="file"
                        accept="image/*,.pdf"
                        onChange={(e) => handleFileChange(e, "governmentId")}
                        disabled={uploadStates.governmentId.loading}
                        className={
                          uploadStates.governmentId.error
                            ? "border-red-500"
                            : ""
                        }
                      />
                      {uploadStates.governmentId.data && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => removeFile("governmentId")}
                          aria-label="Remove government ID"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {uploadStates.governmentId.loading && (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Uploading...</span>
                      </div>
                    )}
                    {uploadStates.governmentId.error && (
                      <p className="text-sm text-red-500" role="alert">
                        {uploadStates.governmentId.error}
                      </p>
                    )}
                    {uploadStates.governmentId.data && (
                      <p className="text-sm text-muted-foreground">
                        Uploaded: {uploadStates.governmentId.data.name}
                      </p>
                    )}
                  </div>

                  {/* Profile Photo Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="profilePhoto">Profile Photo</Label>
                    <div className="relative">
                      <Input
                        id="profilePhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "profilePhoto")}
                        disabled={uploadStates.profilePhoto.loading}
                        className={
                          uploadStates.profilePhoto.error
                            ? "border-red-500"
                            : ""
                        }
                      />
                      {uploadStates.profilePhoto.data && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => removeFile("profilePhoto")}
                          aria-label="Remove profile photo"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {uploadStates.profilePhoto.loading && (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Uploading...</span>
                      </div>
                    )}
                    {uploadStates.profilePhoto.error && (
                      <p className="text-sm text-red-500" role="alert">
                        {uploadStates.profilePhoto.error}
                      </p>
                    )}
                    {uploadStates.profilePhoto.data && (
                      <div className="mt-2">
                        <img
                          src={
                            uploadStates.profilePhoto.data.url ||
                            "/placeholder.svg"
                          }
                          alt="Profile preview"
                          className="h-24 w-24 object-cover rounded-full"
                        />
                      </div>
                    )}
                  </div>

                  <Button
                    className="w-full"
                    onClick={handleDocumentsSubmit}
                    disabled={loading || !areAllFilesUploaded}
                  >
                    {loading ? (
                      <LoaderIcon className="animate-spin" />
                    ) : (
                      "Complete Registration"
                    )}
                  </Button>
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
    </>
  );
}

("use client");

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { AuthForm } from "@/components/auth-form";
import { SubmitButton } from "@/components/submit-button";

import { register, type RegisterActionState } from "@/app/(auth)/actions";
import { LanguageSelector } from "./language-selector";

export default function RegisterAuth() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [state, formAction] = useActionState<RegisterActionState, FormData>(
    register,
    {
      status: "idle",
    }
  );

  useEffect(() => {
    if (state.status === "user_exists") {
      toast.error("Account already exists");
    } else if (state.status === "failed") {
      toast.error("Failed to create account");
    } else if (state.status === "invalid_data") {
      toast.error("Failed validating your submission!");
    } else if (state.status === "success") {
      toast.success("Account created successfully");
      setIsSuccessful(true);
      router.refresh();
    }
  }, [state, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
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
          <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
            <h3 className="text-xl font-semibold dark:text-zinc-50">Sign Up</h3>
            <p className="text-sm text-gray-500 dark:text-zinc-400">
              Create an account with your email and password
            </p>
          </div>
          <AuthForm action={handleSubmit} defaultEmail={email}>
            <SubmitButton isSuccessful={isSuccessful}>Sign Up</SubmitButton>
            <p className="text-center text-sm text-gray-600 mt-4 dark:text-zinc-400">
              {"Already have an account? "}
              <Link
                href="/login"
                className="font-semibold text-gray-800 hover:underline dark:text-zinc-200"
              >
                Sign in
              </Link>
              {" instead."}
            </p>
          </AuthForm>
        </div>
      </main>

      <footer className="border-t p-4 lg:p-6 text-center">
        <p className="text-sm text-gray-500">
          © 2025 AMI Education. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
