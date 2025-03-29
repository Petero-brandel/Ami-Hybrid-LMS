"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { FormField } from "../auth/form-field";
import { FileUpload } from "../auth/file-upload";

interface PersonalInfoStepProps {
  formData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    profilePhoto: string;
  };
  updateFormData: (data: Partial<PersonalInfoStepProps["formData"]>) => void;

  onSubmit: () => void;
}

export function PersonalInfoStep({
  formData,
  updateFormData,
  onSubmit,
}: PersonalInfoStepProps) {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>(
    {}
  );

  const [showPassword, setShowPassword] = useState(false);

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.password === formData.confirmPassword &&
      formData.password.length >= 6
    );
  };
  const handleFileUpload = (fileType: string) => (url: string) => {
    updateFormData({ profilePhoto: url });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <p className="text-sm text-gray-500 mt-1">Tell us about yourself</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Full Name</Label>
          <Input
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password (min. 6 characters)"
              value={formData.password}
              onChange={(e) => updateFormData({ password: e.target.value })}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Confirm Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) =>
                updateFormData({ confirmPassword: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
          {formData.password &&
            formData.confirmPassword &&
            formData.password !== formData.confirmPassword && (
              <p className="text-sm text-red-500">Passwords do not match</p>
            )}
        </div>

        <div className="space-y-2">
          <FormField label="Profile Photo">
            <FileUpload
              label="Profile Photo"
              accept="image/*"
              onUploadComplete={handleFileUpload("profilePhoto")}
            />
          </FormField>
        </div>

        <Button className="w-full" onClick={onSubmit} disabled={!isFormValid()}>
          Submit
        </Button>
      </div>
    </div>
  );
}
