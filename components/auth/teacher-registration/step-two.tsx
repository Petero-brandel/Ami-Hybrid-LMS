"use client";

import { useState } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormField } from "@/components/auth/form-field";
import { FormSection } from "@/components/auth/form-section";
import { sendProfessionalInfo, simulateApiCall } from "@/lib/api-utils";

interface StepTwoProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export function StepTwo({ onNext, onBack }: StepTwoProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    qualification: "",
    experience: "",
    subject: "",
    introduction: "",
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await sendProfessionalInfo(formData);
      console.log("Step 2 result:", result);
      onNext(result);
    } catch (error) {
      console.error("Step 2 failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const isComplete = Object.values(formData).every(Boolean);

  return (
    <FormSection
      title="Professional Information"
      description="Tell us about your teaching experience"
    >
      <FormField label="Highest Qualification">
        <Select
          value={formData.qualification}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, qualification: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select qualification" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
            <SelectItem value="masters">Master's Degree</SelectItem>
            <SelectItem value="phd">PhD</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Years of Teaching Experience">
        <Select
          value={formData.experience}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, experience: value }))
          }
        >
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
      </FormField>

      <FormField label="Subjects">
        <Select
          value={formData.subject}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, subject: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select primary subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="social-studies">Social Studies</SelectItem>
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Brief Introduction">
        <Textarea
          placeholder="Tell us about your teaching philosophy and approach"
          className="h-32"
          value={formData.introduction}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, introduction: e.target.value }))
          }
        />
      </FormField>

      <div className="flex gap-4">
        <LoadingButton
          variant="outline"
          className="w-full"
          onClick={onBack}
          disabled={loading}
        >
          Back
        </LoadingButton>
        <LoadingButton
          className="w-full"
          onClick={handleSubmit}
          loading={loading}
          disabled={!isComplete}
        >
          Continue
        </LoadingButton>
      </div>
    </FormSection>
  );
}
